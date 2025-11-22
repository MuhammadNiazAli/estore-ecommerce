'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

const HelpCenterBreadcrumb = () => {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Help Center', href: '/help-center' },
    { label: 'How to Cancel an Order', href: '/help-center/cancel-order' },
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-gray-900 w-full px-4 pt-6 pb-2 flex justify-center"
    >
      <ol
        className="w-full max-w-[1000px] flex items-center text-sm text-yellow-200 space-x-2 overflow-x-auto no-scrollbar"
        role="list"
      >
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <li
              key={index}
              className="flex items-center space-x-2 whitespace-nowrap flex-shrink-0"
            >
              {/* Chevron separator except for first */}
              {index !== 0 && (
                <ChevronRight
                  size={16}
                  className="text-yellow-400 flex-shrink-0"
                  aria-hidden="true"
                />
              )}

              {!isLast ? (
                <a
                  href={crumb.href}
                  className="hover:underline hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded transition"
                >
                  {crumb.label}
                </a>
              ) : (
                <span
                  className="text-yellow-400 font-semibold"
                  aria-current="page"
                >
                  {crumb.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default HelpCenterBreadcrumb;
