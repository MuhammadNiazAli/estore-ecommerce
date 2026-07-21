'use client';

import React from 'react';
import { Calendar, Package, ShieldCheck, Info } from 'lucide-react';

const policies = [
  {
    icon: <Calendar className="text-black" size={28} aria-hidden="true" />,
    title: 'Return Window',
    description:
      'Items can be returned within 14 days of receipt, in their original condition and packaging.',
  },
  {
    icon: <Package className="text-black" size={28} aria-hidden="true" />,
    title: 'Item Condition',
    description:
      'Products must be unused, unworn, and undamaged. Tags and original packaging must be intact.',
  },
  {
    icon: <ShieldCheck className="text-black" size={28} aria-hidden="true" />,
    title: 'Refund Process',
    description:
      'Refunds are issued within 3 business days after we receive and inspect the returned item.',
  },
  {
    icon: <Info className="text-black" size={28} aria-hidden="true" />,
    title: 'Exceptions',
    description:
      'Custom-made, perishable, and clearance items are not eligible for return or exchange.',
  },
];

const ReturnChangePolicy = () => {
  return (
    <section
      aria-labelledby="return-exchange-policy-title"
      className="bg-white text-gray-900 px-4 py-16 flex justify-center"
    >
      <div className="max-w-[1000px] w-full text-center">
        <h2
          id="return-exchange-policy-title"
          className="text-black text-4xl font-bold mb-10"
        >
          Return & Exchange Policy
        </h2>
        <p className="text-gray-700 mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
          Please read our return and exchange policies carefully to ensure a smooth process and
          quick refunds.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
          {policies.map(({ icon, title, description }, idx) => (
            <article
              key={idx}
              className="bg-white rounded-xl p-6 shadow-md hover:bg-gray-500 transition cursor-default"
              tabIndex={0}
              aria-label={title}
            >
              <div className="flex items-center mb-4 gap-4">
                <div className="flex-shrink-0">{icon}</div>
                <h3 className="text-black font-semibold text-xl">{title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReturnChangePolicy;
