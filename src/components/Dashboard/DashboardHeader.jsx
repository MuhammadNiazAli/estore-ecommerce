'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Bell, User, ChevronDown, Menu, X } from 'lucide-react';

const DashboardHeader = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navRef = useRef(null);
  const userMenuRef = useRef(null);

  // Close mobile nav or user menu if clicked outside or Escape pressed
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileNavOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    }
    function handleEscape(event) {
      if (event.key === 'Escape') {
        setMobileNavOpen(false);
        setUserMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // Toggle user menu open/close
  const toggleUserMenu = () => setUserMenuOpen((open) => !open);

  // Close mobile nav when a nav link clicked
  const handleNavLinkClick = () => setMobileNavOpen(false);

  return (
    <header className="w-full bg-white/60 border-b border-gray-200 flex justify-center px-4 py-4 sticky top-0 z-50 my-[-100px] mb-0">
      <div className="w-full max-w-[1000px] flex items-center justify-between">
        {/* Logo / Title */}
        <div className="text-amber-600 font-bold text-xl tracking-wide select-none">
          Niaz<span className="text-gray-900">Dashboard</span>
        </div>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex gap-6 text-sm font-medium text-gray-600 select-none"
          aria-label="Primary navigation"
        >
          <a
            href="#"
            className="hover:text-amber-600 transition focus:outline-none focus:ring-2 focus:ring-amber-600 rounded"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="hover:text-amber-600 transition focus:outline-none focus:ring-2 focus:ring-amber-600 rounded"
          >
            Analytics
          </a>
          <a
            href="#"
            className="hover:text-amber-600 transition focus:outline-none focus:ring-2 focus:ring-amber-600 rounded"
          >
            Settings
          </a>
        </nav>

        {/* Mobile hamburger menu button */}
        <button
          className="md:hidden text-amber-600 hover:text-amber-500 transition focus:outline-none focus:ring-2 focus:ring-amber-600 rounded"
          aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileNavOpen}
          onClick={() => setMobileNavOpen((open) => !open)}
        >
          {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* User + Notifications */}
        <div className="hidden md:flex items-center gap-4 select-none relative" ref={userMenuRef}>
          <button
            className="text-amber-600 hover:text-amber-500 transition focus:outline-none focus:ring-2 focus:ring-amber-600 rounded"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
          </button>

          {/* User menu trigger */}
          <button
            onClick={toggleUserMenu}
            aria-haspopup="true"
            aria-expanded={userMenuOpen}
            className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full cursor-pointer hover:bg-gray-500 transition focus:outline-none focus:ring-2 focus:ring-amber-600"
          >
            <User className="w-4 h-4 text-amber-600" />
            <span className="text-sm text-gray-700 select-text">Niaz</span>
            <ChevronDown
              className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                userMenuOpen ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </button>

          {/* User dropdown menu */}
          {userMenuOpen && (
            <ul
              className="absolute right-0 top-full mt-2 w-48 bg-white/80 rounded-md shadow-lg py-1 text-sm text-gray-700 ring-1 ring-gray-200/60 ring-opacity-20 z-50"
              role="menu"
              aria-label="User menu"
            >
              <li>
                <a
                  href="#profile"
                  role="menuitem"
                  tabIndex={0}
                  className="block px-4 py-2 hover:bg-amber-700 hover:text-gray-900 transition cursor-pointer"
                  onClick={() => setUserMenuOpen(false)}
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#settings"
                  role="menuitem"
                  tabIndex={0}
                  className="block px-4 py-2 hover:bg-amber-700 hover:text-gray-900 transition cursor-pointer"
                  onClick={() => setUserMenuOpen(false)}
                >
                  Settings
                </a>
              </li>
              <li>
                <hr className="border-gray-200 my-1" />
              </li>
              <li>
                <a
                  href="#logout"
                  role="menuitem"
                  tabIndex={0}
                  className="block px-4 py-2 hover:bg-red-600 hover:text-gray-900 transition cursor-pointer"
                  onClick={() => setUserMenuOpen(false)}
                >
                  Logout
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Mobile Nav - slide down menu */}
      <nav
        ref={navRef}
        className={`md:hidden bg-white border-t border-gray-200 w-full max-w-[1000px] mx-auto mt-2 rounded-b-md overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          mobileNavOpen ? 'max-h-60 py-2' : 'max-h-0'
        }`}
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col gap-2 px-4">
          <li>
            <a
              href="#"
              className="block text-gray-600 text-sm font-medium hover:text-amber-600 transition focus:outline-none focus:ring-2 focus:ring-amber-600 rounded px-2 py-1"
              onClick={handleNavLinkClick}
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-gray-600 text-sm font-medium hover:text-amber-600 transition focus:outline-none focus:ring-2 focus:ring-amber-600 rounded px-2 py-1"
              onClick={handleNavLinkClick}
            >
              Analytics
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-gray-600 text-sm font-medium hover:text-amber-600 transition focus:outline-none focus:ring-2 focus:ring-amber-600 rounded px-2 py-1"
              onClick={handleNavLinkClick}
            >
              Settings
            </a>
          </li>

          {/* User + Notifications on mobile */}
          <li className="flex items-center gap-4 pt-2 border-t border-gray-200 relative" ref={userMenuRef}>
            <button
              className="text-amber-600 hover:text-amber-500 transition focus:outline-none focus:ring-2 focus:ring-amber-600 rounded"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
            </button>

            <button
              onClick={toggleUserMenu}
              aria-haspopup="true"
              aria-expanded={userMenuOpen}
              className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full cursor-pointer hover:bg-gray-500 transition focus:outline-none focus:ring-2 focus:ring-amber-600"
            >
              <User className="w-4 h-4 text-amber-600" />
              <span className="text-sm text-gray-700 select-text">Niaz</span>
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                  userMenuOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>

            {/* User dropdown menu on mobile */}
            {userMenuOpen && (
              <ul
                className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-sm text-gray-700 ring-1 ring-gray-300 ring-opacity-20 z-50"
                role="menu"
                aria-label="User menu"
              >
                <li>
                  <a
                    href="#profile"
                    role="menuitem"
                    tabIndex={0}
                    className="block px-4 py-2 hover:bg-amber-700 hover:text-gray-900 transition cursor-pointer"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#settings"
                    role="menuitem"
                    tabIndex={0}
                    className="block px-4 py-2 hover:bg-amber-700 hover:text-gray-900 transition cursor-pointer"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <hr className="border-gray-200 my-1" />
                </li>
                <li>
                  <a
                    href="#logout"
                    role="menuitem"
                    tabIndex={0}
                    className="block px-4 py-2 hover:bg-red-600 hover:text-gray-900 transition cursor-pointer"
                    onClick={() => setUserMenuOpen(false)}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default DashboardHeader;
