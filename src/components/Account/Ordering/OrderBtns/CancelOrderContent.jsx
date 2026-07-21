'use client';

import React from 'react';

function CancelOrderContent({ closePanel }) {
  const handleCancelConfirmation = () => {
    alert(
      'Your order has been cancelled successfully. A confirmation email will be sent to your registered address shortly.'
    );
    closePanel();
  };

  return (
    <div className="px-4 py-6 max-w-xl mx-auto text-[14px] sm:text-[15px]">
      {/* Header */}
      <h2 className="text-black text-2xl sm:text-3xl font-extrabold mb-5 tracking-wide text-center sm:text-left">
        Cancel Your Order
      </h2>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base text-center sm:text-left">
        Orders can be cancelled before they are shipped. Please review the details below carefully before proceeding with the cancellation.
      </p>

      {/* Order Summary */}
      <section
        aria-label="Your order information before cancellation"
        className="bg-white p-5 sm:p-6 rounded-lg mb-8 shadow-lg"
      >
        <h3 className="text-black font-semibold text-lg sm:text-xl mb-4">
          Order Summary
        </h3>

        <ul className="text-gray-700 space-y-2 mb-4 text-xs sm:text-sm">
          <li>
            <span className="font-semibold">Order ID:</span>{' '}
            <span className="text-gray-800">#ORD123456789</span>
          </li>
          <li>
            <span className="font-semibold">Placed on:</span>{' '}
            <span className="text-gray-800">July 4, 2025</span>
          </li>
          <li>
            <span className="font-semibold">Total Items:</span>{' '}
            <span className="text-gray-800">3</span>
          </li>
          <li>
            <span className="font-semibold">Amount:</span>{' '}
            <span className="text-gray-800">$189.99</span>
          </li>
          <li>
            <span className="font-semibold">Order Status:</span>{' '}
            <span className="text-black font-medium">Processing</span>
          </li>
        </ul>

        <p className="text-gray-600 text-[11px] sm:text-xs italic">
          * Orders that have already been shipped or marked as “out for delivery” are no longer eligible for cancellation.
        </p>
      </section>

      {/* Cancellation Policy */}
      <section
        aria-label="Policy regarding cancellations and refunds"
        className="bg-white p-4 sm:p-5 rounded-lg mb-8"
      >
        <h3 className="text-black font-semibold text-base sm:text-lg mb-3">
          Cancellation Policy
        </h3>

        <ul className="list-disc list-inside text-gray-700 space-y-2 text-xs sm:text-sm leading-relaxed">
          <li>
            Requests are processed within <strong>24 hours</strong> on business days.
          </li>
          <li>
            Full refunds are issued to your original payment method within{' '}
            <strong>5–7 working days</strong> after successful cancellation.
          </li>
          <li>
            If your order has already been dispatched, refer to our{' '}
            <a
              href="/returns"
              className="text-black underline hover:text-black transition-colors"
            >
              Return & Refund Policy
            </a>
            .
          </li>
          <li>
            For urgent cases or bulk order issues, please contact our{' '}
            <a
              href="/contact"
              className="text-black underline hover:text-black transition-colors"
            >
              Customer Support
            </a>{' '}
            team.
          </li>
        </ul>
      </section>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start">
        <button
          type="button"
          onClick={handleCancelConfirmation}
          className="bg-black hover:bg-black text-gray-900 text-sm sm:text-base px-5 py-2 rounded-full font-semibold transition-shadow shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 w-full sm:w-auto"
          aria-label="Confirm cancellation of order"
        >
          Confirm Cancellation
        </button>

        <button
          type="button"
          onClick={closePanel}
          className="border border-black text-black hover:bg-black hover:text-black text-sm sm:text-base px-5 py-2 rounded-full font-semibold transition-shadow shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 w-full sm:w-auto"
          aria-label="Cancel and return back to orders"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default CancelOrderContent;
