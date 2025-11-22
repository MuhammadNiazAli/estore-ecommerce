'use client'

import React, { useState } from 'react';

const LaptopNewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);

  const validateEmail = (email) => {
    // Basic email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setMessage({ type: 'success', text: 'Thank you for subscribing!' });
      setEmail('');
    } else {
      setMessage({ type: 'error', text: 'Please enter a valid email address.' });
    }
  };

  return (
    <section className="max-w-[1000px] mx-auto px-4 py-10 bg-gray-900 rounded-md text-gray-200 text-center my-[-50px] mb-0">
      <h2 className="text-3xl font-semibold mb-4 text-gray-100">Subscribe to Our Newsletter</h2>
      <p className="mb-6 text-gray-300 max-w-xl mx-auto">
        Get the latest updates on new laptops, exclusive deals, and tech tips delivered straight to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center max-w-md mx-auto gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow px-4 py-3 rounded-md bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          aria-label="Email address"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition"
        >
          Subscribe
        </button>
      </form>
      {message && (
        <p
          className={`mt-4 ${
            message.type === 'success' ? 'text-green-400' : 'text-red-400'
          } font-medium`}
          role="alert"
        >
          {message.text}
        </p>
      )}
    </section>
  );
};

export default LaptopNewsletterSignup;
