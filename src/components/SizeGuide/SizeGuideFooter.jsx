import React from 'react';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    svg: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6 md:w-7 md:h-7"
        aria-hidden="true"
      >
        <path d="M22.675 0h-21.35C.596 0 0 .593 0 1.326v21.348C0 23.406.595 24 1.326 24h11.495v-9.294H9.692v-3.622h3.13V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.098 2.796.142v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0z" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    svg: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6 md:w-7 md:h-7"
        aria-hidden="true"
      >
        <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.936 4.936 0 002.164-2.724c-.951.563-2.005.973-3.127 1.195a4.916 4.916 0 00-8.373 4.482A13.947 13.947 0 011.671 3.149 4.92 4.92 0 003.195 9.72a4.903 4.903 0 01-2.224-.616v.061a4.92 4.92 0 003.946 4.827 4.902 4.902 0 01-2.217.084 4.923 4.923 0 004.59 3.414A9.867 9.867 0 010 21.543a13.952 13.952 0 007.548 2.209c9.058 0 14.01-7.514 14.01-14.01 0-.213-.005-.425-.015-.636A10.012 10.012 0 0024 4.557z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    svg: (
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6 md:w-7 md:h-7"
        aria-hidden="true"
      >
        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.75 2a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
      </svg>
    ),
  },
];

const SizeGuideFooter = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10 px-4 mb-[-100px]">
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        {/* Left text */}
        <div className="text-center md:text-left text-sm md:text-base leading-relaxed">
          <p>&copy; {new Date().getFullYear()} YourStoreName. All rights reserved.</p>
          <p className="mt-1 text-yellow-400 font-semibold select-none">
            Need help?{' '}
            <a
              href="/contact"
              className="text-yellow-300 hover:text-yellow-500 underline"
            >
              Contact Support
            </a>
          </p>
        </div>

        {/* Links */}
        <nav
          className="flex flex-wrap justify-center md:justify-center gap-6 text-sm md:text-base"
          aria-label="Footer navigation"
        >
          <a
            href="/returns"
            className="hover:text-yellow-400 transition-colors"
            aria-label="Return Policy"
          >
            Return Policy
          </a>
          <a
            href="/shipping"
            className="hover:text-yellow-400 transition-colors"
            aria-label="Shipping Information"
          >
            Shipping Info
          </a>
          <a
            href="/faq"
            className="hover:text-yellow-400 transition-colors"
            aria-label="FAQ"
          >
            FAQ
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-6 justify-center">
          {socialLinks.map(({ name, href, svg }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="text-yellow-400 hover:text-yellow-500 transition-colors"
            >
              {svg}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default SizeGuideFooter;
