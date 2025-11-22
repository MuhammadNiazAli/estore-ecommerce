'use client';

import React, { useState } from 'react';
import {
  FiHome,
  FiUser,
  FiMapPin,
  FiSettings,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';

// Sidebar navigation items
const sidebarItems = [
  { label: 'Dashboard', icon: FiHome, href: '/dashboard' },
  { label: 'Profile', icon: FiUser, href: '/account' },
  { label: 'Addresses', icon: FiMapPin, href: '/', active: true },
  { label: 'Settings', icon: FiSettings, href: '#' },
];

const AddressingSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <aside
      aria-label="Addressing Sidebar"
      className={`
        fixed top-0 right-0 h-[400px] my-30 z-10 rounded-l-3xl shadow-lg
        flex flex-col text-white transition-all duration-300 ease-in-out
        ${isOpen
          ? 'w-64 p-6 bg-white/10 backdrop-blur-md'
          : 'w-16 p-2 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-950'}
      `}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        type="button"
        className="mb-6 ml-[2px] p-2 bg-gray-800 hover:bg-yellow-400 text-yellow-400 hover:text-black rounded-full transition self-start"
      >
        {isOpen ? <FiChevronRight size={24} /> : <FiChevronLeft size={24} />}
      </button>

      {/* Navigation Items */}
      <nav className="flex flex-col gap-2 flex-grow overflow-hidden scrollbar-none">
        {sidebarItems.map(({ label, icon: Icon, href, active }) => (
          <a
            key={label}
            href={href}
            className={`
              flex items-center gap-3 px-3 py-3 text-sm font-semibold rounded-xl transition-all
              ${isOpen ? 'justify-start' : 'justify-center'}
              ${
                active
                  ? 'bg-yellow-400 text-black'
                  : 'hover:bg-yellow-400/20 hover:text-gray-50'
              }
            `}
            aria-current={active ? 'page' : undefined}
            title={!isOpen ? label : undefined}
          >
            <Icon className="text-lg shrink-0" />
            {isOpen && <span className="whitespace-nowrap">{label}</span>}
          </a>
        ))}
      </nav>

      {/* Footer */}
      {isOpen && (
        <div className="mt-auto px-4 text-xs italic text-gray-400 select-none">
          © {new Date().getFullYear()} i am Niaz Ali
        </div>
      )}
    </aside>
  );
};

export default AddressingSidebar;
