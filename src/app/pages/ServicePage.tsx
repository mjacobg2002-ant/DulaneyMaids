import { Link } from 'react-router';
import { CheckCircle2, ArrowRight, MapPin, Phone } from 'lucide-react';
import { Seo } from '../components/Seo';
import { CTABand } from '../components/CTABand';
import { YelpBadge } from '../components/YelpBadge';
import { cities } from '../data/cities';
import { SITE } from '../data/site';
import { STATIC_META } from '../data/pageMeta';
import { breadcrumbSchema, faqSchema, serviceSchema } from '../data/seo';
import type { ServicePageData } from '../data/servicePages';

export function ServicePage({ service }: { service: ServicePageData }) {
  const path = `/${service.slug}`;
  const meta = STATIC_META[path];
  const featured = service.citySlugs
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <div>
      <Seo
        title={meta.title}
        description={meta.description}
        path={path}
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Residential Cleaning', path: '/residential' },
            { name: service.name, path },
          ]),
          serviceSchema({
            name: service.name,
            description: service.intro,
            path,
            areaServed: ['Northern Virginia', 'Montgomery County, MD', "Prince George's County, MD", 'Washington, DC'],
          }),
          faqSchema(service.faqs),
        ]}
      />

      {/* ─── Hero ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#1E2126' }} className="py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <nav className="flex items-center gap-2 mb-3" aria-label="Breadcrumb">
            <Link to="/residential" className="text-white/60 text-sm hover:text-white/90 transition-colors">
              Residential Cleaning
            </Link>
            <span className="text-white/40 text-sm">/</span>
            <span className="text-white/80 text-sm">{service.name}</span>
          </nav>
          <p
            className="text-[#C6A15B] text-xs mb-3"
            style={{ fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            {service.eyebrow}
          </p>
          <h1
            className="text-white mb-5 max-w-4xl"
            style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, lineHeight: 1.15 }}
          >
            {service.h1}
          </h1>
          <p className="text-white/80 max-w-2xl mb-8" style={{ fontSize: '17px', lineHeight: '1.7' }}>
            {service.intro}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              style={{ backgroundColor: '#C6A15B', color: '#1E2126', fontWeight: 700 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg hover:opacity-90 transition-opacity"
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

      {/* ─── What's included ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="text-[#1E2126] mb-8" style={{ fontSize: 'clamp(24px, 3.5vw, 34px)', fontWeight: 800 }}>
            What&rsquo;s Included in Our {service.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.includes.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2.5 bg-[#FAF8F3] rounded-xl px-4 py-3.5 border border-[#E8E1D3] text-sm"
              >
                <CheckCircle2 size={16} className="text-[#4C9961] flex-shrink-0 mt-0.5" />
                <span className="text-[#4A4640]" style={{ fontWeight: 500, lineHeight: 1.5 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who it's for ────────────────────────────────────── */}
      <section className="py-16 bg-[#FAF8F3]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="text-[#1E2126] mb-8" style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 800 }}>
            Who Books {service.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.whoFor.map(({ title, text }) => (
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
            <div className="bg-white rounded-xl p-5 border border-[#E8E1D3]">
              <CheckCircle2 size={18} className="text-[#4C9961] mb-3" />
              <h3 className="text-[#1E2126] mb-2" style={{ fontSize: '15px', fontWeight: 700 }}>
                24-Hour Re-Clean Guarantee
              </h3>
              <p className="text-[#4A4640] text-sm" style={{ lineHeight: '1.65' }}>
                If anything was missed, tell us within 24 hours and we&rsquo;ll come back and make it right &mdash; free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Where we do it most ─────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="text-[#1E2126] mb-3" style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 800 }}>
            {service.name} Near You
          </h2>
          <p className="text-[#4A4640] mb-6 max-w-2xl" style={{ fontSize: '16px', lineHeight: '1.7' }}>
            We provide {service.name.toLowerCase()} across Northern Virginia, Montgomery County, Prince George&rsquo;s
            County, and Washington, DC. Some of the areas we serve most:
          </p>
          <div className="flex flex-wrap gap-3">
            {featured.map((c) => (
              <Link
                key={c.slug}
                to={`/service-areas/${c.slug}`}
                className="flex items-center gap-2 bg-[#FAF8F3] rounded-full px-4 py-2 border border-[#E8E1D3] hover:border-[#C6A15B] transition-colors text-sm"
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

      {/* ─── FAQs ────────────────────────────────────────────── */}
      <section className="py-16 bg-[#FAF8F3]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="text-[#1E2126] mb-8" style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 800 }}>
            {service.name} FAQs
          </h2>
          <div className="flex flex-col divide-y divide-[#E8E1D3] max-w-3xl">
            {service.faqs.map((faq) => (
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

      <CTABand
        heading={`Get a Free ${service.name} Quote`}
        subtext="Tell us about the home and your date — we'll respond fast with a tailored, no-obligation quote."
      />
    </div>
  );
}
