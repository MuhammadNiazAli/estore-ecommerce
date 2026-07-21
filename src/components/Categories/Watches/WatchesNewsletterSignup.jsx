"use client";
import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const WatchesNewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setEmail("");
    }, 1500);
  };

  return (
    <section className="w-full bg-white py-14 px-4">
      <div className="max-w-5xl mx-auto text-center text-gray-800">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Stay Updated on Luxury Timepieces
        </h2>
        <p className="text-gray-600 mb-8">
          Get exclusive offers, news, and watch care tips directly to your inbox.
        </p>

        {/* Form */}
        {!success ? (
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col md:flex-row items-center gap-4 max-w-2xl mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none border border-gray-200 focus:border-black transition"
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-full md:w-auto px-6 py-3 rounded-lg font-semibold transition duration-300 flex items-center justify-center ${
                loading
                  ? "bg-black cursor-not-allowed"
                  : "bg-black hover:bg-black text-gray-900"
              }`}
            >
              {loading ? (
                <span className="animate-spin border-2 border-gray-200 border-t-transparent rounded-full h-5 w-5"></span>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
        ) : (
          <div className="flex items-center justify-center gap-2 text-black mt-6">
            <CheckCircleIcon className="h-6 w-6" />
            <p className="font-medium">Thank you for subscribing!</p>
          </div>
        )}

        {/* Error Message */}
        {error && <p className="text-black text-sm mt-3">{error}</p>}

        {/* Footer Text */}
        <p className="text-xs text-gray-500 mt-6">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default WatchesNewsletterSignup;
