import { useState } from 'react';
import { Link } from 'react-router';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  ArrowRight,
  Star,
  Home as HomeIcon,
  Building2,
  Sparkles,
  Shield,
  MapPin,
  Phone,
  ChevronDown,
  BadgeCheck,
  ExternalLink,
} from 'lucide-react';
import { Seo } from '../components/Seo';
import { CTABand } from '../components/CTABand';
import { YelpBadge } from '../components/YelpBadge';
import { cities, FEATURED_CITY_SLUGS } from '../data/cities';
import { SITE, YELP } from '../data/site';
import { reviews } from '../data/reviews';

const HERO_BG = 'https://images.unsplash.com/photo-1647381518264-97ff1835026f?w=1600&q=70&fit=crop&auto=format';
const RESIDENTIAL_IMG = 'https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?w=700&h=500&q=70&fit=crop&auto=format';
const COMMERCIAL_IMG = 'https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?w=700&h=500&q=70&fit=crop&auto=format';

const trustPillars = [
  {
    icon: <MapPin size={22} />,
    title: 'Local to Kettering',
    text: "We're based right here in Prince George's County — not a national franchise. Your neighbors are our clients, and our reputation lives here.",
  },
  {
    icon: <Shield size={22} />,
    title: 'Insured & Vetted Team',
    text: 'Every cleaner is vetted and background-checked before they ever step into a client\u2019s home, and our work is fully insured.',
  },
  {
    icon: <Sparkles size={22} />,
    title: 'Detail-Driven Checklists',
    text: 'Every clean follows a room-by-room professional checklist, so the result is the same high standard on every single visit.',
  },
  {
    icon: <BadgeCheck size={22} />,
    title: '24-Hour Re-Clean Guarantee',
    text: 'If anything was missed, tell us within 24 hours and we\u2019ll come back to make it right — free of charge.',
  },
];

const steps = [
  { num: '01', title: 'Request Your Free Quote', text: 'Two-minute form or a quick call — tell us about your space and what you need.' },
  { num: '02', title: 'Get a Tailored Price', text: 'A clear, transparent quote built for your home or business. No surprises, no obligation.' },
  { num: '03', title: 'We Clean', text: 'Vetted, insured professionals arrive on time with supplies included, working from a detailed checklist.' },
  { num: '04', title: 'Walk Through & Relax', text: 'Love the result — and if anything was missed, our 24-hour re-clean guarantee has you covered.' },
];

const faqItems = [
  {
    question: 'What areas do you serve?',
    answer:
      "We're based in Kettering, MD and serve all of Prince George's County — Largo, Upper Marlboro, Bowie, Mitchellville, and beyond — plus Washington DC, Northern Virginia, and nearby Montgomery County.",
  },
  {
    question: 'How does the free quote work?',
    answer:
      'Share a few details about your space through our quick form (or call us) and we\u2019ll respond promptly with a tailored, transparent quote — no hidden fees, no obligation.',
  },
  {
    question: 'Do you bring your own cleaning supplies?',
    answer:
      'Yes — we arrive fully equipped with everything needed for a thorough clean. If you have product preferences or sensitivities, just let us know.',
  },
  {
    question: 'Are your cleaners vetted and insured?',
    answer:
      'Yes. Every team member is vetted and background-checked, and our work is insured — your home and privacy are treated with complete professionalism.',
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const staggerContainerSlow = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const featuredCities = FEATURED_CITY_SLUGS
    .map((slug) => cities.find((c) => c.slug === slug))
    .filter(Boolean) as typeof cities;
  const featuredReview = reviews[0];

  const motionProps = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: 'hidden' as const,
          whileInView: 'visible' as const,
          viewport: { once: true, amount: 0.25 },
          variants: {
            hidden: { opacity: 0, y: 24, scale: 0.98 },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { duration: 0.55, ease: EASE, delay },
            },
          },
        };

  const staggerProps = (slow = false) =>
    shouldReduceMotion
      ? {}
      : {
          initial: 'hidden' as const,
          whileInView: 'visible' as const,
          viewport: { once: true, amount: 0.15 },
          variants: slow ? staggerContainerSlow : staggerContainer,
        };

  const cardProps = shouldReduceMotion ? {} : { variants: fadeUp };

  return (
    <div>
      <Seo
        title="House Cleaning Kettering, MD | Maid Service & Deep Cleaning"
        description="Five-star house cleaning and maid service in Kettering, MD. Deep cleaning, move-in/move-out, recurring and commercial cleaning across Prince George's County and the DMV. Get a free quote today."
        path="/"
      />

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative -mt-20 min-h-[680px] lg:min-h-[760px] flex items-center overflow-hidden">
        <img
          src={HERO_BG}
          alt="Professional house cleaning team at work in a bright Kettering, MD home"
          className="absolute inset-0 w-full h-full object-cover object-center"
          width={1600}
          height={900}
          fetchPriority="high"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(11,18,38,0.82) 0%, rgba(11,18,38,0.72) 55%, rgba(11,18,38,0.45) 100%)',
          }}
        />

        <div className="relative w-full max-w-[1200px] mx-auto px-6 lg:px-10 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-2xl">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
              className="mb-6"
            >
              <YelpBadge tone="light" />
            </motion.div>

            <motion.h1
              className="text-white mb-5"
              style={{ fontSize: 'clamp(30px, 4.4vw, 52px)', fontWeight: 800, lineHeight: 1.12 }}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.2 }}
            >
              Come Home to <span className="hl-streak">Spotless</span>.
              <br />
              House Cleaning in Kettering, MD
            </motion.h1>

            <motion.p
              className="text-white/85 mb-8 max-w-xl"
              style={{ fontSize: '17px', lineHeight: '1.7' }}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.32 }}
            >
              Five-star residential and commercial cleaning for Prince George's County, Washington DC,
              and Northern Virginia. Insured, vetted professionals — and a free tailored quote,
              usually within hours.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.44 }}
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
                style={{ fontWeight: 600, borderColor: 'rgba(255,255,255,0.4)' }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border text-white hover:bg-white/10 transition-colors"
              >
                <Phone size={17} /> Call {SITE.phoneDisplay}
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-x-6 gap-y-2"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.56 }}
            >
              {['Insured & vetted team', 'Background-checked cleaners', '24-hour re-clean guarantee', 'Supplies included'].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#4C9961] flex-shrink-0" />
                    <span className="text-sm text-white/85" style={{ fontWeight: 500 }}>
                      {item}
                    </span>
                  </div>
                )
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Choose Your Service ─────────────────────────────── */}
      <section className="py-20 bg-[#F6F8FC]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <motion.div className="text-center mb-12" {...motionProps()}>
            <h2
              className="text-[#143177] mb-4"
              style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800 }}
            >
              Choose Your Service
            </h2>
            <p className="text-[#374151] max-w-2xl mx-auto" style={{ fontSize: '17px', lineHeight: '1.7' }}>
              Whether your home needs immaculate care or your workplace demands consistent, professional
              maintenance — we deliver reliable results every time.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-6" {...staggerProps()}>
            {/* Residential */}
            <motion.div
              {...cardProps}
              className="bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] hover:shadow-lg transition-shadow group"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
            >
              <div className="h-52 overflow-hidden bg-[#EEF1F7]">
                <img
                  src={RESIDENTIAL_IMG}
                  alt="Freshly cleaned residential kitchen — house cleaning in Prince George's County MD"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width={700}
                  height={500}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#EEF1F7', color: '#143177' }}
                  >
                    <HomeIcon size={20} />
                  </div>
                  <h3 style={{ fontSize: '20px', color: '#143177', fontWeight: 700 }}>
                    Residential Cleaning
                  </h3>
                </div>
                <p className="text-[#374151] mb-5 text-sm" style={{ lineHeight: '1.7' }}>
                  From routine upkeep to deep cleans, move-in/move-out, and post-construction — every
                  service tailored to your home.
                </p>
                <ul className="flex flex-col gap-2 mb-7">
                  {[
                    'Standard & recurring cleaning',
                    'Deep cleaning services',
                    'Move-in / move-out cleaning',
                    'Post-construction cleanup',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#374151]">
                      <CheckCircle2 size={15} className="text-[#4C9961] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <Link
                    to="/contact"
                    style={{ backgroundColor: '#3E6EDC', fontWeight: 600 }}
                    className="flex-1 text-center text-white text-sm px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Get a Free Quote
                  </Link>
                  <Link
                    to="/residential"
                    style={{ fontWeight: 600 }}
                    className="flex-1 text-center text-[#143177] text-sm px-4 py-2.5 rounded-lg border border-[#E5E7EB] hover:bg-[#F6F8FC] transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Commercial */}
            <motion.div
              {...cardProps}
              className="bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] hover:shadow-lg transition-shadow group"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
            >
              <div className="h-52 overflow-hidden bg-[#EEF1F7]">
                <img
                  src={COMMERCIAL_IMG}
                  alt="Clean professional office space — commercial cleaning in the DMV"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width={700}
                  height={500}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#EEF1F7', color: '#143177' }}
                  >
                    <Building2 size={20} />
                  </div>
                  <h3 style={{ fontSize: '20px', color: '#143177', fontWeight: 700 }}>
                    Commercial Cleaning
                  </h3>
                </div>
                <p className="text-[#374151] mb-5 text-sm" style={{ lineHeight: '1.7' }}>
                  Consistent, professional cleaning for offices, apartment communities, and facilities
                  across Prince George's County and the DMV.
                </p>
                <ul className="flex flex-col gap-2 mb-7">
                  {[
                    'Office & workspace cleaning',
                    'Recurring janitorial programs',
                    'Apartment & facility support',
                    'Assisted living environments',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#374151]">
                      <CheckCircle2 size={15} className="text-[#4C9961] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <Link
                    to="/contact"
                    style={{ backgroundColor: '#3E6EDC', fontWeight: 600 }}
                    className="flex-1 text-center text-white text-sm px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Get a Free Quote
                  </Link>
                  <Link
                    to="/commercial"
                    style={{ fontWeight: 600 }}
                    className="flex-1 text-center text-[#143177] text-sm px-4 py-2.5 rounded-lg border border-[#E5E7EB] hover:bg-[#F6F8FC] transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Why Choose Dulaney Maids ─────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <motion.div className="text-center mb-12" {...motionProps()}>
            <h2
              className="text-[#143177] mb-4"
              style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800 }}
            >
              Why Kettering Trusts Dulaney Maids
            </h2>
            <p className="text-[#374151] max-w-2xl mx-auto" style={{ fontSize: '17px', lineHeight: '1.7' }}>
              We hold ourselves to a higher standard — because your home or workplace deserves nothing less.
            </p>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" {...staggerProps()}>
            {trustPillars.map((p) => (
              <motion.div
                key={p.title}
                {...cardProps}
                className="bg-[#F6F8FC] rounded-2xl p-6 border border-[#E5E7EB]"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'white', color: '#143177', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
                >
                  {p.icon}
                </div>
                <h3 className="text-[#143177] mb-2" style={{ fontSize: '16px', fontWeight: 700 }}>
                  {p.title}
                </h3>
                <p className="text-[#374151] text-sm" style={{ lineHeight: '1.65' }}>
                  {p.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Guarantee Band ───────────────────────────────────── */}
      <motion.section
        className="py-10"
        style={{ backgroundColor: '#4C9961' }}
        {...motionProps()}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center sm:text-left">
          <BadgeCheck size={36} className="text-white flex-shrink-0" />
          <p className="text-white" style={{ fontSize: 'clamp(15px, 2vw, 17px)', lineHeight: 1.6 }}>
            <span style={{ fontWeight: 800 }}>Our 24-Hour Re-Clean Guarantee.</span>{' '}
            If anything was missed, tell us within 24 hours and we'll come back to make it right — free.
          </p>
          <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm text-[#143177] bg-white px-5 py-2.5 rounded-lg hover:bg-white/90 transition-colors"
            style={{ fontWeight: 700 }}
          >
            Get a Free Quote <ArrowRight size={14} />
          </Link>
        </div>
      </motion.section>

      {/* ─── How It Works ─────────────────────────────────────── */}
      <section className="py-20 bg-[#F6F8FC]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <motion.div className="text-center mb-12" {...motionProps()}>
            <h2
              className="text-[#143177] mb-4"
              style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800 }}
            >
              How It Works
            </h2>
            <p className="text-[#374151] max-w-xl mx-auto" style={{ fontSize: '17px', lineHeight: '1.7' }}>
              From first contact to a spotless result — a simple, four-step process built around your schedule.
            </p>
          </motion.div>

          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" {...staggerProps()}>
            {steps.map((s) => (
              <motion.div
                key={s.num}
                {...cardProps}
                className="bg-white rounded-2xl p-6 border border-[#E5E7EB]"
              >
                <div
                  className="text-sm mb-4"
                  style={{ color: '#3E6EDC', fontWeight: 800, letterSpacing: '0.04em' }}
                >
                  {s.num}
                </div>
                <h3 className="text-[#143177] mb-2" style={{ fontSize: '16px', fontWeight: 700 }}>
                  {s.title}
                </h3>
                <p className="text-[#374151] text-sm" style={{ lineHeight: '1.65' }}>
                  {s.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Real Reviews (Yelp) ──────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <motion.div className="lg:col-span-2" {...motionProps()}>
              <h2
                className="text-[#143177] mb-4"
                style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800 }}
              >
                Rated <span className="hl-streak">{YELP.ratingDisplay}</span> on Yelp
              </h2>
              <div className="flex gap-1 mb-4" aria-label={`${YELP.ratingDisplay} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={22} className="text-[#F7D156] fill-[#F7D156]" />
                ))}
              </div>
              <p className="text-[#374151] mb-6" style={{ fontSize: '17px', lineHeight: '1.7' }}>
                Real feedback from real clients in the Kettering area — and the standard we hold
                ourselves to on every job.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={YELP.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-white px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#3E6EDC', fontWeight: 600 }}
                >
                  Read our Yelp reviews <ExternalLink size={13} />
                </a>
                <Link
                  to="/reviews"
                  className="inline-flex items-center gap-1.5 text-sm text-[#143177] px-5 py-2.5 rounded-lg border border-[#E5E7EB] hover:bg-[#F6F8FC] transition-colors"
                  style={{ fontWeight: 600 }}
                >
                  See all reviews <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>

            <motion.div className="lg:col-span-3" {...motionProps(0.15)}>
              <figure
                className="bg-[#F6F8FC] rounded-2xl p-8 lg:p-10 border border-[#E5E7EB]"
                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.05)' }}
              >
                <div className="flex gap-0.5 mb-5" aria-hidden="true">
                  {Array.from({ length: featuredReview.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-[#F7D156] fill-[#F7D156]" />
                  ))}
                </div>
                <blockquote
                  className="text-[#143177] mb-6"
                  style={{ fontSize: 'clamp(16px, 2vw, 19px)', lineHeight: 1.65, fontWeight: 500 }}
                >
                  "{featuredReview.quote}"
                </blockquote>
                <figcaption className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <p className="text-[#111827] text-sm" style={{ fontWeight: 700 }}>
                      {featuredReview.name}
                    </p>
                    <p className="text-[#6B7280] text-xs mt-0.5">
                      {featuredReview.location} · via {featuredReview.source}
                    </p>
                  </div>
                  <span
                    className="text-xs px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: '#EEF1F7', color: '#143177', fontWeight: 600 }}
                  >
                    {featuredReview.service}
                  </span>
                </figcaption>
              </figure>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Service Areas Preview ────────────────────────────── */}
      <section className="py-20 bg-[#F6F8FC]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
            {...motionProps()}
          >
            <div>
              <h2
                className="text-[#143177] mb-2"
                style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800 }}
              >
                Proudly Serving Kettering & the DMV
              </h2>
              <p className="text-[#374151]" style={{ fontSize: '17px', lineHeight: '1.7' }}>
                Based in Kettering, MD — serving Prince George's County, Washington DC, and Northern Virginia.
              </p>
            </div>
            <Link
              to="/service-areas"
              style={{ fontWeight: 600, color: '#3E6EDC', whiteSpace: 'nowrap' }}
              className="flex items-center gap-1.5 text-sm hover:opacity-80 transition-opacity"
            >
              View all areas <ArrowRight size={15} />
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
            {...staggerProps(true)}
          >
            {featuredCities.map((city) => (
              <motion.div key={city.slug} {...cardProps}>
                <Link
                  to={`/service-areas/${city.slug}`}
                  className="block bg-white rounded-xl p-4 border border-[#E5E7EB] hover:border-[#3E6EDC] transition-all text-center group"
                >
                  <MapPin
                    size={18}
                    className="mx-auto mb-2 text-[#3E6EDC] group-hover:text-[#143177] transition-colors"
                  />
                  <p
                    className="text-[#143177] text-sm"
                    style={{ fontWeight: 700, lineHeight: 1.3 }}
                  >
                    {city.name}
                  </p>
                  <p className="text-[#6B7280] text-xs mt-0.5">{city.state}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ Preview ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <motion.div className="lg:col-span-2" {...motionProps()}>
              <h2
                className="text-[#143177] mb-4"
                style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800 }}
              >
                Frequently Asked Questions
              </h2>
              <p className="text-[#374151] mb-6" style={{ fontSize: '17px', lineHeight: '1.7' }}>
                Questions about quotes, service areas, supplies, or our standards? We've answered
                the most common ones here.
              </p>
              <Link
                to="/faq"
                style={{ fontWeight: 600, color: '#3E6EDC' }}
                className="text-sm hover:opacity-80 transition-opacity inline-flex items-center gap-1.5"
              >
                View all FAQs <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              className="lg:col-span-3 flex flex-col divide-y divide-[#E5E7EB]"
              {...motionProps(0.15)}
            >
              {faqItems.map((item, idx) => (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    aria-expanded={openFaq === idx}
                    className="w-full flex items-center justify-between gap-4 text-left"
                  >
                    <span className="text-[#143177] text-sm" style={{ fontWeight: 600 }}>
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openFaq === idx ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown size={16} className="text-[#3E6EDC]" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === idx && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: EASE }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p className="mt-3 text-sm text-[#374151]" style={{ lineHeight: '1.7' }}>
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA Band ─────────────────────────────────────────── */}
      <CTABand
        heading="Ready to Come Home to Spotless?"
        subtext="Get a free, tailored quote for your home or business in Kettering, Prince George's County, or anywhere in the DMV."
      />
    </div>
  );
}
