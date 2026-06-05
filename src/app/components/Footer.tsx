import image_2FCD694A_AB9C_4846_A387_A9E5F66DEC26_2 from '@/imports/2FCD694A-AB9C-4846-A387-A9E5F66DEC26-2.PNG'
import { Link } from 'react-router';
import { Mail, Phone, MapPin } from 'lucide-react';
import dulaneyLogo from '../../imports/2FCD694A-AB9C-4846-A387-A9E5F66DEC26.PNG';

export function Footer() {
  const headingStyle: React.CSSProperties = {
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.5)',
    marginBottom: '16px',
  };

  return (
    <footer style={{ backgroundColor: '#143177' }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)', lineHeight: '1.7' }}>
              Premium residential and commercial cleaning across the DMV — Northern Virginia, Washington DC, and Maryland.
            </p>
            <a
              href="mailto:camerondavis@dulaneyco.net"
              className="inline-flex items-center gap-2 mt-5 text-sm hover:text-white transition-colors"
              style={{ color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}
            >
              <Mail size={14} />
              camerondavis@dulaneyco.net
            </a>
          </div>

          {/* Services */}
          <div>
            <p style={headingStyle}>Services</p>
            <ul className="flex flex-col gap-2.5">
              {[
                { to: '/residential', label: 'Residential Cleaning' },
                { to: '/commercial', label: 'Commercial Cleaning' },
                { to: '/residential', label: 'Deep Cleaning' },
                { to: '/residential', label: 'Move-In / Move-Out' },
              
                { to: '/commercial', label: 'Janitorial Services' },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: 'rgba(255,255,255,0.65)', fontWeight: 400 }}
                  >
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
               
                { to: '/faq', label: 'FAQ' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: 'rgba(255,255,255,0.65)', fontWeight: 400 }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={headingStyle}>Get in Touch</p>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="mailto:camerondavis@dulaneyco.net"
                  className="flex items-start gap-2.5 text-sm hover:text-white transition-colors"
                  style={{ color: 'rgba(255,255,255,0.65)' }}
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0" />
                  <span>camerondavis@dulaneyco.net</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  <Phone size={15} className="flex-shrink-0" />
                  <span>(202) 202-1674</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  <MapPin size={15} className="mt-0.5 flex-shrink-0" />
                  <span>Northern VA · Washington DC · Maryland</span>
                </div>
              </li>
            </ul>
            <Link
              to="/contact"
              style={{ backgroundColor: '#3E6EDC', fontWeight: 600 }}
              className="inline-flex items-center justify-center mt-6 px-5 py-2.5 rounded-lg text-white text-sm hover:opacity-90 transition-opacity w-full text-center"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.40)' }}>
            © {new Date().getFullYear()} Dulaney Maids. All rights reserved.
          </p>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.40)' }}>
            DMV's Premier Cleaning Service
          </p>
        </div>
      </div>
    </footer>
  );
}
