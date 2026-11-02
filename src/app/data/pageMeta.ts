import { SITE } from './site';
import { cities, type City } from './cities';
import { servicePages } from './servicePages';

/**
 * Single source of truth for every route's <title> + meta description.
 * Used by the <Seo /> component at runtime AND by the build step in
 * vite.config.ts, which writes a per-route HTML file so crawlers see the right
 * title + canonical before any JavaScript runs.
 *
 * ⚠️ Ranking pages — do not reword without a reason:
 *   "/"                      → #1 for "home cleaning kettering md"
 *   "/residential"           → "residential cleaning kettering md"
 *   "/service-areas/kettering-md"
 */
export interface PageMeta {
  title: string;
  description: string;
}

export const STATIC_META: Record<string, PageMeta> = {
  '/': {
    title: 'House Cleaning Kettering, MD | Maid Service & Deep Cleaning',
    description:
      "Five-star house cleaning and maid service in Kettering, MD. Deep cleaning, move-in/move-out, recurring and commercial cleaning across Prince George's County and the DMV. Get a free quote today.",
  },
  '/residential': {
    title: 'Residential House Cleaning & Maid Service in Kettering, MD',
    description:
      "Professional house cleaning in Kettering, MD and Prince George's County: standard, deep cleaning, move-in/move-out, and post-construction. Insured, vetted cleaners. Free tailored quotes.",
  },
  '/commercial': {
    title: "Commercial Cleaning & Janitorial Services | Prince George's County, MD",
    description:
      "Commercial cleaning and janitorial services for offices, apartment communities, and facilities in Prince George's County, Washington DC, and Northern Virginia. Tailored programs, insured team, free quotes.",
  },
  '/service-areas': {
    title: "Service Areas — Cleaning in Kettering, Prince George's County & the DMV",
    description:
      "Dulaney Maids serves Kettering, Largo, Upper Marlboro, Bowie, and all of Prince George's County, plus Washington DC, Northern Virginia, and Montgomery County. Find cleaning services near you.",
  },
  '/about': {
    title: 'About Dulaney Maids — Cleaning Company in Kettering, MD',
    description:
      "Dulaney Maids is a residential and commercial cleaning company based in Kettering, MD, serving Prince George's County and the DMV with insured, vetted, detail-driven cleaning.",
  },
  '/reviews': {
    title: 'Reviews — Dulaney Maids | 5.0-Rated Cleaning in Kettering, MD',
    description:
      "Read real customer reviews of Dulaney Maids, a 5.0-rated house cleaning and commercial cleaning company in Kettering, MD serving Prince George's County and the DMV.",
  },
  '/faq': {
    title: 'FAQ — House Cleaning Questions Answered | Dulaney Maids',
    description:
      'Answers about quotes, service areas around Kettering MD, supplies, insurance, vetting, scheduling, and our 24-hour re-clean guarantee.',
  },
  '/contact': {
    title: 'Get a Free Cleaning Quote — Kettering, MD & the DMV | Dulaney Maids',
    description:
      'Request a free house cleaning or commercial cleaning quote in Kettering, MD and the DMV. Fast response, tailored pricing, no obligation. Call (202) 202-1674 or use our 2-minute form.',
  },
  ...Object.fromEntries(servicePages.map((s) => [`/${s.slug}`, { title: s.metaTitle, description: s.metaDescription }])),
};

/** Cities whose page title/H1 must stay exactly as they were (already ranking). */
const PROTECTED_CITY_SLUGS = ['kettering-md'];

export function cityHeading(city: City): string {
  const cityFull = `${city.name}, ${city.state}`;
  return PROTECTED_CITY_SLUGS.includes(city.slug)
    ? `House Cleaning & Commercial Cleaning in ${cityFull}`
    : `House Cleaning & Maid Service in ${cityFull}`;
}

export function cityMeta(city: City): PageMeta {
  const cityFull = `${city.name}, ${city.state}`;
  if (PROTECTED_CITY_SLUGS.includes(city.slug)) {
    return {
      title: `House Cleaning & Commercial Cleaning in ${cityFull}`,
      description: `Professional house cleaning and maid service in ${cityFull}. Deep cleaning, move-in/move-out, recurring and commercial cleaning by Dulaney Maids. Insured, vetted team — get a free quote.`,
    };
  }
  return {
    title: `House Cleaning ${cityFull} | Deep & Move-Out Cleaning`,
    description: `Trusted house cleaning and maid service in ${cityFull}${
      city.neighborhoods ? ` — ${city.neighborhoods.slice(0, 3).join(', ')} and nearby` : ''
    }. Recurring, deep, and move-in/move-out cleaning by an insured, vetted team. 5.0 on Yelp — get a free quote.`,
  };
}

/** Same suffix rule the <Seo /> component applies at runtime. */
export function fullTitle(title: string): string {
  return title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
}

/** Every indexable route, with its meta — drives the prerendered HTML + sitemap. */
export function allRoutes(): { path: string; meta: PageMeta; priority: string }[] {
  return [
    ...Object.entries(STATIC_META).map(([path, meta]) => ({
      path,
      meta,
      priority: path === '/' ? '1.0' : servicePages.some((s) => `/${s.slug}` === path) ? '0.9' : '0.8',
    })),
    ...cities.map((c) => ({ path: `/service-areas/${c.slug}`, meta: cityMeta(c), priority: c.focus ? '0.8' : '0.7' })),
  ];
}
