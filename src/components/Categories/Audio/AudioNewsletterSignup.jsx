"use client";
import React, { useState } from "react";

const AudioNewsletterSignup = () => {
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
    <section className="bg-white text-amber-600 py-12 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Subscribe to Audio Insights</h2>
        <p className="mb-8 text-amber-500">
          Get exclusive updates on audio gear, sound tips, and special offers.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            noValidate
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-white text-amber-600 placeholder-amber-800 border border-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-600 transition"
              aria-label="Email address"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-amber-700 hover:bg-amber-600 text-gray-900 font-semibold rounded-lg shadow-lg transition"
              aria-label="Subscribe to audio newsletter"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="bg-amber-900 bg-opacity-20 border border-amber-700 rounded-lg p-6 text-amber-400 font-semibold">
            Thank you for subscribing! Check your inbox for audio updates.
          </div>
        )}

        {error && (
          <p className="mt-4 text-sm text-red-500 font-semibold">{error}</p>
        )}
      </div>
    </section>
  );
};

export default AudioNewsletterSignup;
