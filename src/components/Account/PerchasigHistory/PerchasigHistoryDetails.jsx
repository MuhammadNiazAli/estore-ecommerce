'use client';

import React from 'react';

const statusClasses = {
  Delivered: 'bg-green-600 text-green-100',
  Processing: 'bg-amber-700 text-amber-950',
  Cancelled: 'bg-red-600 text-red-100',
};

const PerchasigHistoryDetails = ({ order, onClose }) => {
  if (!order) return null;

  const { id, date, status, total, items = [] } = order;
  const statusBadge = statusClasses[status] || 'bg-amber-900 text-amber-400';

  return (
    <section
      aria-label={`Details for order ${id}`}
      className="
        max-w-[900px] mx-auto
        bg-gradient-to-br from-amber-950 via-amber-900 to-amber-900
        rounded-3xl shadow-2xl p-8 text-amber-300
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
          bg-amber-600 text-amber-950 font-semibold
          hover:bg-amber-500 transition duration-300 shadow-md
          focus:outline-none focus:ring-4 focus:ring-amber-600 focus:ring-offset-2
        "
      >
        Close
      </button>

      {/* Order Overview */}
      <h2 className="text-3xl font-extrabold mb-4 text-amber-300">
        Order #{id}
      </h2>
      <div className="mb-6 space-y-2 text-amber-400">
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
      <h3 className="text-xl font-semibold mb-3 text-amber-300">
        Items Purchased:
      </h3>
      <ul className="space-y-4 mb-6">
        {items.length === 0 ? (
          <li className="text-amber-500 italic">No items available for this order.</li>
        ) : (
          items.map(({ id: itemId, name, quantity, price }) => (
            <li
              key={itemId}
              className="
                flex justify-between items-center
                bg-amber-900 rounded-lg p-4
              "
            >
              <div>
                <p className="font-semibold text-amber-300">{name}</p>
                <p className="text-amber-500 text-sm">Qty: {quantity}</p>
              </div>
              <p className="font-semibold text-amber-300">{price}</p>
            </li>
          ))
        )}
      </ul>

      {/* Order Total */}
      <div className="text-right">
        <p className="text-amber-600 font-bold text-lg">Total: {total}</p>
      </div>
    </section>
  );
};

export default PerchasigHistoryDetails;
