import React from 'react';

const OrderingPaymentInfo = ({ payment, total }) => {
  const formattedTotal = total ? total.toFixed(2) : '0.00';
  const methodLabel = payment || 'N/A';

  return (
    <section
      aria-label="Payment information"
      className="bg-white rounded-lg p-6 max-w-md mx-auto lg:mx-0 shadow-md"
    >
      <h2 className="text-xl font-semibold text-amber-600 border-b border-amber-600 pb-2 mb-4">
        Payment Details
      </h2>

      <div className="text-gray-700 space-y-2 text-base leading-relaxed">
        <p>
          <span className="font-semibold text-gray-700">Method:</span>{' '}
          <span>{methodLabel}</span>
        </p>

        <p>
          <span className="font-semibold text-gray-700">Total Paid:</span>{' '}
          <span className="text-amber-600 font-bold">${formattedTotal}</span>
        </p>
      </div>
    </section>
  );
};

export default OrderingPaymentInfo;
