'use client';

import React from 'react';

const statusColors = {
  Delivered: 'bg-green-600 text-green-100',
  Processing: 'bg-yellow-500 text-yellow-900',
  Cancelled: 'bg-red-600 text-red-100',
};

const PerchasigHistoryItem = ({ id, date, total, status, onViewDetails }) => {
  const statusClass = statusColors[status] || 'bg-yellow-700 text-yellow-200';

  return (
    <li
      className="
        bg-yellow-800 rounded-3xl shadow-md p-6
        flex flex-col sm:flex-row sm:items-center justify-between gap-4
      "
    >
      {/* Order Info */}
      <div>
        <p className="text-yellow-400 font-semibold text-lg">{id}</p>
        <p className="text-yellow-300 text-sm">Date: {date}</p>
      </div>

      {/* Total & Status */}
      <div>
        <p className="text-yellow-100 font-semibold text-lg">{total}</p>
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
          bg-yellow-400 text-yellow-900 font-semibold
          hover:bg-yellow-300 transition duration-300 shadow-md
          focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2
        "
      >
        View Details
      </button>
    </li>
  );
};

export default PerchasigHistoryItem;
