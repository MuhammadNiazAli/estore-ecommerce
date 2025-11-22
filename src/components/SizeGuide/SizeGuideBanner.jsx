import React from "react";

const SizeGuideBanner = () => {
  return (
    <section
      className="w-full bg-gray-900 flex justify-center py-10 px-6 sm:px-8 md:py-14"
      aria-label="Size guide banner"
    >
      <div
        className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
      >
        {/* Text */}
        <div className="text-center md:text-left max-w-lg">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-yellow-400 mb-3 select-none leading-tight"
          >
            Not sure about your size?
          </h2>
          <p
            className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed"
          >
            Use our detailed size guide to find your perfect fit and avoid returns. If you need help, our support team is just a click away!
          </p>
        </div>

        {/* Call to Action */}
        <div>
          <a
            href="/size-guide"
            className="inline-block bg-yellow-400 text-gray-900 font-semibold rounded-md px-7 py-3.5 shadow-lg
              hover:bg-yellow-500 transition-colors duration-300 select-none text-base sm:text-lg"
            aria-label="Go to Size Guide"
          >
            View Size Guide
          </a>
        </div>
      </div>
    </section>
  );
};

export default SizeGuideBanner;
