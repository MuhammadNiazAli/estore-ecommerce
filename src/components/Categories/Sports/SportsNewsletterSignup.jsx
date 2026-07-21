"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";

const SportsNewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // success | error | null

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus(null), 4000); // Hide message after 4s
  };

  return (
    <section className="bg-white py-14">
      <div className="max-w-4xl mx-auto px-4 text-center text-gray-900">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-amber-600 mb-3">
          Stay in the Game
        </h2>
        <p className="text-gray-700 mb-6 text-lg">
          Join our newsletter and get the latest deals, news, and sports tips!
        </p>

        {/* Newsletter Form */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <div className="relative w-full sm:w-[400px]">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white text-gray-900 rounded-full pl-12 pr-4 py-3 outline-none border border-gray-200 focus:border-amber-600 transition"
            />
          </div>
          <button
            type="submit"
            className="bg-amber-600 text-black font-semibold px-8 py-3 rounded-full hover:bg-amber-500 transition w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>

        {/* Status Messages */}
        <AnimatePresence>
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 text-green-400 font-semibold"
            >
              ✅ You’ve successfully subscribed!
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 text-red-400 font-semibold"
            >
              ❌ Please enter a valid email address.
            </motion.p>
          )}
        </AnimatePresence>

        {/* Privacy Note */}
        <p className="mt-6 text-gray-600 text-sm">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default SportsNewsletterSignup;
