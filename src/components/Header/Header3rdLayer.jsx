'use client';

import React, { useState, useRef } from 'react';
import {
  FiSearch,
  FiTruck,
  FiCreditCard,
  FiStar,
  FiX,
  FiBell,
  FiMessageCircle,
  FiClock,
  FiSave,
  FiAlertTriangle,
  FiMail,
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

// Basic feature highlights shown in the header
const basicFeatures = [
  { Icon: FiTruck, label: 'Fast Shipping', colorClass: 'text-blue-500' },
  { Icon: FiCreditCard, label: 'Secure Payment', colorClass: 'text-green-500' },
  { Icon: FiStar, label: 'Top Ratings', colorClass: 'text-amber-600' },
];

// Additional user-centric features with links and optional badges
const userExtras = [
  { Icon: FiMessageCircle, label: 'Live Chat Support', },
  { Icon: FiClock, label: 'Order Tracking',  },
  { Icon: FiSave, label: 'Saved Searches',  },
  { Icon: FiBell, label: 'Notifications',  badgeCount: 2 },
  { Icon: FiMail, label: 'Newsletter Signup', },
  { Icon: FiAlertTriangle, label: 'Price Alerts',  },
];

export default function Header3rdLayer() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInput = useRef(null);

  // Toggle the visibility of the third layer content
  const handleToggle = () => setIsExpanded(prev => !prev);

  // Clear search input and refocus
  const resetSearch = () => {
    setSearchQuery('');
    searchInput.current?.focus();
  };

  return (
    <section className="border-t border-gray-200 bg-white select-none">
      <div className="max-w-screen-xl mx-auto">
        {/* Toggle button only visible on medium screens and above */}
        <button
          onClick={handleToggle}
          aria-expanded={isExpanded}
          aria-controls="header3rdlayer-content"
          className="hidden md:flex w-full px-10 py-4 font-semibold hover:text-blue-400 transition focus:outline-none focus:ring-2 focus:ring-gray-200 rounded items-center select-none"
          style={{ minHeight: 80 }}
        >
          <span className="flex-grow text-left">Search & Features</span>

          {/* Arrow icon rotates when toggled */}
          <motion.svg
            className="w-5 h-5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.1, ease: 'easeInOut' }}
            style={{ originX: 0.5, originY: 0.5 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
          </motion.svg>
        </button>

        {/* AnimatePresence ensures smooth mounting/unmounting */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              id="header3rdlayer-content"
              className="hidden md:flex flex-col max-w-screen-xl mx-auto px-5 md:px-20 py-3 gap-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
            >
              {/* Search bar and basic features row */}
              <div
                className="flex items-center justify-center"
                style={{ gap: 30, minHeight: 80 }}
              >
                {/* Search input container */}
                <div className="relative max-w-[500px] flex-grow">
                  <input
                    ref={searchInput}
                    type="search"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    aria-label="Search products"
                    className="w-full bg-white border border-gray-200 rounded-md pr-12 pl-5 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition text-sm"
                    style={{ paddingTop: 10, paddingBottom: 10 }}
                  />
                  {/* Search icon at right */}
                  <FiSearch
                    size={20}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110"
                    aria-hidden="true"
                  />
                  {/* Clear button appears when user types */}
                  {searchQuery && (
                    <button
                      onClick={resetSearch}
                      aria-label="Clear search"
                      className="absolute top-1/2 right-8 -translate-y-1/2 text-gray-600 hover:text-gray-900 transition focus:outline-none"
                      tabIndex={0}
                    >
                      <FiX size={18} />
                    </button>
                  )}
                </div>

                {/* Display basic features with hover tooltips */}
                <div
                  className="flex items-center text-gray-700 text-xs font-medium select-none"
                  style={{ gap: 24 }}
                >
                  {basicFeatures.map(({ Icon, label, colorClass }) => (
                    <div
                      key={label}
                      className="relative group flex items-center space-x-1.5 cursor-default"
                    >
                      <Icon className={colorClass} size={16} aria-hidden="true" />
                      <span>{label}</span>
                      {/* Tooltip */}
                      <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none bg-white text-gray-900 text-xs rounded px-2 py-1 whitespace-nowrap transition-opacity duration-200 select-none z-50">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advanced features navigation */}
              <nav
                aria-label="User helpful features"
                className="flex flex-wrap gap-4 justify-center"
              >
                {userExtras.map(({ Icon, label, url, badgeCount }) => (
                  <a
                    key={label}
                    href={url}
                    title={label}
                    className="relative flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-md hover:bg-blue-500 hover:text-gray-900 transition text-xs font-medium whitespace-nowrap select-none"
                  >
                    <Icon size={18} />
                    {label}
                    {badgeCount > 0 && (
                      <span className="absolute -top-1 -right-2 bg-red-600 text-gray-900 text-[10px] rounded-full px-1 animate-pulse min-w-[14px] text-center">
                        {badgeCount}
                      </span>
                    )}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
