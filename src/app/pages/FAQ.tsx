import { useState } from 'react';
import { Link } from 'react-router';
import { motion, useReducedMotion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Seo } from '../components/Seo';
import { CTABand } from '../components/CTABand';
import { faqSchema } from '../data/seo';
import { SITE } from '../data/site';

const faqCategories = [
  {
    category: 'Getting a Quote',
    items: [
      {
        q: 'How does the quote process work?',
        a: "We make it simple. Reach out by email or phone with details about your space and cleaning needs. We'll review your information and send a tailored, transparent quote — no hidden fees, no obligations.",
      },
      {
        q: 'Is there a consultation or intake form?',
        a: "We gather what we need through a brief intake — usually just a few questions about your space, service type, and preferred schedule. This helps us provide an accurate, relevant quote.",
      },
      {
        q: 'Do you offer fixed-price packages or custom quotes?',
        a: "All quotes are tailored to your specific space and needs. We don't publish standard pricing because every home and workplace is different. Your quote reflects your actual requirements.",
      },
      {
        q: 'How quickly will I receive a quote after reaching out?',
        a: "We aim to respond to all inquiries promptly. Email us at camerondavis@dulaneyco.net and we'll follow up as soon as possible — typically the same day or next business day.",
      },
    ],
  },
  {
    category: 'Service Areas',
    items: [
      {
        q: 'What areas do you serve?',
        a: "We're based in Kettering, MD and serve all of Prince George's County — Largo, Upper Marlboro, Bowie, Mitchellville, Greenbelt, and more — plus Washington DC, Northern Virginia (Arlington, Alexandria, Fairfax, McLean, Reston, and beyond), and nearby Montgomery County (Bethesda, Silver Spring, Rockville).",
      },
      {
        q: 'Do you serve my neighborhood?',
        a: "If you're in or near Prince George's County, Washington DC, Northern Virginia, or the Montgomery County communities we cover, there's a good chance we serve your area. Reach out and we'll confirm coverage for your address.",
      },
    ],
  },
  {
    category: 'Supplies & Equipment',
    items: [
      {
        q: 'Do you bring your own cleaning supplies?',
        a: "Yes — we arrive fully equipped with the tools and products needed to deliver a thorough clean. If you have specific product preferences or sensitivities, let us know when you get in touch and we'll accommodate where possible.",
      },
      {
        q: 'Do you use eco-friendly or green cleaning products?',
        a: "We can accommodate requests for specific product types, including eco-friendly options. Mention your preference when requesting your quote and we'll discuss what's available.",
      },
    ],
  },
  {
    category: 'Professional Standards',
    items: [
      {
        q: 'Are your team members vetted and insured?',
        a: 'Yes. Every team member is vetted and background-checked before they ever step into a client\u2019s home or workplace, and our work is insured. If you\u2019d like specifics about our screening process or coverage, just ask — we\u2019re happy to share.',
      },
      {
        q: 'What if I\u2019m not happy with the clean?',
        a: 'We stand behind every job with a 24-hour re-clean guarantee: if anything was missed, tell us within 24 hours and we\u2019ll come back to make it right, free of charge.',
      },
      {
        q: 'How do you handle confidentiality in homes and workplaces?',
        a: 'Discretion and confidentiality are built into how we operate. We treat every space — whether a private residence or a business — with the same care and respect for privacy.',
      },
      {
        q: 'What happens if something is damaged during a clean?',
        a: 'Our team works carefully and professionally at all times, and our work is insured. In the rare event something goes wrong, contact us right away — we address issues with transparency and make it right.',
      },
    ],
  },
  {
    category: 'Scheduling',
    items: [
      {
        q: 'Can I schedule recurring cleaning services?',
        a: 'Yes — we offer flexible recurring schedules for both residential and commercial clients. Weekly, bi-weekly, monthly, or custom cadences are all available. Your schedule is confirmed as part of the quoting process.',
      },
      {
        q: 'Can I reschedule or cancel a booking?',
        a: "Life happens. We ask that you give us reasonable notice to reschedule or cancel. Contact us by email or phone and we'll work with you to find an alternative.",
      },
      {
        q: 'Do you offer one-time cleaning or only recurring service?',
        a: 'We accommodate both. One-time deep cleans, move cleanings, and post-construction projects are just as welcome as recurring service contracts.',
      },
    ],
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggleItem = (id: string) => setOpenItem((prev) => (prev === id ? null : id));

  const inView = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: 'hidden' as const,
          whileInView: 'visible' as const,
          viewport: { once: true, amount: 0.2 },
          variants: {
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay } },
          },
        };

  const allFaqItems = faqCategories.flatMap((cat) => cat.items.map(({ q, a }) => ({ q, a })));

  return (
    <div>
      <Seo
        title="FAQ — House Cleaning Questions Answered | Dulaney Maids"
        description="Answers about quotes, service areas around Kettering MD, supplies, insurance, vetting, scheduling, and our 24-hour re-clean guarantee."
        path="/faq"
        jsonLd={faqSchema(allFaqItems)}
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
            FAQ
          </motion.p>
          <motion.h1
            className="text-white mb-5"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.15 }}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="text-white/80 max-w-2xl"
            style={{ fontSize: '18px', lineHeight: '1.7' }}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE, delay: 0.2 }}
          >
            Answers about our quoting process, service areas, supplies, scheduling, and professional standards.
            Don't see your question? Just contact us.
          </motion.p>
        </div>
      </section>

      {/* ─── FAQ Accordion ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-10">
            {faqCategories.map((cat, catIdx) => (
              <motion.div key={cat.category} {...inView(catIdx * 0.05)}>
                <h2
                  className="text-[#1E2126] mb-4"
                  style={{ fontSize: '19px', fontWeight: 800 }}
                >
                  {cat.category}
                </h2>
                <div className="flex flex-col divide-y divide-[#E8E1D3] border border-[#E8E1D3] rounded-2xl overflow-hidden">
                  {cat.items.map((item, idx) => {
                    const id = `${cat.category}-${idx}`;
                    const isOpen = openItem === id;
                    return (
                      <div key={idx} className="bg-white">
                        <button
                          onClick={() => toggleItem(id)}
                          className="w-full flex items-center justify-between gap-6 px-6 py-4 text-left hover:bg-[#FAF8F3] transition-colors"
                        >
                          <span className="text-[#1E2126] text-sm" style={{ fontWeight: 600 }}>
                            {item.q}
                          </span>
                          <motion.span
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.25, ease: EASE }}
                            className="flex-shrink-0"
                          >
                            <ChevronDown size={16} className="text-[#8A6D3B]" />
                          </motion.span>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              key="answer"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.28, ease: EASE }}
                              style={{ overflow: 'hidden' }}
                            >
                              <div className="px-6 pb-5 bg-[#FAF8F3]">
                                <p className="text-sm text-[#4A4640]" style={{ lineHeight: '1.75' }}>
                                  {item.a}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-14 text-center" {...inView()}>
            <p className="text-[#4A4640] mb-4" style={{ fontSize: '16px', lineHeight: '1.7' }}>
              Still have questions? We're happy to help.
            </p>
            <Link
              to="/contact"
              style={{ backgroundColor: '#C6A15B', color: '#1E2126', fontWeight: 700 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white hover:opacity-90 transition-opacity"
            >
              Contact Us <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABand
        heading="Still Have Questions?"
        subtext="Get in touch and we'll respond promptly — or skip ahead and request a quote directly."
      />
    </div>
  );
}
