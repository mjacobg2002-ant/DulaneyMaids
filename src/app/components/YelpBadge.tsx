import { Star } from 'lucide-react';
import { YELP } from '../data/site';

interface YelpBadgeProps {
  /** 'light' for use on dark/navy backgrounds, 'dark' for light backgrounds. */
  tone?: 'light' | 'dark';
  className?: string;
}

/** Compact "5.0 ★★★★★ on Yelp" chip — real aggregate from the Yelp profile. */
export function YelpBadge({ tone = 'dark', className = '' }: YelpBadgeProps) {
  const isLight = tone === 'light';
  return (
    <a
      href={YELP.profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Rated ${YELP.ratingDisplay} out of 5 stars on Yelp — read our reviews`}
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 border transition-colors ${
        isLight
          ? 'border-white/25 bg-white/10 hover:bg-white/15 backdrop-blur-sm'
          : 'border-[#E8E1D3] bg-white hover:border-[#C6A15B]'
      } ${className}`}
    >
      <span className="flex gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={12} className="text-[#C6A15B] fill-[#C6A15B]" />
        ))}
      </span>
      <span
        className={`text-xs ${isLight ? 'text-white/90' : 'text-[#4A4640]'}`}
        style={{ fontWeight: 700 }}
      >
        {YELP.ratingDisplay} on Yelp
      </span>
    </a>
  );
}
