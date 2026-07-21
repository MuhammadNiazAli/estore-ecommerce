import React from 'react';

const NewseasonNewsletter = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-amber-600 text-3xl md:text-4xl font-bold mb-4">
          Stay Updated with the New Season
        </h2>
        <p className="text-amber-400 text-lg mb-8 max-w-2xl mx-auto">
          Join our newsletter and be the first to know about exclusive deals, fresh arrivals, and seasonal collections.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-[60%] px-4 py-3 rounded-lg bg-white text-amber-400 placeholder-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
          <button
            type="submit"
            className="bg-amber-600 hover:bg-amber-700 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>

        <p className="text-amber-500 text-xs mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewseasonNewsletter;
