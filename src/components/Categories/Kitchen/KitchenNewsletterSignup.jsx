"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const KitchenNewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // success | error | null

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 800);
  };

  return (
    <section className="bg-white text-amber-600 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join Our Kitchen Newsletter
        </motion.h2>
        <p className="text-amber-400 mb-8 text-sm md:text-base">
          Get exclusive deals, latest kitchen tips, and new product launches
          delivered straight to your inbox.
        </p>

        {/* Newsletter Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-white text-amber-600 placeholder-amber-400 border border-amber-700 focus:outline-none focus:border-amber-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-amber-700 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-amber-600 transition w-full sm:w-auto"
          >
            Subscribe
          </button>
        </motion.form>

        {/* Feedback Messages */}
        <div className="mt-4 h-6">
          {status === "success" && (
            <p className="text-green-400 text-sm">✅ Subscription successful!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm">❌ Please enter a valid email.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default KitchenNewsletterSignup;
