import { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import dulaneyLogo from '../../imports/2FCD694A-AB9C-4846-A387-A9E5F66DEC26.PNG';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleServicesEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 200);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors text-sm ${isActive ? 'text-[#143177]' : 'text-[#374151] hover:text-[#143177]'}`;

  return (
    <header
      className="sticky top-0 z-50 bg-white border-b border-[#E5E7EB]"
      style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center" aria-label="Dulaney Maids — Home">
            <img src={dulaneyLogo} alt="Dulaney Maids" className="h-11 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" style={{ fontWeight: 500 }}>
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                className="flex items-center gap-1 text-sm text-[#374151] hover:text-[#143177] transition-colors"
                style={{ fontWeight: 500 }}
              >
                Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white rounded-xl border border-[#E5E7EB] py-2"
                  style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.10)' }}
                >
                  <Link
                    to="/residential"
                    className="block px-5 py-2.5 text-sm text-[#374151] hover:bg-[#F6F8FC] hover:text-[#143177] transition-colors"
                    style={{ fontWeight: 500 }}
                    onClick={() => setServicesOpen(false)}
                  >
                    Residential Cleaning
                  </Link>
                  <Link
                    to="/commercial"
                    className="block px-5 py-2.5 text-sm text-[#374151] hover:bg-[#F6F8FC] hover:text-[#143177] transition-colors"
                    style={{ fontWeight: 500 }}
                    onClick={() => setServicesOpen(false)}
                  >
                    Commercial Cleaning
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/service-areas" className={navLinkClass}>
              Service Areas
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/reviews" className={navLinkClass}>
              Reviews
            </NavLink>
            <NavLink to="/faq" className={navLinkClass}>
              FAQ
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              style={{ backgroundColor: '#3E6EDC', fontWeight: 600 }}
              className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-lg text-white text-sm hover:bg-[#2d5dc8] transition-colors"
            >
              Get a Quote
            </Link>
            <button
              className="lg:hidden text-[#374151] p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[#E5E7EB] py-4 flex flex-col gap-1" style={{ fontWeight: 500 }}>
            {[
              { to: '/residential', label: 'Residential Cleaning' },
              { to: '/commercial', label: 'Commercial Cleaning' },
              { to: '/service-areas', label: 'Service Areas' },
              { to: '/about', label: 'About' },
              { to: '/reviews', label: 'Reviews' },
              { to: '/faq', label: 'FAQ' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 text-sm text-[#374151] hover:bg-[#F6F8FC] hover:text-[#143177] rounded-lg transition-colors"
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              style={{ backgroundColor: '#3E6EDC', fontWeight: 600 }}
              className="mt-2 mx-0 text-center text-sm text-white px-5 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
