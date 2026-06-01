import { useState } from 'react';
import { Link } from 'react-router';
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
import dulaneyLogo from '../../imports/2FCD694A-AB9C-4846-A387-A9E5F66DEC26.PNG';
import { CTABand } from '../components/CTABand';
import { cities, FEATURED_CITY_SLUGS } from '../data/cities';

const HERO_IMG = 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?w=800&h=900&fit=crop&auto=format';
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

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const featuredCities = cities.filter((c) => FEATURED_CITY_SLUGS.includes(c.slug));

  return (
    <div>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center py-20 lg:py-0 lg:min-h-[620px]">
            {/* Text */}
            <div className="lg:col-span-3">
              <img
                src={dulaneyLogo}
                alt="Dulaney Maids"
                className="h-16 w-auto mb-6"
              />
              <div className="inline-flex items-center gap-2 bg-[#EEF1F7] border border-[#E5E7EB] rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#4C9961] flex-shrink-0" />
                <span className="text-xs text-[#143177]" style={{ fontWeight: 600 }}>
                  Serving Northern VA · DC · Maryland
                </span>
              </div>

              <h1
                className="text-[#143177] mb-6"
                style={{ fontSize: 'clamp(26px, 3.2vw, 40px)', fontWeight: 700, lineHeight: 1.2 }}
              >
                Residential &amp; Commercial Cleaning Across the DMV
              </h1>

              <p className="text-[#374151] mb-8 max-w-xl" style={{ fontSize: '16px', lineHeight: '1.7' }}>
                Professional, dependable, and confidential cleaning services for homes and businesses across the
                DMV region. Every quote is tailored — no pricing tables, no surprises.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <Link
                  to="/contact"
                  style={{ backgroundColor: '#3E6EDC', fontWeight: 700 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white hover:opacity-90 transition-opacity"
                >
                  Get a Quote <ArrowRight size={17} />
                </Link>
                <a
                  href="mailto:camerondavis@dulaneyco.net"
                  style={{ fontWeight: 600 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-[#E5E7EB] text-[#143177] hover:border-[#143177] hover:bg-[#F6F8FC] transition-colors"
                >
                  <Mail size={17} /> Email Us
                </a>
              </div>

              <p className="text-sm text-[#6B7280] mb-6">
                Fast response &middot; Tailored quotes &middot; Reliable scheduling
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {['Vetted Team', 'Insured Standards', 'Satisfaction-Focused', 'Confidential Service'].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#4C9961] flex-shrink-0" />
                      <span className="text-sm text-[#374151]" style={{ fontWeight: 500 }}>
                        {item}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Hero image */}
            <div className="hidden lg:block lg:col-span-2">
              <div className="relative">
                <img
                  src={HERO_IMG}
                  alt="Pristine, bright residential living room"
                  className="w-full h-[520px] object-cover rounded-2xl"
                  style={{ boxShadow: '0 24px 60px rgba(20,49,119,0.15)' }}
                />
                <div
                  className="absolute bottom-4 left-4 bg-white rounded-xl px-5 py-3 border border-[#E5E7EB]"
                  style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.10)' }}
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[#4C9961]" />
                    <span className="text-sm text-[#111827]" style={{ fontWeight: 600 }}>
                      DMV's Trusted Cleaners
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Choose Your Service ─────────────────────────────── */}
      <section className="py-20 bg-[#F6F8FC]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
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
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Residential */}
            <div
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
            </div>

            {/* Commercial */}
            <div
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
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why Choose Dulaney Maids ─────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2
              className="text-[#143177] mb-4"
              style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800 }}
            >
              Why Choose Dulaney Maids?
            </h2>
            <p className="text-[#374151] max-w-2xl mx-auto" style={{ fontSize: '17px', lineHeight: '1.7' }}>
              We hold ourselves to a higher standard — because your home or workplace deserves nothing less.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((p) => (
              <div
                key={p.title}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─────────────────────────────────────── */}
      <section className="py-20 bg-[#F6F8FC]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2
              className="text-[#143177] mb-4"
              style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800 }}
            >
              How It Works
            </h2>
            <p className="text-[#374151] max-w-xl mx-auto" style={{ fontSize: '17px', lineHeight: '1.7' }}>
              From first contact to a spotless result — a simple, four-step process built around your schedule.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Service Areas Preview ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
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
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {featuredCities.map((city) => (
              <Link
                key={city.slug}
                to={`/service-areas/${city.slug}`}
                className="bg-[#F6F8FC] rounded-xl p-4 border border-[#E5E7EB] hover:border-[#3E6EDC] hover:bg-white transition-all text-center group"
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
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────────── */}
      <section className="py-20 bg-[#F6F8FC]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2
              className="text-[#143177] mb-4"
              style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800 }}
            >
              What Clients Are Saying
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
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
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/reviews"
              style={{ fontWeight: 600, color: '#3E6EDC' }}
              className="text-sm hover:opacity-80 transition-opacity inline-flex items-center gap-1.5"
            >
              Read all reviews <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ Preview ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
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
            </div>

            <div className="lg:col-span-3 flex flex-col divide-y divide-[#E5E7EB]">
              {faqItems.map((item, idx) => (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left"
                  >
                    <span className="text-[#143177] text-sm" style={{ fontWeight: 600 }}>
                      {item.question}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`flex-shrink-0 text-[#3E6EDC] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openFaq === idx && (
                    <p className="mt-3 text-sm text-[#374151]" style={{ lineHeight: '1.7' }}>
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Band ─────────────────────────────────────────── */}
      <CTABand />
    </div>
  );
}
