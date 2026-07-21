import React from "react";

const ManClothesFooterBanner = () => {
  return (
    <section
      aria-label="Exclusive deals and newsletter signup"
      className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 py-12 sm:py-16 px-4 sm:px-8 md:px-20 rounded-3xl max-w-7xl mx-auto shadow-2xl my-14 md:my-20 mb-[-50px]"
    >
      {/* Animated subtle overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-amber-500 opacity-20 animate-pulse mix-blend-multiply pointer-events-none rounded-3xl"
      ></div>

      {/* Top-left badge */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex items-center gap-2 bg-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg border border-amber-400 animate-bounce">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1040/1040230.png"
          alt="Star"
          className="w-5 h-5 sm:w-6 sm:h-6"
        />
        <span className="text-amber-900 font-bold text-xs sm:text-sm">
          Best Deals
        </span>
      </div>

      {/* Bottom-right badge */}
 <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-white rounded-xl shadow-lg p-3 sm:p-4 flex flex-col items-center gap-1 sm:gap-2 w-28 sm:w-32 animate-pulse hidden sm:flex ">
    <img
          src="https://cdn-icons-png.flaticon.com/512/1170/1170627.png"
          alt="Offer"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
        <span className="text-gray-900 font-bold text-base sm:text-lg">
          50% OFF
        </span>
        <p className="text-[10px] sm:text-xs text-gray-500">Limited Time</p>
      </div>

      <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between gap-8 sm:gap-10 max-w-5xl mx-auto text-center md:text-left">
        {/* Text content */}
        <div className="max-w-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-lg leading-tight">
            Unlock{" "}
            <span className="text-amber-950">Exclusive Deals</span> & Premium
            Style
          </h2>
          <p className="mt-4 text-amber-950 text-base sm:text-lg md:text-xl font-medium leading-relaxed drop-shadow-sm">
            Subscribe to our newsletter and get instant access to trending
            fashion updates, member-only offers, and seasonal discounts!
          </p>
        </div>

        {/* Call to action button */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <button
            type="button"
            className="inline-flex items-center bg-gradient-to-r from-amber-800 to-amber-900 hover:from-amber-900 hover:to-amber-900
              text-gray-900 font-extrabold rounded-3xl px-8 sm:px-10 md:px-12 py-4 sm:py-5 shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-amber-500 focus:ring-opacity-80"
            aria-label="Subscribe to newsletter"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22 12h-20"></path>
              <path d="M12 22V2"></path>
            </svg>
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ManClothesFooterBanner;
