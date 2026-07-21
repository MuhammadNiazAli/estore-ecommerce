'use client';

import React, { useState } from 'react';

const validCoupons = {
  SAVE10: 10,
  FREESHIP: 0,
  GOLD20: 20,
};

const CartCouponCode = () => {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState(null); // null | 'success' | 'error'
  const [message, setMessage] = useState('');
  const [isApplying, setIsApplying] = useState(false);

  const applyCoupon = () => {
    if (isApplying) return; // prevent multiple clicks
    setIsApplying(true);

    const upperCode = code.trim().toUpperCase();

    if (!upperCode) {
      setStatus('error');
      setMessage('Please enter a coupon code.');
      setIsApplying(false);
      return;
    }

    // Simulate async coupon validation (e.g. API call)
    setTimeout(() => {
      if (Object.prototype.hasOwnProperty.call(validCoupons, upperCode)) {
        setStatus('success');
        setMessage(
          upperCode === 'FREESHIP'
            ? '🎉 Free shipping applied!'
            : `🎉 Coupon applied! You saved ${validCoupons[upperCode]}%.`
        );
      } else {
        setStatus('error');
        setMessage('❌ Invalid coupon code.');
      }
      setIsApplying(false);
    }, 800);
  };

  // Submit on Enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      applyCoupon();
    }
  };

  return (
    <section className="w-full bg-white text-gray-900 px-4 sm:px-6 py-6">
      <div className="max-w-[1200px] mx-auto">
        <h3 className="text-xl sm:text-2xl font-semibold text-black mb-5 select-none">
          Have a Coupon Code?
        </h3>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            applyCoupon();
          }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md"
          noValidate
          aria-describedby="coupon-message"
        >
          <input
            type="text"
            aria-label="Coupon code"
            id="coupon-code"
            placeholder="Enter coupon code"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setStatus(null);
              setMessage('');
            }}
            onKeyDown={handleKeyDown}
            disabled={isApplying}
            className={`flex-grow px-4 py-2.5 sm:py-3 rounded-lg bg-white text-gray-900 placeholder-gray-400
              focus:outline-none focus:ring-2 transition duration-300
              ${
                status === 'error'
                  ? 'focus:ring-black ring-black'
                  : 'focus:ring-black'
              } disabled:opacity-60 disabled:cursor-not-allowed`}
          />

          <button
            type="submit"
            disabled={isApplying}
            className="bg-black hover:bg-black disabled:bg-black disabled:cursor-not-allowed
              text-gray-900 font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition shadow-md text-sm sm:text-base
              flex justify-center items-center gap-2 select-none"
            aria-live="polite"
            aria-busy={isApplying}
          >
            {isApplying ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Applying...
              </>
            ) : (
              'Apply'
            )}
          </button>
        </form>

        {message && (
          <p
            id="coupon-message"
            className={`mt-3 text-sm sm:text-base max-w-md select-text ${
              status === 'error' ? 'text-black' : 'text-black'
            }`}
            role={status === 'error' ? 'alert' : 'status'}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default CartCouponCode;
