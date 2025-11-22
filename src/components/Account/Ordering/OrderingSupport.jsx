import React from 'react';

const OrderingSupport = ({ orderId }) => {
  return (
    <section
      aria-label="Order support"
      className="bg-gray-800 rounded-lg p-6 max-w-md mx-auto lg:mx-0 shadow-md"
    >
      <h2 className="text-xl font-semibold text-yellow-400 border-b border-yellow-400 pb-2 mb-4">
        Need Help with Your Order?
      </h2>

      <p className="text-gray-300 mb-6">
        If you have any questions or concerns about your order{' '}
        <strong>#{orderId}</strong>, our support team is here to assist you.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="mailto:support@example.com"
          className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full text-center shadow-md hover:bg-yellow-300 hover:shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
          aria-label="Email customer support"
        >
          Email Support
        </a>

        <a
          href="tel:+311234567890"
          className="px-6 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-full text-center shadow-md hover:bg-yellow-400 hover:text-black hover:shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2"
          aria-label="Call customer support"
        >
          Call Support
        </a>
      </div>
    </section>
  );
};

export default OrderingSupport;
