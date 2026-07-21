'use client';

import React from 'react';
import { FiTruck, FiGlobe, FiZap, FiBox } from 'react-icons/fi';

const rates = [
  {
    method: 'Eco Shipping',
    icon: <FiBox />,
    delivery: '5–10 business days',
    cost: '$3.99',
    tracking: 'Yes',
    insurance: 'Optional',
    carrier: 'USPS',
  },
  {
    method: 'Standard Shipping',
    icon: <FiTruck />,
    delivery: '3–7 business days',
    cost: '$5.99',
    tracking: 'Yes',
    insurance: 'Optional',
    carrier: 'UPS',
  },
  {
    method: 'Express Shipping',
    icon: <FiZap />,
    delivery: '1–3 business days',
    cost: '$14.99',
    tracking: 'Yes',
    insurance: 'Included',
    carrier: 'FedEx',
  },
  {
    method: 'Overnight Shipping',
    icon: <FiZap />,
    delivery: '1 business day',
    cost: '$29.99',
    tracking: 'Yes',
    insurance: 'Included',
    carrier: 'DHL Express',
  },
  {
    method: 'International Shipping',
    icon: <FiGlobe />,
    delivery: '5–15 business days',
    cost: 'Varies by destination',
    tracking: 'Yes',
    insurance: 'Optional',
    carrier: 'GlobalPost',
  },
  {
    method: 'Drone Delivery',
    icon: <FiZap />,
    delivery: '2–5 hours',
    cost: '$49.99',
    tracking: 'Yes',
    insurance: 'Included',
    carrier: 'Private Fleet',
  },
];

const ShippingRates = () => {
  return (
    <section
      aria-label="Shipping rates"
      className="max-w-[900px] mx-auto px-6 py-16 sm:py-24 text-gray-700 my-[-100px] mb-[-20px]"
    >
      {/* Custom Scrollbar Styles (No Plugin Needed) */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #ffffff; /* Tailwind's gray-900 */
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #ffffff; /* Tailwind's gray-950 */
          border-radius: 9999px;
        }
      `}</style>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-400 mb-8 text-center drop-shadow-md">
        Shipping Rates
      </h2>

      {/* Desktop Table View */}
      <div className="hidden sm:block overflow-x-auto rounded-2xl shadow-lg shadow-black/40 custom-scrollbar">
        <table className="w-full min-w-[900px] text-left border-collapse bg-gradient-to-tr from-white via-white to-white rounded-2xl">
          <thead>
            <tr>
              {['Method', 'Delivery Time', 'Cost', 'Tracking', 'Insurance', 'Carrier'].map((header) => (
                <th
                  key={header}
                  className="sticky top-0 z-10 bg-white bg-opacity-95 text-amber-400 text-lg font-semibold border-b border-gray-200 px-6 py-4 select-none backdrop-blur"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rates.map(({ method, delivery, cost, tracking, insurance, carrier, icon }, index) => (
              <tr
                key={method}
                className={`border-b border-gray-200 last:border-b-0 transition-colors duration-300 cursor-default ${
                  index % 2 === 0 ? 'bg-white bg-opacity-50' : 'bg-white bg-opacity-40'
                } hover:bg-amber-600/30`}
              >
                <td className="px-6 py-4 whitespace-nowrap font-medium text-amber-300 flex items-center gap-2">
                  <span className="text-amber-400 text-lg">{icon}</span>
                  {method}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{delivery}</td>
                <td className="px-6 py-4 whitespace-nowrap text-amber-300 font-semibold">{cost}</td>
                <td className="px-6 py-4 whitespace-nowrap">{tracking}</td>
                <td className="px-6 py-4 whitespace-nowrap">{insurance}</td>
                <td className="px-6 py-4 whitespace-nowrap">{carrier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="sm:hidden space-y-6">
        {rates.map(({ method, delivery, cost, tracking, insurance, carrier, icon }, index) => (
          <div
            key={method}
            className={`bg-gradient-to-tr from-white via-white to-white rounded-2xl p-5 shadow-lg shadow-black/40 ${
              index % 2 === 0 ? 'bg-opacity-70' : 'bg-opacity-60'
            } hover:bg-amber-600/30 transition-colors duration-300`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-amber-400 text-xl">{icon}</span>
              <h3 className="text-amber-400 text-xl font-semibold">{method}</h3>
            </div>
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Delivery:</span>
                <span>{delivery}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Cost:</span>
                <span className="text-amber-300 font-semibold">{cost}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Tracking:</span>
                <span>{tracking}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Insurance:</span>
                <span>{insurance}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Carrier:</span>
                <span>{carrier}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <p className="mt-8 text-center text-gray-600 text-sm sm:text-base max-w-[600px] mx-auto select-text">
        * Delivery times are estimates and may vary depending on location, customs, weather, or unforeseen delays. Carrier service level guarantees may not apply to all destinations.
      </p>
    </section>
  );
};

export default ShippingRates;
