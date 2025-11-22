import React from "react";

const AccessoriesAd = () => {
  return (
    <section
      aria-label="Exclusive accessories promotional banner"
      className="max-w-[1000px] mx-auto bg-gray-900 rounded-xl overflow-hidden shadow-xl p-6 sm:p-10 md:p-12 flex flex-col md:flex-row items-center gap-8 px-4 sm:px-6"
    >
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left max-w-xl mx-auto md:mx-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-4 leading-tight tracking-wide">
          Discover the Elegance of Our Exclusive Accessories
        </h2>
        <p className="text-gray-300 mb-6 max-w-lg mx-auto md:mx-0 leading-relaxed text-base sm:text-lg">
          From timeless pearl necklaces to vintage-inspired watches, elevate your style with our premium collection. Crafted with precision and designed to impress.
        </p>

        <ul className="text-yellow-400 mb-8 space-y-3 max-w-lg mx-auto md:mx-0 text-sm sm:text-base">
          {[ 
            "Handcrafted with finest materials",
            "Limited edition collections",
            "Free shipping & 30-day returns",
          ].map((text, i) => (
            <li key={i} className="flex items-center gap-3">
              <svg
                className="w-5 h-5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              {text}
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 max-w-lg mx-auto md:mx-0">
          <div>
            <span className="text-2xl sm:text-3xl font-extrabold text-yellow-400 mr-2">
              $129.99
            </span>
            <span className="line-through text-gray-600 text-sm sm:text-base">$179.99</span>
          </div>
          <button
            type="button"
            className="bg-yellow-500 hover:bg-yellow-600 transition text-gray-900 font-bold py-3 px-8 rounded-lg shadow-lg whitespace-nowrap text-sm sm:text-base"
            aria-label="Shop now"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 max-w-md w-full mx-auto md:mx-0">
        <img
          src="https://images.unsplash.com/photo-1722410180687-b05b50922362?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Elegant Pearl Necklace"
          className="rounded-xl shadow-xl w-full h-auto object-cover"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </div>
    </section>
  );
};

export default AccessoriesAd;
