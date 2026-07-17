import { Link } from 'react-router';
import { motion, useReducedMotion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Seo } from '../components/Seo';
import { CTABand } from '../components/CTABand';
import { getCitiesByRegion } from '../data/cities';

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: EASE } },
};

export function ServiceAreas() {
  const princeGeorges = getCitiesByRegion('prince-georges');
  const montgomery = getCitiesByRegion('montgomery');
  const dc = getCitiesByRegion('dc');
  const northernVA = getCitiesByRegion('northern-va');
  const shouldReduceMotion = useReducedMotion();

  const regionSections = [
    {
      id: 'prince-georges',
      label: "Prince George's County, MD",
      tag: 'Home Base — Priority Service Area',
      tagColor: '#4C9961',
      description:
        "Dulaney Maids is based in Kettering, MD — Prince George's County is our home turf. From Largo and Upper Marlboro to Bowie and National Harbor, this is where we clean every week.",
      cities: princeGeorges,
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
      id: 'northern-va',
      label: 'Northern Virginia',
      tag: 'Full Coverage',
      tagColor: '#3E6EDC',
      description:
        'We serve all major Northern Virginia communities — from Arlington and Alexandria to Loudoun County and Prince William County.',
      cities: northernVA,
    },
    {
      id: 'montgomery',
      label: 'Montgomery County, MD',
      tag: 'Near-DC Coverage',
      tagColor: '#3E6EDC',
      description:
        'Serving the Montgomery County communities closest to DC — Bethesda, Silver Spring, Rockville, and surrounding areas.',
      cities: montgomery,
    },
  ];

  const inView = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: 'hidden' as const,
          whileInView: 'visible' as const,
          viewport: { once: true, amount: 0.2 },
          variants: {
            hidden: { opacity: 0, y: 24, scale: 0.98 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: EASE, delay } },
          },
        };

  const staggerGrid = (amount = 0.15) =>
    shouldReduceMotion
      ? {}
      : {
          initial: 'hidden' as const,
          whileInView: 'visible' as const,
          viewport: { once: true, amount },
          variants: {
            hidden: {},
            visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
          },
        };

  const card = shouldReduceMotion ? {} : { variants: fadeUp };

  return (
    <div>
      <Seo
        title="Service Areas — Cleaning in Kettering, Prince George's County & the DMV"
        description="Dulaney Maids serves Kettering, Largo, Upper Marlboro, Bowie, and all of Prince George's County, plus Washington DC, Northern Virginia, and Montgomery County. Find cleaning services near you."
        path="/service-areas"
      />

      {/* ─── Hero ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#143177' }} className="py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <motion.p
            className="text-[#F7D156] text-xs mb-3"
            style={{ fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            Where We Clean
          </motion.p>
          <motion.h1
            className="text-white mb-5"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.15 }}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            Serving Kettering, MD & the DMV
          </motion.h1>
          <motion.p
            className="text-white/80 max-w-2xl"
            style={{ fontSize: '18px', lineHeight: '1.7' }}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.2 }}
          >
            Dulaney Maids provides residential and commercial cleaning services across the DMV region —
            Northern Virginia, Washington DC, and nearby Maryland. Find your city below.
          </motion.p>
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
            <motion.div
              className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3"
              {...inView()}
            >
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
            </motion.div>
            <motion.p
              className="text-[#374151] mb-8 max-w-3xl"
              style={{ fontSize: '16px', lineHeight: '1.7' }}
              {...inView(0.08)}
            >
              {region.description}
            </motion.p>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
              {...staggerGrid(0.1)}
            >
              {region.cities.map((city) => (
                <motion.div key={city.slug} {...card}>
                  <Link
                    to={`/service-areas/${city.slug}`}
                    className="flex items-center gap-2.5 rounded-xl px-4 py-3 border border-[#E5E7EB] hover:border-[#3E6EDC] hover:shadow-sm transition-all group"
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
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* ─── Services Cross-link ──────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <motion.h2
            className="text-[#143177] mb-8"
            style={{ fontSize: '22px', fontWeight: 800 }}
            {...inView()}
          >
            Services Available in All Areas
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            {...staggerGrid()}
          >
            {[
              { to: '/residential', label: 'Residential Cleaning', desc: 'House & maid service for homes' },
              { to: '/commercial', label: 'Commercial Cleaning', desc: 'Office & facility cleaning' },
              { to: '/residential', label: 'Deep Cleaning', desc: 'Thorough top-to-bottom clean' },
              { to: '/residential', label: 'Move-In / Move-Out', desc: 'Fresh start or clean handover' },
              { to: '/residential', label: 'Post-Construction', desc: 'Renovation dust, gone for good' },
              { to: '/commercial', label: 'Janitorial Services', desc: 'Recurring facility maintenance' },
            ].map(({ to, label, desc }) => (
              <motion.div key={label} {...card}>
                <Link
                  to={to}
                  className="flex items-start gap-3 bg-[#F6F8FC] rounded-xl px-5 py-4 border border-[#E5E7EB] hover:border-[#3E6EDC] hover:bg-white transition-all group"
                >
                  <ArrowRight size={16} className="text-[#3E6EDC] mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <div>
                    <p className="text-[#143177] text-sm" style={{ fontWeight: 700 }}>
                      {label}
                    </p>
                    <p className="text-[#6B7280] text-xs mt-0.5">{desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABand
        heading="Serving Your Neighborhood in the DMV"
        subtext="Find your city above, or contact us directly — we'll confirm coverage and send a tailored quote."
      />
    </div>
  );
}
