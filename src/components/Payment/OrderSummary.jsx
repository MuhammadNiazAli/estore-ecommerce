'use client';

import React from 'react';

export default function OrderSummary({ cartItems = [] }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.1;
  const shippingFee = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + tax + shippingFee;

  if (cartItems.length === 0) {
    return (
      <section className="w-full min-h-[60vh] bg-yellow-900 px-4 py-16 flex justify-center items-center">
        <div className="w-full max-w-[600px] bg-yellow-800/90 border border-yellow-600 shadow-xl rounded-2xl p-6 sm:p-10 text-center text-white backdrop-blur-md">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Order Summary</h2>
          <p className="text-yellow-100/80 text-sm sm:text-base">Your cart is currently empty.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-gray-900 px-4 py-14 sm:py-20 flex justify-center items-center">
      <div className="w-full max-w-[700px] bg-gray-900 border border-yellow-600 shadow-2xl rounded-3xl p-5 sm:p-10 backdrop-blur-md mb-[-100px] transition-all">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white text-center mb-8 sm:mb-10 tracking-wide">
          Order Summary
        </h2>

        <ul role="list" className="divide-y divide-yellow-700/50">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-5"
            >
              <div className="flex items-center gap-4 w-full sm:w-auto">
                {item.image && (
                  <img
                    src={item.image}
                    alt={`Image of ${item.name}`}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl border border-yellow-600 flex-shrink-0"
                    width={80}
                    height={80}
                    loading="lazy"
                  />
                )}
                <div className="flex flex-col flex-grow min-w-0">
                  <p className="text-white font-semibold text-sm sm:text-lg truncate">{item.name}</p>
                  <p className="text-xs sm:text-base text-yellow-100/80">
                    Qty: {item.qty} × ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <span className="text-white font-semibold text-base sm:text-xl whitespace-nowrap mt-1 sm:mt-0">
                ${(item.price * item.qty).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>

        {/* Summary Totals */}
        <div className="mt-8 sm:mt-10 border-t border-yellow-700 pt-6 sm:pt-8 text-yellow-100 space-y-4 sm:space-y-6 text-sm sm:text-base">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (10%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className={shippingFee === 0 ? 'text-green-300 font-semibold' : ''}>
              {shippingFee === 0 ? 'Free' : `$${shippingFee.toFixed(2)}`}
            </span>
          </div>
          <div className="flex justify-between text-lg sm:text-2xl font-extrabold text-white border-t border-yellow-600 pt-5">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-center sm:justify-center">
          <button
            type="button"
            className="
              w-full sm:w-auto
              bg-gradient-to-r from-yellow-400 to-yellow-600
              hover:from-yellow-500 hover:to-yellow-700
              text-gray-900 font-extrabold
              px-6 sm:px-12 py-3 sm:py-4
              rounded-full shadow-md hover:shadow-lg
              focus:outline-none focus:ring-4 focus:ring-yellow-300
              transition text-sm sm:text-lg
            "
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </section>
  );
}
