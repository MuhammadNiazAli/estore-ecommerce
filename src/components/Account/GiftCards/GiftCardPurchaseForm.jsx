'use client';

import React, { useState, useEffect, useRef } from 'react';

const PRESET_AMOUNTS = [10, 25, 50, 100];

const GiftCardPurchaseForm = () => {
  const [formData, setFormData] = useState({
    recipientEmail: '',
    amount: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const formRef = useRef(null);

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(''), 6000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const validate = () => {
    const newErrors = {};
    if (!formData.recipientEmail.trim()) {
      newErrors.recipientEmail = 'Recipient email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.recipientEmail)) {
      newErrors.recipientEmail = 'Email address is invalid.';
    }

    if (!formData.amount) {
      newErrors.amount = 'Please select or enter an amount.';
    } else if (isNaN(formData.amount) || Number(formData.amount) <= 0) {
      newErrors.amount = 'Amount must be a positive number.';
    }

    if (formData.message.length > 200) {
      newErrors.message = 'Message cannot exceed 200 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handlePresetClick = (amount) => {
    setFormData((prev) => ({ ...prev, amount: amount.toString() }));
    setErrors((prev) => ({ ...prev, amount: '' }));
  };

  const handleClear = () => {
    setFormData({ recipientEmail: '', amount: '', message: '' });
    setErrors({});
    setSuccessMessage('');
    formRef.current?.querySelector('input[name="recipientEmail"]')?.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setErrors({});
    setSuccessMessage('');

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSuccessMessage(
      `Gift card purchased for ${formData.recipientEmail} with amount $${Number(formData.amount).toFixed(2)}!`
    );
    setLoading(false);
    setFormData({ recipientEmail: '', amount: '', message: '' });
    formRef.current?.querySelector('input[name="recipientEmail"]')?.focus();
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="max-w-[900px] mx-auto bg-white text-gray-900 rounded-3xl shadow-2xl p-8 space-y-6"
      aria-label="Purchase gift card form"
      noValidate
      autoComplete="off"
    >
      <h2 className="text-3xl font-extrabold mb-6 text-black select-none">Purchase Gift Card</h2>

      {/* Recipient Email */}
      <div>
        <label htmlFor="recipientEmail" className="block mb-1 font-semibold text-black">
          Recipient Email <span className="text-black">*</span>
        </label>
        <input
          id="recipientEmail"
          name="recipientEmail"
          type="email"
          value={formData.recipientEmail}
          onChange={handleChange}
          placeholder="recipient@example.com"
          className={`w-full rounded-md px-4 py-2 bg-white text-gray-900 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-black transition ${
            errors.recipientEmail ? 'ring-2 ring-black' : ''
          }`}
          aria-invalid={errors.recipientEmail ? 'true' : 'false'}
          aria-describedby={errors.recipientEmail ? 'email-error' : undefined}
          required
          disabled={loading}
          autoFocus
        />
        {errors.recipientEmail && (
          <p id="email-error" className="text-black mt-1 text-sm" role="alert">
            {errors.recipientEmail}
          </p>
        )}
      </div>

      {/* Amount */}
      <div>
        <label htmlFor="amount" className="block mb-1 font-semibold text-black">
          Amount (USD) <span className="text-black">*</span>
        </label>

        <div className="flex flex-wrap gap-3 mb-2">
          {PRESET_AMOUNTS.map((amt) => (
            <button
              key={amt}
              type="button"
              onClick={() => handlePresetClick(amt)}
              disabled={loading}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                formData.amount === amt.toString()
                  ? 'bg-black text-black shadow-lg'
                  : 'bg-black text-black hover:bg-black'
              } focus:outline-none focus:ring-2 focus:ring-black`}
              aria-pressed={formData.amount === amt.toString()}
            >
              ${amt}
            </button>
          ))}
        </div>

        <input
          id="amount"
          name="amount"
          type="number"
          min="1"
          step="1"
          value={formData.amount}
          onChange={handleChange}
          placeholder="Enter custom amount"
          className={`w-full rounded-md px-4 py-2 bg-white text-gray-900 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-black transition ${
            errors.amount ? 'ring-2 ring-black' : ''
          }`}
          aria-invalid={errors.amount ? 'true' : 'false'}
          aria-describedby={errors.amount ? 'amount-error' : undefined}
          required
          disabled={loading}
        />
        {errors.amount && (
          <p id="amount-error" className="text-black mt-1 text-sm" role="alert">
            {errors.amount}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block mb-1 font-semibold text-black">
          Personal Message (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={200}
          value={formData.message}
          onChange={handleChange}
          placeholder="Write a personal message..."
          className={`w-full rounded-md px-4 py-2 bg-white text-gray-900 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-black resize-none transition ${
            errors.message ? 'ring-2 ring-black' : ''
          }`}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          disabled={loading}
        />
        <p className="text-black text-sm mt-1 select-none">{formData.message.length}/200</p>
        {errors.message && (
          <p id="message-error" className="text-black mt-1 text-sm" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-4 flex-col sm:flex-row">
        <button
          type="submit"
          disabled={loading}
          className="flex-grow py-3 bg-black text-black font-semibold rounded-full shadow-md hover:bg-black transition duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
          aria-label="Submit gift card purchase"
        >
          {loading ? (
            <svg
              className="animate-spin h-6 w-6 mx-auto text-black"
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
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          ) : (
            'Purchase'
          )}
        </button>
        <button
          type="button"
          onClick={handleClear}
          disabled={loading && !formData.recipientEmail && !formData.amount && !formData.message}
          className="flex-grow py-3 bg-black hover:bg-black text-gray-900 font-semibold rounded-full shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Clear form"
        >
          Clear
        </button>
      </div>

      {/* Success Message */}
      {successMessage && (
        <p
          className="mt-4 flex items-center gap-2 text-black font-semibold select-text"
          role="alert"
          aria-live="polite"
        >
          {successMessage}
        </p>
      )}
    </form>
  );
};

export default GiftCardPurchaseForm;
