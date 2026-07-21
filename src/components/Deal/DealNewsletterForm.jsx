'use client';

import React, { useState } from 'react';

const DealNewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
    // Here you can call backend API if needed
  };

  return (
    <section className="w-full px-4 py-10 bg-white text-gray-900">
      <div className="max-w-xl mx-auto backdrop-blur-md rounded-2xl shadow-xl p-8">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-black text-center">
              Join Our Deal Newsletter
            </h2>
            <p className="text-sm sm:text-base text-gray-700 text-center">
              Subscribe now and be the first to know about the latest tech deals, product drops, and exclusive offers!
            </p>

            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 text-sm rounded-lg bg-white placeholder-gray-500 text-gray-900 border focus:outline-none focus:ring-2 focus:ring-black transition ${
                error ? 'border-black' : 'border-gray-200'
              }`}
              required
            />

            {error && (
              <p className="text-black text-sm text-left mt-[-12px]">{error}</p>
            )}

            <button
              type="submit"
              className="bg-black hover:bg-black text-black font-semibold py-3 rounded-lg transition-colors duration-300"
            >
              Subscribe Now
            </button>
          </form>
        ) : (
          <div className="text-center py-10">
            <h3 className="text-xl font-semibold text-black mb-2">
              Thank you for subscribing!
            </h3>
            <p className="text-gray-600 text-sm">
              You'll start receiving updates and deals directly in your inbox.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default DealNewsletterForm;
