'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ResponsibilitySubscribe = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email.trim())) {
      setError('Please enter a valid email address.');
      setSuccess(false);
      return;
    }
    setError('');
    setSuccess(true);
    setEmail('');
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <section
      aria-labelledby="subscribe-heading"
      className="w-full bg-gray-900 flex justify-center px-4 py-16 sm:py-20 mb-[-150px] my-[-50px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-[1000px] bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 sm:p-10 text-center"
      >
        <h2
          id="subscribe-heading"
          className="
            text-yellow-400 
            text-2xl sm:text-3xl md:text-4xl 
            font-bold 
            mb-4 
            select-none
            leading-tight
            max-w-[90%] sm:max-w-none
            mx-auto
          "
        >
          Stay Updated on Our Responsibility Efforts
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
          Subscribe to receive the latest news, updates, and impact stories straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto"
          noValidate
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`flex-grow px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-50 transition
              ${error ? 'border-red-500 placeholder:text-red-400' : ''}`}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? 'email-error' : undefined}
            required
            autoComplete="email"
            spellCheck="false"
          />
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-shadow shadow-md hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-60 select-none"
            aria-live="polite"
          >
            Subscribe
          </button>
        </form>

        {error && (
          <motion.p
            id="email-error"
            role="alert"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-red-500 font-semibold select-text"
          >
            {error}
          </motion.p>
        )}

        {success && (
          <motion.p
            role="status"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-green-400 font-semibold select-text"
          >
            Thank you for subscribing!
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default ResponsibilitySubscribe;
