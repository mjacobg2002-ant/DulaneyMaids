import { Link } from 'react-router';
import { Phone, ArrowRight } from 'lucide-react';
import { SITE } from '../data/site';
import { YelpBadge } from './YelpBadge';

interface CTABandProps {
  heading?: string;
  subtext?: string;
  primaryLabel?: string;
}

export function CTABand({
  heading = 'Ready for a Spotless Space?',
  subtext = 'Get a free, tailored quote for your home or business — fast response, flexible scheduling, professional results.',
  primaryLabel = 'Get a Free Quote',
}: CTABandProps) {
  return (
    <section style={{ backgroundColor: '#143177' }} className="py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 text-center">
        <h2
          className="text-white mb-4"
          style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 800, lineHeight: 1.25 }}
        >
          {heading}
        </h2>
        <p
          className="text-white/80 mb-6 max-w-2xl mx-auto"
          style={{ fontSize: '17px', lineHeight: '1.7' }}
        >
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link
            to="/contact"
            style={{ backgroundColor: '#3E6EDC', fontWeight: 600 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-white hover:opacity-90 transition-opacity"
          >
            {primaryLabel} <ArrowRight size={16} />
          </Link>
          <a
            href={`tel:${SITE.phoneTel}`}
            style={{ fontWeight: 600 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            <Phone size={16} /> Call {SITE.phoneDisplay}
          </a>
        </div>
        <YelpBadge tone="light" />
      </div>
    </section>
  );
}
