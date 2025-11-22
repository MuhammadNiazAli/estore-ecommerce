"use client";
import React, { useState } from "react";

const BeautyNewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Simple email validation regex
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-gray-900 text-yellow-400 py-12 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Join Our Beauty Newsletter</h2>
        <p className="mb-8 text-yellow-300">
          Subscribe to get the latest beauty tips, product launches, and exclusive offers.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            noValidate
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-gray-800 text-yellow-400 placeholder-yellow-600 border border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              aria-label="Email address"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg transition"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="bg-yellow-700 bg-opacity-20 border border-yellow-500 rounded-lg p-6 text-yellow-200 font-semibold">
            Thank you for subscribing! Check your inbox to confirm.
          </div>
        )}

        {error && (
          <p className="mt-4 text-sm text-red-500 font-semibold">{error}</p>
        )}
      </div>
    </section>
  );
};

export default BeautyNewsletterSignup;
