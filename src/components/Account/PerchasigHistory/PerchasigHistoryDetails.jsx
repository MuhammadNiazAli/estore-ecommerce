'use client';

import React from 'react';

const statusClasses = {
  Delivered: 'bg-green-600 text-green-100',
  Processing: 'bg-yellow-500 text-yellow-900',
  Cancelled: 'bg-red-600 text-red-100',
};

const PerchasigHistoryDetails = ({ order, onClose }) => {
  if (!order) return null;

  const { id, date, status, total, items = [] } = order;
  const statusBadge = statusClasses[status] || 'bg-yellow-700 text-yellow-200';

  return (
    <section
      aria-label={`Details for order ${id}`}
      className="
        max-w-[900px] mx-auto
        bg-gradient-to-br from-yellow-900 via-yellow-800 to-yellow-700
        rounded-3xl shadow-2xl p-8 text-yellow-100
      "
      style={{ minHeight: '320px' }}
    >
      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close order details"
        className="
          mb-6 px-6 py-2 rounded-full
          bg-yellow-400 text-yellow-900 font-semibold
          hover:bg-yellow-300 transition duration-300 shadow-md
          focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-offset-2
        "
      >
        Close
      </button>

      {/* Order Overview */}
      <h2 className="text-3xl font-extrabold mb-4 text-yellow-100">
        Order #{id}
      </h2>
      <div className="mb-6 space-y-2 text-yellow-200">
        <p>
          <span className="font-semibold">Order Date:</span> {date}
        </p>
        <p>
          <span className="font-semibold">Status:</span>{' '}
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${statusBadge}`}
          >
            {status}
          </span>
        </p>
        <p>
          <span className="font-semibold">Total Amount:</span> {total}
        </p>
      </div>

      {/* Items List */}
      <h3 className="text-xl font-semibold mb-3 text-yellow-100">
        Items Purchased:
      </h3>
      <ul className="space-y-4 mb-6">
        {items.length === 0 ? (
          <li className="text-yellow-300 italic">No items available for this order.</li>
        ) : (
          items.map(({ id: itemId, name, quantity, price }) => (
            <li
              key={itemId}
              className="
                flex justify-between items-center
                bg-yellow-800 rounded-lg p-4
              "
            >
              <div>
                <p className="font-semibold text-yellow-100">{name}</p>
                <p className="text-yellow-300 text-sm">Qty: {quantity}</p>
              </div>
              <p className="font-semibold text-yellow-100">{price}</p>
            </li>
          ))
        )}
      </ul>

      {/* Order Total */}
      <div className="text-right">
        <p className="text-yellow-400 font-bold text-lg">Total: {total}</p>
      </div>
    </section>
  );
};

export default PerchasigHistoryDetails;
