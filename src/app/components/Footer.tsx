import { Link } from 'react-router';
import { Mail, Phone, MapPin, Star, ExternalLink } from 'lucide-react';
import dulaneyLogo from '../../assets/dulaney-maids-logo.png';
import { SITE, YELP } from '../data/site';
import { cities, FEATURED_CITY_SLUGS } from '../data/cities';

export function Footer() {
  const headingStyle: React.CSSProperties = {
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.5)',
    marginBottom: '16px',
  };

  const linkStyle: React.CSSProperties = { color: 'rgba(255,255,255,0.65)', fontWeight: 400 };
  const topAreas = cities.filter((c) => FEATURED_CITY_SLUGS.includes(c.slug));

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#143177' }}>
      {/* Full-bleed background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center"
        src="/video/footer.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      {/* Navy tint so the footer text stays legible over the video */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(20,49,119,0.92) 0%, rgba(20,49,119,0.86) 45%, rgba(11,25,66,0.94) 100%)',
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={dulaneyLogo}
              alt="Dulaney Maids logo"
              width={178}
              height={192}
              loading="lazy"
              className="h-16 w-auto mb-4"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)', lineHeight: '1.7' }}>
              Five-star residential and commercial cleaning based in Kettering, MD — proudly serving
              Prince George's County, Washington DC, and Northern Virginia.
            </p>
            <a
              href={YELP.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm hover:text-white transition-colors"
              style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 600 }}
            >
              <span className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="text-[#F7D156] fill-[#F7D156]" />
                ))}
              </span>
              {YELP.ratingDisplay} on Yelp <ExternalLink size={12} />
            </a>
          </div>

          {/* Services */}
          <div>
            <p style={headingStyle}>Services</p>
            <ul className="flex flex-col gap-2.5">
              {[
                { to: '/residential', label: 'Residential Cleaning' },
                { to: '/residential#deep', label: 'Deep Cleaning' },
                { to: '/residential#move', label: 'Move-In / Move-Out' },
                { to: '/residential#post-construction', label: 'Post-Construction' },
                { to: '/commercial', label: 'Commercial & Janitorial' },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="text-sm hover:text-white transition-colors" style={linkStyle}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p style={headingStyle}>Company</p>
            <ul className="flex flex-col gap-2.5">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/service-areas', label: 'Service Areas' },
                { to: '/reviews', label: 'Reviews' },
                { to: '/faq', label: 'FAQ' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="text-sm hover:text-white transition-colors" style={linkStyle}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={YELP.writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-sm hover:text-white transition-colors"
              style={{ color: '#F7D156', fontWeight: 600 }}
            >
              Leave us a review on Yelp <ExternalLink size={12} />
            </a>
          </div>

          {/* Contact */}
          <div>
            <p style={headingStyle}>Get in Touch</p>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="flex items-center gap-2.5 text-sm hover:text-white transition-colors"
                  style={{ color: 'rgba(255,255,255,0.65)', fontWeight: 600 }}
                >
                  <Phone size={15} className="flex-shrink-0" />
                  <span>{SITE.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-2.5 text-sm hover:text-white transition-colors"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0" />
                  <span>{SITE.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  <MapPin size={15} className="mt-0.5 flex-shrink-0" />
                  <span>
                    Kettering, MD · Prince George's County
                    <br />
                    Washington DC · Northern Virginia
                  </span>
                </div>
              </li>
            </ul>
            <Link
              to="/contact"
              style={{ backgroundColor: '#3E6EDC', fontWeight: 600 }}
              className="inline-flex items-center justify-center mt-6 px-5 py-2.5 rounded-lg text-white text-sm hover:opacity-90 transition-opacity w-full text-center"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        {/* Top service areas — internal-linking row */}
        <div className="mt-12 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}>
          <p style={{ ...headingStyle, marginBottom: '12px' }}>Top Service Areas</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {topAreas.map((city) => (
              <Link
                key={city.slug}
                to={`/service-areas/${city.slug}`}
                className="text-sm hover:text-white transition-colors"
                style={linkStyle}
              >
                Cleaning in {city.name}, {city.state}
              </Link>
            ))}
            <Link to="/service-areas" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>
              View all areas →
            </Link>
          </div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.40)' }}>
            © {new Date().getFullYear()} Dulaney Maids. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.40)' }}>
            House Cleaning & Maid Service — Kettering, MD & the DMV
          </p>
        </div>
      </div>
    </footer>
  );
}
