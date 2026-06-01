import { useState } from 'react';
import { Mail, Phone, Clock, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

const FORMSPREE_URL = 'https://formspree.io/f/mvzyjldr';

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

export function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          service_type: form.serviceType,
          message: form.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please email us directly at camerondavis@dulaneyco.net.');
      }
    } catch {
      setError('Unable to send. Please email us directly at camerondavis@dulaneyco.net.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#3E6EDC] focus:ring-2 focus:ring-[#3E6EDC]/10 transition-all';

  return (
    <div>
      {/* ─── Hero ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#143177' }} className="py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <p
            className="text-[#F7D156] text-xs mb-3"
            style={{ fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            Get in Touch
          </p>
          <h1
            className="text-white mb-5"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.15 }}
          >
            Request a Quote
          </h1>
          <p className="text-white/80 max-w-2xl" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            Share your cleaning needs and we'll respond promptly with a tailored quote. No commitments, no
            pricing surprises — just a clear proposal built around your space.
          </p>
          <p className="text-white/60 text-sm mt-3">
            Fast response &middot; Tailored quotes &middot; Reliable scheduling
          </p>
        </div>
      </section>

      {/* ─── Contact Grid ─────────────────────────────────────── */}
      <section className="py-20 bg-[#F6F8FC]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <h2
                  className="text-[#143177] mb-6"
                  style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 800 }}
                >
                  Contact Information
                </h2>
                <div className="flex flex-col gap-5">
                  <a
                    href="mailto:camerondavis@dulaneyco.net"
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: '#EEF1F7', color: '#143177' }}
                    >
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-[#6B7280] mb-0.5" style={{ fontWeight: 600 }}>
                        EMAIL
                      </p>
                      <p
                        className="text-sm text-[#143177] group-hover:text-[#3E6EDC] transition-colors"
                        style={{ fontWeight: 600 }}
                      >
                        camerondavis@dulaneyco.net
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: '#EEF1F7', color: '#143177' }}
                    >
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-[#6B7280] mb-0.5" style={{ fontWeight: 600 }}>
                        PHONE
                      </p>
                      <p className="text-sm text-[#374151]">Contact us by email to receive phone details</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: '#EEF1F7', color: '#143177' }}
                    >
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-[#6B7280] mb-0.5" style={{ fontWeight: 600 }}>
                        BUSINESS HOURS
                      </p>
                      <p className="text-sm text-[#374151]">Monday – Friday: 8am – 6pm</p>
                      <p className="text-sm text-[#374151]">Saturday: By appointment</p>
                      <p className="text-sm text-[#374151]">Sunday: Closed</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: '#EEF1F7', color: '#143177' }}
                    >
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-[#6B7280] mb-0.5" style={{ fontWeight: 600 }}>
                        SERVICE AREA
                      </p>
                      <p className="text-sm text-[#374151]">Northern Virginia</p>
                      <p className="text-sm text-[#374151]">Washington, DC</p>
                      <p className="text-sm text-[#374151]">Nearby Maryland</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
                <p className="text-[#143177] mb-2" style={{ fontSize: '15px', fontWeight: 700 }}>
                  Prefer to reach out directly?
                </p>
                <p className="text-sm text-[#374151] mb-4" style={{ lineHeight: '1.65' }}>
                  Email us anytime at{' '}
                  <a
                    href="mailto:camerondavis@dulaneyco.net"
                    className="text-[#3E6EDC] hover:underline"
                    style={{ fontWeight: 600 }}
                  >
                    camerondavis@dulaneyco.net
                  </a>{' '}
                  and we'll respond promptly.
                </p>
              </div>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#E5E7EB]" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
                {submitted ? (
                  <div className="text-center py-12">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ backgroundColor: '#EEF1F7', color: '#4C9961' }}
                    >
                      <CheckCircle2 size={30} />
                    </div>
                    <h3 className="text-[#143177] mb-3" style={{ fontSize: '22px', fontWeight: 800 }}>
                      Quote Request Sent!
                    </h3>
                    <p className="text-[#374151] text-sm" style={{ lineHeight: '1.7' }}>
                      Thank you — we've received your request and will be in touch shortly. For urgent
                      inquiries, email us directly at{' '}
                      <a
                        href="mailto:camerondavis@dulaneyco.net"
                        className="text-[#3E6EDC] hover:underline"
                        style={{ fontWeight: 600 }}
                      >
                        camerondavis@dulaneyco.net
                      </a>
                    </p>
                  </div>
                ) : (
                  <>
                    <h2
                      className="text-[#143177] mb-2"
                      style={{ fontSize: '22px', fontWeight: 800 }}
                    >
                      Request a Quote
                    </h2>
                    <p className="text-[#6B7280] text-sm mb-8">
                      Fill in your details and we'll respond with a tailored proposal.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-xs text-[#374151] mb-1.5"
                            style={{ fontWeight: 600 }}
                          >
                            Your Name *
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Full name"
                            value={form.name}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-xs text-[#374151] mb-1.5"
                            style={{ fontWeight: 600 }}
                          >
                            Email Address *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-xs text-[#374151] mb-1.5"
                            style={{ fontWeight: 600 }}
                          >
                            Phone (optional)
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(xxx) xxx-xxxx"
                            value={form.phone}
                            onChange={handleChange}
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="serviceType"
                            className="block text-xs text-[#374151] mb-1.5"
                            style={{ fontWeight: 600 }}
                          >
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
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-xs text-[#374151] mb-1.5"
                          style={{ fontWeight: 600 }}
                        >
                          Tell us about your space &amp; needs *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Describe your home or office, approximate size, frequency you're looking for, any specific requirements..."
                          value={form.message}
                          onChange={handleChange}
                          className={inputClass}
                          style={{ resize: 'vertical' }}
                        />
                      </div>

                      {error && (
                        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                          {error}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        style={{ backgroundColor: '#3E6EDC', fontWeight: 700, opacity: loading ? 0.7 : 1 }}
                        className="w-full flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-white hover:opacity-90 transition-opacity disabled:cursor-not-allowed"
                      >
                        {loading ? 'Sending…' : <><span>Send Quote Request</span> <ArrowRight size={17} /></>}
                      </button>
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
