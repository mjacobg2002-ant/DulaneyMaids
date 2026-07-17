import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import dulaneyLogo from '../../assets/dulaney-maids-logo.png';
import { SITE } from '../data/site';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { pathname } = useLocation();

  const isHome = pathname === '/';
  const scrolled = !isHome || !atTop;

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY <= 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleServicesEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const handleServicesLeave = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 200);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-300 text-sm ${
      scrolled
        ? isActive
          ? 'text-[#143177]'
          : 'text-[#374151] hover:text-[#143177]'
        : isActive
        ? 'text-white'
        : 'text-white/85 hover:text-white'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white border-b border-[#E5E7EB]'
          : 'bg-transparent border-b border-transparent'
      }`}
      style={scrolled ? { boxShadow: '0 1px 8px rgba(0,0,0,0.08)' } : {}}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center" aria-label="Dulaney Maids — Home">
            <img
              src={dulaneyLogo}
              alt="Dulaney Maids — residential and commercial cleaning, Kettering MD"
              width={178}
              height={192}
              className="h-14 lg:h-16 w-auto transition-all duration-300"
              style={{ filter: scrolled ? 'none' : 'brightness(0) invert(1)' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" style={{ fontWeight: 500 }} aria-label="Main navigation">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <button
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onFocus={handleServicesEnter}
                onClick={() => setServicesOpen((v) => !v)}
                className={`flex items-center gap-1 text-sm transition-colors duration-300 ${
                  scrolled ? 'text-[#374151] hover:text-[#143177]' : 'text-white/85 hover:text-white'
                }`}
                style={{ fontWeight: 500 }}
              >
                Services{' '}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl border border-[#E5E7EB] py-2"
                  style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.12)' }}
                >
                  {[
                    { to: '/residential', label: 'Residential Cleaning' },
                    { to: '/commercial', label: 'Commercial Cleaning' },
                  ].map(({ to, label }) => (
                    <Link
                      key={to}
                      to={to}
                      className="block px-5 py-2.5 text-sm text-[#374151] hover:bg-[#F6F8FC] hover:text-[#143177] transition-colors"
                      style={{ fontWeight: 500 }}
                      onClick={() => setServicesOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/service-areas" className={navLinkClass}>Service Areas</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/reviews" className={navLinkClass}>Reviews</NavLink>
            <NavLink to="/faq" className={navLinkClass}>FAQ</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          {/* Phone + CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${SITE.phoneTel}`}
              className={`hidden xl:inline-flex items-center gap-2 text-sm transition-colors duration-300 ${
                scrolled ? 'text-[#143177] hover:text-[#3E6EDC]' : 'text-white hover:text-white/80'
              }`}
              style={{ fontWeight: 700 }}
            >
              <Phone size={15} /> {SITE.phoneDisplay}
            </a>
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-lg text-sm transition-all duration-300"
              style={{
                fontWeight: 600,
                backgroundColor: scrolled ? '#3E6EDC' : 'transparent',
                color: 'white',
                border: scrolled ? 'none' : '1.5px solid rgba(255,255,255,0.6)',
              }}
            >
              Get a Free Quote
            </Link>
            <button
              className={`lg:hidden p-1 transition-colors duration-300 ${scrolled ? 'text-[#374151]' : 'text-white'}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="lg:hidden border-t py-4 flex flex-col gap-1"
            style={{
              borderColor: scrolled ? '#E5E7EB' : 'rgba(255,255,255,0.2)',
              backgroundColor: scrolled ? 'white' : 'rgba(11,18,38,0.92)',
              fontWeight: 500,
            }}
          >
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
                className={`px-4 py-2.5 text-sm rounded-lg transition-colors ${
                  scrolled
                    ? 'text-[#374151] hover:bg-[#F6F8FC] hover:text-[#143177]'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href={`tel:${SITE.phoneTel}`}
              className={`mt-1 flex items-center justify-center gap-2 text-sm px-5 py-3 rounded-lg border transition-colors ${
                scrolled
                  ? 'border-[#E5E7EB] text-[#143177] hover:bg-[#F6F8FC]'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
              style={{ fontWeight: 700 }}
            >
              <Phone size={15} /> Call {SITE.phoneDisplay}
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              style={{ backgroundColor: '#3E6EDC', fontWeight: 600 }}
              className="mt-2 text-center text-sm text-white px-5 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Get a Free Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
