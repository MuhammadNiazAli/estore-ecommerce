'use client';

import React from 'react';

const PaymentingHero = () => {
  return (
    <section
      role="region"
      aria-labelledby="payment-hero-title"
      className="w-full max-w-[900px] mx-auto px-6 py-12 lg:py-16 my-[-30px] mb-5 bg-gradient-to-br from-white via-white to-white text-gray-900 rounded-3xl shadow-2xl overflow-hidden relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="max-w-md mx-auto lg:mx-0 space-y-5 text-center lg:text-left">
          {/* Optional icon */}
          <div className="flex justify-center lg:justify-start">
            <svg
              aria-hidden="true"
              className="h-12 w-12 text-black animate-pulse"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c0-1.105.895-2 2-2s2 .895 2 2-.895 2-2 2-2-.895-2-2zM12 21v-4M12 7V3"
              />
            </svg>
          </div>

          <h1
            id="payment-hero-title"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight"
          >
            Secure{' '}
            <span className="text-black underline decoration-black decoration-4 underline-offset-4">
              & Easy Payment
            </span>
            <br />
            Trusted. Simple. Protected.
          </h1>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-sm mx-auto lg:mx-0">
            Complete your payment quickly and securely with multiple trusted options. Your privacy and security are our top priority.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-3">
            <button
              type="button"
              onClick={() => alert('Proceeding to payment...')}
              className="inline-flex items-center justify-center gap-2 bg-black hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 text-gray-900 font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg shadow-black/40"
            >
              Proceed to Pay
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-white border-4 border-black shadow-[0_10px_30px_rgba(0,0,0,0.4)] flex items-center justify-center mb-30"
            aria-hidden="true"
          >
            <svg
              className="w-20 h-20 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c0-1.105.895-2 2-2s2 .895 2 2-.895 2-2 2-2-.895-2-2zM12 21v-4M12 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentingHero;
