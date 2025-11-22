import React, { useState } from "react";

const ManClothesNewsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Simple email validation regex
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    // Simulate successful subscription (frontend only)
    setSuccess(true);
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 py-12 px-6 md:px-16 rounded-3xl max-w-4xl mx-auto shadow-lg">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-3 drop-shadow-md">
          Join Our Newsletter
        </h2>
        <p className="text-gray-900 text-lg md:text-xl font-medium mb-8">
          Get the latest deals, styles, and updates straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          noValidate
        >
          <input
            type="email"
            aria-label="Email address"
            placeholder="Enter your email"
            className={`w-full sm:w-auto flex-grow px-5 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-yellow-600 transition-shadow text-gray-900 font-semibold shadow-md ${
              error ? "ring-2 ring-red-500" : ""
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-yellow-600 hover:bg-yellow-700 transition-colors text-white font-extrabold rounded-xl px-10 py-4 shadow-lg whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        {error && (
          <p className="mt-4 text-red-600 font-semibold text-sm sm:text-base">
            {error}
          </p>
        )}
        {success && (
          <p className="mt-4 text-green-700 font-semibold text-sm sm:text-base">
            Thanks for subscribing! 
          </p>
        )}
      </div>
    </section>
  );
};

export default ManClothesNewsletter;
