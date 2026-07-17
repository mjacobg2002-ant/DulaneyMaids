import { SITE } from './site';

/**
 * JSON-LD schema builders.
 * The base LocalBusiness schema lives statically in index.html (so crawlers
 * see it without executing JS). These helpers add page-specific schema via
 * the <Seo /> component.
 *
 * Note on review/aggregate-rating markup: Google's guidelines require that
 * ratings in structured data be collected first-party (on your own site) —
 * marking up Yelp's rating can trigger a "self-serving reviews" manual
 * action. The Yelp rating is therefore displayed prominently in the UI but
 * intentionally left out of the schema. Once reviews are collected directly
 * (e.g., a post-clean review form), add an AggregateRating to the
 * LocalBusiness schema in index.html.
 */

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE.url}${c.path}`,
    })),
  };
}

export function serviceSchema(opts: { name: string; description: string; path: string; areaServed?: string[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: `${SITE.url}${opts.path}`,
    provider: { '@id': `${SITE.url}/#business` },
    areaServed: (opts.areaServed ?? ["Prince George's County, MD", 'Washington, DC', 'Northern Virginia']).map(
      (name) => ({ '@type': 'Place', name })
    ),
  };
}
