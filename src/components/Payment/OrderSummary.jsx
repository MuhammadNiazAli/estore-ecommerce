'use client';

import React from 'react';

export default function OrderSummary({ cartItems = [] }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.1;
  const shippingFee = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + tax + shippingFee;

  if (cartItems.length === 0) {
    return (
      <section className="w-full min-h-[60vh] bg-amber-950 px-4 py-16 flex justify-center items-center">
        <div className="w-full max-w-[600px] bg-amber-900/90 border border-amber-800 shadow-xl rounded-2xl p-6 sm:p-10 text-center text-gray-900 backdrop-blur-md">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Order Summary</h2>
          <p className="text-amber-300/80 text-sm sm:text-base">Your cart is currently empty.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white px-4 py-14 sm:py-20 flex justify-center items-center">
      <div className="w-full max-w-[700px] bg-white border border-amber-800 shadow-2xl rounded-3xl p-5 sm:p-10 backdrop-blur-md mb-[-100px] transition-all">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 text-center mb-8 sm:mb-10 tracking-wide">
          Order Summary
        </h2>

        <ul role="list" className="divide-y divide-amber-900/50">
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
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl border border-amber-800 flex-shrink-0"
                    width={80}
                    height={80}
                    loading="lazy"
                  />
                )}
                <div className="flex flex-col flex-grow min-w-0">
                  <p className="text-gray-900 font-semibold text-sm sm:text-lg truncate">{item.name}</p>
                  <p className="text-xs sm:text-base text-amber-300/80">
                    Qty: {item.qty} × ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <span className="text-gray-900 font-semibold text-base sm:text-xl whitespace-nowrap mt-1 sm:mt-0">
                ${(item.price * item.qty).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>

        {/* Summary Totals */}
        <div className="mt-8 sm:mt-10 border-t border-amber-900 pt-6 sm:pt-8 text-amber-300 space-y-4 sm:space-y-6 text-sm sm:text-base">
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
          <div className="flex justify-between text-lg sm:text-2xl font-extrabold text-gray-900 border-t border-amber-800 pt-5">
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
              bg-gradient-to-r from-amber-600 to-amber-800
              hover:from-amber-700 hover:to-amber-900
              text-gray-900 font-extrabold
              px-6 sm:px-12 py-3 sm:py-4
              rounded-full shadow-md hover:shadow-lg
              focus:outline-none focus:ring-4 focus:ring-amber-500
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
