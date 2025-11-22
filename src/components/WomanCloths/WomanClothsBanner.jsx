import React from "react";

const WomanClothsBanner = () => {
  return (
    <section className="relative w-full max-w-[1400px] mx-auto overflow-hidden rounded-2xl my-10 shadow-lg">
      {/* Background Image */}
      <div className="relative w-full h-[400px] md:h-[450px] lg:h-[480px]">
        <img
          src="https://images.unsplash.com/photo-1640728422806-3be121bdba63?w=1200&auto=format&fit=crop&q=80"
          alt="Women's Fashion Banner"
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          loading="lazy"
          draggable={false}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-8 md:px-12 lg:px-16 text-white max-w-lg">
          {/* Badges */}
          <div className="flex gap-2 mb-3">
            <span className="bg-green-500 text-white text-[10px] sm:text-xs font-semibold rounded-full px-2 py-0.5 uppercase tracking-wide shadow-lg">
              New
            </span>
            <span className="bg-red-600 text-white text-[10px] sm:text-xs font-semibold rounded-full px-2 py-0.5 uppercase tracking-wide shadow-lg">
              25% Off
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug animate-fadeIn">
            Discover the New <br />
            <span className="text-yellow-400">Women’s Collection</span>
          </h1>

          {/* Description */}
          <p className="mt-3 text-sm sm:text-base text-gray-300 animate-fadeIn delay-200">
            Explore our curated selection of premium dresses, jackets, and
            fashion essentials for every occasion.
          </p>

          {/* Rating */}
          <div
            className="flex items-center mt-3 animate-fadeIn delay-300"
            aria-label="Rating: 4.5 out of 5 stars"
          >
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 ${
                  i < 4 ? "text-yellow-400" : "text-yellow-400/60"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.965a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.392c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.965z" />
              </svg>
            ))}
            <span className="ml-1 text-yellow-400 font-semibold text-xs sm:text-sm md:text-sm">
              (4.5)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mt-3 animate-fadeIn delay-400">
            <span className="text-2xl sm:text-3xl font-extrabold text-yellow-400">
              $99.99
            </span>
            <span className="text-gray-400 line-through text-sm sm:text-base">
              $134.99
            </span>
            <span className="bg-red-600 text-white px-1.5 py-0.5 rounded text-[10px] sm:text-xs font-semibold uppercase tracking-wide">
              Save 25%
            </span>
          </div>

          {/* Button */}
          <button
            className="mt-6 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold text-base hover:bg-yellow-600/50 hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg animate-fadeIn delay-50"
            aria-label="Shop Women's Collection"
          >
            Shop Now
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default WomanClothsBanner;
