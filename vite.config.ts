import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import fs from 'fs'
import { allRoutes, fullTitle } from './src/app/data/pageMeta'
import { SITE } from './src/app/data/site'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

const esc = (v: string) =>
  v.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/**
 * After the build, write one HTML file per route (dist/residential.html,
 * dist/service-areas/mclean-va.html, …) carrying that page's own <title>,
 * description, canonical and og tags — so crawlers get the right signals
 * before JavaScript runs (Vercel serves them via cleanUrls). The homepage
 * (dist/index.html) is left exactly as built. Also regenerates sitemap.xml
 * from the same route list so it can never drift.
 */
function perRouteHtml(): Plugin {
  let outDir = 'dist'
  return {
    name: 'per-route-html',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const shell = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8')
      const routes = allRoutes()
      for (const { path: route, meta } of routes) {
        if (route === '/') continue
        const url = `${SITE.url}${route}`
        const title = esc(fullTitle(meta.title))
        const desc = esc(meta.description)
        const html = shell
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
          .replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${desc}"`)
          .replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`)
          .replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${url}"`)
          .replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${title}"`)
          .replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${desc}"`)
        const file = path.join(outDir, `${route.slice(1)}.html`)
        fs.mkdirSync(path.dirname(file), { recursive: true })
        fs.writeFileSync(file, html)
      }
      const today = new Date().toISOString().slice(0, 10)
      const sitemap =
        '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
        routes
          .map(
            (r) =>
              `  <url>\n    <loc>${SITE.url}${r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${r.priority}</priority>\n  </url>`
          )
          .join('\n') +
        '\n</urlset>\n'
      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap)
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    perRouteHtml(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
