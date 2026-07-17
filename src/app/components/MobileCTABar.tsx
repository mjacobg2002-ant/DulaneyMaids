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
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden grid grid-cols-2 bg-white border-t border-[#E5E7EB]"
      style={{
        boxShadow: '0 -4px 16px rgba(0,0,0,0.08)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <a
        href={`tel:${SITE.phoneTel}`}
        className="flex items-center justify-center gap-2 py-3.5 text-sm text-[#143177] active:bg-[#F6F8FC]"
        style={{ fontWeight: 700 }}
      >
        <Phone size={16} /> Call Now
      </a>
      <Link
        to="/contact"
        className="flex items-center justify-center gap-2 py-3.5 text-sm text-white"
        style={{ fontWeight: 700, backgroundColor: '#3E6EDC' }}
      >
        Get a Free Quote <ArrowRight size={15} />
      </Link>
    </div>
  );
}
