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
  Delivered: 'bg-black text-black',
  Processing: 'bg-black text-black',
  Cancelled: 'bg-black text-black',
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
        <p className="text-center text-black py-10 font-semibold">
          No purchases found.
        </p>
      ) : (
        <ul className="space-y-6">
          {samplePurchases.map(({ id, date, total, status }) => {
            const statusClass = statusStyles[status] || 'bg-black text-black';

            return (
              <li
                key={id}
                className="
                  bg-black rounded-3xl shadow-md p-6
                  flex flex-col sm:flex-row sm:items-center justify-between gap-4
                "
              >
                {/* Order ID & Date */}
                <div>
                  <p className="text-black font-semibold text-lg">{id}</p>
                  <p className="text-black text-sm">Date: {date}</p>
                </div>

                {/* Total & Status */}
                <div>
                  <p className="text-black font-semibold text-lg">{total}</p>
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
                    bg-black text-black font-semibold
                    hover:bg-black shadow-md transition duration-300
                    focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-2
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
