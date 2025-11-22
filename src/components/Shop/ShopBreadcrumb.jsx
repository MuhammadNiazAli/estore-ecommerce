'use client';

import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';

const breadcrumbItems = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Electronics', href: '/shop/electronics' },
  { name: 'Smartphones', href: '/shop/electronics/smartphones' },
];

const ShopBreadcrumb = () => {
  return (
    <nav
      className="w-full bg-gray-950 py-4 px-4 sm:px-6 border-b border-gray-800 shadow-sm"
      aria-label="Breadcrumb"
    >
      <div
        className="max-w-[1000px] mx-auto flex items-center gap-2 text-gray-400 overflow-x-auto whitespace-nowrap no-scrollbar"
        role="list"
      >
        <style>{`
          /* Hide scrollbar */
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}</style>

        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          return (
            <div
              key={index}
              className="flex items-center gap-2"
              role="listitem"
              aria-current={isLast ? 'page' : undefined}
            >
              <Link
                href={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isLast
                    ? 'text-amber-400 cursor-default pointer-events-none'
                    : 'text-gray-300 hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded'
                } text-xs sm:text-sm`}
                tabIndex={isLast ? -1 : 0}
                aria-current={isLast ? 'page' : undefined}
              >
                {item.name}
              </Link>
              {!isLast && (
                <FiChevronRight
                  className="text-gray-500 text-base flex-shrink-0"
                  aria-hidden="true"
                />
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default ShopBreadcrumb;
