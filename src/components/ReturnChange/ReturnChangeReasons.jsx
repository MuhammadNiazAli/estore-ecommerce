'use client';

import React from 'react';
import { AlertCircle, Package, Truck, Slash, Smile, XCircle } from 'lucide-react';

const reasons = [
  {
    icon: <Package className="text-black" size={28} aria-hidden="true" />,
    title: 'Wrong Item Delivered',
    description: 'Received a different product than what you ordered.',
  },
  {
    icon: <Truck className="text-black" size={28} aria-hidden="true" />,
    title: 'Late Delivery',
    description: 'The delivery took longer than expected or promised.',
  },
  {
    icon: <AlertCircle className="text-black" size={28} aria-hidden="true" />,
    title: 'Damaged Item',
    description: 'The product arrived damaged or defective.',
  },
  {
    icon: <Slash className="text-black" size={28} aria-hidden="true" />,
    title: 'Changed Mind',
    description: 'You decided you no longer want the product.',
  },
  {
    icon: <XCircle className="text-black" size={28} aria-hidden="true" />,
    title: 'Incorrect Size or Fit',
    description: 'The item did not fit as expected.',
  },
  {
    icon: <Smile className="text-black" size={28} aria-hidden="true" />,
    title: 'Better Price Found',
    description: 'Found the product at a better price elsewhere.',
  },
];

const ReturnChangeReasons = () => {
  return (
    <section
      aria-labelledby="return-exchange-reasons-title"
      className="bg-white text-gray-900 px-4 py-16 flex justify-center"
    >
      <div className="max-w-[1000px] w-full text-center">
        <h2
          id="return-exchange-reasons-title"
          className="text-black text-4xl font-bold mb-10"
        >
          Common Return & Exchange Reasons
        </h2>
        <p className="text-gray-700 mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
          Understanding why customers return or exchange helps us improve. Here are the most common reasons:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
          {reasons.map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              role="button"
              tabIndex={0}
              aria-label={`${title}: ${description}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  // Optional: handle click or interaction here
                }
              }}
              className="bg-white rounded-xl p-6 shadow-md hover:bg-gray-500 transition cursor-pointer focus:outline-black focus:ring-2 focus:ring-black focus:ring-offset-1"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-black font-semibold text-xl mb-2">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReturnChangeReasons;
