'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaUser,
  FaBoxOpen,
  FaHeart,
  FaMapMarkedAlt,
  FaCreditCard,
  FaLock,
  FaCogs,
  FaSignOutAlt,
  FaBell,
  FaGift,
  FaComments,
  FaHistory,
  FaChartLine,
  FaQuestionCircle,
  FaChevronRight,
  FaTimes,
} from 'react-icons/fa';

const navItems = [
  { label: 'Profile', icon: <FaUser />, id: 'profile', href: '/account' },
  { label: 'Orders', icon: <FaBoxOpen />, id: 'orders', href: '/account/ordering' },
  { label: 'Wishlist', icon: <FaHeart />, id: 'wishlist', href: '/account/wishlisting' },
  { label: 'Addresses', icon: <FaMapMarkedAlt />, id: 'addresses', href: '/account/addressing' },
  { label: 'Payments', icon: <FaCreditCard />, id: 'payments', href: '/account/paymenting' },
  { label: 'Security', icon: <FaLock />, id: 'security', href: '/account/securiting' },
  { label: 'Settings', icon: <FaCogs />, id: 'settings', href: '/account/sittings' },
  { label: 'Notifications', icon: <FaBell />, id: 'notifications', href: '/account/notification' },
  { label: 'Gift Cards', icon: <FaGift />, id: 'giftcards', href: '/account/giftcards' },
  { label: 'Support', icon: <FaComments />, id: 'support', href: '/account/supporting' },
  { label: 'Purchase History', icon: <FaHistory />, id: 'history', href: '/account/perchasighistory' },
  { label: 'Sales & Rewards', icon: <FaChartLine />, id: 'rewards', href: '/account/rewarding' },
  { label: 'Help Center', icon: <FaQuestionCircle />, id: 'help', href: '/account/helping' },
  { label: 'logout', icon: <FaSignOutAlt />, id: 'logout', href: 'account/logouting' },
];

const LOCAL_STORAGE_KEY = 'accountSidebarActive';

const AccountSidebar = () => {
  const pathname = usePathname();

  // Initialize active from localStorage or default 'profile'
  const [active, setActive] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(LOCAL_STORAGE_KEY) || 'profile';
    }
    return 'profile';
  });

  const [showSidebar, setShowSidebar] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Sync active with pathname on mount and pathname change
  useEffect(() => {
    if (!pathname) return;

    // Find matching nav item whose href matches pathname start
    const matchedItem = navItems.find((item) => pathname.startsWith(item.href));
    if (matchedItem) {
      // Only update if different, to prevent unnecessary state changes
      if (matchedItem.id !== active) {
        setActive(matchedItem.id);
        if (typeof window !== 'undefined') {
          localStorage.setItem(LOCAL_STORAGE_KEY, matchedItem.id);
        }
      }
    }
  }, [pathname]);

  // Save active to localStorage when it changes (e.g., user clicks a link)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_KEY, active);
    }
  }, [active]);

  // Close sidebar on pathname change
  useEffect(() => {
    if (mobileOpen) {
      handleCloseSidebar();
    }
  }, [pathname]);

  const handleOpenSidebar = () => {
    setShowSidebar(true);
    setTimeout(() => {
      setMobileOpen(true);
    }, 20);
  };

  const handleCloseSidebar = () => {
    setMobileOpen(false);
    setTimeout(() => setShowSidebar(false), 300);
  };

  // When user clicks a nav item, set it active
  const handleNavClick = (id) => {
    setActive(id);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_KEY, id);
    }
    handleCloseSidebar();
  };

  return (
    <>
      {/* Open button */}
      <button
        onClick={handleOpenSidebar}
        className="lg:hidden fixed top-24 left-0 z-[1] bg-amber-600 text-black p-2 rounded-tr-xl rounded-br-xl shadow"
        style={{ width: '36px', height: '56px' }}
        hidden={mobileOpen || showSidebar}
        aria-label="Open sidebar"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Mobile sidebar + overlay */}
      {showSidebar && (
        <>
          {/* Overlay */}
          <div
            onClick={handleCloseSidebar}
            className={`lg:hidden fixed inset-0 z-[1000] h-screen bg-white/40 backdrop-blur-md transition-opacity duration-300 ${
              mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            aria-hidden="true"
          />

          {/* Sidebar sliding */}
          <div
            className={`lg:hidden fixed top-0 left-0 z-[1001] h-full bg-white text-gray-900 rounded-r-xl p-6 shadow-lg w-full max-w-sm
              transform transition-transform duration-300
              ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
            style={{ top: '0', maxHeight: '100vh', overflowY: 'auto' }}
            role="dialog"
            aria-modal="true"
            aria-label="Account sidebar navigation"
          >
            <div className="flex justify-end">
              <button
                onClick={handleCloseSidebar}
                className="text-amber-600 hover:text-amber-500"
                aria-label="Close sidebar"
              >
                <FaTimes size={22} />
              </button>
            </div>
            <nav className="space-y-3 mt-4 max-h-[calc(100vh-64px)] overflow-y-auto pr-2 custom-scrollbar">
              {navItems.map((item) =>
                item.id === 'logout' ? (
                  <button
                    key={item.id}
                    onClick={() => alert('Logging out...')}
                    className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition
                      ${
                        active === item.id
                          ? 'bg-amber-600 text-black shadow'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ) : (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition
                      ${
                        active === item.id
                          ? 'bg-amber-600 text-black shadow'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                )
              )}
            </nav>
          </div>
        </>
      )}

      {/* Desktop sidebar */}
      <aside
        className="hidden lg:block w-full lg:w-64 bg-white text-gray-900 rounded-xl p-6 shadow-lg sticky top-24"
        style={{ maxHeight: '600px' }}
      >
        <nav
          className="space-y-3 overflow-y-auto pr-2 custom-scrollbar"
          style={{ maxHeight: 'calc(600px - 48px)' }}
        >
          {navItems.map((item) =>
            item.id === 'logout' ? (
              <button
                key={item.id}
                onClick={() => alert('Logging out...')}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition
                  ${
                    active === item.id
                      ? 'bg-amber-600 text-black shadow'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ) : (
              <Link
                key={item.id}
                href={item.href}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition
                  ${
                    active === item.id
                      ? 'bg-amber-600 text-black shadow'
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                onClick={() => handleNavClick(item.id)}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            )
          )}
        </nav>
      </aside>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #ffffff; /* gray-900 */
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #ffffff; /* gray-950 */
          border-radius: 4px;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #ffffff #ffffff;
        }
      `}</style>
    </>
  );
};

export default AccountSidebar;
