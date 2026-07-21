"use client";

import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const brands = [
  {
    id: 1,
    name: "Nike",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    id: 2,
    name: "Adidas",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
  },
  {
    id: 3,
    name: "Puma",
    logo: "https://www.pikpng.com/pngl/b/42-429936_puma-logo-png-images-transparent-background-rh-pngnames.png",
  },
  {
    id: 4,
    name: "Under Armour",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Under_armour_logo.svg",
  },
  {
    id: 5,
    name: "Reebok",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Reebok_logo19.png",
  },
  {
    id: 6,
    name: "New Balance",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/2560px-New_Balance_logo.svg.png",
  },
  {
    id: 7,
    name: "Asics",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Asics_Logo.svg/2560px-Asics_Logo.svg.png",
  },
  {
    id: 8,
    name: "Wilson",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Wilson-logo.svg",
  },
  {
    id: 9,
    name: "Converse",
    logo: "https://images.seeklogo.com/logo-png/42/2/converse-2017-present-logo-png_seeklogo-423500.png",
  },
  {
    id: 10,
    name: "Fila",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Fila_logo.svg/2560px-Fila_logo.svg.png",
  },
  {
    id: 11,
    name: "Columbia Sportswear",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Columbia_Sportswear_Co_logo.svg/1280px-Columbia_Sportswear_Co_logo.svg.png",
  },
  {
    id: 12,
    name: "Salomon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Salomon_group_logo.png",
  },
  {
    id: 13,
    name: "Yonex",
    logo: "https://images.squarespace-cdn.com/content/v1/5ec74bf4a53733461d2d0e22/9b8dd275-7c66-46fe-a326-f428c7155426/Yonex+logo.png",
  },
  {
    id: 14,
    name: "Decathlon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Decathlon_Logo24.svg",
  },
  {
    id: 15,
    name: "Kappa",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Kappa_LOGO.png",
  },
  {
    id: 16,
    name: "Champion",
    logo: "https://images.seeklogo.com/logo-png/2/2/champion-logo-png_seeklogo-28992.png",
  },
  {
    id: 17,
    name: "Speedo",
    logo: "https://logoeps.com/wp-content/uploads/2013/05/speedo-eps-vector-logo.png",
  },
  {
    id: 18,
    name: "Mizuno",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/MIZUNO_logo.svg/1200px-MIZUNO_logo.svg.png",
  },
  {
    id: 19,
    name: "Spalding",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Spalding_logo.svg/2560px-Spalding_logo.svg.png",
  },
  {
    id: 20,
    name: "Lululemon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/800px-Lululemon_Athletica_logo.svg.png",
  },
];

const SportsBrandsCarousel = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white py-14 text-amber-600 mb-[-50px]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">Top Sports Brands</h2>
          <p className="text-gray-700 mt-2">
            Trusted by professionals worldwide
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-500 text-amber-600 p-3 rounded-full shadow-lg z-10"
            aria-label="Scroll Left"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Scrollable Brands */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-8 scroll-smooth px-10 no-scrollbar"
            style={{
              // Hide scrollbar for WebKit browsers (Chrome, Safari)
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE 10+
            }}
          >
            {brands.map((brand) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex-shrink-0 w-40 h-24 bg-white rounded-xl flex items-center justify-center hover:bg-gray-500 transition"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-12 max-w-[120px] object-contain"
                />
              </motion.div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-500 text-amber-600 p-3 rounded-full shadow-lg z-10"
            aria-label="Scroll Right"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Custom CSS to hide scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default SportsBrandsCarousel;
