import React from 'react';

const PressSubscribe = () => {
  return (
    <div className="bg-gray-900 flex items-center justify-center px-4 py-16 sm:py-20 my-[-50px] mb-[-230px]">
      <div className="w-full max-w-[1000px] bg-gray-900 text-yellow-400 p-6 sm:p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-5 sm:mb-6 text-center tracking-wide">
          Subscribe to Our Press Updates
        </h2>
        <p className="text-base sm:text-lg mb-6 sm:mb-8 text-center max-w-xl mx-auto leading-relaxed">
          Stay informed with the latest news, press releases, and exclusive announcements delivered straight to your inbox.
        </p>

        <form className="flex flex-col sm:flex-row items-center max-w-md mx-auto gap-3 sm:gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-md border border-yellow-400 bg-gray-800 text-yellow-300 placeholder-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-300 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default PressSubscribe;
