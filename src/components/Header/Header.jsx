'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiHome,
  FiTag,
  FiUser,
  FiShoppingCart,
  FiHeart,
  FiTruck,
  FiGift,
  FiStar,
  FiCreditCard,
  FiSearch,
} from 'react-icons/fi';

import {
  MdPhoneIphone,
  MdLaptopMac,
  MdWatch,
  MdOutlineKitchen,
  MdSportsBasketball,
  MdToys,
  MdCameraAlt,
  MdFitnessCenter,
  MdBook,
  MdFace,
  MdPets,
  MdOutlineChair,
  MdOutlineLocalLibrary,
  MdOutlineBuild,
  MdOutdoorGrill,
  MdDirectionsBike,
  MdHeadsetMic,
  MdLaptop,
  MdPhoneAndroid,
} from 'react-icons/md';

import {
  BsMusicNote,
  BsFillPaletteFill,
  BsFillCollectionFill,
  BsFillCameraFill,
} from 'react-icons/bs';

import { motion, AnimatePresence } from 'framer-motion';

import Header2ndLayer from './Header2ndLayer';
import Header3rdLayer from './Header3rdLayer';
import Header4thLayer from './Header4thLayer';

// Menu items for main navigation
const NAV_LINKS = [
  { label: 'Home', href: '/', icon: <FiHome size={11} color="#ddd" /> },
  { label: 'Categories', href: '/categories', icon: <FiTag size={11} color="#6366f1" /> },
  { label: 'Deals', href: '/Deals', icon: <FiGift size={11} color="#ddd" /> },
  { label: 'Orders', href: '/orders', icon: <FiShoppingCart size={11} color="#ddd" /> },
  { label: 'Wishlist', href: '/wishlist', icon: <FiHeart size={11} color="#ddd" /> },
  { label: 'Shop', href: '/shop', icon: <FiTag size={11} color="#ddd" /> },
  { label: 'Shipping', href: '/shipping', icon: <FiTruck size={11} color="#ddd" /> },
  { label: 'Reviews', href: '/reviews', icon: <FiStar size={11} color="#ddd" /> },
  { label: 'Payments', href: '/payments', icon: <FiCreditCard size={11} color="#ddd" /> },
  { label: 'Account', href: '/account', icon: <FiUser size={11} color="#ddd" /> },
  { label: 'Support', href: '/support', icon: <FiSearch size={11} color="#ddd" /> },
];


// Product categories with icons and links
const PRODUCT_CATEGORIES = [
  { label: 'Phones', href: '/category/phones', icon: <MdPhoneIphone size={12} color="#6366f1" /> },
  { label: 'Laptops', href: '/category/laptops', icon: <MdLaptopMac size={12} color="#6366f1" /> },
  { label: 'Watches', href: '/category/watches', icon: <MdWatch size={12} color="#6366f1" /> },
  { label: 'Kitchen', href: '/category/kitchen', icon: <MdOutlineKitchen size={12} color="#6366f1" /> },
  { label: 'Sports', href: '/category/sports', icon: <MdSportsBasketball size={12} color="#6366f1" /> },
  { label: 'Toys', href: '/category/toys', icon: <MdToys size={12} color="#6366f1" /> },
  { label: 'Cameras', href: '/category/cameras', icon: <MdCameraAlt size={12} color="#6366f1" /> },
  { label: 'Fitness', href: '/category/fitness', icon: <MdFitnessCenter size={12} color="#6366f1" /> },
  { label: 'Books', href: '/category/books', icon: <MdBook size={12} color="#6366f1" /> },
  { label: 'Beauty', href: '/category/beauty', icon: <MdFace size={12} color="#6366f1" /> },
  { label: 'Phone Accessories', href: '/category/phone-accessories', icon: <MdPhoneAndroid size={12} color="#6366f1" /> },
  { label: 'Gaming', href: '/category/gaming', icon: <FiTag size={12} color="#6366f1" /> },
  { label: 'Home Decor', href: '/category/home-decor', icon: <MdOutlineChair size={12} color="#6366f1" /> },
  { label: 'Audio', href: '/category/audio', icon: <MdHeadsetMic size={12} color="#6366f1" /> },
  { label: 'Office', href: '/category/office', icon: <MdOutlineLocalLibrary size={12} color="#6366f1" /> },
  { label: 'Clothing', href: '/category/clothing', icon: <FiTag size={12} color="#6366f1" /> },
  { label: 'Shoes', href: '/category/shoes', icon: <FiTag size={12} color="#6366f1" /> },
  { label: 'Jewelry', href: '/category/jewelry', icon: <FiTag size={12} color="#6366f1" /> },
  { label: 'Automotive', href: '/category/automotive', icon: <MdDirectionsBike size={12} color="#6366f1" /> },
  { label: 'Garden', href: '/category/garden', icon: <MdOutdoorGrill size={12} color="#6366f1" /> },
  { label: 'Pets', href: '/category/pets', icon: <MdPets size={12} color="#6366f1" /> },
  { label: 'Health', href: '/category/health', icon: <FiTag size={12} color="#6366f1" /> },
  { label: 'Baby', href: '/category/baby', icon: <MdOutlineBuild size={12} color="#6366f1" /> },
  { label: 'Software', href: '/category/software', icon: <FiTag size={12} color="#6366f1" /> },
  { label: 'Industrial', href: '/category/industrial', icon: <MdOutlineBuild size={12} color="#6366f1" /> },
  { label: 'Art', href: '/category/art', icon: <BsFillPaletteFill size={12} color="#6366f1" /> },
  { label: 'Music', href: '/category/music', icon: <BsMusicNote size={12} color="#6366f1" /> },
  { label: 'Travel', href: '/category/travel', icon: <FiTag size={12} color="#6366f1" /> },
  { label: 'Movies', href: '/category/movies', icon: <BsFillCollectionFill size={12} color="#6366f1" /> },
  { label: 'Collectibles', href: '/category/collectibles', icon: <BsFillCollectionFill size={12} color="#6366f1" /> },
];

// Animation variants for close icon hover effect
const closeIconMotion = {
  initial: { rotateY: 0 },
  hover: { rotateY: 360, transition: { duration: 0.8, ease: 'easeInOut' } },
};

// Animation variants for category item hover tilt effect
const categoryItemMotion = {
  initial: { rotateX: 0, rotateY: 0, scale: 1, color: '#d1d5db' },
  hover: {
    scale: 1.07,
    rotateX: 7,
    rotateY: 12,
    color: '#6366f1',
    transition: { type: 'spring', stiffness: 300, damping: 20, color: { duration: 0.3 } },
  },
};

export default function Header() {
  const currentPath = usePathname();

  // Mobile menu toggle state
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  // Categories submenu toggle state
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);

  // Toggles mobile menu visibility
  function toggleMobileMenu() {
    setMobileMenuVisible((visible) => !visible);
  }

  // Toggles categories dropdown visibility
  function toggleCategoriesMenu() {
    setCategoriesOpen((open) => !open);
  }

  // Determines if a nav link is currently active based on URL
  function checkActiveLink(href) {
    if (href === '/') return currentPath === '/';
    return currentPath?.startsWith(href) && href !== '/';
  }

  return (
    <>
      <header
        className="static top-0 max-w-[1250px] left-0 w-full bg-gray-900 text-white shadow-lg z-50 select-none font-poppins"
      >
        <div
          className="container mx-auto max-w-screen-xl flex items-center justify-between h-20"
          style={{ paddingLeft: '10px', paddingRight: '10px' }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex md:ml-[-10px] items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ position: 'relative', left: 0 }}
          >
            <span className="text-[22px] font-extrabold tracking-tight text-[#F6C90E] select-text">e</span>
            <span className="text-[14px] font-semibold tracking-wide">Store</span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center font-serif font-semibold tracking-wide"
            style={{
              paddingLeft: '35px',
              paddingRight: '40px',
              gap: '0.1rem',
              fontWeight: 400,
              fontFamily: "'Poppins', sans-serif",
            }}
            aria-label="Primary Navigation"
          >
            {NAV_LINKS.map(({ label, href, icon }) => {
              if (label === 'Categories') {
                // Categories dropdown button + menu
                return (
                  <div key={label} className="relative group">
                    <button
                      type="button"
                      onClick={toggleCategoriesMenu}
                      aria-haspopup="true"
                      aria-expanded={isCategoriesOpen}
                      className={`flex items-center gap-1 transition font-normal px-2 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded text-[12px] ${
                        isCategoriesOpen
                          ? 'text-indigo-400 underline decoration-indigo-500'
                          : 'hover:text-indigo-400'
                      }`}
                    >
                      {icon}
                      <span>{label}</span>
                      {isCategoriesOpen ? (
                        <FiChevronUp className="w-4 h-4" aria-hidden="true" />
                      ) : (
                        <FiChevronDown className="w-4 h-4" aria-hidden="true" />
                      )}
                    </button>

                    <AnimatePresence>
                      {isCategoriesOpen && (
                        <motion.ul
                          className="absolute top-full"
                          style={{ left: '-140px', minWidth: '900px', maxWidth: '900px', zIndex: 1 }}
                          role="menu"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          <div
                            className="bg-gray-800/90 backdrop-blur-md border border-gray-700 rounded-md shadow-xl p-4 grid grid-cols-5 gap-3"
                            style={{ width: '900px' }}
                          >
                            {PRODUCT_CATEGORIES.map(({ label, href, icon }) => (
                              <motion.li
                                key={label}
                                role="none"
                                variants={categoryItemMotion}
                                initial="initial"
                                whileHover="hover"
                                className="flex items-center gap-2 px-3 py-1 rounded cursor-pointer"
                              >
                                <Link
                                  href={href}
                                  onClick={() => setCategoriesOpen(false)}
                                  role="menuitem"
                                  tabIndex={0}
                                  className="flex items-center gap-2 w-full text-indigo-300 transition font-normal text-[12px] truncate"
                                >
                                  <motion.span layoutId={`icon-${label}`} className="text-indigo-400">
                                    {icon}
                                  </motion.span>
                                  <motion.span layoutId={`text-${label}`}>{label}</motion.span>
                                </Link>
                              </motion.li>
                            ))}
                          </div>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={label}
                  href={href}
                  className={`relative flex items-center gap-1 px-2 py-2 text-[11px] transition rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 font-normal ${
                    checkActiveLink(href) ? 'text-indigo-400' : 'text-gray-300 hover:text-gray-300'
                  }`}
                  aria-current={checkActiveLink(href) ? 'page' : undefined}
                >
                  {icon}
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu toggle button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label={isMobileMenuVisible ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuVisible}
            style={{ marginLeft: 'auto' }}
          >
            {isMobileMenuVisible ? (
              <motion.div
                key="close-icon"
                variants={closeIconMotion}
                initial="initial"
                whileHover="hover"
              >
                <FiX size={24} color="#ddd" />
              </motion.div>
            ) : (
              <FiMenu size={24} color="#ddd" />
            )}
          </button>
        </div>

        {/* Additional header layers */}
        <Header2ndLayer />
        <Header3rdLayer />
        <Header4thLayer />
      </header>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isMobileMenuVisible && (
          <motion.nav
            key="mobile-menu"
            className="fixed top-[80px] left-0 w-full bg-gray-900/90 backdrop-blur-md text-white shadow-lg z-50 p-4 overflow-auto max-h-[calc(100vh-80px)]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            aria-label="Mobile Navigation"
          >
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, href, icon }) => {
                if (label === 'Categories') {
                  return (
                    <li key={label}>
                      <button
                        type="button"
                        onClick={toggleCategoriesMenu}
                        className="w-full flex items-center justify-between px-3 py-2 text-left text-white hover:bg-gray-800 rounded font-semibold text-sm"
                        aria-haspopup="true"
                        aria-expanded={isCategoriesOpen}
                      >
                        <span className="flex items-center gap-2">
                          {React.cloneElement(icon, { color: '#6366f1', size: 18 })}
                          {label}
                        </span>
                        {isCategoriesOpen ? <FiChevronUp size={18} aria-hidden="true" /> : <FiChevronDown size={18} aria-hidden="true" />}
                      </button>

                      <AnimatePresence>
                        {isCategoriesOpen && (
                          <motion.ul
                            className="mt-2 ml-4 border-l border-gray-700 pl-3 space-y-2 max-h-72 overflow-y-auto"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            role="menu"
                          >
                            {PRODUCT_CATEGORIES.map(({ label, href, icon }) => (
                              <li key={label}>
                                <Link
                                  href={href}
                                  onClick={() => {
                                    setMobileMenuVisible(false);
                                    setCategoriesOpen(false);
                                  }}
                                  className="flex items-center gap-2 px-3 py-1 text-indigo-300 hover:text-indigo-400 rounded font-normal text-sm"
                                  role="menuitem"
                                  tabIndex={0}
                                >
                                  {React.cloneElement(icon, { color: '#6366f1', size: 18 })}
                                  {label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }

                return (
                  <li key={label}>
                    <Link
                      href={href}
                      onClick={() => setMobileMenuVisible(false)}
                      className={`flex items-center gap-2 px-3 py-2 rounded font-normal text-sm ${
                        checkActiveLink(href) ? 'text-indigo-400' : 'text-gray-300 hover:text-gray-300'
                      } hover:bg-gray-800`}
                      aria-current={checkActiveLink(href) ? 'page' : undefined}
                    >
                      {icon}
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Global styles for fonts and responsive tweaks */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

        html,
        body {
          font-family: 'Poppins', sans-serif;
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: #111827;
        }

        @media (min-width: 768px) {
          header > div.container {
            padding-left: 24px !important;
            padding-right: 40px !important;
          }
          header > div.container > a {
            position: relative !important;
            left: 16px !important;
          }
          button.md\\:hidden {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </>
  );
}
