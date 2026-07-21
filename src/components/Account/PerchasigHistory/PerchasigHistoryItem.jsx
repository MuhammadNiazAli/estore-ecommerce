'use client';

import React from 'react';

const statusColors = {
  Delivered: 'bg-green-600 text-green-100',
  Processing: 'bg-amber-700 text-amber-950',
  Cancelled: 'bg-red-600 text-red-100',
};

const PerchasigHistoryItem = ({ id, date, total, status, onViewDetails }) => {
  const statusClass = statusColors[status] || 'bg-amber-900 text-amber-400';

  return (
    <li
      className="
        bg-amber-900 rounded-3xl shadow-md p-6
        flex flex-col sm:flex-row sm:items-center justify-between gap-4
      "
    >
      {/* Order Info */}
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

      {/* View Details Button */}
      <button
        type="button"
        onClick={() => onViewDetails?.(id)}
        aria-label={`View details for order ${id}`}
        className="
          mt-3 sm:mt-0 px-7 py-2.5 rounded-full
          bg-amber-600 text-amber-950 font-semibold
          hover:bg-amber-500 transition duration-300 shadow-md
          focus:outline-none focus:ring-4 focus:ring-amber-600 focus:ring-offset-2
        "
      >
        View Details
      </button>
    </li>
  );
};

export default PerchasigHistoryItem;
