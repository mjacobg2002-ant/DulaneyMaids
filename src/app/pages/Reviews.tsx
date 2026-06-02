import { Link } from 'react-router';
import { motion, useReducedMotion } from 'motion/react';
import { Star, ArrowRight } from 'lucide-react';
import { CTABand } from '../components/CTABand';

const testimonials = [
  {
    text: "Dulaney Maids transformed our home. The team was punctual, thorough, and incredibly professional. I've never seen our place this clean — every corner, every surface.",
    name: 'Sarah M.',
    location: 'Arlington, VA',
    service: 'Deep Cleaning',
    rating: 5,
  },
  {
    text: 'We rely on Dulaney for our office weekly. The results are consistently excellent — our team noticed the difference immediately and our clients have commented too.',
    name: 'James T.',
    location: 'Washington, DC',
    service: 'Commercial Cleaning',
    rating: 5,
  },
  {
    text: 'After our renovation, Dulaney handled the post-construction cleanup perfectly. Detail-oriented, respectful of our property, and genuinely professional.',
    name: 'Rachel K.',
    location: 'Bethesda, MD',
    service: 'Post-Construction',
    rating: 5,
  },
  {
    text: 'The move-out cleaning was flawless. I got my full deposit back, and the landlord asked who I used. Highly recommend for anyone moving in or out of a property.',
    name: 'Marcus L.',
    location: 'Alexandria, VA',
    service: 'Move-Out Cleaning',
    rating: 5,
  },
  {
    text: "Consistent, reliable, and always on time. We've been using Dulaney for bi-weekly residential cleaning for six months and haven't had a single issue.",
    name: 'Priya N.',
    location: 'Reston, VA',
    service: 'Residential Cleaning',
    rating: 5,
  },
  {
    text: 'As a property manager, I need cleaning I can trust between tenants. Dulaney delivers every time — professional, thorough, and easy to schedule.',
    name: 'David H.',
    location: 'Fairfax, VA',
    service: 'Commercial / Turnover',
    rating: 5,
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: EASE } },
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} size={14} className="text-[#F7D156] fill-[#F7D156]" />
      ))}
    </div>
  );
}

export function Reviews() {
  const shouldReduceMotion = useReducedMotion();

  const inView = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: 'hidden' as const,
          whileInView: 'visible' as const,
          viewport: { once: true, amount: 0.25 },
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
          visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
        },
      };

  const card = shouldReduceMotion ? {} : { variants: fadeUp };

  return (
    <div>
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
            Client Reviews
          </motion.p>
          <motion.h1
            className="text-white mb-5"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.15 }}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            What Our Clients Are Saying
          </motion.h1>
          <motion.p
            className="text-white/80 max-w-2xl"
            style={{ fontSize: '18px', lineHeight: '1.7' }}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.2 }}
          >
            Feedback from residential and commercial clients across the DMV — a reflection of the standard
            we hold ourselves to on every job.
          </motion.p>
        </div>
      </section>

      {/* ─── Review Grid ──────────────────────────────────────── */}
      <section className="py-20 bg-[#F6F8FC]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" {...staggerGrid}>
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                {...card}
                className="bg-white rounded-2xl p-7 border border-[#E5E7EB] flex flex-col"
                style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
              >
                <StarRating rating={t.rating} />
                <p
                  className="text-[#374151] my-5 flex-1 text-sm"
                  style={{ lineHeight: '1.75', fontStyle: 'italic' }}
                >
                  "{t.text}"
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#E5E7EB]">
                  <div>
                    <p className="text-[#111827] text-sm" style={{ fontWeight: 700 }}>
                      {t.name}
                    </p>
                    <p className="text-[#6B7280] text-xs mt-0.5">{t.location}</p>
                  </div>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full border"
                    style={{
                      backgroundColor: '#EEF1F7',
                      borderColor: '#E5E7EB',
                      color: '#143177',
                      fontWeight: 600,
                    }}
                  >
                    {t.service}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 text-center">
          <motion.div {...inView()}>
            <h2 className="text-[#143177] mb-4" style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 800 }}>
              Experience the Dulaney Maids Difference
            </h2>
            <p className="text-[#374151] mb-8 max-w-xl mx-auto" style={{ fontSize: '16px', lineHeight: '1.7' }}>
              Join our growing list of satisfied clients across the DMV. Get a tailored quote for your home or
              business today.
            </p>
            <Link
              to="/contact"
              style={{ backgroundColor: '#3E6EDC', fontWeight: 700 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-white hover:opacity-90 transition-opacity"
            >
              Get a Quote <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABand
        heading="Ready to Join Our Satisfied Clients?"
        subtext="Get a tailored quote for your residential or commercial cleaning — no commitments, fast response."
      />
    </div>
  );
}
