import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { MobileCTABar } from './MobileCTABar';

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      {/* Bottom padding on mobile keeps content clear of the sticky CTA bar */}
      <main className="flex-1 pt-20 pb-14 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileCTABar />
    </div>
  );
}
