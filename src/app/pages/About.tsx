import { Link } from 'react-router';
import { CheckCircle2, Shield, Sparkles, Lock, ArrowRight } from 'lucide-react';
import { CTABand } from '../components/CTABand';

const TEAM_IMG = 'https://images.unsplash.com/photo-1647381518264-97ff1835026f?w=700&h=500&fit=crop&auto=format';
const INTERIOR_IMG = 'https://images.unsplash.com/photo-1638885930125-85350348d266?w=700&h=500&fit=crop&auto=format';

export function About() {
  return (
    <div>
      {/* ─── Hero ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#143177' }} className="py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <p
            className="text-[#F7D156] text-xs mb-3"
            style={{ fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            About Us
          </p>
          <h1
            className="text-white mb-5"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.15 }}
          >
            Professional Cleaning Built on Standards and Trust
          </h1>
          <p className="text-white/80 max-w-2xl" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            Dulaney Maids was founded on a simple principle: cleaning services should be professional,
            consistent, and confidential. We serve the DMV region with that commitment on every job.
          </p>
        </div>
      </section>

      {/* ─── Brand Story ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2
                className="text-[#143177] mb-6"
                style={{ fontSize: 'clamp(24px, 3.5vw, 34px)', fontWeight: 800 }}
              >
                Our Approach to Cleaning
              </h2>
              <div className="flex flex-col gap-5" style={{ fontSize: '16px', lineHeight: '1.75', color: '#374151' }}>
                <p>
                  Dulaney Maids provides premium residential and commercial cleaning across Northern Virginia,
                  Washington DC, and Maryland. From standard house cleaning to complex post-construction
                  projects, we bring the same level of care and attention to every job.
                </p>
                <p>
                  We believe that a clean environment matters — not just for appearances, but for wellbeing,
                  productivity, and peace of mind. Our team is trained to deliver results that meet a
                  professional standard, every time.
                </p>
                <p>
                  Every client receives a tailored quote — no generic pricing, no hidden fees. We understand
                  that homes and offices differ, and we take the time to understand what your space needs
                  before making any recommendation.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/contact"
                  style={{ backgroundColor: '#3E6EDC', fontWeight: 700 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white hover:opacity-90 transition-opacity"
                >
                  Get a Quote <ArrowRight size={17} />
                </Link>
              </div>
            </div>
            <div>
              <img
                src={TEAM_IMG}
                alt="Professional cleaning team at work"
                className="w-full h-80 lg:h-[440px] object-cover rounded-2xl"
                style={{ boxShadow: '0 16px 40px rgba(20,49,119,0.12)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Values ───────────────────────────────────────────── */}
      <section className="py-20 bg-[#F6F8FC]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2
              className="text-[#143177] mb-4"
              style={{ fontSize: 'clamp(24px, 3.5vw, 34px)', fontWeight: 800 }}
            >
              Quality &amp; Confidentiality
            </h2>
            <p className="text-[#374151] max-w-2xl mx-auto" style={{ fontSize: '17px', lineHeight: '1.7' }}>
              Two principles shape everything we do — quality in our work and confidentiality in how we
              conduct it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Sparkles size={22} />,
                title: 'Professional Standards',
                text: 'Every clean follows a detailed checklist. We do not cut corners — the result is consistent, thorough, and reliable across every visit.',
              },
              {
                icon: <Shield size={22} />,
                title: 'Vetted Team',
                text: 'Our team operates with integrity and professionalism. We treat every client\'s home and workplace with respect.',
              },
              {
                icon: <Lock size={22} />,
                title: 'Confidentiality',
                text: 'Privacy matters — especially in homes and professional environments. We take discretion seriously and maintain it without exception.',
              },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 border border-[#E5E7EB]">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: '#EEF1F7', color: '#143177' }}
                >
                  {v.icon}
                </div>
                <h3 className="text-[#143177] mb-3" style={{ fontSize: '18px', fontWeight: 700 }}>
                  {v.title}
                </h3>
                <p className="text-[#374151] text-sm" style={{ lineHeight: '1.7' }}>
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Coverage ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <img
                src={INTERIOR_IMG}
                alt="Luxury clean living room interior"
                className="w-full h-72 lg:h-[400px] object-cover rounded-2xl"
                style={{ boxShadow: '0 16px 40px rgba(20,49,119,0.12)' }}
              />
            </div>
            <div>
              <h2
                className="text-[#143177] mb-5"
                style={{ fontSize: 'clamp(24px, 3.5vw, 34px)', fontWeight: 800 }}
              >
                Serving the Entire DMV Region
              </h2>
              <p className="text-[#374151] mb-6" style={{ fontSize: '16px', lineHeight: '1.75' }}>
                We are proud to serve clients across Northern Virginia, Washington DC, and nearby Maryland —
                from individual homeowners to property managers and commercial clients.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  'All of Northern Virginia — Arlington to Loudoun County',
                  'Washington, DC — citywide residential and commercial',
                  'Maryland — Bethesda, Silver Spring, Rockville and surrounding areas',
                  'Flexible scheduling for homes and businesses',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#4C9961] mt-0.5 flex-shrink-0" />
                    <span className="text-[#374151] text-sm" style={{ lineHeight: '1.6' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                to="/service-areas"
                style={{ fontWeight: 600, color: '#3E6EDC' }}
                className="inline-flex items-center gap-1.5 text-sm hover:opacity-80 transition-opacity"
              >
                View all service areas <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        heading="Ready to Work with Dulaney Maids?"
        subtext="Reach out to discuss your cleaning needs — we'll provide a tailored quote with no commitment required."
      />
    </div>
  );
}
