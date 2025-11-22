'use client'
import React, { useState } from "react";

const HealthNewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for signing up, ${email}! Stay healthy and informed with our tips and offers.`);
    setEmail("");
  };

  return (
    <section className="bg-gray-900 py-12 px-4">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-400 mb-2">
          Boost Your Health with Our Latest Tips & Offers
        </h2>
        <p className="text-green-300 mb-6">
          Subscribe to our newsletter and get expert advice and exclusive health discounts delivered right to your inbox!
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
            className="flex-grow px-4 py-3 rounded-md border border-green-400 bg-gray-800 text-green-100 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-md bg-green-500 text-gray-900 font-semibold hover:bg-green-400 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default HealthNewsletterSignup;
