"use client";
import React, { useState } from "react";

const OfficeNewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Email validation regex
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
    <section className="bg-white text-black py-12 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Subscribe to Our Office Newsletter</h2>
        <p className="mb-8 text-black">
          Stay updated with the latest office tips, workspace trends, and exclusive deals.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            noValidate
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 border border-black focus:outline-none focus:ring-2 focus:ring-black transition"
              aria-label="Email address"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-black hover:bg-black text-gray-900 font-semibold rounded-lg shadow-lg transition"
              aria-label="Subscribe to office newsletter"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="bg-black bg-opacity-20 border border-black rounded-lg p-6 text-black font-semibold">
            Thank you for subscribing! Check your inbox to confirm.
          </div>
        )}

        {error && (
          <p className="mt-4 text-sm text-black font-semibold">{error}</p>
        )}
      </div>
    </section>
  );
};

export default OfficeNewsletterSignup;
