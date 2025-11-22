'use client';

import React from 'react';

const SupportingFooter = () => {
  return (
    <footer
      aria-label="Support page footer"
      className="w-full bg-gray-900 text-yellow-100 py-8 mt-16 rounded-t-3xl shadow-inner"
    >
      <div className="max-w-[900px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-4 md:mb-0 select-none">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </p>

        <nav className="flex space-x-8" aria-label="Footer navigation">
          {[
            { href: '/privacy', label: 'Privacy Policy' },
            { href: '/terms', label: 'Terms of Service' },
            { href: '/contact', label: 'Contact Us' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative text-yellow-400 hover:text-yellow-300 transition-colors duration-300
                after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-yellow-400
                after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              aria-label={label}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default SupportingFooter;
