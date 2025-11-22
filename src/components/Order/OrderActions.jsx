'use client';

import React from 'react';
import {
  FiDownload,
  FiMessageCircle,
  FiRefreshCw,
  FiFileText,
  FiCheckCircle,
} from 'react-icons/fi';

const OrderActions = ({ status = 'Processing' }) => {
  const isDelivered = status.toLowerCase() === 'delivered';
  const isShipped = status.toLowerCase() === 'shipped' || isDelivered;

  const baseBtn =
    'group flex items-center justify-center gap-2 min-w-[160px] px-6 py-3 rounded-full text-base font-semibold shadow-xl transition-all duration-300 backdrop-blur-md';

  const iconClass = 'transition-transform duration-300';

  return (
    <section className="max-w-6xl mx-auto mt-14 px-4 sm:px-6 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-[-80px]">
      {/* Download Invoice */}
      <button
        type="button"
        aria-label="Download Invoice"
        onClick={() => alert('Download Invoice clicked')}
        className={`${baseBtn} bg-gradient-to-r from-indigo-600 to-indigo-500 text-white hover:scale-105 hover:shadow-indigo-500/30 focus:outline-none focus:ring-4 focus:ring-indigo-400`}
      >
        <FiDownload size={20} className={`${iconClass} group-hover:scale-110`} />
        Download Invoice
      </button>

      {/* Leave Feedback */}
      {isDelivered && (
        <button
          type="button"
          aria-label="Leave Feedback"
          onClick={() => alert('Leave Feedback clicked')}
          className={`${baseBtn} bg-gradient-to-r from-emerald-600 to-green-500 text-white hover:scale-105 hover:shadow-green-500/30 focus:outline-none focus:ring-4 focus:ring-green-400`}
        >
          <FiCheckCircle size={20} className={`${iconClass} group-hover:scale-110`} />
          Leave Feedback
        </button>
      )}

      {/* Request Return */}
      {isShipped && (
        <button
          type="button"
          aria-label="Request Return"
          onClick={() => alert('Request Return clicked')}
          className={`${baseBtn} bg-gradient-to-r from-red-600 to-pink-500 text-white hover:scale-105 hover:shadow-red-500/30 focus:outline-none focus:ring-4 focus:ring-red-400`}
        >
          <FiRefreshCw size={20} className={`${iconClass} group-hover:rotate-180`} />
          Request Return
        </button>
      )}

      {/* View Order Details */}
      <button
        type="button"
        aria-label="View Order Details"
        onClick={() => alert('View Order Details clicked')}
        className={`${baseBtn} border-2 border-gray-300 text-gray-100 bg-gray-800/30 hover:bg-gray-700/50 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-500`}
      >
        <FiFileText size={20} className={`${iconClass} group-hover:scale-110`} />
        View Details
      </button>

      {/* Ask a Question */}
      <button
        type="button"
        aria-label="Ask a Question"
        onClick={() => alert('Contact Support clicked')}
        className={`${baseBtn} border-2 border-blue-500 text-blue-300 bg-blue-900/10 hover:bg-blue-900/30 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400`}
      >
        <FiMessageCircle size={20} className={`${iconClass} group-hover:scale-110`} />
        Ask a Question
      </button>
    </section>
  );
};

export default OrderActions;
