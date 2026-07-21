import React from "react";

const ClearancePromoBanner = () => {
  return (
    <section className="relative bg-white text-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://media.istockphoto.com/id/1171892996/photo/70-off-sales-promotion-on-retail-shop-display-window-black-friday-clearance-mega-sale.webp?a=1&b=1&s=612x612&w=0&k=20&c=W9iLF_ZmKG7Uq9biLj719ow6MT3XWmCwMhCPpEqeCmo="
          alt="Clearance Promo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/70"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-[1000px] mx-auto text-center px-4 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
          Mega Clearance Event!
        </h2>
        <p className="text-gray-700 text-lg sm:text-xl max-w-[700px] mx-auto mb-8">
          Shop your favorite products at unbeatable prices. Limited time offer,
          don’t miss out!
        </p>
        <a
          href="#"
          className="inline-block bg-black text-gray-900 font-semibold text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-black transition"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default ClearancePromoBanner;
