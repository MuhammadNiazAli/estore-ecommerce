import React from 'react';

const OrderingSupport = ({ orderId }) => {
  return (
    <section
      aria-label="Order support"
      className="bg-white rounded-lg p-6 max-w-md mx-auto lg:mx-0 shadow-md"
    >
      <h2 className="text-xl font-semibold text-black border-b border-black pb-2 mb-4">
        Need Help with Your Order?
      </h2>

      <p className="text-gray-700 mb-6">
        If you have any questions or concerns about your order{' '}
        <strong>#{orderId}</strong>, our support team is here to assist you.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="mailto:support@example.com"
          className="px-6 py-3 bg-black text-black font-semibold rounded-full text-center shadow-md hover:bg-black hover:shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          aria-label="Email customer support"
        >
          Email Support
        </a>

        <a
          href="tel:+311234567890"
          className="px-6 py-3 border border-black text-black font-semibold rounded-full text-center shadow-md hover:bg-black hover:text-black hover:shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          aria-label="Call customer support"
        >
          Call Support
        </a>
      </div>
    </section>
  );
};

export default OrderingSupport;
