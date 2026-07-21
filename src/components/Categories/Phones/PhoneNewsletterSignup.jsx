'use client';

import React, { useState } from 'react';

const PhoneNewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="relative max-w-[1000px] mx-auto my-16 mb-[-30px] text-center px-4 sm:px-6 lg:px-0">
      {/* Top-left discount badge */}
      <div
        className="
          absolute top-[-12px] left-[-12px] z-30 
          w-16 xs:w-14 sm:w-20 
          rounded-full overflow-hidden 
          shadow-lg border border-gray-200
        "
        style={{ maxWidth: '5rem' }}
      >
        <div className="relative">
          <img
            src="https://img.freepik.com/premium-photo/female-hand-yellow-background-holding-phone-display-lights-up-white_164357-4731.jpg?w=360"
            alt="Discount"
            className="rounded-full object-cover w-full h-full"
            loading="lazy"
          />
          <span className="absolute top-1 left-1 bg-red-600 text-gray-900 text-[9px] px-1 rounded font-bold select-none">
            30% OFF
          </span>
        </div>
      </div>

      {/* Bottom-right hot deal badge */}
      <div
        className="
          absolute bottom-[-12px] right-[-12px] z-30 
          w-16 xs:w-14 sm:w-20 
          rounded-full overflow-hidden 
          shadow-lg border border-gray-200
        "
        style={{ maxWidth: '5rem' }}
      >
        <div className="relative">
          <img
            src="https://as2.ftcdn.net/v2/jpg/02/57/23/51/1000_F_257235170_POtxe8rbJstjiKveWSofcM7SKIOULMeb.jpg"
            alt="Deal"
            className="rounded-full object-cover w-full h-full"
            loading="lazy"
          />
          <span className="absolute bottom-1 right-1 bg-green-700 text-gray-900 text-[9px] px-1 rounded font-bold select-none">
            Hot Deal
          </span>
        </div>
      </div>

      {/* Main signup container */}
      <div
        className="
          relative z-10 bg-amber-700 rounded-xl p-8 sm:p-10 shadow-lg text-gray-900
        "
      >
        <h2
          className="
            text-2xl xs:text-3xl sm:text-4xl font-extrabold mb-6 drop-shadow-sm
          "
        >
          Stay Updated with Latest Phone Deals
        </h2>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="
              flex flex-col gap-4 max-w-md mx-auto
              sm:flex-row sm:justify-center sm:items-center
            "
            noValidate
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="
                flex-grow px-4 py-3 rounded-lg border border-amber-900
                text-gray-900 placeholder-amber-950
                focus:outline-none focus:ring-4 focus:ring-amber-800 focus:border-amber-800
                transition text-sm xs:text-base
              "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email Address"
              autoComplete="email"
            />
            <button
              type="submit"
              className="
                bg-white text-amber-600 font-semibold
                px-5 py-3 rounded-lg shadow-md
                hover:bg-gray-500 hover:shadow-lg
                transition text-sm xs:text-base
              "
            >
              Subscribe
            </button>
          </form>
        ) : (
          <p className="mt-6 text-base xs:text-lg font-semibold">
            Thank you for subscribing!
          </p>
        )}
      </div>
    </section>
  );
};

export default PhoneNewsletterSignup;
