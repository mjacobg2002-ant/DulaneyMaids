export interface City {
  slug: string;
  name: string;
  state: string;
  region: 'northern-va' | 'dc' | 'maryland';
}

export const cities: City[] = [
  // Northern Virginia
  { slug: 'arlington-va', name: 'Arlington', state: 'VA', region: 'northern-va' },
  { slug: 'alexandria-va', name: 'Alexandria', state: 'VA', region: 'northern-va' },
  { slug: 'fairfax-va', name: 'Fairfax', state: 'VA', region: 'northern-va' },
  { slug: 'falls-church-va', name: 'Falls Church', state: 'VA', region: 'northern-va' },
  { slug: 'mclean-va', name: 'McLean', state: 'VA', region: 'northern-va' },
  { slug: 'tysons-va', name: 'Tysons', state: 'VA', region: 'northern-va' },
  { slug: 'vienna-va', name: 'Vienna', state: 'VA', region: 'northern-va' },
  { slug: 'springfield-va', name: 'Springfield', state: 'VA', region: 'northern-va' },
  { slug: 'annandale-va', name: 'Annandale', state: 'VA', region: 'northern-va' },
  { slug: 'reston-va', name: 'Reston', state: 'VA', region: 'northern-va' },
  { slug: 'herndon-va', name: 'Herndon', state: 'VA', region: 'northern-va' },
  { slug: 'ashburn-va', name: 'Ashburn', state: 'VA', region: 'northern-va' },
  { slug: 'leesburg-va', name: 'Leesburg', state: 'VA', region: 'northern-va' },
  { slug: 'chantilly-va', name: 'Chantilly', state: 'VA', region: 'northern-va' },
  { slug: 'centreville-va', name: 'Centreville', state: 'VA', region: 'northern-va' },
  { slug: 'manassas-va', name: 'Manassas', state: 'VA', region: 'northern-va' },
  { slug: 'woodbridge-va', name: 'Woodbridge', state: 'VA', region: 'northern-va' },
  // Washington DC
  { slug: 'washington-dc', name: 'Washington', state: 'DC', region: 'dc' },
  // Maryland
  { slug: 'bethesda-md', name: 'Bethesda', state: 'MD', region: 'maryland' },
  { slug: 'silver-spring-md', name: 'Silver Spring', state: 'MD', region: 'maryland' },
  { slug: 'rockville-md', name: 'Rockville', state: 'MD', region: 'maryland' },
  { slug: 'hyattsville-md', name: 'Hyattsville', state: 'MD', region: 'maryland' },
  { slug: 'college-park-md', name: 'College Park', state: 'MD', region: 'maryland' },
  { slug: 'bowie-md', name: 'Bowie', state: 'MD', region: 'maryland' },
  { slug: 'laurel-md', name: 'Laurel', state: 'MD', region: 'maryland' },
  { slug: 'fort-washington-md', name: 'Fort Washington', state: 'MD', region: 'maryland' },
  { slug: 'national-harbor-md', name: 'National Harbor', state: 'MD', region: 'maryland' },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getCitiesByRegion(region: City['region']): City[] {
  return cities.filter((c) => c.region === region);
}

export const FEATURED_CITY_SLUGS = [
  'arlington-va',
  'alexandria-va',
  'fairfax-va',
  'washington-dc',
  'bethesda-md',
  'silver-spring-md',
];
