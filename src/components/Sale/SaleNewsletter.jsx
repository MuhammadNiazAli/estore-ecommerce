import React from "react";

const SaleNewsletter = () => {
  return (
    <section className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-12 my-[-50px]">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-yellow-400 text-3xl font-semibold mb-4 tracking-wide">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-300 mb-8">
          Get the latest updates on sales, exclusive offers, and new arrivals directly to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 justify-center" onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="w-full sm:flex-1 px-4 py-3 rounded-md border border-yellow-500 bg-gray-800 text-yellow-300 placeholder-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            aria-label="Email Address"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold rounded-md transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SaleNewsletter;
