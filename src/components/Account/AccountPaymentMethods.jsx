'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard } from 'lucide-react';

const PayPalIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M10.44 14.37c-1.29 0-2.32-.67-2.65-1.91l-1.36-5.06H4.5l-.56 2.07h1.62l.29 1.11h-1.66l-.56 2.08h1.68l-.3 1.12H4.05l-.56 2.06h2.07a4.1 4.1 0 0 0 3.2-1.39 3.9 3.9 0 0 0 .8-2.08z" />
    <path d="M12.77 7.68c-.26-.14-.56-.21-.85-.21-.98 0-1.66.7-1.87 1.7l-1.1 4.1h-.1c-.02 0-.04 0-.07.01h-.08l-.23.86h.1c.31.88 1.16 1.51 2.18 1.51 1.04 0 1.81-.7 2.02-1.68l.04-.18.68-2.57c.04-.14.06-.3.06-.46 0-.96-.79-1.58-1.69-1.87z" />
    <path d="M18.27 6.05a4.56 4.56 0 0 0-4.3 3.17l-.07.24-.7 2.64a2.61 2.61 0 0 1-2.53 1.91c-1.42 0-2.44-1.07-2.61-2.48h-2.4a5.63 5.63 0 0 0 5.58 4.46c3.28 0 5.59-2.56 5.59-5.76 0-1.12-.37-2.1-1.06-2.69z" />
  </svg>
);

const initialPaymentMethods = [
  {
    id: 'pm1',
    type: 'Credit Card',
    cardType: 'Visa',
    cardNumber: '**** **** **** 1234',
    cardHolder: 'Niaz Ali',
    expiry: '12/26',
  },
  {
    id: 'pm2',
    type: 'PayPal',
    email: 'niaz@example.com',
  },
];

const AccountPaymentMethods = ({ methods = initialPaymentMethods, setUserData }) => {
  const [paymentMethods, setPaymentMethods] = useState(methods);
  const [form, setForm] = useState({
    type: 'Credit Card',
    cardType: '',
    cardNumber: '',
    cardHolder: '',
    expiry: '',
    email: '',
  });
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});

  const resetForm = () =>
    setForm({
      type: 'Credit Card',
      cardType: '',
      cardNumber: '',
      cardHolder: '',
      expiry: '',
      email: '',
    });

  const validate = () => {
    const newErrors = {};
    if (form.type === 'Credit Card') {
      if (!form.cardNumber.trim()) newErrors.cardNumber = 'Card number is required.';
      if (!form.cardHolder.trim()) newErrors.cardHolder = 'Card holder name is required.';
      if (!form.expiry.trim()) newErrors.expiry = 'Expiry date is required.';
      if (!form.cardType.trim()) newErrors.cardType = 'Card type is required.';
    } else if (form.type === 'PayPal') {
      if (!form.email.trim()) newErrors.email = 'PayPal email is required.';
      else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) newErrors.email = 'Please enter a valid email address.';
      }
    }
    return newErrors;
  };

  const maskCardNumber = (num) => {
    const digits = num.replace(/\D/g, '');
    if (digits.length < 4) return num;
    return '**** **** **** ' + digits.slice(-4);
  };

  const handleAdd = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSaving(true);

    setTimeout(() => {
      const newMethod = {
        id: `pm-${Date.now()}`,
        ...form,
        cardNumber: form.type === 'Credit Card' ? maskCardNumber(form.cardNumber) : undefined,
      };

      const updated = [...paymentMethods, newMethod];
      setPaymentMethods(updated);
      if (setUserData) {
        setUserData((prev) => ({ ...prev, paymentMethods: updated }));
      }

      resetForm();
      setErrors({});
      setSaving(false);
    }, 1000);
  };

  const removeMethod = (id) => {
    if (confirm('Are you sure you want to delete this payment method?')) {
      const filtered = paymentMethods.filter((m) => m.id !== id);
      setPaymentMethods(filtered);
      if (setUserData) {
        setUserData((prev) => ({ ...prev, paymentMethods: filtered }));
      }
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-white to-white rounded-xl p-6 sm:p-10 max-w-[1000px] mx-auto shadow-xl"
      aria-label="Payment methods"
    >
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8 text-gray-900 tracking-tight text-center sm:text-left">
        Manage Payment Methods
      </h2>

      {/* Existing Methods */}
      {paymentMethods.length === 0 ? (
        <p className="text-amber-500 text-center italic text-lg mb-8 sm:mb-10">
          You have no saved payment methods.
        </p>
      ) : (
        <ul className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
          {paymentMethods.map((method) => (
            <li
              key={method.id}
              className="bg-white rounded-lg p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between shadow-md"
            >
              <div className="mb-4 sm:mb-0">
                <h3 className="text-amber-600 font-semibold text-lg sm:text-xl flex items-center gap-3 mb-1 sm:mb-2">
                  {method.type === 'Credit Card' ? (
                    <>
                      <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" />
                      {method.type}
                      {method.cardType && (
                        <span className="ml-2 bg-amber-500 text-amber-900 px-2 py-0.5 rounded text-xs sm:text-sm font-semibold select-none">
                          {method.cardType}
                        </span>
                      )}
                    </>
                  ) : (
                    <>
                      <PayPalIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                      {method.type}
                    </>
                  )}
                </h3>

                {method.type === 'Credit Card' ? (
                  <>
                    <p className="text-gray-900 font-mono tracking-wide text-base sm:text-lg">
                      {method.cardNumber}
                    </p>
                    <p className="text-amber-500 mt-0.5 sm:mt-1 text-sm sm:text-base">
                      Card Holder: <span className="font-semibold">{method.cardHolder}</span>
                    </p>
                    <p className="text-amber-500 text-sm sm:text-base">
                      Expires: <span className="font-semibold">{method.expiry}</span>
                    </p>
                  </>
                ) : (
                  <p className="text-amber-500 font-semibold text-base sm:text-lg">{method.email}</p>
                )}
              </div>

              <button
                onClick={() => removeMethod(method.id)}
                className="self-start sm:self-auto mt-3 sm:mt-0 bg-red-600 hover:bg-red-700 text-gray-900 px-5 py-3 rounded-full font-semibold shadow-lg transition w-full sm:w-auto"
                type="button"
                aria-label={`Delete ${method.type} payment method`}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Add New Payment Method Form */}
      <div className="bg-white rounded-lg p-6 sm:p-8 shadow-md">
        <h3 className="text-amber-600 font-extrabold text-xl sm:text-2xl mb-5 sm:mb-6 tracking-tight text-center sm:text-left">
          Add Payment Method
        </h3>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 justify-center sm:justify-start">
          <button
            onClick={() => {
              setForm((f) => ({ ...f, type: 'Credit Card' }));
              setErrors({});
            }}
            type="button"
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-lg transition w-full sm:w-auto ${
              form.type === 'Credit Card'
                ? 'bg-amber-600 text-black shadow-lg'
                : 'bg-white text-amber-600 hover:bg-amber-700/40'
            }`}
          >
            <CreditCard className="w-6 h-6" /> Credit Card
          </button>
          <button
            onClick={() => {
              setForm((f) => ({ ...f, type: 'PayPal' }));
              setErrors({});
            }}
            type="button"
            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-lg transition w-full sm:w-auto ${
              form.type === 'PayPal'
                ? 'bg-amber-600 text-black shadow-lg'
                : 'bg-white text-amber-600 hover:bg-amber-700/40'
            }`}
          >
            <PayPalIcon className="w-6 h-6" /> PayPal
          </button>
        </div>

        {form.type === 'Credit Card' ? (
          <>
            {/* Card Number */}
            <div className="mb-5">
              <input
                type="text"
                placeholder="Card Number"
                value={form.cardNumber}
                onChange={(e) => setForm((f) => ({ ...f, cardNumber: e.target.value }))}
                className={`w-full px-5 py-4 rounded-lg bg-white border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-amber-600 transition shadow-md ${
                  errors.cardNumber ? 'border-red-500' : 'border-gray-200'
                }`}
                maxLength={19}
                autoComplete="cc-number"
                inputMode="numeric"
                spellCheck="false"
                aria-invalid={errors.cardNumber ? 'true' : 'false'}
                aria-describedby={errors.cardNumber ? 'cardNumber-error' : undefined}
              />
              {errors.cardNumber && (
                <p
                  id="cardNumber-error"
                  className="mt-1 text-red-400 text-sm font-medium"
                  role="alert"
                >
                  {errors.cardNumber}
                </p>
              )}
            </div>

            {/* Card Holder */}
            <div className="mb-5">
              <input
                type="text"
                placeholder="Card Holder Name"
                value={form.cardHolder}
                onChange={(e) => setForm((f) => ({ ...f, cardHolder: e.target.value }))}
                className={`w-full px-5 py-4 rounded-lg bg-white border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-amber-600 transition shadow-md ${
                  errors.cardHolder ? 'border-red-500' : 'border-gray-200'
                }`}
                autoComplete="cc-name"
                spellCheck="false"
                aria-invalid={errors.cardHolder ? 'true' : 'false'}
                aria-describedby={errors.cardHolder ? 'cardHolder-error' : undefined}
              />
              {errors.cardHolder && (
                <p
                  id="cardHolder-error"
                  className="mt-1 text-red-400 text-sm font-medium"
                  role="alert"
                >
                  {errors.cardHolder}
                </p>
              )}
            </div>

            {/* Expiry Date */}
            <div className="mb-5">
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                value={form.expiry}
                onChange={(e) => setForm((f) => ({ ...f, expiry: e.target.value }))}
                className={`w-full px-5 py-4 rounded-lg bg-white border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-amber-600 transition shadow-md ${
                  errors.expiry ? 'border-red-500' : 'border-gray-200'
                }`}
                maxLength={5}
                autoComplete="cc-exp"
                inputMode="numeric"
                spellCheck="false"
                aria-invalid={errors.expiry ? 'true' : 'false'}
                aria-describedby={errors.expiry ? 'expiry-error' : undefined}
              />
              {errors.expiry && (
                <p
                  id="expiry-error"
                  className="mt-1 text-red-400 text-sm font-medium"
                  role="alert"
                >
                  {errors.expiry}
                </p>
              )}
            </div>

            {/* Card Type */}
            <div className="mb-5">
              <input
                type="text"
                placeholder="Card Type (Visa, MasterCard, etc.)"
                value={form.cardType}
                onChange={(e) => setForm((f) => ({ ...f, cardType: e.target.value }))}
                className={`w-full px-5 py-4 rounded-lg bg-white border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-amber-600 transition shadow-md ${
                  errors.cardType ? 'border-red-500' : 'border-gray-200'
                }`}
                autoComplete="off"
                spellCheck="false"
                aria-invalid={errors.cardType ? 'true' : 'false'}
                aria-describedby={errors.cardType ? 'cardType-error' : undefined}
              />
              {errors.cardType && (
                <p
                  id="cardType-error"
                  className="mt-1 text-red-400 text-sm font-medium"
                  role="alert"
                >
                  {errors.cardType}
                </p>
              )}
            </div>
          </>
        ) : (
          <div className="mb-5">
            <input
              type="email"
              placeholder="PayPal Email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className={`w-full px-5 py-4 rounded-lg bg-white border text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-3 focus:ring-amber-600 transition shadow-md ${
                errors.email ? 'border-red-500' : 'border-gray-200'
              }`}
              autoComplete="email"
              spellCheck="false"
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p
                id="email-error"
                className="mt-1 text-red-400 text-sm font-medium"
                role="alert"
              >
                {errors.email}
              </p>
            )}
          </div>
        )}

        <button
          onClick={handleAdd}
          disabled={saving}
          className="w-full max-w-xs mx-auto block bg-amber-600 text-black px-6 py-4 rounded-full font-semibold shadow-lg hover:bg-amber-500 active:scale-95 transition-transform duration-150"
          type="button"
          aria-label="Save payment method"
        >
          {saving ? 'Saving...' : 'Add Payment Method'}
        </button>
      </div>
    </motion.section>
  );
};

export default AccountPaymentMethods;
