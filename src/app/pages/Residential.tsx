import { Link } from 'react-router';
import { motion, useReducedMotion } from 'motion/react';
import { CheckCircle2, ArrowRight, Home, Sparkles, MoveRight, HardHat, Phone } from 'lucide-react';
import { Seo } from '../components/Seo';
import { CTABand } from '../components/CTABand';
import { YelpBadge } from '../components/YelpBadge';
import { cities } from '../data/cities';
import { SITE } from '../data/site';
import { serviceSchema } from '../data/seo';

const HERO_IMG = 'https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?w=1200&h=550&q=70&fit=crop&auto=format';

interface ResidentialService {
  id: string;
  icon: React.ReactNode;
  title: string;
  headline: string;
  desc: string;
  greatFor: string;
  /** Optional pricing anchor, e.g. "Starting at $149" — set real numbers here when ready. */
  startingAt?: string;
  includes: string[];
}

const services: ResidentialService[] = [
  {
    id: 'standard',
    icon: <Home size={22} />,
    title: 'Standard Cleaning',
    headline: 'Consistent, top-to-bottom home care',
    desc: 'Ideal for regular upkeep, our standard cleaning covers all living areas thoroughly — so your home is always ready for you. Available weekly, bi-weekly, monthly, or one-time.',
    greatFor: 'Busy families & recurring upkeep',
    includes: [
      'Kitchen surfaces, appliances & sink',
      'Bathroom scrubbing & sanitizing',
      'Vacuuming & mopping all floors',
      'Dusting furniture, shelves & fixtures',
      'Trash removal & linen tidying',
      'Interior windows & mirrors',
    ],
  },
  {
    id: 'deep',
    icon: <Sparkles size={22} />,
    title: 'Deep Cleaning',
    headline: 'A thorough clean from top to bottom',
    desc: "When routine maintenance isn't enough, our deep clean tackles every corner — inside cabinets, behind appliances, tile grout, and beyond. The most popular first clean for new clients.",
    greatFor: 'First cleans, spring cleaning & special occasions',
    includes: [
      'Everything in standard cleaning',
      'Inside oven, refrigerator & cabinets',
      'Tile grout scrubbing & deep sanitizing',
      'Baseboards, door frames & vents',
      'Behind & under appliances',
      'Window sills & blind cleaning',
    ],
  },
  {
    id: 'move',
    icon: <MoveRight size={22} />,
    title: 'Move-In / Move-Out Cleaning',
    headline: 'Start fresh — or leave it spotless',
    desc: "Whether you're arriving at a new home or handing over the keys, our move cleaning ensures every inch is ready for what's next — and helps protect your deposit.",
    greatFor: 'Tenants, landlords & new homeowners',
    includes: [
      'Complete deep clean of all rooms',
      'Inside all cabinets & closets',
      'Appliances cleaned inside & out',
      'Walls spot-cleaned where needed',
      'All fixtures scrubbed & polished',
      'Ideal for landlords & tenants alike',
    ],
  },
  {
    id: 'post-construction',
    icon: <HardHat size={22} />,
    title: 'Post-Construction Cleaning',
    headline: 'From job site to move-in ready',
    desc: 'Renovation dust gets everywhere. Our post-construction clean removes fine dust, debris, and residue from every surface so your newly finished space actually feels finished.',
    greatFor: 'Renovations, remodels & new builds',
    includes: [
      'Fine dust removal from all surfaces',
      'Vents, fixtures & hardware detailing',
      'Window, sill & track cleaning',
      'Floor scrubbing & polishing',
      'Debris & sticker/label removal',
      'Final walkthrough-ready finish',
    ],
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: EASE } },
};

export function Residential() {
  const pgLinks = cities.filter((c) => c.region === 'prince-georges').slice(0, 8);
  const otherLinks = cities.filter((c) => ['washington-dc', 'arlington-va', 'alexandria-va', 'bethesda-md'].includes(c.slug));
  const shouldReduceMotion = useReducedMotion();

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

  const staggerGrid = shouldReduceMotion
    ? {}
    : {
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: { once: true, amount: 0.1 },
        variants: {
          hidden: {},
          visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
        },
      };

  const card = shouldReduceMotion ? {} : { variants: fadeUp };

  return (
    <div>
      <Seo
        title="Residential House Cleaning & Maid Service in Kettering, MD"
        description="Professional house cleaning in Kettering, MD and Prince George's County: standard, deep cleaning, move-in/move-out, and post-construction. Insured, vetted cleaners. Free tailored quotes."
        path="/residential"
        jsonLd={serviceSchema({
          name: 'Residential House Cleaning',
          description:
            'Standard, deep, move-in/move-out, and post-construction house cleaning serving Kettering, MD, Prince George\u2019s County, Washington DC, and Northern Virginia.',
          path: '/residential',
        })}
      />

      {/* ─── Hero ────────────────────────────────────────────── */}
      <section className="relative bg-[#143177] overflow-hidden">
        <img
          src={HERO_IMG}
          alt="Sparkling clean residential kitchen after a professional house cleaning"
          className="w-full h-full object-cover opacity-25 absolute inset-0"
          width={1200}
          height={550}
          fetchPriority="high"
        />
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <motion.p
            className="text-[#F7D156] text-xs mb-3"
            style={{ fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            Residential Cleaning · Kettering, MD & the DMV
          </motion.p>
          <motion.h1
            className="text-white mb-5"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.15 }}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            House Cleaning & Maid Service, <span className="hl-streak">Done Right</span>
          </motion.h1>
          <motion.p
            className="text-white/80 max-w-2xl mb-8"
            style={{ fontSize: '18px', lineHeight: '1.7' }}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.2 }}
          >
            Professional house cleaning for homes across Kettering, Prince George's County, Washington DC,
            and Northern Virginia. Insured, vetted cleaners, supplies included, and a free tailored quote.
          </motion.p>
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.3 }}
          >
            <Link
              to="/contact"
              style={{ backgroundColor: '#3E6EDC', fontWeight: 700 }}
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
          </motion.div>
        </div>
      </section>

      {/* ─── Services ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <motion.div className="text-center mb-14" {...inView()}>
            <h2
              className="text-[#143177] mb-4"
              style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800 }}
            >
              Our Residential Cleaning Services
            </h2>
            <p className="text-[#374151] max-w-2xl mx-auto" style={{ fontSize: '17px', lineHeight: '1.7' }}>
              Routine upkeep, deep cleans, move cleanings, and post-construction — each service
              adapted to your home and schedule.
            </p>
          </motion.div>

          <div className="flex flex-col gap-16">
            {services.map((s, i) => (
              <motion.div
                key={s.id}
                id={s.id}
                {...inView()}
                className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                <div className="bg-[#F6F8FC] rounded-2xl p-8 border border-[#E5E7EB]">
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: '#EEF1F7', color: '#143177' }}
                    >
                      {s.icon}
                    </div>
                    {s.startingAt && (
                      <span
                        className="text-xs px-3 py-1.5 rounded-full"
                        style={{ backgroundColor: '#F7D156', color: '#143177', fontWeight: 700 }}
                      >
                        {s.startingAt}
                      </span>
                    )}
                  </div>
                  <h3 className="text-[#143177] mb-1" style={{ fontSize: '22px', fontWeight: 800 }}>
                    {s.title}
                  </h3>
                  <p className="text-[#3E6EDC] text-sm mb-4" style={{ fontWeight: 600 }}>
                    {s.headline}
                  </p>
                  <p className="text-[#374151] mb-4" style={{ fontSize: '15px', lineHeight: '1.7' }}>
                    {s.desc}
                  </p>
                  <p className="text-[#6B7280] text-xs mb-6" style={{ fontWeight: 600 }}>
                    Great for: {s.greatFor}
                  </p>
                  <Link
                    to="/contact"
                    style={{ backgroundColor: '#3E6EDC', fontWeight: 600 }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-white text-sm hover:opacity-90 transition-opacity"
                  >
                    Get a Free Quote <ArrowRight size={15} />
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
                        <span className="text-[#374151]" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Internal Links ────────────────────────────────────── */}
      <section className="py-16 bg-[#F6F8FC]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <motion.h2
            className="text-[#143177] mb-8"
            style={{ fontSize: '22px', fontWeight: 800 }}
            {...inView()}
          >
            House Cleaning Near You in Prince George's County & the DMV
          </motion.h2>
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" {...staggerGrid}>
            {[...pgLinks, ...otherLinks].map((city) => (
              <motion.div key={city.slug} {...card}>
                <Link
                  to={`/service-areas/${city.slug}`}
                  className="flex items-center justify-between bg-white rounded-xl px-5 py-3.5 border border-[#E5E7EB] hover:border-[#3E6EDC] transition-colors group"
                >
                  <span
                    className="text-[#374151] text-sm group-hover:text-[#143177] transition-colors"
                    style={{ fontWeight: 500 }}
                  >
                    House Cleaning in {city.name}, {city.state}
                  </span>
                  <ArrowRight size={14} className="text-[#3E6EDC] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABand
        heading="Ready to Book Your Residential Clean?"
        subtext="Share your home details and receive a free tailored quote — no commitments, no pricing surprises."
      />
    </div>
  );
}
