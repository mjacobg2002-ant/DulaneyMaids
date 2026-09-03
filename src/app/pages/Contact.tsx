import { useState } from 'react';
import { Mail, Phone, Clock, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Seo } from '../components/Seo';
import { YelpBadge } from '../components/YelpBadge';
import { SITE } from '../data/site';

const FORMSPREE_URL = 'https://formspree.io/f/mvzyjldr';

interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  serviceType: string;
  bedrooms: string;
  bathrooms: string;
  propertyType: string;
  sqft: string;
  focusAreas: string;
  frequency: string;
  message: string;
  company: string; // honeypot — humans never see or fill this
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  city: '',
  serviceType: '',
  bedrooms: '',
  bathrooms: '',
  propertyType: '',
  sqft: '',
  focusAreas: '',
  frequency: '',
  message: '',
  company: '',
};

export function Contact() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isCommercial = form.serviceType.startsWith('Commercial');
  const isResidential = form.serviceType.startsWith('Residential');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.company) return; // honeypot tripped — silently drop bot submissions
    setLoading(true);
    setError('');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          city: form.city || 'Not provided',
          service_type: form.serviceType,
          ...(isCommercial
            ? { property_type: form.propertyType }
            : { bedrooms: form.bedrooms, bathrooms: form.bathrooms }),
          square_footage: form.sqft,
          frequency: form.frequency,
          focus_areas: form.focusAreas || 'None specified',
          message: form.message || 'No additional message.',
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(`Something went wrong. Please call ${SITE.phoneDisplay} or email ${SITE.email}.`);
      }
    } catch {
      setError(`Unable to send. Please call ${SITE.phoneDisplay} or email ${SITE.email}.`);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full bg-white border border-[#E8E1D3] rounded-xl px-4 py-3 text-sm text-[#1E2126] placeholder-[#A69C8C] focus:outline-none focus:border-[#C6A15B] focus:ring-2 focus:ring-[#C6A15B]/10 transition-all';

  const labelClass = 'block text-xs text-[#4A4640] mb-1.5';

  return (
    <div>
      <Seo
        title="Get a Free Cleaning Quote — Kettering, MD & the DMV | Dulaney Maids"
        description="Request a free house cleaning or commercial cleaning quote in Kettering, MD and the DMV. Fast response, tailored pricing, no obligation. Call (202) 202-1674 or use our 2-minute form."
        path="/contact"
      />

      {/* ─── Hero ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#1E2126' }} className="py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <p
            className="text-[#C6A15B] text-xs mb-3"
            style={{ fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            Get in Touch
          </p>
          <h1
            className="text-white mb-5"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.15 }}
          >
            Get Your <span className="hl-streak">Free Quote</span>
          </h1>
          <p className="text-white/80 max-w-2xl mb-5" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            Share your cleaning needs and we'll respond promptly with a tailored quote — most requests
            get an answer within a few hours. No commitments, no pricing surprises.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors text-sm"
              style={{ fontWeight: 700 }}
            >
              <Phone size={15} /> Call {SITE.phoneDisplay}
            </a>
            <YelpBadge tone="light" />
          </div>
        </div>
      </section>

      {/* ─── Contact Grid ─────────────────────────────────────── */}
      <section className="py-20 bg-[#FAF8F3]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <h2
                  className="text-[#1E2126] mb-6"
                  style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 800 }}
                >
                  Contact Information
                </h2>
                <div className="flex flex-col gap-5">
                  <a href={`tel:${SITE.phoneTel}`} className="flex items-start gap-4 group">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: '#F2ECDF', color: '#1E2126' }}
                    >
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-[#6B6458] mb-0.5" style={{ fontWeight: 600 }}>PHONE — TAP TO CALL</p>
                      <p
                        className="text-sm text-[#1E2126] group-hover:text-[#8A6D3B] transition-colors"
                        style={{ fontWeight: 700 }}
                      >
                        {SITE.phoneDisplay}
                      </p>
                    </div>
                  </a>

                  <a href={`mailto:${SITE.email}`} className="flex items-start gap-4 group">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: '#F2ECDF', color: '#1E2126' }}
                    >
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-[#6B6458] mb-0.5" style={{ fontWeight: 600 }}>EMAIL</p>
                      <p
                        className="text-sm text-[#1E2126] group-hover:text-[#8A6D3B] transition-colors"
                        style={{ fontWeight: 600 }}
                      >
                        {SITE.email}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: '#F2ECDF', color: '#1E2126' }}
                    >
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-[#6B6458] mb-0.5" style={{ fontWeight: 600 }}>BUSINESS HOURS</p>
                      {SITE.hours.map((line) => (
                        <p key={line} className="text-sm text-[#4A4640]">{line}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: '#F2ECDF', color: '#1E2126' }}
                    >
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-[#6B6458] mb-0.5" style={{ fontWeight: 600 }}>SERVICE AREA</p>
                      <p className="text-sm text-[#4A4640]">Kettering & Prince George's County, MD</p>
                      <p className="text-sm text-[#4A4640]">Washington, DC</p>
                      <p className="text-sm text-[#4A4640]">Northern Virginia & Montgomery County</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#E8E1D3]">
                <p className="text-[#1E2126] mb-2" style={{ fontSize: '15px', fontWeight: 700 }}>
                  In a hurry?
                </p>
                <p className="text-sm text-[#4A4640]" style={{ lineHeight: '1.65' }}>
                  Call us at{' '}
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="text-[#8A6D3B] hover:underline"
                    style={{ fontWeight: 700 }}
                  >
                    {SITE.phoneDisplay}
                  </a>{' '}
                  — or email{' '}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-[#8A6D3B] hover:underline"
                    style={{ fontWeight: 600 }}
                  >
                    {SITE.email}
                  </a>{' '}
                  and we'll respond promptly.
                </p>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-3">
              <div
                className="bg-white rounded-2xl p-8 lg:p-10 border border-[#E8E1D3]"
                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ backgroundColor: '#F2ECDF', color: '#4C9961' }}
                    >
                      <CheckCircle2 size={30} />
                    </div>
                    <h3 className="text-[#1E2126] mb-3" style={{ fontSize: '22px', fontWeight: 800 }}>
                      Quote Request Sent!
                    </h3>
                    <p className="text-[#4A4640] text-sm" style={{ lineHeight: '1.7' }}>
                      Thank you — we've received your request and will be in touch shortly. For urgent
                      inquiries, call{' '}
                      <a
                        href={`tel:${SITE.phoneTel}`}
                        className="text-[#8A6D3B] hover:underline"
                        style={{ fontWeight: 700 }}
                      >
                        {SITE.phoneDisplay}
                      </a>
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-[#1E2126] mb-2" style={{ fontSize: '22px', fontWeight: 800 }}>
                      Request Your Free Quote
                    </h2>
                    <p className="text-[#6B6458] text-sm mb-2">
                      Takes about two minutes — we'll reply with a tailored proposal.
                    </p>
                    <p className="text-xs text-[#A69C8C] mb-8">Fields marked * are required.</p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      {/* Honeypot (hidden from humans, catches bots) */}
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        style={{ position: 'absolute', left: '-9999px', height: 0, width: 0, opacity: 0 }}
                      />

                      {/* Contact details */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className={labelClass} style={{ fontWeight: 600 }}>
                            Your Name *
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            autoComplete="name"
                            placeholder="Full name"
                            value={form.name}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className={labelClass} style={{ fontWeight: 600 }}>
                            Email Address *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="phone" className={labelClass} style={{ fontWeight: 600 }}>
                            Phone (optional)
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            autoComplete="tel"
                            placeholder="(xxx) xxx-xxxx"
                            value={form.phone}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label htmlFor="city" className={labelClass} style={{ fontWeight: 600 }}>
                            City / Neighborhood (optional)
                          </label>
                          <input
                            id="city"
                            name="city"
                            type="text"
                            autoComplete="address-level2"
                            placeholder="e.g. Kettering, Largo, Bowie..."
                            value={form.city}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="serviceType" className={labelClass} style={{ fontWeight: 600 }}>
                          Service Type *
                        </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          required
                          value={form.serviceType}
                          onChange={handleChange}
                          className={inputClass}
                          style={{ cursor: 'pointer' }}
                        >
                          <option value="">Select a service...</option>
                          <option value="Residential — Standard Cleaning">Residential — Standard Cleaning</option>
                          <option value="Residential — Deep Cleaning">Residential — Deep Cleaning</option>
                          <option value="Residential — Move-In / Move-Out">Residential — Move-In / Move-Out</option>
                          <option value="Residential — Post-Construction">Residential — Post-Construction</option>
                          <option value="Commercial — Office Cleaning">Commercial — Office Cleaning</option>
                          <option value="Commercial — Janitorial Service">Commercial — Janitorial Service</option>
                          <option value="Commercial — Post-Construction">Commercial — Post-Construction</option>
                          <option value="Not sure yet">Not sure yet</option>
                        </select>
                      </div>

                      {/* Property details — adapts to residential vs commercial */}
                      <div className="border-t border-[#E8E1D3] pt-5">
                        <p className="text-xs text-[#1E2126] mb-4" style={{ fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                          {isCommercial ? 'Property Details' : 'Home Details'}
                        </p>

                        {isCommercial ? (
                          <div className="grid sm:grid-cols-2 gap-5 mb-5">
                            <div>
                              <label htmlFor="propertyType" className={labelClass} style={{ fontWeight: 600 }}>
                                Property Type *
                              </label>
                              <select
                                id="propertyType"
                                name="propertyType"
                                required
                                value={form.propertyType}
                                onChange={handleChange}
                                className={inputClass}
                                style={{ cursor: 'pointer' }}
                              >
                                <option value="">Select...</option>
                                <option value="Office / Workspace">Office / Workspace</option>
                                <option value="Apartment Community">Apartment Community</option>
                                <option value="Assisted Living Facility">Assisted Living Facility</option>
                                <option value="Retail / Storefront">Retail / Storefront</option>
                                <option value="Other Commercial">Other Commercial</option>
                              </select>
                            </div>
                            <div>
                              <label htmlFor="sqft" className={labelClass} style={{ fontWeight: 600 }}>
                                Approx. Sq. Footage *
                              </label>
                              <select
                                id="sqft"
                                name="sqft"
                                required
                                value={form.sqft}
                                onChange={handleChange}
                                className={inputClass}
                                style={{ cursor: 'pointer' }}
                              >
                                <option value="">Select...</option>
                                <option value="Under 1,000 sq ft">Under 1,000 sq ft</option>
                                <option value="1,000–2,500 sq ft">1,000–2,500 sq ft</option>
                                <option value="2,500–5,000 sq ft">2,500–5,000 sq ft</option>
                                <option value="5,000–10,000 sq ft">5,000–10,000 sq ft</option>
                                <option value="10,000+ sq ft">10,000+ sq ft</option>
                              </select>
                            </div>
                          </div>
                        ) : (
                          <div className="grid sm:grid-cols-3 gap-5 mb-5">
                            <div>
                              <label htmlFor="bedrooms" className={labelClass} style={{ fontWeight: 600 }}>
                                Bedrooms{isResidential ? ' *' : ''}
                              </label>
                              <select
                                id="bedrooms"
                                name="bedrooms"
                                required={isResidential}
                                value={form.bedrooms}
                                onChange={handleChange}
                                className={inputClass}
                                style={{ cursor: 'pointer' }}
                              >
                                <option value="">Select...</option>
                                <option value="Studio">Studio</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6+">6+</option>
                              </select>
                            </div>
                            <div>
                              <label htmlFor="bathrooms" className={labelClass} style={{ fontWeight: 600 }}>
                                Bathrooms{isResidential ? ' *' : ''}
                              </label>
                              <select
                                id="bathrooms"
                                name="bathrooms"
                                required={isResidential}
                                value={form.bathrooms}
                                onChange={handleChange}
                                className={inputClass}
                                style={{ cursor: 'pointer' }}
                              >
                                <option value="">Select...</option>
                                <option value="1">1</option>
                                <option value="1.5">1.5</option>
                                <option value="2">2</option>
                                <option value="2.5">2.5</option>
                                <option value="3">3</option>
                                <option value="3.5">3.5</option>
                                <option value="4+">4+</option>
                              </select>
                            </div>
                            <div>
                              <label htmlFor="sqft" className={labelClass} style={{ fontWeight: 600 }}>
                                Approx. Sq. Footage
                              </label>
                              <select
                                id="sqft"
                                name="sqft"
                                value={form.sqft}
                                onChange={handleChange}
                                className={inputClass}
                                style={{ cursor: 'pointer' }}
                              >
                                <option value="">Select...</option>
                                <option value="Under 500 sq ft">Under 500 sq ft</option>
                                <option value="500–1,000 sq ft">500–1,000 sq ft</option>
                                <option value="1,000–1,500 sq ft">1,000–1,500 sq ft</option>
                                <option value="1,500–2,000 sq ft">1,500–2,000 sq ft</option>
                                <option value="2,000–2,500 sq ft">2,000–2,500 sq ft</option>
                                <option value="2,500–3,500 sq ft">2,500–3,500 sq ft</option>
                                <option value="3,500–5,000 sq ft">3,500–5,000 sq ft</option>
                                <option value="5,000+ sq ft">5,000+ sq ft</option>
                              </select>
                            </div>
                          </div>
                        )}

                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="frequency" className={labelClass} style={{ fontWeight: 600 }}>
                              One-time or Recurring? *
                            </label>
                            <select
                              id="frequency"
                              name="frequency"
                              required
                              value={form.frequency}
                              onChange={handleChange}
                              className={inputClass}
                              style={{ cursor: 'pointer' }}
                            >
                              <option value="">Select...</option>
                              <option value="One-time cleaning">One-time cleaning</option>
                              <option value="Weekly recurring">Weekly recurring</option>
                              <option value="Bi-weekly recurring">Bi-weekly recurring</option>
                              <option value="Monthly recurring">Monthly recurring</option>
                              <option value="Not sure yet">Not sure yet</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="focusAreas" className={labelClass} style={{ fontWeight: 600 }}>
                              Specific Focus Areas (optional)
                            </label>
                            <input
                              id="focusAreas"
                              name="focusAreas"
                              type="text"
                              placeholder="e.g. kitchen, bathrooms, basement..."
                              value={form.focusAreas}
                              onChange={handleChange}
                              className={inputClass}
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className={labelClass} style={{ fontWeight: 600 }}>
                          Additional Notes (optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          placeholder="Anything else we should know — pets, access instructions, special requests..."
                          value={form.message}
                          onChange={handleChange}
                          className={inputClass}
                          style={{ resize: 'vertical' }}
                        />
                      </div>

                      {error && (
                        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3" role="alert">
                          {error}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        style={{ backgroundColor: '#C6A15B', color: '#1E2126', fontWeight: 700, opacity: loading ? 0.7 : 1 }}
                        className="w-full flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-white hover:opacity-90 transition-opacity disabled:cursor-not-allowed"
                      >
                        {loading ? 'Sending…' : <><span>Get My Free Quote</span> <ArrowRight size={17} /></>}
                      </button>
                      <p className="text-xs text-center text-[#A69C8C] -mt-2">
                        No obligation · Fast response · Your info is never shared
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
