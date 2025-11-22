'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  FaGift,
  FaCheckCircle,
  FaTimesCircle,
  FaSpinner,
  FaClipboard,
  FaRegTimesCircle,
} from 'react-icons/fa';

const GiftCardRedeem = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const validationTimeout = useRef(null);

  useEffect(() => {
    if (error || successMessage) {
      const timer = setTimeout(() => {
        setError('');
        setSuccessMessage('');
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [error, successMessage]);

  const handleChange = (e) => {
    const val = e.target.value.toUpperCase();
    setCode(val);
    setError('');
    setSuccessMessage('');

    if (validationTimeout.current) clearTimeout(validationTimeout.current);

    validationTimeout.current = setTimeout(() => {
      if (val.length > 0 && !validateCode(val)) {
        setError(
          'Code must be 8-16 uppercase letters or numbers (A-Z, 0-9) only.'
        );
      }
    }, 400);
  };

  const validateCode = (input) => {
    return /^[A-Z0-9]{8,16}$/.test(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateCode(code)) {
      setError('Please enter a valid gift card code (8-16 uppercase letters or numbers).');
      setSuccessMessage('');
      return;
    }

    setLoading(true);
    setError('');
    setSuccessMessage('');

    await new Promise((res) => setTimeout(res, 1500));

    const lastChar = code.slice(-1);
    if (!isNaN(lastChar) && parseInt(lastChar) % 2 === 0) {
      setSuccessMessage(`Gift card code "${code}" redeemed successfully!`);
      setCode('');
      inputRef.current?.focus();
    } else {
      setError('Invalid or expired gift card code. Please try again.');
    }
    setLoading(false);
  };

  const handleClear = () => {
    setCode('');
    setError('');
    setSuccessMessage('');
    inputRef.current?.focus();
  };

  const handleCopy = () => {
    if (successMessage) {
      navigator.clipboard.writeText(successMessage).then(() => {
        alert('Success message copied to clipboard!');
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleClear();
    }
  };

  return (
    <section
      aria-label="Redeem your gift card"
      className="max-w-[900px] mx-auto bg-gray-900 text-white rounded-3xl shadow-2xl p-8"
    >
      <h2 className="text-3xl font-extrabold mb-6 flex items-center gap-3 select-none text-yellow-300">
        <FaGift className="text-yellow-400" aria-hidden="true" />
        Redeem Gift Card
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4" noValidate>
        <input
          ref={inputRef}
          type="text"
          name="giftCardCode"
          value={code}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter your gift card code"
          aria-label="Gift card code"
          className={`flex-grow rounded-md px-4 py-3 bg-gray-800 text-yellow-200 font-mono tracking-widest uppercase placeholder:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition ${
            error ? 'ring-2 ring-red-600' : ''
          }`}
          maxLength={16}
          autoComplete="off"
          disabled={loading}
          spellCheck={false}
          autoFocus
          aria-invalid={!!error}
          aria-describedby={error ? 'code-error' : undefined}
        />

        <button
          type="submit"
          className="relative px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
          aria-label="Redeem gift card"
          disabled={loading}
        >
          {loading ? (
            <FaSpinner className="animate-spin h-5 w-5" aria-hidden="true" />
          ) : (
            'Redeem'
          )}
        </button>

       <div className="flex justify-center sm:justify-start">
  <button
    type="button"
    onClick={handleClear}
    className="flex items-center justify-center w-10 h-10 sm:w-auto sm:h-auto px-3 py-2 sm:px-4 sm:py-3 bg-red-700 hover:bg-red-600 text-white rounded-full shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-xl sm:text-base"
    aria-label="Clear gift card code"
    disabled={loading && !code}
  >
    <FaRegTimesCircle />
  </button>
</div>

      </form>

      {error && (
        <p
          id="code-error"
          className="mt-4 flex items-center gap-2 text-red-500 font-semibold"
          role="alert"
          aria-live="assertive"
        >
          <FaTimesCircle aria-hidden="true" />
          {error}
        </p>
      )}

      {successMessage && (
        <p
          className="mt-4 flex items-center gap-2 text-yellow-400 font-semibold"
          role="alert"
          aria-live="polite"
        >
          <FaCheckCircle aria-hidden="true" />
          <span>{successMessage}</span>
          <button
            onClick={handleCopy}
            aria-label="Copy success message"
            className="ml-2 p-1 hover:text-yellow-300 transition"
            type="button"
          >
            <FaClipboard />
          </button>
        </p>
      )}
    </section>
  );
};

export default GiftCardRedeem;
