import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { IoClose } from "react-icons/io5";

const images = [
  {
    src: "https://plus.unsplash.com/premium_photo-1675106697224-48f0ff928c2c?q=80&w=870&auto=format&fit=crop",
    title: "Summer Chic",
    desc: "Light & breathable styles.",
  },
  {
    src: "https://images.unsplash.com/photo-1614098097306-c67b8020c04e?q=80&w=832&auto=format&fit=crop",
    title: "Elegant Evening",
    desc: "Perfect for special nights.",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1725914368267-722e1f490026?q=80&w=870&auto=format&fit=crop",
    title: "Casual Comfort",
    desc: "Relaxed fits for every day.",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1725914369019-5dc4b06cfb12?q=80&w=870&auto=format&fit=crop",
    title: "Office Ready",
    desc: "Smart & stylish looks.",
  },
  {
    src: "https://images.unsplash.com/photo-1503997954014-9745efdfe1d4?q=80&w=873&auto=format&fit=crop",
    title: "Trendy Layers",
    desc: "Stay warm with elegance.",
  },
  {
    src: "https://images.unsplash.com/photo-1652689223597-8cecc8cc3968?q=80&w=870&auto=format&fit=crop",
    title: "Luxury Touch",
    desc: "Premium fabrics & feel.",
  },
  {
    src: "https://images.unsplash.com/photo-1643935242152-bccdddd3b816?q=80&w=870&auto=format&fit=crop",
    title: "Bold Vibes",
    desc: "Make a statement.",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1674273912596-ea5a4aa8eb20?q=80&w=871&auto=format&fit=crop",
    title: "Classic Whites",
    desc: "Timeless elegance.",
  },
  {
    src: "https://images.unsplash.com/photo-1747049559461-560c02b192b2?q=80&w=870&auto=format&fit=crop",
    title: "Street Style",
    desc: "Edgy & modern looks.",
  },
];

const WomanClothsHero = () => {
  const [activeImage, setActiveImage] = useState(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (activeImage) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [activeImage]);

  return (
    <section className="w-full bg-white my-[-50px] text-gray-900 py-10 flex justify-center">
      <div className="max-w-[1200px] w-full grid md:grid-cols-2 gap-8 px-4">
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-amber-700">
            Elevate Your Style
          </h1>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Discover our premium women’s collection featuring timeless designs
            and modern trends. Shop now to redefine your wardrobe with elegance.
          </p>
          <button className="bg-amber-700 text-gray-900 px-6 py-3 font-semibold rounded-xl hover:bg-amber-600 transition">
            Shop Now
          </button>
        </div>

        {/* Right Image Grid */}
        <div className="grid grid-cols-3 gap-2">
          {images.map((item, i) => (
            <div
              key={i}
              className="relative overflow-hidden cursor-pointer group"
              onClick={() => setActiveImage(item.src)}
            >
              <img
                src={item.src}
                alt={`fashion-${i}`}
                className="w-full h-28 md:h-32 lg:h-36 xl:h-44 object-cover transform group-hover:scale-110 transition duration-500"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition"></div>
              {/* Title + Description */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/70 text-gray-900 p-2 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
                <h4 className="text-sm font-semibold">{item.title}</h4>
                <p className="text-xs text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay Modal */}
      {activeImage && (
        <div
          ref={overlayRef}
          className="fixed inset-0 bg-white/90 flex items-center justify-center z-50 p-4 md:p-6"
        >
          <div className="max-w-6xl w-full bg-white rounded-xl overflow-hidden relative flex flex-col md:flex-row">
            {/* Close Button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 text-gray-900 text-3xl"
            >
              <IoClose />
            </button>

            {/* Left Content */}
            <div className="flex-1 p-4 md:p-6 flex flex-col justify-center text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-600 mb-4">
                Elegant Women’s Wear
              </h2>
              <p className="text-gray-700 mb-6 text-sm md:text-base">
                Our latest collection combines elegance and comfort for every
                occasion. Handcrafted with premium fabrics to ensure durability
                and style.
              </p>
              <div className="flex gap-3 flex-wrap">
                <button className="bg-amber-700 text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-xl hover:bg-amber-600 transition">
                  Add to Cart
                </button>
                <button className="border border-amber-700 text-amber-700 px-4 py-2 md:px-6 md:py-3 rounded-xl hover:bg-amber-700 hover:text-gray-900 transition">
                  View Details
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1">
              <img
                src={activeImage}
                alt="selected"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WomanClothsHero;
