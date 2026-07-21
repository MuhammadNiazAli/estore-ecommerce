import React, { useState } from "react";

const WomanClothsNewsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // success | error | empty

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setStatus("empty");
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setEmail("");
  };

  return (
    <section className="bg-white text-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-amber-600">
          Join Our Exclusive Newsletter
        </h2>
        <p className="text-lg text-gray-700 mb-8 font-light">
          Be the first to know about new arrivals, special offers, and
          premium fashion insights.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full sm:w-96 px-5 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-amber-600 border-none"
          />
          <button
            type="submit"
            className="bg-amber-600 text-gray-900 font-semibold px-8 py-4 rounded-full hover:bg-amber-700 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Subscribe
          </button>
        </form>

        {/* Status Messages */}
        <div className="mt-4">
          {status === "empty" && (
            <p className="text-red-400 text-sm">Please enter your email.</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm">
              Invalid email address. Try again.
            </p>
          )}
          {status === "success" && (
            <p className="text-green-400 text-sm">
              ✅ You’ve successfully subscribed!
            </p>
          )}
        </div>

        {/* Extra Info */}
        <div className="mt-8 text-gray-600 text-sm">
          We respect your privacy. Unsubscribe at any time.
        </div>
      </div>
    </section>
  );
};

export default WomanClothsNewsletter;
