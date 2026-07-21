import React from 'react';

const NewseasonPromoBanner = () => {
  return (
    <section className="relative bg-white">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=1500&q=80')",
        }}
      ></div>
      <div className="absolute inset-0 bg-white/40 bg-opacity-60"></div>

      {/* Content */}
      <div className="relative max-w-[1000px] mx-auto px-6 py-20 text-center z-10">
        <h2 className="text-black text-4xl md:text-5xl font-extrabold mb-4">
          New Season Exclusive Sale
        </h2>
        <p className="text-black text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Upgrade your wardrobe with premium styles at unbeatable prices. Limited-time offer—don’t miss out!
        </p>
        <button
          type="button"
          className="bg-black hover:bg-black text-gray-900 font-bold py-3 px-10 rounded-lg shadow-lg transition-all duration-300"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default NewseasonPromoBanner;
