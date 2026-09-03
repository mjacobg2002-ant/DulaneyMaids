import { Link } from 'react-router';
import { Seo } from '../components/Seo';

export function NotFound() {
  return (
    <>
    <Seo title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" noIndex />
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-[#8A6D3B] text-sm mb-4" style={{ fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        404
      </p>
      <h1 className="text-[#1E2126] mb-4" style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, lineHeight: 1.2 }}>
        Page Not Found
      </h1>
      <p className="text-[#4A4640] mb-8 max-w-md" style={{ fontSize: '17px', lineHeight: '1.7' }}>
        The page you're looking for doesn't exist. Let's get you back to finding the right cleaning service.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/"
          style={{ backgroundColor: '#C6A15B', color: '#1E2126', fontWeight: 600 }}
          className="px-7 py-3 rounded-lg text-white hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
        <Link
          to="/contact"
          style={{ fontWeight: 600 }}
          className="px-7 py-3 rounded-lg border border-[#E8E1D3] text-[#1E2126] hover:bg-[#FAF8F3] transition-colors"
        >
          Get a Free Quote
        </Link>
      </div>
    </div>
    </>
  );
}