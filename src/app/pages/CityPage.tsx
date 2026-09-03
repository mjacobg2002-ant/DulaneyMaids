import { useParams, Link } from 'react-router';
import { CheckCircle2, ArrowRight, MapPin, Phone } from 'lucide-react';
import { Seo } from '../components/Seo';
import { CTABand } from '../components/CTABand';
import { YelpBadge } from '../components/YelpBadge';
import { getCityBySlug, cities, REGION_LABELS } from '../data/cities';
import { SITE } from '../data/site';
import { breadcrumbSchema, faqSchema, serviceSchema } from '../data/seo';
import { NotFound } from './NotFound';

const INTERIOR_IMG = 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=700&h=450&q=70&fit=crop&auto=format';

function getNearby(currentSlug: string, count = 4) {
  const current = getCityBySlug(currentSlug);
  if (!current) return [];
  return cities
    .filter((c) => c.region === current.region && c.slug !== currentSlug)
    .slice(0, count);
}

export function CityPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = getCityBySlug(citySlug ?? '');

  if (!city) return <NotFound />;

  const cityFull = `${city.name}, ${city.state}`;
  const nearby = getNearby(city.slug);
  const path = `/service-areas/${city.slug}`;

  const localFaqs = [
    {
      q: `Do you serve all neighborhoods in ${city.name}?`,
      a: `Yes — we cover ${city.name} and the surrounding areas. Reach out to confirm coverage for your specific address and receive a free tailored quote.`,
    },
    {
      q: `How quickly can I get a cleaning quote in ${city.name}?`,
      a: `Fast. Call ${SITE.phoneDisplay} or use our quote form and we'll respond promptly — typically the same day — with a tailored proposal.`,
    },
    {
      q: `What cleaning services are available in ${cityFull}?`,
      a: `All of our services: standard house cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleaning, and commercial janitorial services.`,
    },
    {
      q: `Can I schedule recurring cleaning in ${city.name}?`,
      a: `Absolutely. We offer flexible recurring schedules — weekly, bi-weekly, monthly, or custom — for both residential and commercial clients in ${city.name}.`,
    },
  ];

  return (
    <div>
      <Seo
        title={`House Cleaning & Commercial Cleaning in ${cityFull}`}
        description={`Professional house cleaning and maid service in ${cityFull}. Deep cleaning, move-in/move-out, recurring and commercial cleaning by Dulaney Maids. Insured, vetted team — get a free quote.`}
        path={path}
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Service Areas', path: '/service-areas' },
            { name: cityFull, path },
          ]),
          serviceSchema({
            name: `House & Commercial Cleaning in ${cityFull}`,
            description: `Residential and commercial cleaning services in ${cityFull} by Dulaney Maids.`,
            path,
            areaServed: [cityFull],
          }),
          faqSchema(localFaqs),
        ]}
      />

      {/* ─── Hero ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#1E2126' }} className="py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <nav className="flex items-center gap-2 mb-3" aria-label="Breadcrumb">
            <Link to="/service-areas" className="text-white/60 text-sm hover:text-white/90 transition-colors">
              Service Areas
            </Link>
            <span className="text-white/40 text-sm">/</span>
            <span className="text-white/80 text-sm">{cityFull}</span>
          </nav>
          <p
            className="text-[#C6A15B] text-xs mb-3"
            style={{ fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            {REGION_LABELS[city.region]}
          </p>
          <h1
            className="text-white mb-5"
            style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, lineHeight: 1.15 }}
          >
            House Cleaning & Commercial Cleaning in {cityFull}
          </h1>
          <p className="text-white/80 max-w-2xl mb-4" style={{ fontSize: '17px', lineHeight: '1.7' }}>
            {city.blurb}
          </p>
          <p className="text-white/70 max-w-2xl mb-8" style={{ fontSize: '16px', lineHeight: '1.7' }}>
            Whether you need a regular maid service, a one-time deep clean, or janitorial maintenance
            for your business, Dulaney Maids delivers tailored quotes and reliable, insured service
            in {city.name}.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              style={{ backgroundColor: '#C6A15B', color: '#1E2126', fontWeight: 700 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white hover:opacity-90 transition-opacity"
            >
              Get a Free Quote <ArrowRight size={17} />
            </Link>
            <a
              href={`tel:${SITE.phoneTel}`}
              style={{ fontWeight: 600 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              <Phone size={16} /> Call {SITE.phoneDisplay}
            </a>
            <YelpBadge tone="light" />
          </div>
        </div>
      </section>

      {/* ─── Services ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-[#1E2126] mb-5"
                style={{ fontSize: 'clamp(24px, 3.5vw, 34px)', fontWeight: 800 }}
              >
                Cleaning Services in {cityFull}
              </h2>
              <p className="text-[#4A4640] mb-8" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                We bring the same professional standards to every job in {city.name} — whether it's a
                weekly home clean, a deep clean before a big event, or a commercial janitorial contract
                for your office or facility.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: 'Standard House Cleaning', to: '/residential#standard' },
                  { label: 'Deep Cleaning', to: '/residential#deep' },
                  { label: 'Move-In / Move-Out', to: '/residential#move' },
                  { label: 'Post-Construction', to: '/residential#post-construction' },
                  { label: 'Office Cleaning', to: '/commercial' },
                  { label: 'Janitorial Services', to: '/commercial' },
                ].map(({ label, to }) => (
                  <Link
                    key={label}
                    to={to}
                    className="flex items-center gap-2.5 bg-[#FAF8F3] rounded-xl px-4 py-3 border border-[#E8E1D3] hover:border-[#C6A15B] transition-colors group text-sm"
                  >
                    <CheckCircle2 size={15} className="text-[#4C9961] flex-shrink-0" />
                    <span
                      className="text-[#4A4640] group-hover:text-[#1E2126] transition-colors"
                      style={{ fontWeight: 500 }}
                    >
                      {label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <img
                src={INTERIOR_IMG}
                alt={`Spotless home interior after professional house cleaning in ${cityFull}`}
                className="w-full h-72 lg:h-96 object-cover rounded-2xl"
                style={{ boxShadow: '0 16px 40px rgba(30,33,38,0.12)' }}
                width={700}
                height={450}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Locals Choose Dulaney ───────────────────────── */}
      <section className="py-16 bg-[#FAF8F3]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="text-[#1E2126] mb-8" style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 800 }}>
            Why {city.name} Residents & Businesses Choose Dulaney Maids
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Local & Established', text: `We're based in Kettering, MD — a short drive from ${city.name}, not a distant call center.` },
              { title: 'Insured & Vetted Team', text: 'Every cleaner is vetted and background-checked, and our work is insured.' },
              { title: '24-Hour Re-Clean Guarantee', text: "If anything was missed, tell us within 24 hours and we'll make it right — free." },
              { title: 'Tailored Quotes', text: `Every quote for ${city.name} clients is built around your actual space and needs — no inflated flat rates.` },
              { title: 'Flexible Scheduling', text: 'One-time, weekly, bi-weekly, monthly, or custom — we work around your calendar.' },
              { title: 'Consistent Quality', text: 'Detailed checklists and professional standards, so every clean meets the same high bar.' },
            ].map(({ title, text }) => (
              <div key={title} className="bg-white rounded-xl p-5 border border-[#E8E1D3]">
                <CheckCircle2 size={18} className="text-[#4C9961] mb-3" />
                <h3 className="text-[#1E2126] mb-2" style={{ fontSize: '15px', fontWeight: 700 }}>
                  {title}
                </h3>
                <p className="text-[#4A4640] text-sm" style={{ lineHeight: '1.65' }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Local FAQs ────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="text-[#1E2126] mb-8" style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 800 }}>
            Frequently Asked Questions — {cityFull}
          </h2>
          <div className="flex flex-col divide-y divide-[#E8E1D3] max-w-3xl">
            {localFaqs.map((faq) => (
              <div key={faq.q} className="py-5">
                <h3 className="text-[#1E2126] mb-2" style={{ fontSize: '15px', fontWeight: 700 }}>
                  {faq.q}
                </h3>
                <p className="text-[#4A4640] text-sm" style={{ lineHeight: '1.7' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Nearby Cities ────────────────────────────────────── */}
      {nearby.length > 0 && (
        <section className="py-12 bg-[#FAF8F3]">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
            <h2 className="text-[#1E2126] mb-5" style={{ fontSize: '18px', fontWeight: 800 }}>
              Also Serving Nearby Areas
            </h2>
            <div className="flex flex-wrap gap-3">
              {nearby.map((c) => (
                <Link
                  key={c.slug}
                  to={`/service-areas/${c.slug}`}
                  className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-[#E8E1D3] hover:border-[#C6A15B] transition-colors text-sm"
                  style={{ fontWeight: 500, color: '#4A4640' }}
                >
                  <MapPin size={13} className="text-[#8A6D3B]" />
                  {c.name}, {c.state}
                </Link>
              ))}
              <Link
                to="/service-areas"
                className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-[#E8E1D3] hover:border-[#C6A15B] transition-colors text-sm"
                style={{ fontWeight: 500, color: '#8A6D3B' }}
              >
                View all areas <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTABand
        heading={`Get a Free Quote for Cleaning in ${cityFull}`}
        subtext={`Contact Dulaney Maids today for a tailored residential or commercial cleaning quote in ${city.name}.`}
      />
    </div>
  );
}
