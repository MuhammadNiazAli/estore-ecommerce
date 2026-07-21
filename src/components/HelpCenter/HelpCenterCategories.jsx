'use client';

import React from 'react';
import {
  PackageSearch,
  RefreshCw,
  CreditCard,
  Truck,
  ShieldCheck,
} from 'lucide-react';

import { HelpCircle } from 'lucide-react';

const categories = [
  {
    title: 'Orders',
    description: 'Track, cancel, or update your orders.',
    icon: PackageSearch,
    href: '/orders',
  },
  {
    title: 'Returns',
    description: 'Start or manage a return request.',
    icon: RefreshCw,
    href: '/deals',
  },
  {
    title: 'Payments',
    description: 'Billing, refunds, and payment issues.',
    icon: CreditCard,
    href: '/payments',
  },
  {
    title: 'Shipping',
    description: 'Shipping methods, costs, and timelines.',
    icon: Truck,
    href: '/shipping',
  },
  {
    title: 'Account & Security',
    description: 'Password, privacy, and account settings.',
    icon: ShieldCheck,
    href: '/account',
  },
  {
    title: 'Technical Support',
    description: 'Help with website, app, and technical issues.',
    icon: HelpCircle,
    href: '/support',
  },
];

const HelpCenterCategories = () => {
  return (
    <section className="bg-white w-full px-4 py-12 flex justify-center mb-[-30px]">
      <div className="w-full max-w-[1000px] text-gray-900">
        <h2 className="text-2xl sm:text-3xl font-bold text-black text-center mb-12">
          Help Center Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(({ title, description, icon: Icon, href }, index) => (
            <a
              key={index}
              href={href}
              className="bg-white hover:bg-black hover:text-black transition duration-300 p-6 rounded-xl flex flex-col gap-4 group shadow-lg focus:outline-none focus:ring-4 focus:ring-black"
              tabIndex={0}
              aria-label={`Go to ${title} help center category`}
            >
              <div className="flex items-center gap-4">
                <Icon
                  className="w-7 h-7 text-black group-hover:text-black transition-colors duration-300 transform group-hover:scale-110"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="text-sm text-gray-700 group-hover:text-black transition-colors duration-300">
                {description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpCenterCategories;
