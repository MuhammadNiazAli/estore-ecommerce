'use client'
import React, { useState } from "react";

const IndustrialNewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for signing up, ${email}!`);
    setEmail("");
  };

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-bold text-black mb-2">
          Stay Updated with Industrial Safety & Equipment Deals
        </h2>
        <p className="text-black mb-6">
          Subscribe to our newsletter for industry insights and exclusive offers on industrial gear!
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center"
          noValidate
        >
          <input
            type="email"
            aria-label="Email address"
            required
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 rounded-md border border-black bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-md bg-black text-gray-900 font-semibold hover:bg-black transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default IndustrialNewsletterSignup;
