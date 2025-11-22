'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InvestorsContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await new Promise((res) => setTimeout(res, 1500)); // Simulate async backend

      setFormData({ name: '', email: '', message: '' });
      setStatus('success');
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section
      aria-label="Contact Investors Team"
      className="bg-gray-900 text-yellow-400 flex justify-center px-4 sm:px-6 md:px-8 py-16"
    >
      <motion.form
        onSubmit={handleSubmit}
        noValidate
        aria-live="polite"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 space-y-6"
      >
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-400 mb-2">
            Contact Investor Relations
          </h2>
          <p className="text-yellow-300 text-sm sm:text-base font-light">
            Fill out the form and our team will get back to you promptly.
          </p>
        </div>

        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-yellow-300 mb-1"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            type="text"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-yellow-600 text-yellow-200 placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-yellow-300 mb-1"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            required
            type="email"
            placeholder="example@mail.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-yellow-600 text-yellow-200 placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-yellow-300 mb-1"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-yellow-600 text-yellow-200 placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none transition-all duration-200"
          />
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className={`w-full py-3 rounded-lg font-semibold text-gray-900 bg-yellow-500 hover:bg-yellow-600 shadow-lg shadow-yellow-400/20 transition duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50 ${
              status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
            }`}
            aria-busy={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </div>

        {/* Status messages */}
        <AnimatePresence>
          {status === 'success' && (
            <motion.p
              role="alert"
              className="text-center text-green-400 text-sm font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              ✅ Thank you! Your message has been sent.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              role="alert"
              className="text-center text-red-500 text-sm font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              ❌ Something went wrong. Please try again later.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.form>
    </section>
  );
};

export default InvestorsContact;
