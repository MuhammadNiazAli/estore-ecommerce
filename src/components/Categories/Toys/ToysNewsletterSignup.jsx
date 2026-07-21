'use client'
import React, { useState } from "react";

const ToysNewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <section className="max-w-md mx-auto p-6 rounded-md shadow-md bg-white text-gray-900 my-10">
      <h2 className="text-2xl font-semibold mb-4 text-center text-amber-700">
        Subscribe to Newsletter
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4"
        aria-label="Newsletter Signup Form"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-600 bg-white placeholder-gray-400"
        />
        <button
          type="submit"
          className="bg-amber-700 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-md transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default ToysNewsletterSignup;
