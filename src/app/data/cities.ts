export interface City {
  slug: string;
  name: string;
  state: string;
  region: 'prince-georges' | 'montgomery' | 'dc' | 'northern-va';
  /** One distinctive local sentence — keeps every city page unique (avoids thin/duplicate content). */
  blurb: string;
}

export const REGION_LABELS: Record<City['region'], string> = {
  'prince-georges': "Prince George's County, MD",
  montgomery: 'Montgomery County, MD',
  dc: 'Washington, DC',
  'northern-va': 'Northern Virginia',
};

export const cities: City[] = [
  // ── Prince George's County (home turf — priority service area) ──
  { slug: 'kettering-md', name: 'Kettering', state: 'MD', region: 'prince-georges', blurb: "Kettering is our home base — we serve the neighborhoods around Watkins Regional Park, Kettering Plaza, and Prince George's Community College every week." },
  { slug: 'largo-md', name: 'Largo', state: 'MD', region: 'prince-georges', blurb: 'Minutes from our Kettering home base, we clean homes and offices around Largo Town Center and the UM Capital Region Medical Center corridor.' },
  { slug: 'upper-marlboro-md', name: 'Upper Marlboro', state: 'MD', region: 'prince-georges', blurb: 'From historic Main Street to the newer communities off Route 301, we keep homes across the county seat spotless.' },
  { slug: 'bowie-md', name: 'Bowie', state: 'MD', region: 'prince-georges', blurb: "One of Maryland's largest cities — we serve Bowie homes from Bowie Town Center to the quieter neighborhoods beyond." },
  { slug: 'mitchellville-md', name: 'Mitchellville', state: 'MD', region: 'prince-georges', blurb: "Detailed, discreet cleaning for Mitchellville's established communities and executive homes." },
  { slug: 'woodmore-md', name: 'Woodmore', state: 'MD', region: 'prince-georges', blurb: "White-glove residential cleaning for Woodmore's gated golf-course community and the surrounding estates." },
  { slug: 'glenn-dale-md', name: 'Glenn Dale', state: 'MD', region: 'prince-georges', blurb: "Dependable house cleaning for Glenn Dale's quiet residential streets, just up Route 193 from Kettering." },
  { slug: 'lanham-md', name: 'Lanham', state: 'MD', region: 'prince-georges', blurb: 'Serving Lanham homes and businesses along the Route 450 and Capital Beltway corridor.' },
  { slug: 'greenbelt-md', name: 'Greenbelt', state: 'MD', region: 'prince-georges', blurb: 'From historic Old Greenbelt to Greenbelt Station, we bring reliable cleaning to one of Maryland\u2019s most storied communities.' },
  { slug: 'landover-md', name: 'Landover', state: 'MD', region: 'prince-georges', blurb: 'Residential and commercial cleaning across Landover and the central county corridor.' },
  { slug: 'clinton-md', name: 'Clinton', state: 'MD', region: 'prince-georges', blurb: 'Serving Clinton families and professionals, minutes from Joint Base Andrews.' },
  { slug: 'hyattsville-md', name: 'Hyattsville', state: 'MD', region: 'prince-georges', blurb: "House cleaning for Hyattsville's arts district, historic homes, and newer condo communities." },
  { slug: 'college-park-md', name: 'College Park', state: 'MD', region: 'prince-georges', blurb: 'Move-in/move-out and recurring cleaning around the University of Maryland and the Route 1 corridor.' },
  { slug: 'laurel-md', name: 'Laurel', state: 'MD', region: 'prince-georges', blurb: 'Covering Laurel homes and offices between Washington and Baltimore along the I-95 corridor.' },
  { slug: 'fort-washington-md', name: 'Fort Washington', state: 'MD', region: 'prince-georges', blurb: "Detailed home cleaning for Fort Washington's riverside neighborhoods along the Potomac." },
  { slug: 'national-harbor-md', name: 'National Harbor', state: 'MD', region: 'prince-georges', blurb: "Condo, residential, and commercial cleaning for National Harbor's waterfront community." },

  // ── Montgomery County, MD ──
  { slug: 'bethesda-md', name: 'Bethesda', state: 'MD', region: 'montgomery', blurb: 'Premium house cleaning for Bethesda — from downtown condos to established single-family neighborhoods.' },
  { slug: 'silver-spring-md', name: 'Silver Spring', state: 'MD', region: 'montgomery', blurb: 'Serving downtown Silver Spring high-rises and the residential neighborhoods beyond.' },
  { slug: 'rockville-md', name: 'Rockville', state: 'MD', region: 'montgomery', blurb: 'Reliable residential and office cleaning across Rockville and the I-270 corridor.' },

  // ── Washington DC ──
  { slug: 'washington-dc', name: 'Washington', state: 'DC', region: 'dc', blurb: 'Citywide residential and commercial cleaning — from Capitol Hill rowhouses to downtown offices.' },

  // ── Northern Virginia ──
  { slug: 'arlington-va', name: 'Arlington', state: 'VA', region: 'northern-va', blurb: "Rowhouses, high-rises, and offices — cleaning across Arlington's urban villages." },
  { slug: 'alexandria-va', name: 'Alexandria', state: 'VA', region: 'northern-va', blurb: 'From Old Town townhomes to West End condos, we keep Alexandria spotless.' },
  { slug: 'fairfax-va', name: 'Fairfax', state: 'VA', region: 'northern-va', blurb: 'Trusted house and office cleaning throughout Fairfax and the surrounding county.' },
  { slug: 'falls-church-va', name: 'Falls Church', state: 'VA', region: 'northern-va', blurb: 'Careful, consistent cleaning for Falls Church homes inside and outside the Beltway.' },
  { slug: 'mclean-va', name: 'McLean', state: 'VA', region: 'northern-va', blurb: 'Discreet, detail-first cleaning for McLean residences and executive homes.' },
  { slug: 'tysons-va', name: 'Tysons', state: 'VA', region: 'northern-va', blurb: 'High-rise condos and corporate offices — professional cleaning in the heart of Tysons.' },
  { slug: 'vienna-va', name: 'Vienna', state: 'VA', region: 'northern-va', blurb: 'Family-friendly, thorough house cleaning across Vienna\u2019s neighborhoods.' },
  { slug: 'springfield-va', name: 'Springfield', state: 'VA', region: 'northern-va', blurb: 'Recurring and one-time cleaning for Springfield homes near the Mixing Bowl and beyond.' },
  { slug: 'annandale-va', name: 'Annandale', state: 'VA', region: 'northern-va', blurb: 'Dependable maid service for Annandale homes and small businesses.' },
  { slug: 'reston-va', name: 'Reston', state: 'VA', region: 'northern-va', blurb: 'From Reston Town Center condos to lakeside homes, we clean it all.' },
  { slug: 'herndon-va', name: 'Herndon', state: 'VA', region: 'northern-va', blurb: 'Professional cleaning for Herndon homes and offices near the Dulles corridor.' },
  { slug: 'ashburn-va', name: 'Ashburn', state: 'VA', region: 'northern-va', blurb: 'Serving Ashburn\u2019s growing communities with reliable recurring cleaning.' },
  { slug: 'leesburg-va', name: 'Leesburg', state: 'VA', region: 'northern-va', blurb: 'House cleaning for Leesburg — from the historic downtown to newer developments.' },
  { slug: 'chantilly-va', name: 'Chantilly', state: 'VA', region: 'northern-va', blurb: 'Residential and commercial cleaning across Chantilly and the Route 50 corridor.' },
  { slug: 'centreville-va', name: 'Centreville', state: 'VA', region: 'northern-va', blurb: 'Thorough, on-time cleaning for Centreville townhomes and single-family houses.' },
  { slug: 'manassas-va', name: 'Manassas', state: 'VA', region: 'northern-va', blurb: 'Serving Manassas homes and businesses with tailored cleaning programs.' },
  { slug: 'woodbridge-va', name: 'Woodbridge', state: 'VA', region: 'northern-va', blurb: 'Reliable maid service for Woodbridge and the Prince William County area.' },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getCitiesByRegion(region: City['region']): City[] {
  return cities.filter((c) => c.region === region);
}

/** Shown on the homepage — leads with the Kettering / PG County core market. */
export const FEATURED_CITY_SLUGS = [
  'kettering-md',
  'upper-marlboro-md',
  'bowie-md',
  'largo-md',
  'washington-dc',
  'arlington-va',
];
