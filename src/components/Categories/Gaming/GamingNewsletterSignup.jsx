"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

const GamingNewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="bg-white text-black py-12 px-4 my-5">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Join the Gaming Revolution
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-gray-700 mb-8 max-w-2xl mx-auto"
        >
          Subscribe to our newsletter and stay updated with the latest gaming
          gear, exclusive discounts, and pro tips!
        </motion.p>

        {/* Signup Form */}
        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="relative w-full sm:w-2/3">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-black transition"
            >
              Subscribe
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-black font-semibold mt-6"
          >
            ✅ Thank you for subscribing! Get ready for epic updates.
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GamingNewsletterSignup;
