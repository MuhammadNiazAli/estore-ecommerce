'use client';

import React, { useState, useEffect } from 'react';
import { FiHome, FiHelpCircle, FiPhone, FiFileText, FiUser } from 'react-icons/fi';

const navItems = [
  { id: 'overview', label: 'Overview', icon: <FiHome />, href: '#overview' },
  { id: 'support', label: 'Support Center', icon: <FiHelpCircle />, href: '#support' },
  { id: 'contact', label: 'Contact Us', icon: <FiPhone />, href: '#contact' },
  { id: 'faq', label: 'FAQ', icon: <FiFileText />, href: '#faq' },
  { id: 'profile', label: 'Your Profile', icon: <FiUser />, href: '#profile' },
];

const SupportingSidebar = () => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveId(window.location.hash.replace('#', '') || 'overview');
    };
    handleHashChange(); // initial load
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <nav
      aria-label="Support page navigation"
      className="w-64 
        bg-gradient-to-b from-black via-gray-700 to-gray-900 
        rounded-3xl p-6 text-black shadow-2xl sticky top-20 self-start select-none"
    >
      <ul className="space-y-6">
        {navItems.map(({ id, label, icon, href }) => {
          const isActive = id === activeId;
          return (
            <li key={id}>
              <a
                href={href}
                className={`
                  flex items-center gap-3 text-lg font-medium rounded-md px-4 py-2
                  transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-1
                  ${
                    isActive
                      ? 'bg-black text-black shadow-inner'
                      : 'hover:bg-black hover:text-black text-black'
                  }
                `}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => setActiveId(id)}
              >
                <span className="text-black">{icon}</span>
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SupportingSidebar;
