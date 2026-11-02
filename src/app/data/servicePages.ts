/**
 * Dedicated landing pages for the high-intent, high-ticket residential services.
 * Each page targets "<service> + Northern Virginia / Montgomery County / DC"
 * searches and links into the city pages where those jobs are most common.
 */
export interface ServicePageData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  eyebrow: string;
  intro: string;
  includes: string[];
  whoFor: { title: string; text: string }[];
  /** City pages to feature — where this service is booked most. */
  citySlugs: string[];
  faqs: { q: string; a: string }[];
}

export const servicePages: ServicePageData[] = [
  {
    slug: 'move-in-move-out-cleaning',
    name: 'Move-In / Move-Out Cleaning',
    metaTitle: 'Move-In & Move-Out Cleaning | Northern VA, MD & DC',
    metaDescription:
      'Move-in and move-out cleaning across Northern Virginia, Montgomery County, Prince George’s County, and DC. Inside cabinets, appliances, and closets — deposit-ready, listing-ready. Free quote.',
    h1: 'Move-In & Move-Out Cleaning in Northern Virginia, Maryland & DC',
    eyebrow: 'Move-In / Move-Out',
    intro:
      'Handing over the keys or getting a new home ready for your family? Our move cleaning is a complete top-to-bottom deep clean of an empty home — inside every cabinet, closet, and appliance — so it’s deposit-ready for your landlord, show-ready for buyers, or truly clean before your furniture arrives.',
    includes: [
      'Complete deep clean of every room',
      'Inside all cabinets, drawers & closets',
      'Oven, refrigerator & dishwasher inside and out',
      'Bathrooms scrubbed, descaled & sanitized',
      'Baseboards, door frames, switches & vents',
      'Walls spot-cleaned where needed',
      'Window sills, tracks & blinds',
      'Floors vacuumed and mopped edge to edge',
    ],
    whoFor: [
      { title: 'Renters moving out', text: 'A thorough, documented clean that helps you hand the unit back in deposit-ready condition.' },
      { title: 'Buyers moving in', text: 'Start fresh — we clean the previous owner’s home before your boxes and furniture arrive.' },
      { title: 'Sellers & realtors', text: 'Listing-ready and closing-ready cleans so the home shows (and hands over) at its best.' },
      { title: 'Military & federal relocations', text: 'PCS and agency moves on tight timelines — we work around your move-out inspection date.' },
      { title: 'Landlords & property managers', text: 'Fast turnovers between tenants so units are ready to show and lease again.' },
    ],
    citySlugs: [
      'arlington-va', 'alexandria-va', 'tysons-va', 'mclean-va', 'great-falls-va', 'reston-va',
      'ashburn-va', 'lorton-va', 'fairfax-va', 'bethesda-md', 'north-bethesda-md', 'washington-dc',
    ],
    faqs: [
      { q: 'Does the home need to be empty for a move-out clean?', a: 'Ideally, yes. An empty home lets us reach inside every cabinet and closet and clean the floors edge to edge. If you’re still moving out, tell us and we’ll schedule around your movers.' },
      { q: 'Will a move-out clean help me get my security deposit back?', a: 'Our move-out clean is built around what landlords and property managers inspect: kitchens, bathrooms, inside appliances and cabinets, floors, and baseboards. And if anything was missed, tell us within 24 hours and we’ll come back and fix it for free.' },
      { q: 'How far in advance should I book?', a: 'As soon as you know your move date — the end and start of each month fill up fast. Call or request a quote and we’ll confirm availability, usually the same day.' },
      { q: 'How is a move cleaning priced?', a: 'Every quote is tailored to the home’s size, condition, and number of bathrooms, so you only pay for what your space actually needs. Quotes are free with no obligation.' },
    ],
  },
  {
    slug: 'deep-cleaning',
    name: 'Deep Cleaning',
    metaTitle: 'Deep House Cleaning | Northern VA, Montgomery County & DC',
    metaDescription:
      'Top-to-bottom deep house cleaning in Northern Virginia, Montgomery County, Prince George’s County, and DC — inside appliances, grout, baseboards, vents, and more. Insured team, free quote.',
    h1: 'Deep House Cleaning in Northern Virginia, Maryland & DC',
    eyebrow: 'Deep Cleaning',
    intro:
      'When routine cleaning isn’t enough, our deep clean gets to everything a regular clean skips — inside the oven and refrigerator, tile grout, baseboards, vents, and behind appliances. It’s the most popular first clean for new clients and the best way to reset a home before a recurring schedule.',
    includes: [
      'Everything in a standard clean',
      'Inside oven, refrigerator & microwave',
      'Tile grout scrubbing & deep sanitizing',
      'Baseboards, door frames & vents',
      'Behind & under movable appliances',
      'Window sills, tracks & blinds',
      'Light fixtures, ceiling fans & high dusting',
      'Cabinet fronts & hardware detailed',
    ],
    whoFor: [
      { title: 'First-time clients', text: 'A deep clean resets the home so recurring visits keep it at that standard.' },
      { title: 'Larger homes', text: 'More bathrooms and more square footage need a methodical, room-by-room approach.' },
      { title: 'Before holidays & events', text: 'Hosting family or a party? Get the whole house guest-ready.' },
      { title: 'Seasonal resets', text: 'Spring and fall deep cleans tackle the build-up that daily life leaves behind.' },
      { title: 'Pre-listing', text: 'Help your home photograph and show at its best before it hits the market.' },
    ],
    citySlugs: [
      'great-falls-va', 'mclean-va', 'potomac-md', 'bethesda-md', 'chevy-chase-md', 'vienna-va',
      'oakton-va', 'fairfax-station-va', 'clifton-va', 'falls-church-va', 'arlington-va', 'kettering-md',
    ],
    faqs: [
      { q: 'What’s the difference between a deep clean and a standard clean?', a: 'A standard clean maintains a home that’s already in good shape. A deep clean adds the detail work — inside appliances, grout, baseboards, vents, behind appliances, and high dusting — that builds up over time.' },
      { q: 'How long does a deep clean take?', a: 'It depends on the size and condition of the home. Larger homes with several bathrooms take longer, which is why every quote is built around your actual space.' },
      { q: 'Do I need a deep clean before starting recurring service?', a: 'We usually recommend it. Starting with a deep clean means every recurring visit after that maintains a truly clean home instead of chasing build-up.' },
      { q: 'Do you bring your own supplies?', a: 'Yes — our team arrives with professional supplies and equipment. If you prefer specific products (for natural stone or hardwood, for example), just let us know.' },
    ],
  },
  {
    slug: 'post-construction-cleaning',
    name: 'Post-Construction Cleaning',
    metaTitle: 'Post-Construction & New Build Cleaning | Northern VA & MD',
    metaDescription:
      'Post-construction and new-build cleaning in Loudoun, Fairfax, Montgomery, and Prince George’s counties. Fine dust, debris, stickers, and residue removed — move-in ready. Free quote.',
    h1: 'Post-Construction & New Build Cleaning in Northern Virginia & Maryland',
    eyebrow: 'Post-Construction',
    intro:
      'Construction dust gets into everything — vents, cabinets, window tracks, and every flat surface. Whether you’ve just closed on a new build or finished a renovation, we remove the fine dust, debris, labels, and residue so the space is genuinely move-in ready.',
    includes: [
      'Fine dust removal from every surface',
      'Inside cabinets, drawers & closets',
      'Vents, fixtures & hardware detailed',
      'Windows, sills & tracks cleaned',
      'Sticker, label & residue removal',
      'Floors vacuumed, scrubbed & mopped',
      'Bathrooms & kitchens fully sanitized',
      'Final walkthrough-ready finish',
    ],
    whoFor: [
      { title: 'New-build homeowners', text: 'Builder cleans rarely go deep enough — we get the home truly ready before you move in.' },
      { title: 'Renovations & remodels', text: 'Kitchen, bath, or whole-home projects — we clear the dust so it actually feels finished.' },
      { title: 'Builders & contractors', text: 'Final cleans that help your project hand over clean at walkthrough.' },
    ],
    citySlugs: [
      'brambleton-va', 'south-riding-va', 'ashburn-va', 'leesburg-va', 'lorton-va', 'gaithersburg-md',
      'great-falls-va', 'mclean-va', 'potomac-md', 'upper-marlboro-md', 'bowie-md', 'kettering-md',
    ],
    faqs: [
      { q: 'When should I schedule a post-construction clean?', a: 'After the trades are finished and before you move furniture in. Fine dust keeps settling for a while after work stops, so the closer to move-in, the better.' },
      { q: 'Do you remove construction debris?', a: 'We remove the fine dust, small debris, stickers, labels, and residue left on surfaces. Large debris and dumpster hauling should be handled by your builder or contractor.' },
      { q: 'Do you work with builders and contractors?', a: 'Yes. We handle final cleans for builders, remodelers, and contractors as well as homeowners. Call or request a quote to set up a walkthrough.' },
    ],
  },
];

export function getServicePage(slug: string): ServicePageData | undefined {
  return servicePages.find((s) => s.slug === slug);
}
