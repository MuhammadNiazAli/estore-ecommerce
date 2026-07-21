import React, { useState } from "react";

const ClearanceNewsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setMessage({ type: "error", text: "Please enter your email address." });
      return;
    }
    if (!emailPattern.test(email)) {
      setMessage({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    // Success
    setMessage({ type: "success", text: "Subscribed successfully! " });
    setEmail("");

    // Here you could send the email to a backend API
  };

  return (
    <section className="bg-white text-amber-600 py-12">
      <div className="max-w-[1000px] mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-3">
          Stay Updated on Clearance Deals
        </h2>
        <p className="text-gray-700 mb-6">
          Subscribe to our newsletter and never miss exclusive clearance discounts.
        </p>

        {/* Newsletter Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-[600px] mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-white text-amber-600 placeholder-amber-800 text-lg outline-none border-2 border-transparent focus:border-amber-600 transition"
          />
          <button
            type="submit"
            className="bg-amber-700 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>

        {/* Message */}
        {message.text && (
          <p
            className={`mt-4 text-sm font-medium ${
              message.type === "error" ? "text-red-500" : "text-green-400"
            }`}
          >
            {message.text}
          </p>
        )}
      </div>
    </section>
  );
};

export default ClearanceNewsletter;
