import React from 'react';

const ClearanceHero = () => {
  return (
    <section className="bg-white text-amber-600 w-full flex justify-center py-20 px-6 sm:px-8 md:px-0">
      <div className="max-w-[1000px] w-full text-center ">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight sm:leading-snug mb-5">
          Massive Clearance Sale
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl font-light max-w-xl mx-auto mb-10 text-amber-500">
          Everything must go! Grab your favorites at unbeatable prices before they're gone.
        </p>

        {/* Call to action buttons */}
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="/shop"
            className="inline-block bg-amber-600 text-gray-900 font-semibold rounded-md px-10 py-3 shadow-lg hover:bg-amber-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-amber-600 focus:ring-opacity-50"
            aria-label="Shop Now"
          >
            Shop Now
          </a>
          <a
            href="/clearance-info"
            className="inline-block border border-amber-600 text-amber-600 font-semibold rounded-md px-10 py-3 hover:bg-amber-600 hover:text-gray-900 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-amber-600 focus:ring-opacity-50"
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
