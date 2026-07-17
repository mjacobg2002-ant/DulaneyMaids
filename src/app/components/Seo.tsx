import { useEffect } from 'react';
import { SITE } from '../data/site';

interface SeoProps {
  /** Page title — the brand suffix is appended automatically unless the title already contains it. */
  title: string;
  description: string;
  /** Route path beginning with "/" — used for the canonical + og:url. */
  path: string;
  /** Page-specific JSON-LD (FAQ, breadcrumbs, service, …). */
  jsonLd?: object | object[];
  noIndex?: boolean;
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Lightweight per-route <head> manager (no dependency needed).
 * Sets title, meta description, canonical, Open Graph tags, robots,
 * and injects page-specific JSON-LD structured data.
 */
export function Seo({ title, description, path, jsonLd, noIndex }: SeoProps) {
  useEffect(() => {
    const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
    const url = `${SITE.url}${path === '/' ? '/' : path}`;

    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);

    // Canonical
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Robots (only 404 and similar pages set noIndex)
    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (noIndex) {
      if (!robots) {
        robots = document.createElement('meta');
        robots.name = 'robots';
        document.head.appendChild(robots);
      }
      robots.content = 'noindex, nofollow';
    } else if (robots) {
      robots.remove();
    }

    // Page-specific JSON-LD
    document.head.querySelectorAll('script[data-seo-jsonld]').forEach((s) => s.remove());
    if (jsonLd) {
      const blocks = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      blocks.forEach((block) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-jsonld', 'true');
        script.textContent = JSON.stringify(block);
        document.head.appendChild(script);
      });
    }
  }, [title, description, path, jsonLd, noIndex]);

  return null;
}
