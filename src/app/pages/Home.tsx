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
  Lock,
  Mail,
  MapPin,
  ChevronDown,
} from 'lucide-react';
import dulaneyLogo from '../../imports/From_selection_3.PNG';
import { CTABand } from '../components/CTABand';
import { cities, FEATURED_CITY_SLUGS } from '../data/cities';

const HERO_BG = 'https://images.unsplash.com/photo-1647381518264-97ff1835026f?w=1800&h=1000&fit=crop&auto=format';
const RESIDENTIAL_IMG = 'https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?w=700&h=500&fit=crop&auto=format';
const COMMERCIAL_IMG = 'https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?w=700&h=500&fit=crop&auto=format';

const trustPillars = [
  {
    icon: <Sparkles size={22} />,
    title: 'Consistent Quality',
    text: 'Professional standards and detailed checklists ensure every clean meets the same high bar, every visit.',
  },
  {
    icon: <Shield size={22} />,
    title: 'Vetted & Respectful',
    text: 'Our team operates with professionalism, discretion, and genuine respect for your space and privacy.',
  },
  {
    icon: <Lock size={22} />,
    title: 'Confidential Service',
    text: 'We understand the importance of privacy in both residential and commercial environments.',
  },
  {
    icon: <CheckCircle2 size={22} />,
    title: 'Satisfaction-Focused',
    text: 'Your satisfaction is our measure of success — we are committed to results you can count on.',
  },
];

const steps = [
  { num: '01', title: 'Choose Your Service', text: 'Residential or commercial — select what fits your needs.' },
  { num: '02', title: 'Share Your Details', text: 'Tell us about your space and schedule through a quick intake.' },
  { num: '03', title: 'Receive a Tailored Quote', text: 'We send a transparent, no-obligation quote built for you.' },
  { num: '04', title: 'Schedule & Relax', text: 'Book your service and leave the rest to our professional team.' },
];

const testimonials = [
  {
    text: 'Dulaney Maids transformed our home. The team was punctual, thorough, and incredibly professional. I\'ve never seen our place this clean.',
    name: 'Sarah M.',
    location: 'Arlington, VA',
    rating: 5,
  },
  {
    text: 'We rely on Dulaney for our office every week. The results are consistently excellent — our team noticed the difference immediately.',
    name: 'James T.',
    location: 'Washington, DC',
    rating: 5,
  },
  {
    text: 'After our renovation, Dulaney handled the post-construction cleanup perfectly. Detail-oriented and treated our home with genuine care.',
    name: 'Rachel K.',
    location: 'Bethesda, MD',
    rating: 5,
  },
];

const faqItems = [
  {
    question: 'How does the quote process work?',
    answer:
      'We make it simple. Share some details about your space and cleaning needs — you\'ll receive a tailored, transparent quote with no surprises. Just reach out by email or phone to get started.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve the entire DMV region: Northern Virginia (Arlington, Alexandria, Fairfax, McLean, Reston, and more), Washington DC, and nearby Maryland (Bethesda, Silver Spring, Rockville, and more).',
  },
  {
    question: 'Do you bring your own cleaning supplies?',
    answer:
      'We come fully equipped with everything needed to deliver a thorough clean. If you have specific product preferences, let us know when you reach out.',
  },
  {
    question: 'Are your team members vetted and insured?',
    answer:
      'We hold ourselves to high professional standards. All service is delivered with care for your property and privacy. Please contact us directly for details about our professional standards and coverage.',
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
  const featuredCities = cities.filter((c) => FEATURED_CITY_SLUGS.includes(c.slug));

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

  const cardProps = shouldReduceMotion
    ? {}
    : {
        variants: fadeUp,
      };

  return (
    <div>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative -mt-20 min-h-[680px] lg:min-h-[760px] flex items-center overflow-hidden">
        <img
          src={HERO_BG}
          alt="Professional cleaning team at work in a bright home"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(11,18,38,0.82) 0%, rgba(11,18,38,0.72) 55%, rgba(11,18,38,0.45) 100%)',
          }}
        />

        <div className="relative w-full max-w-[1200px] mx-auto px-6 lg:px-10 pt-32 pb-20 lg:pt-40 lg:pb-28 mx-[0px] my-[74px]">
          <div className="max-w-2xl">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 border border-white/25 bg-white/10 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#4C9961] flex-shrink-0" />
              <span className="text-xs text-white/90" style={{ fontWeight: 600 }}>
                Serving Northern VA · DC · Maryland
              </span>
            </motion.div>

            <motion.h1
              className="text-white mb-5"
              style={{ fontSize: 'clamp(28px, 4vw, 50px)', fontWeight: 800, lineHeight: 1.15 }}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: EASE, delay: 0.2 }}
            >
              Residential &amp; Commercial Cleaning Across the DMV
            </motion.h1>

            <motion.p
              className="text-white/80 mb-8 max-w-xl"
              style={{ fontSize: '17px', lineHeight: '1.7' }}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.32 }}
            >
              Professional, dependable, and confidential cleaning services for homes and businesses across the
              DMV region. Every quote is tailored — no pricing tables, no surprises.
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
                Get a Quote <ArrowRight size={17} />
              </Link>
              <a
                href="mailto:camerondavis@dulaneyco.net"
                style={{ fontWeight: 600, borderColor: 'rgba(255,255,255,0.4)' }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border text-white hover:bg-white/10 transition-colors"
              >
                <Mail size={17} /> Email Us
              </a>
            </motion.div>

            <motion.p
              className="text-white/50 text-sm mb-6"
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.56 }}
            >
              Fast response &middot; Tailored quotes &middot; Reliable scheduling
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-x-6 gap-y-2"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.62 }}
            >
              {['Vetted Team', 'Insured Standards', 'Satisfaction-Focused', 'Confidential Service'].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#4C9961] flex-shrink-0" />
                    <span className="text-sm text-white/80" style={{ fontWeight: 500 }}>
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
                  alt="Clean, bright residential kitchen"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                  From routine maintenance to deep cleans, move-in/move-out, and post-construction — all
                  tailored to your home.
                </p>
                <ul className="flex flex-col gap-2 mb-7">
                  {[
                    'Standard &amp; recurring cleaning',
                    'Deep cleaning services',
                    'Move-in / Move-out cleaning',
                    'Post-construction cleanup',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#374151]">
                      <CheckCircle2 size={15} className="text-[#4C9961] flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <Link
                    to="/contact"
                    style={{ backgroundColor: '#3E6EDC', fontWeight: 600 }}
                    className="flex-1 text-center text-white text-sm px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Get a Quote
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
                  alt="Clean, professional office environment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                  Consistent, professional cleaning for offices, facilities, and commercial properties across
                  the DMV region.
                </p>
                <ul className="flex flex-col gap-2 mb-7">
                  {[
                    'Office &amp; workspace cleaning',
                    'Recurring janitorial service',
                    'Facility maintenance',
                    'Post-construction turnover',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#374151]">
                      <CheckCircle2 size={15} className="text-[#4C9961] flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <Link
                    to="/contact"
                    style={{ backgroundColor: '#3E6EDC', fontWeight: 600 }}
                    className="flex-1 text-center text-white text-sm px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Get a Quote
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
              Why Choose Dulaney Maids?
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

      {/* ─── Service Areas Preview ────────────────────────────── */}
      <section className="py-20 bg-white">
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
                Service Areas
              </h2>
              <p className="text-[#374151]" style={{ fontSize: '17px', lineHeight: '1.7' }}>
                Serving communities across Northern Virginia, Washington DC, and Maryland.
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
                  className="block bg-[#F6F8FC] rounded-xl p-4 border border-[#E5E7EB] hover:border-[#3E6EDC] hover:bg-white transition-all text-center group"
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

      {/* ─── Testimonials (hidden) ────────────────────────────── */}
      {false && <section className="py-20 bg-[#F6F8FC]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <motion.div className="text-center mb-12" {...motionProps()}>
            <h2
              className="text-[#143177] mb-4"
              style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800 }}
            >
              What Clients Are Saying
            </h2>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-6" {...staggerProps()}>
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                {...cardProps}
                className="bg-white rounded-2xl p-7 border border-[#E5E7EB]"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={15} className="text-[#F7D156] fill-[#F7D156]" />
                  ))}
                </div>
                <p className="text-[#374151] mb-6 text-sm" style={{ lineHeight: '1.75', fontStyle: 'italic' }}>
                  "{t.text}"
                </p>
                <div>
                  <p className="text-[#111827] text-sm" style={{ fontWeight: 700 }}>
                    {t.name}
                  </p>
                  <p className="text-[#6B7280] text-xs mt-0.5">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>}

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
                Questions about the quoting process, service areas, supplies, or our standards? We've answered
                the most common ones below.
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
      <CTABand />
    </div>
  );
}
