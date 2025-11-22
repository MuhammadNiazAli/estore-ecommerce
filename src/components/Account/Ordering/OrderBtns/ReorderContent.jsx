'use client';

import React from 'react';

function ReorderContent({ closePanel }) {
  const reorderedItems = [
    {
      id: 1,
      name: 'Noise-Canceling Headphones',
      quantity: 1,
      unitPrice: 89.99,
      imageUrl:
        'https://images.unsplash.com/photo-1518449074235-657e2f8d5f30?auto=format&fit=crop&w=64&q=80',
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      quantity: 1,
      unitPrice: 29.99,
      imageUrl:
        'https://images.unsplash.com/photo-1587825140408-9b5ac1e3eecc?auto=format&fit=crop&w=64&q=80',
    },
    {
      id: 3,
      name: 'USB-C Charging Cable',
      quantity: 2,
      unitPrice: 15.99,
      imageUrl:
        'https://images.unsplash.com/photo-1600718372117-47df58e1c477?auto=format&fit=crop&w=64&q=80',
    },
  ];

  const handleReorder = () => {
    alert(
      'Your reorder has been placed successfully. You’ll receive an email confirmation shortly.'
    );
    closePanel();
  };

  return (
    <div className="px-4 py-6 max-w-xl mx-auto text-[14px] sm:text-[15px]">
      {/* Title */}
      <h2 className="text-yellow-400 text-2xl sm:text-3xl font-extrabold mb-5 tracking-wide text-center sm:text-left">
        Reorder Your Items
      </h2>

      {/* Intro */}
      <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base text-center sm:text-left">
        Reorder your previous items in just one click — ideal for essentials or repeat purchases.
      </p>

      {/* Reorder List */}
      <section
        aria-label="Items available for reorder"
        className="bg-gray-900 p-5 sm:p-6 rounded-lg mb-8 shadow-lg"
      >
        <h3 className="text-yellow-400 font-semibold text-lg sm:text-xl mb-4">
          Items in this reorder
        </h3>

        <ul className="divide-y divide-gray-700">
          {reorderedItems.map(({ id, name, quantity, unitPrice, imageUrl }) => (
            <li key={id} className="flex items-center gap-3 sm:gap-4 py-3">
              <img
                src={imageUrl}
                alt={name}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-md object-cover flex-shrink-0"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="text-gray-300 font-semibold text-sm sm:text-base">{name}</span>
                <span className="text-gray-400 text-xs sm:text-sm">
                  Quantity: {quantity}
                </span>
              </div>
              <span className="ml-auto text-yellow-400 font-semibold text-sm sm:text-base">
                ${(unitPrice * quantity).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Delivery Estimate */}
      <section className="bg-gray-800 p-4 sm:p-5 rounded-lg mb-8 shadow-md">
        <h4 className="text-yellow-400 font-semibold text-base sm:text-lg mb-2">
          Estimated Delivery
        </h4>
        <p className="text-gray-300 text-sm sm:text-base">
          Items will ship within 24 hours and are expected to arrive by{' '}
          <strong>July 20, 2025</strong>.
        </p>
      </section>

      {/* Support Info */}
      <section className="text-gray-400 text-xs sm:text-sm mb-6 space-y-2">
        <p>
          A confirmation email with tracking info will be sent once your reorder is processed.
        </p>
        <p>
          Want to edit your order? Visit{' '}
          <a
            href="/account/orders"
            className="text-yellow-400 underline hover:text-yellow-300"
          >
            Order History
          </a>{' '}
          or reach out to{' '}
          <a
            href="/contact"
            className="text-yellow-400 underline hover:text-yellow-300"
          >
            Customer Support
          </a>
          .
        </p>
      </section>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
        <button
          onClick={handleReorder}
          className="bg-yellow-400 text-black text-sm px-5 py-2 rounded-full font-semibold hover:bg-yellow-300 transition shadow-md w-full sm:w-auto"
          type="button"
          aria-label="Place reorder now"
        >
          Place Reorder
        </button>

        <button
          onClick={closePanel}
          className="border border-yellow-400 text-yellow-400 text-sm px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition shadow-md w-full sm:w-auto"
          type="button"
          aria-label="Cancel reorder"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ReorderContent;
