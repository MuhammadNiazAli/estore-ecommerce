'use client'
import React, { useState } from "react";

const ShoesNewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just clear input or you can add your logic here
    alert(`Thank you for signing up, ${email}!`);
    setEmail("");
  };

  return (
    <section className="bg-gray-900 text-yellow-400 py-12 px-4">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-4 tracking-wide">
          Stay Updated with Shoes Deals
        </h2>
        <p className="mb-6 text-yellow-300">
          Subscribe to get exclusive offers, new arrivals, and style tips.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4"
          noValidate
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:flex-1 px-4 py-3 rounded-md text-gray-50 bg-gray-800 font-medium focus:outline-yellow-500 focus:ring-2 focus:ring-yellow-400 transition"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold rounded-md transition"
            aria-label="Subscribe to newsletter"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default ShoesNewsletterSignup;
