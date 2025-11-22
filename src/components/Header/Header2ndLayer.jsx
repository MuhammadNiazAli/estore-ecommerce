'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  FiShoppingCart,
  FiHeart,
  FiUser,
  FiTag,
  FiTruck,
  FiGift,
  FiStar,
  FiCreditCard,
  FiHome,
  FiSettings,
  FiUploadCloud,
  FiGlobe,
  FiTrendingUp,
} from 'react-icons/fi';
import {
  MdBusinessCenter,
  MdCompareArrows,
  MdOutlinePriceCheck,
  MdOutlineInventory2,
} from 'react-icons/md';
import {
  FaFileInvoiceDollar,
  FaWarehouse,
  FaChartBar,
  FaHandshake,
  FaLaptopCode,
  FaPercentage,
  FaQuestionCircle,
  FaPhoneAlt,
  FaBoxes,
  FaUserShield,
} from 'react-icons/fa';
import { BsBoxSeam, BsCreditCard2Back } from 'react-icons/bs';

const LANGUAGES = [
  'English', 'French', 'Spanish', 'German', 'Chinese', 'Hindi', 'Arabic',
  'Portuguese', 'Bengali', 'Russian', 'Japanese', 'Punjabi', 'Javanese',
  'Korean', 'Vietnamese', 'Telugu', 'Marathi', 'Tamil', 'Urdu', 'Gujarati',
  'Polish', 'Ukrainian', 'Persian', 'Italian', 'Dutch', 'Thai', 'Indonesian',
  'Malay', 'Swahili', 'Romanian', 'Hungarian', 'Greek', 'Czech', 'Finnish',
  'Danish', 'Norwegian', 'Hebrew', 'Catalan', 'Slovak', 'Bulgarian', 'Croatian',
  'Lithuanian', 'Latvian', 'Estonian', 'Filipino', 'Malayalam', 'Kannada',
  'Odia', 'Sinhala',
];

const COUNTRIES = [
  'Pakistan', 'United States', 'India', 'China', 'Germany', 'UK', 'Canada',
  'France', 'Japan', 'Brazil', 'Australia', 'Russia', 'UAE', 'Saudi Arabia',
  'Spain', 'Netherlands', 'South Korea', 'Mexico', 'Italy', 'Indonesia',
  'Bangladesh', 'South Africa', 'Poland', 'Sweden', 'Norway', 'Finland',
  'Turkey', 'Singapore', 'Malaysia', 'New Zealand', 'Qatar', 'Kuwait', 'Thailand',
  'Vietnam', 'Philippines', 'Iran', 'Iraq', 'Afghanistan', 'Nepal', 'Sri Lanka',
  'Israel', 'Switzerland', 'Denmark', 'Ukraine', 'Argentina', 'Chile', 'Peru',
  'Colombia', 'Belgium', 'Austria', 'Portugal',
];

// Icons shown on top right with optional badges (like cart count)
const topNavIcons = [
  { IconComponent: FiShoppingCart, label: 'Cart', href: '/cart', badgeKey: 'cart' },
  { IconComponent: FiHeart, label: 'Wishlist', href: '/wishlist', badgeKey: 'wishlist' },
  { IconComponent: FiUser, label: 'Profile', href: '/profile' },
  { IconComponent: FiTag, label: 'Deals', href: '/deals' },
  { IconComponent: FiTruck, label: 'Shipping', href: '/shipping' },
  { IconComponent: FiGift, label: 'Gifts', href: '/gifts' },
  { IconComponent: FiStar, label: 'Favorites', },
  { IconComponent: FiCreditCard, label: 'Payments', href: '/payments' },
  { IconComponent: FiHome, label: 'Home', href: '/' },
  { IconComponent: FiSettings, label: 'Settings',  },
];

// Current badge counts
const badgeCounters = {
  cart: 3,
  wishlist: 5,
};

// Additional features shown when expanded
const extraFeatures = [
  { icon: <FiUploadCloud />, label: 'Upload CSV',  },
  { icon: <MdCompareArrows />, label: 'Compare Products', },
  { icon: <FaFileInvoiceDollar />, label: 'Request Quote',  },
  { icon: <FaWarehouse />, label: 'Warehouse Deals',  },
  { icon: <MdBusinessCenter />, label: 'Business Tools',  },
  { icon: <MdOutlinePriceCheck />, label: 'Live Prices',  },
  { icon: <FaChartBar />, label: 'Analytics',  },
  { icon: <BsBoxSeam />, label: 'Track Orders',  },
  { icon: <FaHandshake />, label: 'B2B Solutions', },
  { icon: <FaLaptopCode />, label: 'Developer Tools',  },
  { icon: <BsCreditCard2Back />, label: 'Pay Later',  },
  { icon: <FiGift />, label: 'Gift Cards', },
  { icon: <FiUser />, label: 'Wholesale Login',  },
  { icon: <MdOutlineInventory2 />, label: 'Inventory Check',},
  { icon: <FiGlobe />, label: 'Global Delivery', },
  { icon: <FaPercentage />, label: 'Coupon Center',  },
  { icon: <FiTrendingUp />, label: 'Trending Products',  },
  { icon: <FaBoxes />, label: 'Bulk Orders',  },
  { icon: <FaQuestionCircle />, label: 'Help Center',  },
  { icon: <FaPhoneAlt />, label: 'Customer Support',  },
  { icon: <FaUserShield />, label: 'Security Settings', },
];

// Reusable dropdown component with focus & outside click handling
function Dropdown({ label, options, selectedValue, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-40 min-w-[160px] relative select-none font-sans"
    >
      <label className="block text-xs font-semibold text-gray-400 mb-1">
        {label}
      </label>

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex justify-between items-center px-3 py-2 text-xs text-white bg-gray-950/90 backdrop-blur-md border border-gray-700 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      >
        <span>{selectedValue}</span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <ul
          role="listbox"
          tabIndex={-1}
          aria-activedescendant={selectedValue}
          className="absolute z-50 mt-1 w-full max-h-44 overflow-y-auto rounded bg-gray-950/90 backdrop-blur-md border border-gray-700 text-white text-xs shadow-lg custom-scrollbar"
        >
          {options.map((option) => (
            <li
              key={option}
              role="option"
              aria-selected={option === selectedValue}
              tabIndex={0}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelect(option);
                  setIsOpen(false);
                }
              }}
              className={`cursor-pointer px-3 py-2 hover:bg-blue-600 ${
                option === selectedValue ? 'bg-blue-700 font-semibold' : ''
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function HeaderSecondLayer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [language, setLanguage] = useState('English');
  const [country, setCountry] = useState('Pakistan');

  return (
    <section className="hidden md:block border-t border-gray-800 bg-gray-900 text-white select-none">
      <div className="max-w-screen-xl mx-auto px-6 py-4">
        {/* Toggle More Options */}
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls="more-options-panel"
          onClick={() => setIsExpanded((open) => !open)}
          className="w-full flex justify-between items-center px-4 py-3 mb-4 font-serif font-semibold hover:text-blue-400 transition focus:outline-none focus:ring-2 focus:ring-gray-800 rounded"
        >
          <span>More Options</span>
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isExpanded ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 15l6-6 6 6" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 9l-6 6-6-6" />
            )}
          </svg>
        </button>

        {/* Expanded Content */}
        {isExpanded && (
          <div
            id="more-options-panel"
            className="flex flex-wrap items-start gap-6"
          >
            {/* Left side: Language & Country */}
            <div className="flex gap-6 flex-shrink-0">
              <Dropdown
                label="Language"
                options={LANGUAGES}
                selectedValue={language}
                onSelect={setLanguage}
              />
              <Dropdown
                label="Country"
                options={COUNTRIES}
                selectedValue={country}
                onSelect={setCountry}
              />
            </div>

            {/* Right side: Icon links */}
            <nav className="flex flex-wrap justify-end flex-grow gap-4 min-w-[220px] items-center">
              {topNavIcons.map(({ IconComponent, label, href, badgeKey }) => (
                <a
                  key={label}
                  href={href}
                  title={label}
                  className="relative flex items-center justify-center w-8 h-8 text-gray-300 group hover:text-blue-400 transition"
                >
                  <IconComponent size={20} />
                  {badgeKey && badgeCounters[badgeKey] > 0 && (
                    <span className="absolute -top-1 -right-2 min-w-[14px] px-1 text-xs text-center text-white rounded-full bg-blue-600 animate-pulse">
                      {badgeCounters[badgeKey]}
                    </span>
                  )}
                </a>
              ))}
            </nav>

            {/* Bottom full width advanced features */}
            <div className="w-full mt-4 pt-4 border-t border-gray-800 flex flex-wrap justify-center gap-3 text-xs font-medium text-gray-300">
              {extraFeatures.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-2 px-3 py-1.5 border border-gray-700 rounded-md whitespace-nowrap transition-colors hover:bg-blue-500 hover:text-white"
                >
                  <span className="text-base">{icon}</span>
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Custom scrollbar styling */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #171717; /* gray-950 */
          border-radius: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #2a2a2a; /* gray-900 */
          border-radius: 6px;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #2a2a2a #171717;
        }
      `}</style>
    </section>
  );
}
