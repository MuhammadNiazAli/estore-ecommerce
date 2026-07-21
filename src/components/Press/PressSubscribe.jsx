import React from 'react';

const PressSubscribe = () => {
  return (
    <div className="bg-white flex items-center justify-center px-4 py-16 sm:py-20 my-[-50px] mb-[-230px]">
      <div className="w-full max-w-[1000px] bg-white text-amber-600 p-6 sm:p-10 rounded-lg shadow-lg">
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
            className="w-full px-4 py-3 rounded-md border border-amber-600 bg-white text-amber-500 placeholder-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-600 transition"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-amber-600 text-gray-900 font-semibold rounded-md hover:bg-amber-500 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default PressSubscribe;
