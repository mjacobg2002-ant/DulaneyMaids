import { motion, useReducedMotion } from 'motion/react';
import { Star, ExternalLink, PenLine, ShieldCheck } from 'lucide-react';
import { Seo } from '../components/Seo';
import { CTABand } from '../components/CTABand';
import { YELP } from '../data/site';
import { reviews } from '../data/reviews';

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: EASE } },
};

function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} size={size} className="text-[#C6A15B] fill-[#C6A15B]" />
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
      <Seo
        title="Reviews — Dulaney Maids | 5.0-Rated Cleaning in Kettering, MD"
        description="Read real customer reviews of Dulaney Maids, a 5.0-rated house cleaning and commercial cleaning company in Kettering, MD serving Prince George's County and the DMV."
        path="/reviews"
      />

      {/* ─── Hero ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#1E2126' }} className="py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <motion.p
            className="text-[#C6A15B] text-xs mb-3"
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
            Rated <span className="hl-streak">{YELP.ratingDisplay}</span> on Yelp
          </motion.h1>
          <motion.p
            className="text-white/80 max-w-2xl"
            style={{ fontSize: '18px', lineHeight: '1.7' }}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.2 }}
          >
            Real feedback from real clients in the Kettering area — every review below comes from a
            verified customer, and it reflects the standard we hold ourselves to on every job.
          </motion.p>
        </div>
      </section>

      {/* ─── Aggregate + Reviews ─────────────────────────────── */}
      <section className="py-20 bg-[#FAF8F3]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Aggregate card */}
            <motion.div
              {...inView()}
              className="bg-white rounded-2xl p-8 border border-[#E8E1D3] text-center lg:sticky lg:top-28"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}
            >
              <p className="text-[#1E2126]" style={{ fontSize: '56px', fontWeight: 800, lineHeight: 1 }}>
                {YELP.ratingDisplay}
              </p>
              <div className="flex justify-center my-4">
                <StarRating rating={5} size={22} />
              </div>
              <p className="text-[#6B6458] text-sm mb-6">Aggregate rating on Yelp</p>
              <div className="flex flex-col gap-3">
                <a
                  href={YELP.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm text-white px-5 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#C6A15B', color: '#1E2126', fontWeight: 600 }}
                >
                  Read our Yelp reviews <ExternalLink size={13} />
                </a>
                <a
                  href={YELP.writeReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-sm text-[#1E2126] px-5 py-3 rounded-lg border border-[#E8E1D3] hover:bg-[#FAF8F3] transition-colors"
                  style={{ fontWeight: 600 }}
                >
                  <PenLine size={14} /> Leave us a review on Yelp
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-[#E8E1D3] flex items-center justify-center gap-2 text-xs text-[#6B6458]">
                <ShieldCheck size={14} className="text-[#4C9961]" />
                Verified reviews only — no paid or fabricated testimonials
              </div>
            </motion.div>

            {/* Review cards */}
            <motion.div className="lg:col-span-2 grid sm:grid-cols-1 gap-6" {...staggerGrid}>
              {reviews.map((t) => (
                <motion.figure
                  key={t.quote}
                  {...card}
                  className="bg-white rounded-2xl p-8 border border-[#E8E1D3] flex flex-col"
                  style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
                >
                  <StarRating rating={t.rating} />
                  <blockquote
                    className="text-[#1E2126] my-5 flex-1"
                    style={{ fontSize: '17px', lineHeight: '1.7', fontWeight: 500 }}
                  >
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="flex items-center justify-between flex-wrap gap-3 pt-4 border-t border-[#E8E1D3]">
                    <div>
                      <p className="text-[#1E2126] text-sm" style={{ fontWeight: 700 }}>
                        {t.name}
                      </p>
                      <p className="text-[#6B6458] text-xs mt-0.5">
                        {t.location} · via {t.source}
                      </p>
                    </div>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full border border-[#E8E1D3]"
                      style={{ backgroundColor: '#F2ECDF', color: '#1E2126', fontWeight: 600 }}
                    >
                      {t.service}
                    </span>
                  </figcaption>
                </motion.figure>
              ))}

              {/* Invitation card */}
              <motion.div
                {...card}
                className="rounded-2xl p-8 border border-dashed border-[#C6A15B]/40 bg-white/60 text-center"
              >
                <p className="text-[#1E2126] mb-2" style={{ fontSize: '16px', fontWeight: 700 }}>
                  Worked with us recently?
                </p>
                <p className="text-[#4A4640] text-sm mb-5" style={{ lineHeight: '1.7' }}>
                  Your feedback helps neighbors in Kettering and across the DMV find a cleaning team
                  they can trust — and it means the world to ours.
                </p>
                <a
                  href={YELP.writeReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#C6A15B', color: '#1E2126', fontWeight: 600 }}
                >
                  <PenLine size={14} /> Share your experience on Yelp
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABand
        heading="Experience the 5-Star Difference"
        subtext="Join our happy clients across Kettering, Prince George's County, and the DMV — get your free tailored quote today."
      />
    </div>
  );
}
