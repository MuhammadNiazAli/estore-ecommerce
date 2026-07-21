import React, { useState } from "react";

const AccessoriesNewsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <div className="bg-white text-gray-900 py-10 px-5 md:px-16 lg:px-24 flex flex-col items-center justify-center text-center my-10 mb-[-50px]">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
        Stay Updated with Our Accessories
      </h2>
      <p className="text-gray-700 mb-6 max-w-lg">
        Subscribe to our newsletter for the latest trends, exclusive deals, and premium accessory collections.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center w-full max-w-xl gap-3"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:flex-1 px-4 py-3 rounded-xl bg-white text-gray-900 placeholder-gray-400 border border-black focus:outline-none focus:border-black transition-all"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-black text-gray-900 font-semibold hover:bg-black transition-all w-full sm:w-auto"
        >
          Subscribe
        </button>
      </form>

      {submitted && (
        <div className="mt-4 text-black font-medium">
          ✅ Thank you for subscribing!
        </div>
      )}
    </div>
  );
};

export default AccessoriesNewsletter;
