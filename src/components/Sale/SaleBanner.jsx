import React from "react";

const SaleBanner = () => {
  return (
    <section className="w-full flex justify-center px-4 my-20">
      <div className="relative max-w-[1000px] w-full rounded-2xl overflow-hidden shadow-xl">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1652795385822-539bcdaeadea?q=80&w=1105&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Sale Banner"
          className="w-full h-[280px] sm:h-[350px] md:h-[400px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/30 flex items-center justify-center text-center px-6">
          <div className="text-gray-900 max-w-lg">
            {/* Small Label */}
            <p className="text-amber-600 text-sm sm:text-base font-semibold uppercase tracking-wide mb-2">
              Limited Time Offer
            </p>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              Flash Sale <span className="text-amber-600">Up to 70% OFF</span>
            </h2>

            {/* Subtext */}
            <p className="mt-3 text-gray-700 text-sm sm:text-lg">
              Shop your favorite products now. Hurry, this deal won’t last long!
            </p>

            {/* CTA Button */}
            <a
              href="#sale-products"
              className="mt-6 inline-block px-8 py-3 bg-amber-600 text-gray-900 font-semibold rounded-full shadow-md hover:bg-amber-500 hover:scale-105 transition-transform duration-300"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleBanner;
