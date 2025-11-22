import React from "react";

const WomanClothsFooterBanner = () => {
  return (
    <section className="relative bg-gray-900 text-white py-12 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-8 ">
        
        {/* Content Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-400 mb-3 leading-tight">
            Elevate Your Style Today!
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-lg font-light">
            Discover premium fashion collections crafted for elegance and comfort. Shop now and get exclusive offers.
          </p>
        </div>

        {/* Desktop Image + Button */}
        <div className="hidden sm:block relative w-40 h-40 rounded-lg overflow-hidden">
          {/* Image */}
          <img
            src="https://plus.unsplash.com/premium_photo-1700823470909-cede62f703fe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNsb3RoZXMlMjBzaG9wfGVufDB8fDB8fHww"
            alt="Fashion Banner"
            className="w-full h-full object-cover"
          />
          {/* Button Over Image */}
         <a
  href="#shop"
  className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-yellow-400/70 text-gray-900 font-semibold text-sm px-8 py-1.5 rounded-full shadow-lg hover:bg-yellow-500/80 hover:text-white transition-all duration-300"
>
  Shop Now
</a>

        </div>

        {/* Mobile Button (Visible Only on Mobile) */}
        <div className="sm:hidden">
          <a
            href="#shop"
            className="inline-block bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-500 transition-all duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>
    </section>
  );
};

export default WomanClothsFooterBanner;
