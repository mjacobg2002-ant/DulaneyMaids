import { Link } from 'react-router';
import { CheckCircle2, ArrowRight, Building2, CalendarCheck, HardHat, Users } from 'lucide-react';
import { CTABand } from '../components/CTABand';
import { cities } from '../data/cities';

const HERO_IMG = 'https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?w=1200&h=550&fit=crop&auto=format';

const services = [
  {
    id: 'office',
    icon: <Building2 size={22} />,
    title: 'Office Cleaning',
    headline: 'A professional workspace, maintained',
    desc: 'We keep your office environment clean, organized, and welcoming — so your team can focus on what matters without distraction.',
    includes: [
      'Desks, surfaces &amp; equipment wiped',
      'Common areas &amp; reception cleaned',
      'Kitchen &amp; break room sanitized',
      'Bathrooms disinfected &amp; restocked',
      'Floors vacuumed, mopped &amp; polished',
      'Trash removed &amp; bins relined',
    ],
  },
  {
    id: 'janitorial',
    icon: <CalendarCheck size={22} />,
    title: 'Janitorial / Maintenance Cleaning',
    headline: 'Consistent standards, on your schedule',
    desc: 'Regular janitorial service tailored to your facility — daily, weekly, or custom cadence. Ideal for offices, retail, and managed properties.',
    includes: [
      'Scheduled recurring cleaning visits',
      'High-traffic area focus',
      'Restroom &amp; sanitation maintenance',
      'Floor care &amp; deep spot cleaning',
      'Supply monitoring &amp; coordination',
      'Consistent team for your facility',
    ],
  },
  {
    id: 'construction',
    icon: <HardHat size={22} />,
    title: 'Post-Construction / Turnover',
    headline: 'Project-ready, inspection-ready',
    desc: 'After construction, renovation, or tenant turnover, we prepare commercial spaces for immediate occupancy — thorough, efficient, and professional.',
    includes: [
      'Construction dust &amp; debris removal',
      'Windows, glass &amp; frames cleaned',
      'Adhesive, paint &amp; residue removal',
      'All surfaces wiped &amp; sanitized',
      'Floor preparation &amp; finishing',
      'Final walkthrough ready',
    ],
  },
];

const idealFor = [
  { icon: <Building2 size={20} />, label: 'Office Buildings' },
  { icon: <Users size={20} />, label: 'Property Managers' },
  { icon: <CalendarCheck size={20} />, label: 'Facilities Teams' },
  { icon: <Building2 size={20} />, label: 'Retail &amp; Hospitality' },
];

export function Commercial() {
  const featuredAreas = cities.filter((c) => ['arlington-va', 'washington-dc', 'bethesda-md', 'fairfax-va', 'reston-va', 'mclean-va'].includes(c.slug));

  return (
    <div>
      {/* ─── Hero ────────────────────────────────────────────── */}
      <section className="relative bg-[#143177]">
        <img
          src={HERO_IMG}
          alt="Clean modern office environment"
          className="w-full h-64 lg:h-80 object-cover opacity-20 absolute inset-0"
        />
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <p
            className="text-[#F7D156] text-xs mb-3"
            style={{ fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            Commercial Cleaning — DMV
          </p>
          <h1
            className="text-white mb-5"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.15 }}
          >
            Commercial Cleaning &amp; Janitorial Services in the DMV
          </h1>
          <p className="text-white/80 max-w-2xl mb-8" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            Professional, recurring, and discreet commercial cleaning for offices, facilities, and managed
            properties across Northern Virginia, Washington DC, and Maryland.
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

      {/* ─── Ideal For ───────────────────────────────────────── */}
      <section className="py-12 bg-[#F6F8FC] border-b border-[#E5E7EB]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-[#6B7280] mr-2" style={{ fontWeight: 600 }}>Ideal for:</span>
            {['Office Buildings', 'Property Managers', 'Facilities Teams', 'Retail &amp; Hospitality', 'Medical Offices', 'Government Contractors'].map(
              (label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 bg-white border border-[#E5E7EB] rounded-full px-3 py-1.5 text-sm text-[#374151]"
                  style={{ fontWeight: 500 }}
                  dangerouslySetInnerHTML={{ __html: label }}
                />
              )
            )}
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
              Our Commercial Cleaning Services
            </h2>
            <p className="text-[#374151] max-w-2xl mx-auto" style={{ fontSize: '17px', lineHeight: '1.7' }}>
              Consistent, professional service that fits your business schedule and facility requirements.
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
                    Service Includes
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
          <h2 className="text-[#143177] mb-6" style={{ fontSize: '22px', fontWeight: 800 }}>
            Commercial Cleaning Across the DMV
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredAreas.map((city) => (
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
        heading="Ready to Discuss Your Commercial Cleaning Needs?"
        subtext="We'll put together a professional quote for your office, facility, or managed property — fast response, tailored to your schedule."
      />
    </div>
  );
}
