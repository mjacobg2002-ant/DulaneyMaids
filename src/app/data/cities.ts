export interface City {
  slug: string;
  name: string;
  state: string;
  region: 'prince-georges' | 'montgomery' | 'dc' | 'northern-va';
  /** One distinctive local sentence — keeps every city page unique (avoids thin/duplicate content). */
  blurb: string;
  /** Optional local depth for high-opportunity markets — rendered on the city page when present. */
  neighborhoods?: string[];
  zips?: string[];
  /** Why people here book cleanings (home types, moves, new builds) — unique per city. */
  focus?: string;
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
  { slug: 'bethesda-md', name: 'Bethesda', state: 'MD', region: 'montgomery', blurb: 'Premium house cleaning for Bethesda — from downtown condos to established single-family neighborhoods.',
    neighborhoods: ['Bethesda Row', 'Edgemoor', 'Wildwood', 'Bradley Hills', 'Woodmont Triangle', 'Battery Park'], zips: ['20814', '20816', '20817'],
    focus: 'Bethesda mixes downtown high-rise condos with large older single-family homes. Busy professional households here book recurring bi-weekly cleaning, and the steady flow of buyers and renters keeps move-in/move-out cleaning in demand year-round.' },
  { slug: 'potomac-md', name: 'Potomac', state: 'MD', region: 'montgomery', blurb: 'Detail-first, discreet house cleaning for Potomac estates and the neighborhoods around Potomac Village.',
    neighborhoods: ['Potomac Village', 'Avenel', 'River Falls', 'Falls Road corridor', 'Bradley Farms'], zips: ['20854', '20859'],
    focus: 'Potomac homes are typically large single-family houses on generous lots — more bathrooms, more square footage, and finishes that need careful products. Most clients here want a consistent recurring team plus seasonal deep cleans, and a thorough move-in clean before furniture arrives.' },
  { slug: 'chevy-chase-md', name: 'Chevy Chase', state: 'MD', region: 'montgomery', blurb: 'Careful house cleaning for Chevy Chase\u2019s historic homes and Friendship Heights condos.',
    neighborhoods: ['Chevy Chase Village', 'Chevy Chase Section 3 & 5', 'Kenwood', 'Friendship Heights', 'Martin\u2019s Additions'], zips: ['20815'],
    focus: 'Many Chevy Chase homes are older, character-rich houses with original woodwork and detailed trim that call for a patient, hands-on clean. We handle recurring upkeep, pre-listing and move-out deep cleans, and condo cleaning near Friendship Heights.' },
  { slug: 'north-bethesda-md', name: 'North Bethesda', state: 'MD', region: 'montgomery', blurb: 'House and condo cleaning around Pike & Rose, White Flint, and the Rockville Pike corridor.',
    neighborhoods: ['Pike & Rose', 'White Flint', 'Luxmanor', 'Garrett Park Estates', 'Grosvenor'], zips: ['20852'],
    focus: 'North Bethesda has a fast-growing mix of luxury apartments, condos, and established single-family neighborhoods. Lease turnovers make move-out cleaning a frequent request, alongside recurring service for busy households near the Metro.' },
  { slug: 'kensington-md', name: 'Kensington', state: 'MD', region: 'montgomery', blurb: 'Thorough, respectful cleaning for Kensington\u2019s historic district and surrounding neighborhoods.',
    neighborhoods: ['Historic Kensington', 'Howard Avenue / Antique Row', 'Parkwood', 'Rock Creek Hills'], zips: ['20895'],
    focus: 'Kensington\u2019s Victorian-era homes and established neighborhoods are full of details — porches, trim, older floors — that reward a careful deep clean. Recurring and move-in cleaning are our most common requests here.' },
  { slug: 'gaithersburg-md', name: 'Gaithersburg', state: 'MD', region: 'montgomery', blurb: 'Recurring and move-in/move-out cleaning for Kentlands, Lakelands, and the rest of Gaithersburg.',
    neighborhoods: ['Kentlands', 'Lakelands', 'Crown', 'Washingtonian Center', 'Montgomery Village'], zips: ['20877', '20878', '20879'],
    focus: 'Gaithersburg\u2019s planned communities and newer townhomes see a lot of moves — new builds in Crown, resales in Kentlands and Lakelands — so move-in and post-construction cleaning are in steady demand alongside recurring service.' },
  { slug: 'silver-spring-md', name: 'Silver Spring', state: 'MD', region: 'montgomery', blurb: 'Serving downtown Silver Spring high-rises and the residential neighborhoods beyond.' },
  { slug: 'rockville-md', name: 'Rockville', state: 'MD', region: 'montgomery', blurb: 'Reliable residential and office cleaning across Rockville and the I-270 corridor.' },

  // ── Washington DC ──
  { slug: 'washington-dc', name: 'Washington', state: 'DC', region: 'dc', blurb: 'Citywide residential and commercial cleaning — from Capitol Hill rowhouses to downtown offices.' },

  // ── Northern Virginia ──
  { slug: 'arlington-va', name: 'Arlington', state: 'VA', region: 'northern-va', blurb: "Rowhouses, high-rises, and offices — cleaning across Arlington's urban villages." ,
    neighborhoods: ['Clarendon', 'Ballston', 'Lyon Village', 'Rosslyn', 'Cherrydale', 'Crystal City'], zips: ['22201', '22203', '22207', '22209'],
    focus: 'Arlington has one of the highest renter populations in the region, and military and federal moves (the Pentagon is right here) keep move-in/move-out cleaning busy all year. Condo and apartment cleaning, deposit-ready move-outs, and recurring service for busy professionals are our core work here.' },
  { slug: 'alexandria-va', name: 'Alexandria', state: 'VA', region: 'northern-va', blurb: 'From Old Town townhomes to West End condos, we keep Alexandria spotless.',
    neighborhoods: ['Old Town', 'Del Ray', 'Rosemont', 'Seminary Hill', 'Kingstowne', 'Belle Haven'], zips: ['22301', '22302', '22314', '22307'],
    focus: 'From historic Old Town rowhouses to West End and Kingstowne townhomes, Alexandria sees constant turnover — including military families on PCS moves near Fort Belvoir. Move-in/move-out and deep cleaning are our most requested services here.' },
  { slug: 'fairfax-va', name: 'Fairfax', state: 'VA', region: 'northern-va', blurb: 'Trusted house and office cleaning throughout Fairfax and the surrounding county.',
    neighborhoods: ['Fairfax City', 'Fair Oaks', 'Mantua', 'Fair Lakes', 'Oak Hill'], zips: ['22030', '22031', '22032', '22033'],
    focus: 'Fairfax covers everything from George Mason area rentals to large family homes in Fair Oaks and Mantua. Recurring cleaning, deep cleans, and move-in/move-out cleaning for the area\u2019s steady stream of relocations are all common requests.' },
  { slug: 'falls-church-va', name: 'Falls Church', state: 'VA', region: 'northern-va', blurb: 'Careful, consistent cleaning for Falls Church homes inside and outside the Beltway.',
    neighborhoods: ['West Falls Church', 'Lake Barcroft', 'Pimmit Hills', 'Seven Corners', 'Idylwood'], zips: ['22041', '22042', '22043', '22044', '22046'],
    focus: 'Falls Church homes range from classic brick colonials to lakefront houses at Lake Barcroft. Families here book recurring cleaning and deep cleans, and the area\u2019s federal and military households make move cleaning a regular need.' },
  { slug: 'mclean-va', name: 'McLean', state: 'VA', region: 'northern-va', blurb: 'Discreet, detail-first cleaning for McLean residences and executive homes.',
    neighborhoods: ['Langley', 'Chesterbrook', 'Salona Village', 'Franklin Park', 'McLean Hamlet', 'Kent Gardens'], zips: ['22101', '22102'],
    focus: 'McLean homes are often large single-family houses and custom builds with many bathrooms, high ceilings, and premium finishes. Clients here typically want a consistent, discreet recurring team, seasonal deep cleans, and white-glove move-in cleaning — McLean sees a steady flow of diplomatic, government, and executive relocations.' },
  { slug: 'tysons-va', name: 'Tysons', state: 'VA', region: 'northern-va', blurb: 'High-rise condos and corporate offices — professional cleaning in the heart of Tysons.',
    neighborhoods: ['Tysons Corner', 'The Boro', 'Greensboro', 'Tysons West', 'Pimmit Hills'], zips: ['22102', '22182'],
    focus: 'Tysons is dominated by luxury high-rise apartments and condos, with lease turnover happening every month. Move-out cleaning that gets the full deposit back, plus recurring service for busy professionals, is our focus here.' },
  { slug: 'vienna-va', name: 'Vienna', state: 'VA', region: 'northern-va', blurb: 'Family-friendly, thorough house cleaning across Vienna\u2019s neighborhoods.',
    neighborhoods: ['Wolf Trap', 'Vienna Woods', 'Maple Avenue', 'Hunter Mill', 'Westwood'], zips: ['22180', '22181', '22182'],
    focus: 'Vienna is a family-heavy town of single-family homes where recurring bi-weekly cleaning is the norm. We also do a lot of deep cleans before holidays and move-in cleans for families arriving for the schools.' },
  { slug: 'springfield-va', name: 'Springfield', state: 'VA', region: 'northern-va', blurb: 'Recurring and one-time cleaning for Springfield homes near the Mixing Bowl and beyond.' },
  { slug: 'annandale-va', name: 'Annandale', state: 'VA', region: 'northern-va', blurb: 'Dependable maid service for Annandale homes and small businesses.' },
  { slug: 'reston-va', name: 'Reston', state: 'VA', region: 'northern-va', blurb: 'From Reston Town Center condos to lakeside homes, we clean it all.',
    neighborhoods: ['Reston Town Center', 'Lake Anne', 'North Point', 'South Lakes', 'Hunters Woods'], zips: ['20190', '20191', '20194'],
    focus: 'Reston mixes Town Center high-rises with lakeside single-family homes and townhome clusters. Silver Line growth means a lot of new residents — move-in cleaning and recurring service lead the requests.' },
  { slug: 'herndon-va', name: 'Herndon', state: 'VA', region: 'northern-va', blurb: 'Professional cleaning for Herndon homes and offices near the Dulles corridor.' },
  { slug: 'ashburn-va', name: 'Ashburn', state: 'VA', region: 'northern-va', blurb: 'Serving Ashburn\u2019s growing communities with reliable recurring cleaning.',
    neighborhoods: ['Broadlands', 'Ashburn Farm', 'Ashburn Village', 'One Loudoun', 'Belmont Country Club', 'Brambleton border'], zips: ['20147', '20148'],
    focus: 'Ashburn is one of the fastest-growing places in Virginia, with new construction and young families moving in constantly. Post-construction and move-in cleaning for new builds, plus recurring service for busy households, are what Ashburn clients book most.' },
  { slug: 'leesburg-va', name: 'Leesburg', state: 'VA', region: 'northern-va', blurb: 'House cleaning for Leesburg — from the historic downtown to newer developments.',
    neighborhoods: ['Historic Downtown Leesburg', 'River Creek', 'Lansdowne', 'Raspberry Falls', 'Exeter'], zips: ['20175', '20176'],
    focus: 'Leesburg blends historic downtown homes with large newer communities like River Creek and Lansdowne. New construction keeps post-construction and move-in cleaning busy, alongside recurring service for growing families.' },
  { slug: 'chantilly-va', name: 'Chantilly', state: 'VA', region: 'northern-va', blurb: 'Residential and commercial cleaning across Chantilly and the Route 50 corridor.' },
  { slug: 'centreville-va', name: 'Centreville', state: 'VA', region: 'northern-va', blurb: 'Thorough, on-time cleaning for Centreville townhomes and single-family houses.' },
  { slug: 'manassas-va', name: 'Manassas', state: 'VA', region: 'northern-va', blurb: 'Serving Manassas homes and businesses with tailored cleaning programs.' },
  { slug: 'great-falls-va', name: 'Great Falls', state: 'VA', region: 'northern-va', blurb: 'White-glove house cleaning for Great Falls estates along Georgetown Pike and around the Village Centre.',
    neighborhoods: ['Great Falls Village Centre', 'Georgetown Pike corridor', 'River Bend', 'Forestville', 'Seneca Road area'], zips: ['22066'],
    focus: 'Great Falls homes are large single-family estates on multi-acre lots — lots of square footage, many bathrooms, and high-end finishes like natural stone and hardwood that need the right products and a careful hand. Clients here want a dedicated recurring team, seasonal deep cleans, and meticulous move-in/move-out cleaning when homes change hands.' },
  { slug: 'oakton-va', name: 'Oakton', state: 'VA', region: 'northern-va', blurb: 'Recurring and deep house cleaning for Oakton\u2019s wooded single-family neighborhoods.',
    neighborhoods: ['Oakton', 'Hunter Mill corridor', 'Flint Hill', 'Waples Mill', 'Fox Lake'], zips: ['22124'],
    focus: 'Oakton is made up mostly of large single-family homes on wooded lots, with busy dual-career households. Recurring bi-weekly cleaning and periodic deep cleans are the most popular services, along with move-in cleaning for families arriving for the schools.' },
  { slug: 'burke-va', name: 'Burke', state: 'VA', region: 'northern-va', blurb: 'Dependable house cleaning for Burke Centre, Burke Lake, and the surrounding neighborhoods.',
    neighborhoods: ['Burke Centre', 'Burke Lake', 'Lake Braddock', 'Kings Park', 'Signal Hill'], zips: ['22015'],
    focus: 'Burke is a family community of townhomes and single-family houses where recurring cleaning keeps busy weeks manageable. Military and federal relocations also make move-in/move-out cleaning a regular request.' },
  { slug: 'fairfax-station-va', name: 'Fairfax Station', state: 'VA', region: 'northern-va', blurb: 'Detail-oriented cleaning for Fairfax Station\u2019s large homes and wooded estates.',
    neighborhoods: ['Crosspointe', 'South Run', 'Fairfax Station Road area', 'Silverbrook'], zips: ['22039'],
    focus: 'Fairfax Station is known for spacious single-family homes on large lots. Larger homes mean more ground to cover, so clients here favor a consistent recurring team plus seasonal deep cleans, and full move-in cleans when homes sell.' },
  { slug: 'clifton-va', name: 'Clifton', state: 'VA', region: 'northern-va', blurb: 'House cleaning for Clifton\u2019s historic town and the large homes of Little Rocky Run and beyond.',
    neighborhoods: ['Historic Clifton', 'Little Rocky Run', 'Clifton Heights', 'Compton Road area'], zips: ['20124'],
    focus: 'Clifton pairs a historic small town with large single-family and estate homes. Recurring cleaning and deep cleaning are the main requests, with move-in cleaning when families relocate into the area.' },
  { slug: 'lorton-va', name: 'Lorton', state: 'VA', region: 'northern-va', blurb: 'Move-in/move-out and recurring cleaning for Laurel Hill, Lorton Station, and the Fort Belvoir area.',
    neighborhoods: ['Laurel Hill', 'Lorton Station', 'Crosspointe border', 'Gunston'], zips: ['22079'],
    focus: 'Lorton\u2019s newer communities sit right next to Fort Belvoir, so military PCS moves drive a steady stream of move-in and move-out cleaning. Newer construction in Laurel Hill also keeps post-construction cleaning in demand.' },
  { slug: 'south-riding-va', name: 'South Riding', state: 'VA', region: 'northern-va', blurb: 'Recurring, move-in, and new-construction cleaning for South Riding homes.',
    neighborhoods: ['South Riding', 'Stone Ridge', 'Kirkpatrick Farms', 'East Gate'], zips: ['20152'],
    focus: 'South Riding and neighboring Stone Ridge are full of newer townhomes and single-family homes owned by young families. Move-in cleaning, post-construction cleaning for new builds, and recurring service are what clients here book most.' },
  { slug: 'brambleton-va', name: 'Brambleton', state: 'VA', region: 'northern-va', blurb: 'New-construction, move-in, and recurring cleaning across Brambleton.',
    neighborhoods: ['Brambleton Town Center', 'Birchwood', 'Brambleton Village', 'Arcola border'], zips: ['20148'],
    focus: 'Brambleton is one of Loudoun County\u2019s newest master-planned communities, with homes still being built. That means a lot of post-construction and move-in cleaning — getting builder dust out before families move in — plus recurring service once they\u2019ve settled.' },
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
