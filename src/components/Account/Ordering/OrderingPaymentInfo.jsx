import React from 'react';

const OrderingPaymentInfo = ({ payment, total }) => {
  const formattedTotal = total ? total.toFixed(2) : '0.00';
  const methodLabel = payment || 'N/A';

  return (
    <section
      aria-label="Payment information"
      className="bg-gray-800 rounded-lg p-6 max-w-md mx-auto lg:mx-0 shadow-md"
    >
      <h2 className="text-xl font-semibold text-yellow-400 border-b border-yellow-400 pb-2 mb-4">
        Payment Details
      </h2>

      <div className="text-gray-200 space-y-2 text-base leading-relaxed">
        <p>
          <span className="font-semibold text-gray-300">Method:</span>{' '}
          <span>{methodLabel}</span>
        </p>

        <p>
          <span className="font-semibold text-gray-300">Total Paid:</span>{' '}
          <span className="text-yellow-400 font-bold">${formattedTotal}</span>
        </p>
      </div>
    </section>
  );
};

export default OrderingPaymentInfo;
