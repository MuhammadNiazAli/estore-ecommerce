import React from 'react';

const ClearanceHero = () => {
  return (
    <section className="bg-gray-900 text-yellow-400 w-full flex justify-center py-20 px-6 sm:px-8 md:px-0">
      <div className="max-w-[1000px] w-full text-center ">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight sm:leading-snug mb-5">
          Massive Clearance Sale
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl font-light max-w-xl mx-auto mb-10 text-yellow-300">
          Everything must go! Grab your favorites at unbeatable prices before they're gone.
        </p>

        {/* Call to action buttons */}
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="/shop"
            className="inline-block bg-yellow-400 text-gray-900 font-semibold rounded-md px-10 py-3 shadow-lg hover:bg-yellow-500 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50"
            aria-label="Shop Now"
          >
            Shop Now
          </a>
          <a
            href="/clearance-info"
            className="inline-block border border-yellow-400 text-yellow-400 font-semibold rounded-md px-10 py-3 hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50"
            aria-label="Learn More"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClearanceHero;
