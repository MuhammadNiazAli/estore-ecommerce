import React from 'react';

const OrderingEmptyState = () => {
  return (
    <section
      aria-label="No orders yet"
      className="flex flex-col items-center justify-center max-w-md mx-auto p-12 bg-gray-800 rounded-lg text-center text-gray-400"
    >
      {/* Decorative icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-20 h-20 mb-6 text-yellow-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h18M9 21V9m0 0L3 3m6 6l6 6m3-9v6a9 9 0 01-18 0v-6a9 9 0 0118 0z"
        />
      </svg>

      {/* Message */}
      <h2 className="text-2xl font-semibold text-white mb-3">
        No orders found
      </h2>

      <p className="mb-6 max-w-xs text-sm leading-relaxed">
        Looks like you haven’t placed any orders yet. Browse our collections and find something you love!
      </p>

      {/* Call to action */}
      <a
        href="/shop"
        className="inline-block px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-300 hover:shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
      >
        Start Shopping
      </a>
    </section>
  );
};

export default OrderingEmptyState;
