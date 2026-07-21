'use client';

import React from 'react';

// Dummy purchase data — replace with real API data if needed
const samplePurchases = [
  {
    id: 'ORD12345',
    date: '2025-07-01',
    total: '$120.50',
    status: 'Delivered',
  },
  {
    id: 'ORD12346',
    date: '2025-06-25',
    total: '$89.99',
    status: 'Processing',
  },
  {
    id: 'ORD12347',
    date: '2025-06-15',
    total: '$45.00',
    status: 'Cancelled',
  },
];

// Custom status color classes — adjusted for yellow-themed style
const statusStyles = {
  Delivered: 'bg-green-600 text-green-100',
  Processing: 'bg-amber-700 text-amber-950',
  Cancelled: 'bg-red-600 text-red-100',
};

const PerchasigHistoryList = () => {
  const hasPurchases = samplePurchases.length > 0;

  return (
    <section
      aria-label="List of previous purchases"
      className="
        max-w-[900px] mx-auto px-6 py-10
        bg-white
        rounded-3xl shadow-2xl
        lg:ml-[-20px]
      "
    >
      {!hasPurchases ? (
        <p className="text-center text-amber-500 py-10 font-semibold">
          No purchases found.
        </p>
      ) : (
        <ul className="space-y-6">
          {samplePurchases.map(({ id, date, total, status }) => {
            const statusClass = statusStyles[status] || 'bg-amber-900 text-amber-400';

            return (
              <li
                key={id}
                className="
                  bg-amber-900 rounded-3xl shadow-md p-6
                  flex flex-col sm:flex-row sm:items-center justify-between gap-4
                "
              >
                {/* Order ID & Date */}
                <div>
                  <p className="text-amber-600 font-semibold text-lg">{id}</p>
                  <p className="text-amber-500 text-sm">Date: {date}</p>
                </div>

                {/* Total & Status */}
                <div>
                  <p className="text-amber-300 font-semibold text-lg">{total}</p>
                  <span
                    className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-semibold ${statusClass}`}
                  >
                    {status}
                  </span>
                </div>

                {/* Action Button */}
                <button
                  type="button"
                  aria-label={`View details for order ${id}`}
                  className="
                    mt-3 sm:mt-0 px-7 py-2.5 rounded-full
                    bg-amber-600 text-amber-950 font-semibold
                    hover:bg-amber-500 shadow-md transition duration-300
                    focus:outline-none focus:ring-4 focus:ring-amber-600 focus:ring-offset-2
                  "
                >
                  View Details
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default PerchasigHistoryList;
