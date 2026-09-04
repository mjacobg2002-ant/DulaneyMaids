/**
 * Central business configuration.
 * ─────────────────────────────────────────────────────────────────
 * Change values here once and they update across the entire site,
 * the structured data, and the canonical/OG tags.
 *
 * ⚠️ SITE_URL: set this to the real production domain before launch
 *    (also update index.html, public/robots.txt, and public/sitemap.xml).
 */
export const SITE = {
  url: 'https://https://www.dulaneyco.net/',
  name: 'Dulaney Maids',
  tagline: 'Residential & Commercial Cleaning',
  phoneDisplay: '(202) 202-1674',
  phoneTel: '+12022021674',
  email: 'camerondavis@dulaneyco.net',
  address: {
    locality: 'Kettering',
    region: 'MD',
    postalCode: '20774',
    county: "Prince George's County",
  },
  hours: [
    'Monday – Friday: 8am – 6pm',
    'Saturday: By appointment',
    'Sunday: Closed',
  ],
} as const;

export const YELP = {
  rating: 5.0,
  ratingDisplay: '5.0',
  profileUrl: 'https://www.yelp.com/biz/dulaney-maids-kettering-2',
  // Yelp routes "write a review" from the business page — swap in the direct
  // write-a-review URL here if you prefer to deep-link it.
  writeReviewUrl: 'https://www.yelp.com/biz/dulaney-maids-kettering-2',
} as const;
