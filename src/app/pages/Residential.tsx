import { Link } from 'react-router';
import { CheckCircle2, ArrowRight, Home, Sparkles, MoveRight, HardHat } from 'lucide-react';
import { CTABand } from '../components/CTABand';
import { cities } from '../data/cities';

const HERO_IMG = 'https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?w=1200&h=550&fit=crop&auto=format';
const INTERIOR_IMG = 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=700&h=500&fit=crop&auto=format';

const services = [
  {
    id: 'standard',
    icon: <Home size={22} />,
    title: 'Standard Cleaning',
    headline: 'Consistent, top-to-bottom home care',
    desc: 'Ideal for regular upkeep, our standard cleaning covers all living areas thoroughly — so your home is always ready for you.',
    includes: [
      'Kitchen surfaces, appliances &amp; sink',
      'Bathroom scrubbing &amp; sanitizing',
      'Vacuuming &amp; mopping all floors',
      'Dusting furniture, shelves &amp; fixtures',
      'Trash removal &amp; linen tidying',
      'Interior windows &amp; mirrors',
    ],
  },
  {
    id: 'deep',
    icon: <Sparkles size={22} />,
    title: 'Deep Cleaning',
    headline: 'A thorough clean from top to bottom',
    desc: 'When routine maintenance isn\'t enough, our deep clean tackles every corner — inside cabinets, behind appliances, tile grout, and beyond.',
    includes: [
      'Everything in standard cleaning',
      'Inside oven, refrigerator &amp; cabinets',
      'Tile grout scrubbing &amp; deep sanitizing',
      'Baseboards, door frames &amp; vents',
      'Behind &amp; under appliances',
      'Window sills &amp; blind cleaning',
    ],
  },
  {
    id: 'move',
    icon: <MoveRight size={22} />,
    title: 'Move-In / Move-Out Cleaning',
    headline: 'Start fresh — or leave it spotless',
    desc: 'Whether you\'re arriving at a new home or handing over the keys, our move cleaning ensures every inch is ready for what\'s next.',
    includes: [
      'Complete deep clean of all rooms',
      'Inside all cabinets &amp; closets',
      'Appliances cleaned inside &amp; out',
      'Walls spot-cleaned where needed',
      'All fixtures scrubbed &amp; polished',
      'Ideal for landlords &amp; tenants alike',
    ],
  },
  {
    id: 'construction',
    icon: <HardHat size={22} />,
    title: 'Post-Construction Cleaning',
    headline: 'Clear the dust — reveal the result',
    desc: 'Renovation debris, construction dust, and adhesive residue require specialist attention. We prepare your newly built or renovated space for occupancy.',
    includes: [
      'Removal of construction dust &amp; debris',
      'Window &amp; glass cleaning',
      'Paint overspray &amp; adhesive removal',
      'Detailed floor cleaning &amp; polishing',
      'All surfaces wiped &amp; sanitized',
      'Final inspection-ready finish',
    ],
  },
];

export function Residential() {
  const vaLinks = cities.filter((c) => c.region === 'northern-va').slice(0, 6);
  const mdLinks = cities.filter((c) => c.region === 'maryland').slice(0, 4);

  return (
    <div>
      {/* ─── Hero ────────────────────────────────────────────── */}
      <section className="relative bg-[#143177]">
        <img
          src={HERO_IMG}
          alt="Clean residential kitchen"
          className="w-full h-64 lg:h-80 object-cover opacity-25 absolute inset-0"
        />
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <p
            className="text-[#F7D156] text-xs mb-3"
            style={{ fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            Residential Cleaning — DMV
          </p>
          <h1
            className="text-white mb-5"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.15 }}
          >
            Residential Cleaning in the DMV
          </h1>
          <p className="text-white/80 max-w-2xl mb-8" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            Professional house cleaning and maid service for homes across Northern Virginia, Washington DC, and
            Maryland. Tailored quotes, flexible scheduling, and reliable results.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              style={{ backgroundColor: '#3E6EDC', fontWeight: 700 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white hover:opacity-90 transition-opacity"
            >
              Get a Quote <ArrowRight size={17} />
            </Link>
            <Link
              to="/service-areas"
              style={{ fontWeight: 600 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              View Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Services ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <h2
              className="text-[#143177] mb-4"
              style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800 }}
            >
              Our Residential Cleaning Services
            </h2>
            <p className="text-[#374151] max-w-2xl mx-auto" style={{ fontSize: '17px', lineHeight: '1.7' }}>
              From routine upkeep to deep cleans, move services, and post-construction — each service is
              adapted to your home and schedule.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {services.map((s, i) => (
              <div
                key={s.id}
                id={s.id}
                className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                <div className="bg-[#F6F8FC] rounded-2xl p-8 border border-[#E5E7EB]">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: '#EEF1F7', color: '#143177' }}
                  >
                    {s.icon}
                  </div>
                  <h3 className="text-[#143177] mb-1" style={{ fontSize: '22px', fontWeight: 800 }}>
                    {s.title}
                  </h3>
                  <p className="text-[#3E6EDC] text-sm mb-4" style={{ fontWeight: 600 }}>
                    {s.headline}
                  </p>
                  <p className="text-[#374151] mb-6" style={{ fontSize: '15px', lineHeight: '1.7' }}>
                    {s.desc}
                  </p>
                  <Link
                    to="/contact"
                    style={{ backgroundColor: '#3E6EDC', fontWeight: 600 }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-white text-sm hover:opacity-90 transition-opacity"
                  >
                    Get a Quote <ArrowRight size={15} />
                  </Link>
                </div>
                <div>
                  <p
                    className="text-xs text-[#6B7280] mb-3"
                    style={{ fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}
                  >
                    What's Included
                  </p>
                  <ul className="flex flex-col gap-3">
                    {s.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 size={17} className="text-[#4C9961] mt-0.5 flex-shrink-0" />
                        <span
                          className="text-[#374151]"
                          style={{ fontSize: '15px', lineHeight: '1.6' }}
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Internal Links ────────────────────────────────────── */}
      <section className="py-16 bg-[#F6F8FC]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="text-[#143177] mb-8" style={{ fontSize: '22px', fontWeight: 800 }}>
            Residential Cleaning Available Near You
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...vaLinks, ...mdLinks].map((city) => (
              <Link
                key={city.slug}
                to={`/service-areas/${city.slug}`}
                className="flex items-center justify-between bg-white rounded-xl px-5 py-3.5 border border-[#E5E7EB] hover:border-[#3E6EDC] transition-colors group"
              >
                <span className="text-[#374151] text-sm group-hover:text-[#143177] transition-colors" style={{ fontWeight: 500 }}>
                  {city.name}, {city.state}
                </span>
                <ArrowRight size={14} className="text-[#3E6EDC] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        heading="Ready to Book Your Residential Clean?"
        subtext="Share your home details and receive a tailored quote — no commitments, no pricing surprises."
      />
    </div>
  );
}
