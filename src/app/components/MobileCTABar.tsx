import { Link, useLocation } from 'react-router';
import { Phone, ArrowRight } from 'lucide-react';
import { SITE } from '../data/site';

/**
 * Sticky bottom bar on mobile/tablet: one-tap call + free quote.
 * Hidden on desktop (lg+) and on the contact page itself (the form is
 * already the CTA there — the bar would cover the submit button).
 */
export function MobileCTABar() {
  const { pathname } = useLocation();
  if (pathname === '/contact') return null;

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden grid grid-cols-2 bg-white border-t border-[#E8E1D3]"
      style={{
        boxShadow: '0 -4px 16px rgba(0,0,0,0.08)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <a
        href={`tel:${SITE.phoneTel}`}
        className="flex items-center justify-center gap-2 py-3.5 text-sm text-[#1E2126] active:bg-[#FAF8F3]"
        style={{ fontWeight: 700 }}
      >
        <Phone size={16} /> Call Now
      </a>
      <Link
        to="/contact"
        className="flex items-center justify-center gap-2 py-3.5 text-sm text-white"
        style={{ fontWeight: 700, backgroundColor: '#C6A15B', color: '#1E2126' }}
      >
        Get a Free Quote <ArrowRight size={15} />
      </Link>
    </div>
  );
}
