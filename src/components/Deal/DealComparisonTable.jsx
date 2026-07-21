'use client';

import React from 'react';

const plans = [
  {
    title: 'Basic',
    price: '$9.99/mo',
    features: ['1 Device', 'Email Support', 'Standard Delivery'],
    isBest: false,
  },
  {
    title: 'Pro',
    price: '$19.99/mo',
    features: ['3 Devices', 'Priority Support', 'Free Express Delivery'],
    isBest: true,
  },
  {
    title: 'Ultimate',
    price: '$29.99/mo',
    features: ['Unlimited Devices', '24/7 Support', 'Free Express + Gift'],
    isBest: false,
  },
];

const DealComparisonTable = () => {
  return (
    <section
      aria-label="Compare subscription plans"
      className="w-full max-w-[1100px] mx-auto px-4 py-20 mb-[-100px]"
    >
      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 select-none">
        Compare Our Plans
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {plans.map((plan, index) => (
          <article
            key={index}
            role="region"
            aria-labelledby={`plan-title-${index}`}
            className={`
              relative flex flex-col justify-between rounded-3xl p-8 border-2 transition duration-300
              ${
                plan.isBest
                  ? 'bg-gradient-to-br from-amber-900 via-amber-900 to-amber-950 border-amber-700 text-gray-900 shadow-xl scale-105 z-10'
                  : 'bg-white border-gray-200 text-gray-700 hover:shadow-2xl hover:scale-[1.02]'
              }
            `}
          >
            {plan.isBest && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-800 px-4 py-1.5 rounded-full text-sm font-bold shadow-md select-none animate-pulse">
                 Recommended
              </div>
            )}

            <div>
              <h3
                id={`plan-title-${index}`}
                className="text-2xl md:text-3xl font-extrabold text-center mb-4"
              >
                {plan.title}
              </h3>

              <p className="text-center text-4xl font-bold mb-8">{plan.price}</p>

              <ul className="space-y-4 text-base leading-relaxed">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-400 text-xl">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              className={`mt-10 w-full py-3 rounded-xl text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-offset-2
                ${
                  plan.isBest
                    ? 'bg-white text-amber-900 hover:bg-gray-500 focus:ring-amber-700 focus:ring-offset-amber-950'
                    : 'bg-white text-gray-900 hover:bg-gray-500 focus:ring-gray-400 focus:ring-offset-gray-900'
                }
              `}
            >
              Choose {plan.title}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default DealComparisonTable;
