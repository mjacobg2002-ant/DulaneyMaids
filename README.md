# Dulaney Maids — Website

Five-star residential & commercial cleaning · Kettering, MD & the DMV.
React + Vite + Tailwind v4 single-page app.

## Running locally

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Deploying

`vercel.json` is included with the SPA rewrite rule, so deep links like
`/service-areas/kettering-md` resolve correctly on Vercel. Any static host
works as long as unknown paths fall back to `index.html`.

## 🚀 Pre-launch checklist

1. **Domain** — replace `https://www.dulaneymaids.com` with the real domain in:
   `src/app/data/site.ts`, `index.html`, `public/robots.txt`, `public/sitemap.xml`.
2. **Verify trust claims with the client** — the site states the team is
   *insured, vetted, and background-checked* and offers a *24-hour re-clean
   guarantee*. Confirm each claim is accurate (and whether "bonded" can be
   added) before going live.
3. **Reviews** — open the Yelp profile and paste the exact review text +
   reviewer display name into `src/app/data/reviews.ts`. Real reviews only.
4. **Pricing anchors (optional)** — add `startingAt: 'Starting at $XXX'` to any
   service in `src/app/pages/Residential.tsx` to show pricing chips.
5. **Google Business Profile** — claim/optimize it for "Kettering, MD"; it is
   the single biggest local-ranking lever alongside this site.
6. **Search Console** — verify the domain and submit `/sitemap.xml`.
7. **Photos** — replace the stock Unsplash images with real before/after and
   team photos when available (paths are constants at the top of each page).

## Where things live

- `src/app/data/site.ts` — phone, email, Yelp URLs, hours (single source of truth)
- `src/app/data/cities.ts` — service-area pages (add a city = new SEO page; re-generate sitemap)
- `src/app/data/reviews.ts` — testimonials
- `src/app/components/Seo.tsx` — per-page titles/meta/canonical/JSON-LD
- `index.html` — LocalBusiness schema, default meta, font preloads
