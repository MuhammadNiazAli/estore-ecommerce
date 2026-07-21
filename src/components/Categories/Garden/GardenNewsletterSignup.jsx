'use client'
import React, { useState } from "react";

const GardenNewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for signing up, ${email}! Enjoy gardening tips and deals.`);
    setEmail("");
  };

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-bold text-amber-600 mb-2">
          Grow Your Garden with Our Latest Tips & Offers
        </h2>
        <p className="text-amber-500 mb-6">
          Subscribe to our newsletter and never miss out on gardening advice and exclusive discounts!
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
            className="flex-grow px-4 py-3 rounded-md border border-amber-600 bg-white text-amber-300 placeholder-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-md bg-amber-700 text-gray-900 font-semibold hover:bg-amber-600 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default GardenNewsletterSignup;
