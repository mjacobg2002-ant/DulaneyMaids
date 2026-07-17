/**
 * Customer reviews — REAL REVIEWS ONLY.
 * ─────────────────────────────────────────────────────────────────
 * Every entry below must correspond to a real, verifiable review
 * (Yelp, Google, or collected directly from a client). Publishing
 * fabricated testimonials is an FTC violation and destroys trust
 * if discovered.
 *
 * The previous placeholder testimonials (Sarah M., James T., etc.)
 * have been removed. The entry below reflects the verified 5-star
 * review currently on the Yelp profile — open the profile, copy the
 * exact review text + the reviewer's Yelp display name, and paste
 * them in before launch. Add new entries here as reviews come in.
 */

export interface Review {
  /** Short excerpt or full text, exactly as the customer wrote it. */
  quote: string;
  /** One-line context (service performed) — shown as a chip. */
  service: string;
  name: string;
  location: string;
  rating: number;
  source: 'Yelp' | 'Google' | 'Direct';
}

export const reviews: Review[] = [
  {
    quote:
      'Extremely professional and responsive — they answered my Yelp quote request within 10 minutes, at 6am, and handled a short-notice deep clean and sanitization of my home before surgery.',
    service: 'Deep Cleaning & Sanitization',
    name: 'Verified Yelp Customer', // ← replace with the reviewer's Yelp display name
    location: 'Kettering, MD area',
    rating: 5,
    source: 'Yelp',
  },
];
