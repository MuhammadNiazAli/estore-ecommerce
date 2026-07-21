"use client";
import React, { useState } from "react";

const FitnessNewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    // Basic email regex validation
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setStatus("loading");

    // Simulate API call delay
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="bg-white text-black py-12 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Fitness Newsletter</h2>
        <p className="mb-8 text-gray-700">
          Get the latest fitness tips, workout routines, and exclusive deals
          delivered right to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          noValidate
        >
          <input
            type="email"
            aria-label="Email address"
            placeholder="Enter your email"
            className={`w-full sm:flex-1 px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition ${
              error ? "ring-2 ring-black" : ""
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 bg-black text-gray-900 font-semibold rounded-md shadow-lg hover:bg-black transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Submitting..." : "Subscribe"}
          </button>
        </form>

        {error && (
          <p className="mt-3 text-black font-medium" role="alert">
            {error}
          </p>
        )}

        {status === "success" && (
          <p
            className="mt-3 text-black font-semibold animate-fadeIn"
            role="alert"
          >
            Thank you for subscribing!
          </p>
        )}
      </div>
    </section>
  );
};

export default FitnessNewsletterSignup;
