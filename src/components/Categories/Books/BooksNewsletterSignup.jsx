"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";

const BooksNewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setStatus("Please enter a valid email address.");
      return;
    }
    setStatus("Thank you for subscribing!");
    setEmail("");
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <section className="bg-white text-amber-600 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h2 className="text-3xl font-bold mb-3">Subscribe to Our Newsletter</h2>
          <p className="text-gray-700 mb-5 max-w-md">
            Stay updated with the latest book releases, author insights, and
            exclusive discounts delivered straight to your inbox.
          </p>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <FaEnvelopeOpenText className="text-amber-700 text-lg" />
            <span>No spam, unsubscribe anytime.</span>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-white p-6 rounded-xl shadow-lg border border-amber-700 w-full max-w-md"
        >
          <label htmlFor="email" className="block mb-2 font-semibold">
            Your Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg bg-white text-gray-700 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-700 mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-amber-700 text-gray-900 font-bold py-3 rounded-lg hover:bg-amber-600 transition"
          >
            Subscribe
          </button>

          {/* Status Message */}
          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mt-4 text-center text-sm text-amber-600"
            >
              {status}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default BooksNewsletterSignup;
