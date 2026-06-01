import { Link } from 'react-router';

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-[#3E6EDC] text-sm mb-4" style={{ fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        404
      </p>
      <h1 className="text-[#143177] mb-4" style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, lineHeight: 1.2 }}>
        Page Not Found
      </h1>
      <p className="text-[#374151] mb-8 max-w-md" style={{ fontSize: '17px', lineHeight: '1.7' }}>
        The page you're looking for doesn't exist. Let's get you back to finding the right cleaning service.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          to="/"
          style={{ backgroundColor: '#3E6EDC', fontWeight: 600 }}
          className="px-7 py-3 rounded-lg text-white hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
        <Link
          to="/contact"
          style={{ fontWeight: 600 }}
          className="px-7 py-3 rounded-lg border border-[#E5E7EB] text-[#143177] hover:bg-[#F6F8FC] transition-colors"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}
