import { useState } from 'react';
import { Link } from 'react-router';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { CTABand } from '../components/CTABand';

const faqCategories = [
  {
    category: 'Getting a Quote',
    items: [
      {
        q: 'How does the quote process work?',
        a: 'We make it simple. Reach out by email or phone with details about your space and cleaning needs. We\'ll review your information and send a tailored, transparent quote — no hidden fees, no obligations.',
      },
      {
        q: 'Is there a consultation or intake form?',
        a: 'We gather what we need through a brief intake — usually just a few questions about your space, service type, and preferred schedule. This helps us provide an accurate, relevant quote.',
      },
      {
        q: 'Do you offer fixed-price packages or custom quotes?',
        a: 'All quotes are tailored to your specific space and needs. We don\'t publish standard pricing because every home and workplace is different. Your quote reflects your actual requirements.',
      },
      {
        q: 'How quickly will I receive a quote after reaching out?',
        a: 'We aim to respond to all inquiries promptly. Email us at camerondavis@dulaneyco.net and we\'ll follow up as soon as possible — typically the same day or next business day.',
      },
    ],
  },
  {
    category: 'Service Areas',
    items: [
      {
        q: 'What areas do you serve?',
        a: 'We serve the entire DMV region, including Northern Virginia (Arlington, Alexandria, Fairfax, McLean, Reston, Herndon, Ashburn, Leesburg, and more), Washington DC, and nearby Maryland (Bethesda, Silver Spring, Rockville, and surrounding communities).',
      },
      {
        q: 'Do you serve my neighborhood?',
        a: 'If you\'re in or near the Northern Virginia, DC, or Maryland communities we cover, there\'s a good chance we serve your area. Reach out and we\'ll confirm coverage for your address.',
      },
    ],
  },
  {
    category: 'Supplies & Equipment',
    items: [
      {
        q: 'Do you bring your own cleaning supplies?',
        a: 'Yes — we arrive fully equipped with the tools and products needed to deliver a thorough clean. If you have specific product preferences or sensitivities, let us know when you get in touch and we\'ll accommodate where possible.',
      },
      {
        q: 'Do you use eco-friendly or green cleaning products?',
        a: 'We can accommodate requests for specific product types, including eco-friendly options. Mention your preference when requesting your quote and we\'ll discuss what\'s available.',
      },
    ],
  },
  {
    category: 'Professional Standards',
    items: [
      {
        q: 'Are your team members vetted and insured?',
        a: 'We hold ourselves to high professional standards in all aspects of our operation. Please contact us directly for specifics about our team qualifications, screening processes, and professional coverage.',
      },
      {
        q: 'How do you handle confidentiality in homes and workplaces?',
        a: 'Discretion and confidentiality are built into how we operate. We treat every space — whether a private residence or a business — with the same care and respect for privacy.',
      },
      {
        q: 'What happens if something is damaged during a clean?',
        a: 'Our team operates carefully and professionally at all times. If you have concerns about a specific situation, please contact us directly — we address issues with transparency and professionalism.',
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
        a: 'Life happens. We ask that you give us reasonable notice to reschedule or cancel. Contact us by email or phone and we\'ll work with you to find an alternative.',
      },
      {
        q: 'Do you offer one-time cleaning or only recurring service?',
        a: 'We accommodate both. One-time deep cleans, move cleanings, and post-construction projects are just as welcome as recurring service contracts.',
      },
    ],
  },
];

export function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => setOpenItem((prev) => (prev === id ? null : id));

  return (
    <div>
      {/* ─── Hero ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#143177' }} className="py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <p
            className="text-[#F7D156] text-xs mb-3"
            style={{ fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            FAQ
          </p>
          <h1
            className="text-white mb-5"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.15 }}
          >
            Frequently Asked Questions
          </h1>
          <p className="text-white/80 max-w-2xl" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            Answers about our quoting process, service areas, supplies, scheduling, and professional standards.
            Don't see your question? Just contact us.
          </p>
        </div>
      </section>

      {/* ─── FAQ Accordion ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col gap-10">
            {faqCategories.map((cat) => (
              <div key={cat.category}>
                <h2
                  className="text-[#143177] mb-4"
                  style={{ fontSize: '19px', fontWeight: 800 }}
                >
                  {cat.category}
                </h2>
                <div className="flex flex-col divide-y divide-[#E5E7EB] border border-[#E5E7EB] rounded-2xl overflow-hidden">
                  {cat.items.map((item, idx) => {
                    const id = `${cat.category}-${idx}`;
                    const isOpen = openItem === id;
                    return (
                      <div key={idx} className="bg-white">
                        <button
                          onClick={() => toggleItem(id)}
                          className="w-full flex items-center justify-between gap-6 px-6 py-4 text-left hover:bg-[#F6F8FC] transition-colors"
                        >
                          <span
                            className="text-[#143177] text-sm"
                            style={{ fontWeight: 600 }}
                          >
                            {item.q}
                          </span>
                          <ChevronDown
                            size={16}
                            className={`flex-shrink-0 text-[#3E6EDC] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-5 bg-[#F6F8FC]">
                            <p className="text-sm text-[#374151]" style={{ lineHeight: '1.75' }}>
                              {item.a}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="text-[#374151] mb-4" style={{ fontSize: '16px', lineHeight: '1.7' }}>
              Still have questions? We're happy to help.
            </p>
            <Link
              to="/contact"
              style={{ backgroundColor: '#3E6EDC', fontWeight: 700 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white hover:opacity-90 transition-opacity"
            >
              Contact Us <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <CTABand
        heading="Still Have Questions?"
        subtext="Get in touch and we'll respond promptly — or skip ahead and request a quote directly."
      />
    </div>
  );
}
