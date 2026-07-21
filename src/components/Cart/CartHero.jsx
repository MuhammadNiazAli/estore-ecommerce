'use client';

import React, { useState, useMemo } from 'react';
import {
  ShoppingCartIcon,
  LockClosedIcon,
  TrashIcon,
  PlusIcon,
  MinusIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const initialCartItems = [
  { id: 1, title: 'Wireless Headphones', price: 99.99, quantity: 1 },
  { id: 2, title: 'Smartwatch Pro Series', price: 149.99, quantity: 1 },
  { id: 3, title: 'Ergonomic Wireless Mouse', price: 49.99, quantity: 1 },
];

const CartHero = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  // Calculate total quantity and total price
  const totalItems = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.quantity, 0),
    [cartItems]
  );

  const totalPrice = useMemo(
    () =>
      cartItems
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2),
    [cartItems]
  );

  // Increase quantity with max limit 99
  const incrementQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity < 99 ? item.quantity + 1 : 99 }
          : item
      )
    );
  };

  // Decrease quantity with min limit 1
  const decrementQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Handle checkout button click
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty. Add items before checkout.');
      return;
    }
    alert(
      `Proceeding to checkout with ${totalItems} item${
        totalItems !== 1 ? 's' : ''
      } totaling $${totalPrice}`
    );
  };

  return (
    <section className="w-full bg-white text-gray-900 px-4 sm:px-6 py-8 sm:py-12 my-[-80px] mb-0 min-h-[calc(100vh-160px)] flex flex-col">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col flex-grow">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-600 mb-1">
              Your Shopping Cart
            </h1>
            <p className="text-sm sm:text-base text-gray-700 max-w-md">
              Review your selected items and proceed to checkout when ready.
            </p>
          </div>
          <div className="flex items-center gap-2 text-amber-500 font-medium text-sm sm:text-base">
            <ShoppingCartIcon className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
            <span aria-live="polite" aria-atomic="true">
              {totalItems} item{totalItems !== 1 ? 's' : ''} in cart
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white my-6" />

        {/* Cart Items List */}
        <div
          className={`space-y-4 mb-6 flex-grow ${
            cartItems.length > 3 ? 'max-h-[300px] overflow-y-auto' : ''
          }`}
          aria-live="polite"
          role="list"
        >
          <AnimatePresence>
            {cartItems.length === 0 ? (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-gray-500 py-10"
                role="listitem"
              >
                Your cart is empty.
              </motion.p>
            ) : (
              cartItems.map(({ id, title, price, quantity }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-between items-center bg-amber-950/20 rounded-lg p-4 flex-wrap gap-3"
                  role="listitem"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 flex-grow min-w-[180px]">
                    <h3 className="text-amber-600 font-semibold truncate">{title}</h3>
                    <p className="text-gray-700 sm:whitespace-nowrap">
                      ${price.toFixed(2)} × {quantity} ={' '}
                      <span className="font-bold text-amber-500">
                        ${(price * quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-1 border border-amber-600 rounded-full overflow-hidden select-none">
                    <button
                      onClick={() => decrementQuantity(id)}
                      aria-label={`Decrease quantity of ${title}`}
                      className="px-3 py-1 hover:bg-amber-600 hover:text-gray-900 transition disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={quantity <= 1}
                      type="button"
                    >
                      <MinusIcon className="w-5 h-5" />
                    </button>
                    <span className="px-3 py-1 bg-amber-600 text-gray-900 font-semibold min-w-[32px] text-center select-none">
                      {quantity}
                    </span>
                    <button
                      onClick={() => incrementQuantity(id)}
                      aria-label={`Increase quantity of ${title}`}
                      className="px-3 py-1 hover:bg-amber-600 hover:text-gray-900 transition disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={quantity >= 99}
                      type="button"
                    >
                      <PlusIcon className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(id)}
                    aria-label={`Remove ${title} from cart`}
                    className="p-2 rounded-full hover:bg-red-600/40 transition ml-3 sm:ml-6 flex-shrink-0"
                    type="button"
                  >
                    <TrashIcon className="w-6 h-6 text-red-500" />
                  </button>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Summary Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm sm:text-base">
          <div className="space-y-1 text-gray-600 max-w-xs sm:max-w-none">
            <p>
              Estimated Delivery:{' '}
              <span className="text-gray-900 font-medium">2–5 business days</span>
            </p>
            <p>
              Shipping Fee: <span className="text-gray-900 font-medium">Free</span>
            </p>
          </div>

          <div className="text-base sm:text-lg md:text-xl font-bold text-amber-600 mt-3 sm:mt-0 whitespace-nowrap">
            Total:{' '}
            <span className="text-gray-900">${totalPrice}</span>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="mt-6 flex justify-center sm:justify-end">
          <button
            onClick={handleCheckout}
            disabled={cartItems.length === 0}
            className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg transition
              ${
                cartItems.length === 0
                  ? 'bg-amber-600/50 text-gray-700 cursor-not-allowed'
                  : 'bg-amber-600 hover:bg-amber-500 text-gray-900'
              }`}
            aria-label="Proceed to secure checkout"
            type="button"
          >
            <LockClosedIcon className="w-5 h-5" />
            Secure Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartHero;
