'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiX } from 'react-icons/fi';

const initialCartItems = [
  { id: 1, title: 'Noise-Canceling Headphones', price: 89, quantity: 1 },
  { id: 2, title: 'Smart Fitness Tracker', price: 59, quantity: 2 },
];

const StickyDealCart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <>
      {/* Floating Cart Summary */}
      <div
        className="fixed bottom-3 right-3 bg-gray-900 text-white rounded-md shadow-md p-2 w-40 sm:w-32 z-50 flex flex-col space-y-1 text-xs"
        role="button"
        aria-label="View cart details"
        onClick={() => setIsPopupVisible(true)}
      >
        <h3 className="font-semibold border-b border-gray-700 pb-0.5 mb-1 text-sm">
          Cart
        </h3>

        <div className="flex justify-between text-gray-300">
          <span>Items:</span>
          <span>{totalQuantity}</span>
        </div>

        <div className="flex justify-between text-gray-300">
          <span>Total:</span>
          <span>${totalPrice}</span>
        </div>

        <button
          className="mt-1 bg-blue-600 hover:bg-blue-700 transition-colors rounded py-1 text-xs font-semibold"
          onClick={(e) => {
            e.stopPropagation();
            setIsPopupVisible(true);
          }}
        >
          View
        </button>
      </div>

      {/* Cart Popup with Full Details */}
      {isPopupVisible && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white rounded-md w-full max-w-md shadow-xl p-4 text-gray-800 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setIsPopupVisible(false)}
              aria-label="Close cart popup"
            >
              <FiX size={20} />
            </button>

            <h2 className="text-lg font-semibold mb-3">Your Cart</h2>

            <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col border-b pb-2 text-sm"
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{item.title}</span>
                    <span className="font-semibold text-gray-700">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                  <div className="text-gray-500 text-xs mt-0.5">
                    {item.quantity} × ${item.price.toFixed(2)} each
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 border-t pt-3 text-sm">
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Total Items:</span>
                <span>{totalQuantity}</span>
              </div>
              <div className="flex justify-between font-semibold text-gray-800">
                <span>Total Price:</span>
                <span>${totalPrice}</span>
              </div>
            </div>

            <Link
              href="/cart"
              className="mt-4 block w-full text-center bg-blue-600 hover:bg-blue-700 text-white rounded py-2 text-sm font-semibold transition-colors"
              onClick={() => setIsPopupVisible(false)}
            >
              Go to Cart
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyDealCart;
