'use client';

import React from 'react';

const statusClasses = {
  Delivered: 'bg-black text-black',
  Processing: 'bg-black text-black',
  Cancelled: 'bg-black text-black',
};

const PerchasigHistoryDetails = ({ order, onClose }) => {
  if (!order) return null;

  const { id, date, status, total, items = [] } = order;
  const statusBadge = statusClasses[status] || 'bg-black text-black';

  return (
    <section
      aria-label={`Details for order ${id}`}
      className="
        max-w-[900px] mx-auto
        bg-gradient-to-br from-black via-gray-700 to-gray-900
        rounded-3xl shadow-2xl p-8 text-black
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
          bg-black text-black font-semibold
          hover:bg-black transition duration-300 shadow-md
          focus:outline-none focus:ring-4 focus:ring-black focus:ring-offset-2
        "
      >
        Close
      </button>

      {/* Order Overview */}
      <h2 className="text-3xl font-extrabold mb-4 text-black">
        Order #{id}
      </h2>
      <div className="mb-6 space-y-2 text-black">
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
      <h3 className="text-xl font-semibold mb-3 text-black">
        Items Purchased:
      </h3>
      <ul className="space-y-4 mb-6">
        {items.length === 0 ? (
          <li className="text-black italic">No items available for this order.</li>
        ) : (
          items.map(({ id: itemId, name, quantity, price }) => (
            <li
              key={itemId}
              className="
                flex justify-between items-center
                bg-black rounded-lg p-4
              "
            >
              <div>
                <p className="font-semibold text-black">{name}</p>
                <p className="text-black text-sm">Qty: {quantity}</p>
              </div>
              <p className="font-semibold text-black">{price}</p>
            </li>
          ))
        )}
      </ul>

      {/* Order Total */}
      <div className="text-right">
        <p className="text-black font-bold text-lg">Total: {total}</p>
      </div>
    </section>
  );
};

export default PerchasigHistoryDetails;
