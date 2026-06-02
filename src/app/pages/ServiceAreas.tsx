import { Link } from 'react-router';
import { MapPin, ArrowRight } from 'lucide-react';
import { CTABand } from '../components/CTABand';
import { cities, getCitiesByRegion } from '../data/cities';

export function ServiceAreas() {
  const northernVA = getCitiesByRegion('northern-va');
  const dc = getCitiesByRegion('dc');
  const maryland = getCitiesByRegion('maryland');

  const regionSections = [
    {
      id: 'northern-va',
      label: 'Northern Virginia',
      tag: 'Priority Service Area',
      tagColor: '#4C9961',
      description:
        'We serve all major Northern Virginia communities — from Arlington and Alexandria to Loudoun County and Prince William County.',
      cities: northernVA,
    },
    {
      id: 'dc',
      label: 'Washington, DC',
      tag: 'Full Coverage',
      tagColor: '#3E6EDC',
      description:
        'Professional residential and commercial cleaning throughout Washington DC — serving neighborhoods citywide.',
      cities: dc,
    },
    {
      id: 'maryland',
      label: 'Maryland',
      tag: 'Near-DC Coverage',
      tagColor: '#3E6EDC',
      description:
        'Serving the Maryland communities closest to DC — Bethesda, Silver Spring, Rockville, and surrounding areas.',
      cities: maryland,
    },
  ];

  return (
    <div>
      {/* ─── Hero ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#143177' }} className="py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <p
            className="text-[#F7D156] text-xs mb-3"
            style={{ fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            Coverage Map
          </p>
          <h1
            className="text-white mb-5"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.15 }}
          >
            Service Areas — DMV
          </h1>
          <p className="text-white/80 max-w-2xl" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            Dulaney Maids provides residential and commercial cleaning services across the DMV region —
            Northern Virginia, Washington DC, and nearby Maryland. Find your city below.
          </p>
        </div>
      </section>

      {/* ─── Region Sections ──────────────────────────────────── */}
      {regionSections.map((region, idx) => (
        <section
          key={region.id}
          id={region.id}
          className={`py-16 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F6F8FC]'}`}
        >
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
              <h2
                className="text-[#143177]"
                style={{ fontSize: 'clamp(22px, 3.5vw, 30px)', fontWeight: 800 }}
              >
                {region.label}
              </h2>
              <span
                className="inline-flex items-center self-start px-3 py-1 rounded-full text-xs text-white"
                style={{ backgroundColor: region.tagColor, fontWeight: 700 }}
              >
                {region.tag}
              </span>
            </div>
            <p className="text-[#374151] mb-8 max-w-3xl" style={{ fontSize: '16px', lineHeight: '1.7' }}>
              {region.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {region.cities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/service-areas/${city.slug}`}
                  className="flex items-center gap-2.5 bg-white rounded-xl px-4 py-3 border border-[#E5E7EB] hover:border-[#3E6EDC] hover:shadow-sm transition-all group"
                  style={{ backgroundColor: idx % 2 === 1 ? 'white' : '#F6F8FC' }}
                >
                  <MapPin size={14} className="text-[#3E6EDC] flex-shrink-0" />
                  <span
                    className="text-sm text-[#374151] group-hover:text-[#143177] transition-colors"
                    style={{ fontWeight: 500 }}
                  >
                    {city.name}, {city.state}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ─── Services Cross-link ──────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="text-[#143177] mb-8" style={{ fontSize: '22px', fontWeight: 800 }}>
            Services Available in All Areas
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { to: '/residential', label: 'Residential Cleaning', desc: 'House &amp; maid service for homes' },
              { to: '/commercial', label: 'Commercial Cleaning', desc: 'Office &amp; facility cleaning' },
              { to: '/residential', label: 'Deep Cleaning', desc: 'Thorough top-to-bottom clean' },
              { to: '/residential', label: 'Move-In / Move-Out', desc: 'Fresh start or clean handover' },
              { to: '/residential', label: 'Post-Construction', desc: 'Construction dust &amp; debris removal' },
              { to: '/commercial', label: 'Janitorial Services', desc: 'Recurring facility maintenance' },
            ].map(({ to, label, desc }) => (
              <Link
                key={label}
                to={to}
                className="flex items-start gap-3 bg-[#F6F8FC] rounded-xl px-5 py-4 border border-[#E5E7EB] hover:border-[#3E6EDC] hover:bg-white transition-all group"
              >
                <ArrowRight size={16} className="text-[#3E6EDC] mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                <div>
                  <p className="text-[#143177] text-sm" style={{ fontWeight: 700 }}>
                    {label}
                  </p>
                  <p className="text-[#6B7280] text-xs mt-0.5" dangerouslySetInnerHTML={{ __html: desc }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        heading="Serving Your Neighborhood in the DMV"
        subtext="Find your city above, or contact us directly — we'll confirm coverage and send a tailored quote."
      />
    </div>
  );
}
