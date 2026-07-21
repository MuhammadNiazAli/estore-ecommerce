'use client';

import React, { useState } from 'react';

export default function PaymentMethod({ initialMethod = 'creditCard', onSubmit }) {
  const [paymentMethod, setPaymentMethod] = useState(initialMethod);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setPaymentMethod(e.target.value);
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      setError('Please select a payment method.');
      return;
    }
    setError('');
    onSubmit?.(paymentMethod);
  };

  return (
    <section className="w-full bg-white px-4 py-12 flex justify-center mb-2">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[95vw] sm:max-w-[520px] md:max-w-[620px] lg:max-w-[700px]
          bg-white rounded-3xl shadow-2xl border border-amber-800
          p-5 sm:p-8 md:p-10 backdrop-blur-md transition
          my-[-40px] mb-[-70px]"
        aria-labelledby="payment-method-title"
        noValidate
      >
        <h2
          id="payment-method-title"
          className="text-xl sm:text-3xl font-extrabold text-center text-amber-500 mb-6 sm:mb-8 select-none tracking-wide"
        >
          Select Payment Method
        </h2>

        <div
          className="space-y-3 sm:space-y-5"
          role="radiogroup"
          aria-describedby={error ? 'payment-method-error' : undefined}
        >
          <PaymentOption
            id="creditCard"
            label="Credit / Debit Card"
            description="Visa, MasterCard, Amex"
            value="creditCard"
            selected={paymentMethod}
            onChange={handleChange}
          />

          <PaymentOption
            id="paypal"
            label="PayPal"
            description="Secure payment via PayPal"
            value="paypal"
            selected={paymentMethod}
            onChange={handleChange}
          />

          <PaymentOption
            id="cod"
            label="Cash on Delivery"
            description="Pay when you receive the product"
            value="cod"
            selected={paymentMethod}
            onChange={handleChange}
          />
        </div>

        {error && (
          <p
            id="payment-method-error"
            role="alert"
            className="mt-5 text-center text-sm text-red-500 font-semibold select-none"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          className="
            mt-8 sm:mt-10 w-full
            bg-gradient-to-r from-amber-600 to-amber-800
            hover:from-amber-700 hover:to-amber-900
            text-gray-900 font-bold
            py-3 sm:py-3.5
            px-6 sm:px-10 md:px-12
            text-base sm:text-lg md:text-xl
            rounded-full
            shadow-md hover:shadow-lg
            focus:outline-none focus:ring-4 focus:ring-amber-500/70 focus:ring-offset-2
            transition-all duration-200
            tracking-wide
            select-none
          "
          aria-label="Continue with selected payment method"
        >
          Continue
        </button>
      </form>
    </section>
  );
}

function PaymentOption({ id, label, description, value, selected, onChange }) {
  const isActive = selected === value;
  return (
    <label
      htmlFor={id}
      className={`flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-5 gap-3 sm:gap-5
        rounded-xl cursor-pointer border-2 transition-colors duration-200
        ${
          isActive
            ? 'border-amber-600 bg-white shadow-[0_0_10px_rgba(252,211,77,0.6)]'
            : 'border-amber-800 hover:border-amber-600 bg-amber-900/60'
        }
        focus-within:ring-1 focus-within:ring-amber-500 focus-within:ring-opacity-50
      `}
    >
      <input
        type="radio"
        id={id}
        name="paymentMethod"
        value={value}
        checked={isActive}
        onChange={onChange}
        className="h-5 w-5 text-amber-700 mt-0.5 sm:mt-0 bg-amber-900 border-amber-800 focus:ring-amber-500 transition cursor-pointer"
      />
      <div className="flex flex-col">
        <span className="text-amber-300 font-semibold text-sm sm:text-base select-none">
          {label}
        </span>
        <span className="text-amber-400/90 text-xs sm:text-sm select-none">
          {description}
        </span>
      </div>
    </label>
  );
}
