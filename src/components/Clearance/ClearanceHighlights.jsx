'use client';
import React from 'react';
import { Truck, ShieldCheck, CreditCard, Gift } from 'lucide-react';

const highlights = [
  {
    id: 1,
    icon: <Truck className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600" />,
    title: 'Free Shipping',
    description: 'Enjoy free and fast shipping on all orders above $50.',
  },
  {
    id: 2,
    icon: <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600" />,
    title: 'Secure Shopping',
    description: 'Your transactions are protected with 256-bit SSL encryption.',
  },
  {
    id: 3,
    icon: <CreditCard className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600" />,
    title: 'Easy Payments',
    description: 'Multiple payment options including COD and EMIs available.',
  },
  {
    id: 4,
    icon: <Gift className="w-10 h-10 sm:w-12 sm:h-12 text-amber-600" />,
    title: 'Exclusive Rewards',
    description: 'Earn points on every purchase & redeem for discounts.',
  },
];

const ClearanceHighlights = () => {
  return (
    <section
      aria-label="Best Deals Highlights"
      className="bg-white text-gray-900 w-full flex justify-center py-12 px-4 sm:px-6 my-[-30px]"
    >
      <div className="w-full max-w-[1000px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {highlights.map((item) => (
          <article
            key={item.id}
            tabIndex={0}
            role="region"
            aria-labelledby={`highlight-title-${item.id}`}
            className="bg-white rounded-xl p-6 flex flex-col items-center text-center cursor-pointer
                       focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2
                       hover:scale-[1.06] hover:bg-gray-50 active:scale-[0.98]
                       transition-transform duration-300 shadow-lg select-none"
          >
            <div className="mb-5">{item.icon}</div>
            <h3
              id={`highlight-title-${item.id}`}
              className="text-lg sm:text-xl font-semibold mb-3"
            >
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-[280px]">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ClearanceHighlights;
