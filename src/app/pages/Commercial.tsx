import { Link } from 'react-router';
import { ArrowRight, Building2, CalendarCheck, HardHat, Users, Home, HeartPulse, Leaf, Settings2 } from 'lucide-react';
import { CTABand } from '../components/CTABand';
import { cities } from '../data/cities';

const HERO_IMG = 'https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?w=1200&h=550&fit=crop&auto=format';

const solutions = [
  {
    id: 'property-maintenance',
    icon: <Building2 size={22} />,
    title: 'Property & Facility Maintenance',
    desc: 'We support property managers and facility directors with comprehensive cleaning services that help keep buildings operating at their highest standard. From resident-ready unit preparation to daily upkeep of shared spaces, our team ensures every area of your property remains clean, welcoming, and professionally maintained.',
  },
  {
    id: 'common-areas',
    icon: <Users size={22} />,
    title: 'Common Area & Amenity Cleaning',
    desc: 'High-traffic areas require consistent attention to maintain a positive appearance and healthy environment. We provide detailed cleaning and sanitization for lobbies, hallways, elevators, offices, lounges, fitness centers, restrooms, community rooms, and other shared spaces that residents, staff, and guests use every day.',
  },
  {
    id: 'floor-care',
    icon: <CalendarCheck size={22} />,
    title: 'Floor Care & Surface Restoration',
    desc: 'Well-maintained flooring enhances the appearance and longevity of your facility. Our floor care services help preserve carpets and other flooring surfaces by removing dirt, stains, odors, and everyday wear caused by heavy foot traffic.',
  },
  {
    id: 'apartment',
    icon: <Home size={22} />,
    title: 'Apartment Community Services',
    desc: 'We partner with multifamily housing communities to support occupancy goals and resident satisfaction. Whether preparing spaces for new occupants or maintaining the overall cleanliness of the property, our team delivers efficient, detail-oriented service that reflects positively on your community.',
  },
  {
    id: 'assisted-living',
    icon: <HeartPulse size={22} />,
    title: 'Assisted Living & Healthcare Support',
    desc: 'Cleanliness plays a critical role in resident comfort and well-being. We provide professional cleaning services designed to help assisted living communities maintain safe, sanitary, and welcoming environments for residents, staff, and visitors alike.',
  },
  {
    id: 'exterior',
    icon: <Leaf size={22} />,
    title: 'Exterior Appearance & Property Upkeep',
    desc: 'A property\'s exterior is often the first thing visitors notice. We help maintain a clean and professional appearance throughout outdoor common areas, walkways, entry points, parking areas, and landscaped spaces, contributing to both curb appeal and overall property presentation.',
  },
  {
    id: 'post-construction',
    icon: <HardHat size={22} />,
    title: 'Post-Construction / Turnover Cleaning',
    desc: 'After construction, renovation, or tenant turnover, we prepare commercial spaces for immediate occupancy. Our team removes construction dust and debris, cleans windows and glass, eliminates adhesive and paint residue, and delivers a thorough finish that is inspection-ready from the moment we leave.',
  },
  {
    id: 'custom-programs',
    icon: <Settings2 size={22} />,
    title: 'Customized Service Programs',
    desc: 'Every property is unique. Dulaney Maids develops tailored cleaning programs based on the specific needs of each client, offering flexible scheduling and scalable solutions for facilities of all sizes — from a single-suite office to a large multifamily community.',
  },
];

export function Commercial() {
  const featuredAreas = cities.filter((c) =>
    ['arlington-va', 'washington-dc', 'bethesda-md', 'fairfax-va', 'reston-va', 'mclean-va'].includes(c.slug)
  );

  return (
    <div>
      {/* ─── Hero ────────────────────────────────────────────── */}
      <section className="relative bg-[#143177]">
        <img
          src={HERO_IMG}
          alt="Clean modern office environment"
          className="w-full h-64 lg:h-80 object-cover opacity-20 absolute inset-0"
        />
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <p
            className="text-[#F7D156] text-xs mb-3"
            style={{ fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}
          >
            Commercial Cleaning Solutions — DMV
          </p>
          <h1
            className="text-white mb-5"
            style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.15 }}
          >
            Commercial Cleaning Solutions
          </h1>
          <p className="text-white/80 max-w-2xl mb-4" style={{ fontSize: '18px', lineHeight: '1.7' }}>
            At Dulaney Maids, we provide dependable cleaning and facility support services for apartment
            communities, office buildings, assisted living facilities, and commercial properties across the DMV.
            Our goal is to help clients maintain clean, healthy, and professional environments that leave lasting
            impressions on residents, employees, and visitors.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to="/contact"
              style={{ backgroundColor: '#3E6EDC', fontWeight: 700 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-white hover:opacity-90 transition-opacity"
            >
              Get a Quote <ArrowRight size={17} />
            </Link>
            <Link
              to="/service-areas"
              style={{ fontWeight: 600 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              View Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Client Types ─────────────────────────────────────── */}
      <section className="py-10 bg-[#F6F8FC] border-b border-[#E5E7EB]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm text-[#6B7280] mr-2" style={{ fontWeight: 600 }}>We serve:</span>
            {[
              'Apartment Communities',
              'Office Buildings',
              'Assisted Living Facilities',
              'Property Managers',
              'Facilities Directors',
              'Healthcare Environments',
            ].map((label) => (
              <span
                key={label}
                className="inline-flex items-center bg-white border border-[#E5E7EB] rounded-full px-3 py-1.5 text-sm text-[#374151]"
                style={{ fontWeight: 500 }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Solutions Grid ───────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <h2
              className="text-[#143177] mb-4"
              style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800 }}
            >
              Our Commercial Cleaning Solutions
            </h2>
            <p className="text-[#374151] max-w-2xl mx-auto" style={{ fontSize: '17px', lineHeight: '1.7' }}>
              From daily upkeep to specialized facility programs — we deliver consistent, professional service
              tailored to your property and schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className="bg-[#F6F8FC] rounded-2xl p-8 border border-[#E5E7EB] flex flex-col"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{ backgroundColor: '#EEF1F7', color: '#143177' }}
                >
                  {s.icon}
                </div>
                <h3 className="text-[#143177] mb-3" style={{ fontSize: '19px', fontWeight: 800 }}>
                  {s.title}
                </h3>
                <p className="text-[#374151] flex-1" style={{ fontSize: '15px', lineHeight: '1.75' }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              style={{ backgroundColor: '#3E6EDC', fontWeight: 700 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-white hover:opacity-90 transition-opacity"
            >
              Request a Custom Quote <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Internal Links ────────────────────────────────────── */}
      <section className="py-16 bg-[#F6F8FC]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <h2 className="text-[#143177] mb-6" style={{ fontSize: '22px', fontWeight: 800 }}>
            Commercial Cleaning Across the DMV
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredAreas.map((city) => (
              <Link
                key={city.slug}
                to={`/service-areas/${city.slug}`}
                className="flex items-center justify-between bg-white rounded-xl px-5 py-3.5 border border-[#E5E7EB] hover:border-[#3E6EDC] transition-colors group"
              >
                <span
                  className="text-[#374151] text-sm group-hover:text-[#143177] transition-colors"
                  style={{ fontWeight: 500 }}
                >
                  {city.name}, {city.state}
                </span>
                <ArrowRight size={14} className="text-[#3E6EDC] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        heading="Ready to Discuss Your Commercial Cleaning Needs?"
        subtext="We'll develop a tailored program for your property — flexible scheduling, scalable solutions, and consistent results you can count on."
      />
    </div>
  );
}
