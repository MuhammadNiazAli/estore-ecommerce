'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FiArchive,
  FiBatteryCharging,
  FiBook,
  FiBriefcase,
  FiCamera,
  FiCameraOff,
  FiCast,
  FiCode,
  FiCloud,
  FiCloudDrizzle,
  FiCreditCard,
  FiDatabase,
  FiEdit3,
  FiFilm,
  FiFlag,
  FiFolder,
  FiGift,
  FiGlobe,
  FiHash,
  FiHeadphones,
  FiHeart,
  FiHome,
  FiImage,
  FiKey,
  FiLayers,
  FiLock,
  FiMonitor,
  FiMusic,
  FiCpu,
  FiShoppingBag,
  FiShoppingCart,
  FiStar,
  FiSun,
  FiTag,
  FiTool,
  FiTruck,
  FiTv,
  FiTablet,
  FiUsers,
  FiWatch,
  FiZap,
  FiSmartphone,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';

import { BiBox } from 'react-icons/bi';

function FiSpeakerPlaceholder() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M11 5L6 9v6l5 4V5z" />
      <path d="M19 7v10" />
    </svg>
  );
}
function FiTrendingPlaceholder() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <polyline points="3 17 9 11 13 15 21 7" />
      <polyline points="14 7 21 7 21 14" />
    </svg>
  );
}

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

const categories = [
  { name: 'Smartphones', icon: <FiSmartphone /> },
  { name: 'Laptops', icon: <FiMonitor /> },
  { name: 'Watches', icon: <FiWatch /> },
  { name: 'Headphones', icon: <FiHeadphones /> },
  { name: 'Cameras', icon: <FiCamera /> },
  { name: 'Tablets', icon: <FiTablet /> },
  { name: 'Televisions', icon: <FiTv /> },
  { name: 'Gaming Consoles', icon: <FiCpu /> },
  { name: 'Smart Home', icon: <FiHome /> },
  { name: 'Audio Equipment', icon: <FiMusic /> },
  { name: 'Wearables', icon: <FiWatch /> },
  { name: 'Accessories', icon: <FiGift /> },
  { name: 'Drones', icon: <FiCloud /> },
  { name: 'Printers', icon: <FiArchive /> },
  { name: 'Monitors', icon: <FiMonitor /> },
  { name: 'Speakers', icon: <FiSpeakerPlaceholder /> },
  { name: 'Networking', icon: <FiGlobe /> },
  { name: 'Software', icon: <FiCode /> },
  { name: 'Fitness', icon: <FiZap /> },
  { name: 'Electric Scooters', icon: <FiBatteryCharging /> },
  { name: 'Smart Lighting', icon: <FiSun /> },
  { name: 'Camera Lenses', icon: <FiCameraOff /> },
  { name: 'Video Games', icon: <FiFilm /> },
  { name: 'Storage Devices', icon: <FiDatabase /> },
  { name: 'Chargers', icon: <FiCreditCard /> },
  { name: 'Cables & Adapters', icon: <FiTool /> },
  { name: 'Car Electronics', icon: <FiTruck /> },
  { name: 'Home Appliances', icon: <FiHome /> },
  { name: 'Kids Tech', icon: <FiUsers /> },
  { name: 'Office Equipment', icon: <FiBriefcase /> },
  { name: 'Beauty Tech', icon: <FiHeart /> },
  { name: 'Pet Tech', icon: <FiUsers /> },
  { name: 'Security Systems', icon: <FiLock /> },
  { name: 'Eco Products', icon: <FiLayers /> },
  { name: 'Refurbished Items', icon: <FiArchive /> },
  { name: 'Clearance', icon: <FiStar /> },
  { name: 'Deals', icon: <FiShoppingCart /> },
  { name: 'New Arrivals', icon: <FiZap /> },
  { name: 'Trending', icon: <FiTrendingPlaceholder /> },
  { name: 'Popular', icon: <FiHeart /> },
  { name: 'Gift Cards', icon: <FiGift /> },
  { name: 'Bundles', icon: <BiBox /> },
  { name: 'Top Rated', icon: <FiStar /> },
  { name: 'Refills', icon: <FiArchive /> },
  { name: 'Subscriptions', icon: <FiCreditCard /> },
  { name: 'Outdoor Gear', icon: <FiSun /> },
  { name: 'Travel Accessories', icon: <FiGlobe /> },
  { name: 'DIY Tools', icon: <FiTool /> },
  { name: 'Automotive', icon: <FiTruck /> },
  { name: 'Smart Kitchen', icon: <FiHome /> },
  { name: 'Health Devices', icon: <FiHeart /> },
];

const ShopCategoryNav = () => {
  const [active, setActive] = useState('Smartphones');
  const containerRef = useRef(null);
  const scrollAmount = 200;

  const handleClickCategory = (catName, index) => {
    setActive(catName);
    const container = containerRef.current;
    if (!container) return;

    const button = container.children[index];
    if (!button) return;

    container.scrollTo({
      left: button.offsetLeft - 16,
      behavior: 'smooth',
    });
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const scrollLeftValue = container.scrollLeft;
      const tolerance = 5;
      setCanScrollLeft(scrollLeftValue > tolerance);
      setCanScrollRight(scrollLeftValue < maxScrollLeft - tolerance);
    };

    container.addEventListener('scroll', onScroll);
    onScroll();

    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="w-full bg-white px-4 py-6 border-b border-gray-200 relative">
      <div className="max-w-[1200px] mx-auto relative">

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          aria-label="Scroll left"
          className={`hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-20
            w-9 h-9 rounded-full backdrop-blur-md bg-white/80 text-amber-400 shadow-md
            hover:bg-amber-400 hover:text-gray-950 transition
            disabled:opacity-30 disabled:pointer-events-none`}
        >
          <FiChevronLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          aria-label="Scroll right"
          className={`hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-20
            w-9 h-9 rounded-full backdrop-blur-md bg-white/80 text-amber-400 shadow-md
            hover:bg-amber-400 hover:text-gray-950 transition
            disabled:opacity-30 disabled:pointer-events-none`}
        >
          <FiChevronRight size={20} />
        </button>

        <div
          ref={containerRef}
          className="flex flex-row-reverse gap-3 overflow-x-auto px-2 sm:px-0 scroll-smooth"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#ffffff #ffffff' }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              height: 12px;
            }
            @media (max-width: 767px) {
              div::-webkit-scrollbar {
                display: none;
              }
            }
            div::-webkit-scrollbar-track {
              background: #ffffff;
              border-radius: 9999px;
            }
            div::-webkit-scrollbar-thumb {
              background-color: #ffffff;
              border-radius: 9999px;
              border: 3px solid #ffffff;
            }
          `}</style>

          {categories.map((cat, index) => {
            const isActive = active === cat.name;
            const slug = slugify(cat.name);
            return (
              <Link key={cat.name} href={`/category/${slug}`} passHref legacyBehavior>
                <motion.a
                  onClick={() => handleClickCategory(cat.name, index)}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-200 whitespace-nowrap text-sm font-medium
                    ${
                      isActive
                        ? 'border-amber-400 text-amber-400 bg-white shadow-[0_0_8px_rgba(251,191,36,0.7)]'
                        : 'border-gray-200 text-gray-700 hover:border-amber-400 hover:text-amber-400 hover:bg-gray-500'
                    }`}
                >
                  <span className={`w-5 h-5 ${isActive ? 'text-amber-400' : 'text-gray-600'}`}>
                    {cat.icon}
                  </span>
                  {cat.name}
                </motion.a>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default ShopCategoryNav;
