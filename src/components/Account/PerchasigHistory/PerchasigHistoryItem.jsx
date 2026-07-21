'use client';

import React from 'react';

const statusColors = {
  Delivered: 'bg-black text-black',
  Processing: 'bg-black text-black',
  Cancelled: 'bg-black text-black',
};

const PerchasigHistoryItem = ({ id, date, total, status, onViewDetails }) => {
  const statusClass = statusColors[status] || 'bg-black text-black';

  return (
    <li
      className="
        bg-black rounded-3xl shadow-md p-6
        flex flex-col sm:flex-row sm:items-center justify-between gap-4
      "
    >
      {/* Order Info */}
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

      {/* View Details Button */}
      <button
        type="button"
        onClick={() => onViewDetails?.(id)}
        aria-label={`View details for order ${id}`}
        className="
          mt-3 sm:mt-0 px-7 py-2.5 rounded-full
          bg-black text-black font-semibold
          hover:bg-black transition duration-300 shadow-md
          focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-2
        "
      >
        View Details
      </button>
    </li>
  );
};

export default PerchasigHistoryItem;
