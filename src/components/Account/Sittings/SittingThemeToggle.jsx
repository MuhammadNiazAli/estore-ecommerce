'use client';

import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import clsx from 'clsx';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark'); // default: dark
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // prevent hydration mismatch
  }, []);

  const handleToggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  if (!mounted) return null;

  return (
    <section
      aria-label="Theme toggle"
      className={clsx(
        'w-full max-w-[900px] p-6 rounded-2xl shadow-lg flex items-center justify-between transition-colors duration-300',
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
      )}
    >
      <h2 className="text-xl font-bold">Theme</h2>

      <button
        onClick={handleToggle}
        aria-pressed={theme === 'dark'}
        aria-label="Switch between dark and light theme"
        className="relative w-14 h-8 bg-gray-700 rounded-full flex items-center px-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-400"
      >
        {/* Sun icon for light mode */}
        <FiSun
          size={20}
          className={`absolute left-2 text-yellow-400 transition-opacity duration-300 ${
            theme === 'light' ? 'opacity-100' : 'opacity-30'
          }`}
        />

        {/* Moon icon for dark mode */}
        <FiMoon
          size={20}
          className={`absolute right-2 text-yellow-400 transition-opacity duration-300 ${
            theme === 'dark' ? 'opacity-100' : 'opacity-30'
          }`}
        />

        {/* Circle slider */}
        <span
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
            theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </button>
    </section>
  );
};

export default ThemeToggle;
