import { Link } from 'react-router';

interface CTABandProps {
  heading?: string;
  subtext?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

export function CTABand({
  heading = 'Ready to Experience a Cleaner Space?',
  subtext = 'Get a tailored quote for your home or business — fast response, flexible scheduling, professional results.',
  primaryLabel = 'Get a Quote',
  secondaryLabel = 'Email Us',
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
          className="text-white/80 mb-3 max-w-2xl mx-auto"
          style={{ fontSize: '17px', lineHeight: '1.7' }}
        >
          {subtext}
        </p>
        <p className="text-white/50 text-sm mb-8">
          Fast response &middot; Tailored quotes &middot; Reliable scheduling
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            style={{ backgroundColor: '#3E6EDC', fontWeight: 600 }}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-white hover:opacity-90 transition-opacity"
          >
            {primaryLabel}
          </Link>
          <a
            href="mailto:camerondavis@dulaneyco.net"
            style={{ fontWeight: 600 }}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
