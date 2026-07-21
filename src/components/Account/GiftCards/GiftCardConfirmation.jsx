'use client';

import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaGift, FaHome } from 'react-icons/fa';

const GiftCardConfirmation = ({
  amount = 50,
  recipient = 'john.doe@example.com',
  message = 'Happy Birthday! Enjoy your gift!',
  orderId = 'GC123456789',
  onBuyAnother = () => {},
  onGoHome = () => {},
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Fade in animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      aria-label="Gift card purchase confirmation"
      className={`max-w-[900px] mx-auto bg-white
        text-gray-900 rounded-3xl shadow-2xl p-10 flex flex-col items-center space-y-8
        transition-opacity transition-transform duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      role="region"
      tabIndex={-1}
      aria-live="polite"
    >
      <FaCheckCircle
        className="text-amber-600 text-7xl"
        aria-hidden="true"
        focusable="false"
      />

      <h2 className="text-3xl font-extrabold text-center">
        Thank You for Your Purchase!
      </h2>

      <p className="text-amber-400 max-w-md text-center leading-relaxed select-text">
        Your gift card has been successfully processed. A confirmation email has been sent to your inbox.
      </p>

      <div className="bg-amber-900 rounded-xl p-6 w-full max-w-md shadow-inner">
        <h3
          className="text-xl font-semibold mb-4 flex items-center gap-2 select-text"
          tabIndex={-1}
        >
          <FaGift className="text-amber-600" aria-hidden="true" />
          Gift Card Details
        </h3>
        <ul className="text-amber-400 space-y-2 text-sm sm:text-base select-text">
          <li>
            <strong>Amount:</strong>{' '}
            {amount.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </li>
          <li>
            <strong>Recipient:</strong> {recipient}
          </li>
          <li>
            <strong>Message:</strong> &quot;{message}&quot;
          </li>
          <li>
            <strong>Order ID:</strong> {orderId}
          </li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
        <button
          type="button"
          onClick={onBuyAnother}
          className="flex-1 px-8 py-3 bg-amber-600 text-black font-semibold rounded-full shadow-md
            hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2
            transition duration-300 active:scale-[0.97] select-none"
          aria-label="Buy another gift card"
        >
          Buy Another
        </button>
        <button
          type="button"
          onClick={onGoHome}
          className="flex-1 flex items-center justify-center gap-2 px-8 py-3 border border-amber-600
            text-amber-600 font-semibold rounded-full hover:bg-amber-900 hover:text-gray-900
            focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2
            transition duration-300 active:scale-[0.97] select-none"
          aria-label="Go to home page"
        >
          <FaHome className="inline" aria-hidden="true" focusable="false" />
          Home
        </button>
      </div>
    </section>
  );
};

export default GiftCardConfirmation;
