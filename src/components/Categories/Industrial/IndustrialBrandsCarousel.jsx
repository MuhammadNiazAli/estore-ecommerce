"use client";
import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const brandLogos = [
  { id: 2, name: "Cuisinart", logo: "https://www.cdnlogo.com/logos/c/46/cuisinart.svg" },
  { id: 3, name: "T-fal", logo: "https://1000logos.net/wp-content/uploads/2018/08/Tefal-Logo.png" },
  { id: 4, name: "Calphalon", logo: "https://www.calphalon.com/on/demandware.static/Sites-calphalon-Site/-/default/dwd37a8789/images/calphalon/brand-logo-metaimage.png" },
  { id: 5, name: "All-Clad", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/All-Clad-Logo.svg/1280px-All-Clad-Logo.svg.png" },
  { id: 7, name: "Le Creuset", logo: "https://cultrhea.com/images/upload/store/store_Le%20Creuset20220822161200.png" },
  { id: 8, name: "Lodge", logo: "https://seeklogo.com/images/L/lodge-cast-iron-logo-4A47501FE9-seeklogo.com.png" },
  { id: 9, name: "Anolon", logo: "https://meyerus.com/wp-content/uploads/2022/10/anolon-logo-purple.png" },
  { id: 10, name: "Circulon", logo: "https://meyerus.com/wp-content/uploads/2022/10/Circulon-Logo-black.png" },
  { id: 11, name: "Zwilling", logo: "https://images.seeklogo.com/logo-png/15/2/zwilling-logo-png_seeklogo-156721.png" },
  { id: 12, name: "Henckels", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/J._A._Henckels_logo.svg/1200px-J._A._Henckels_logo.svg.png" },
  { id: 13, name: "Viking", logo: "https://pngimg.com/d/viking_PNG3.png" },
  { id: 14, name: "OXO", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/OXO_logo.svg/1200px-OXO_logo.svg.png" },
  { id: 15, name: "Rachael Ray", logo: "https://static.wikia.nocookie.net/logopedia/images/2/21/Rachael_Ray.svg/revision/latest/scale-to-width-down/200?cb=20250612094709" },
  { id: 16, name: "Paula Deen", logo: "https://pauladeenmagazine.com/wp-content/uploads/2018/05/PDClogo_544x180.png" },
  { id: 17, name: "Emile Henry", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_Entreprise_%C3%89mile_Henry.svg/1200px-Logo_Entreprise_%C3%89mile_Henry.svg.png" },
  { id: 18, name: "Staub", logo: "https://www.zwilling.com/on/demandware.static/-/Sites-zwilling-be-Library/default/dw4eeeebab/images/brand-logo/pdp-quote-module-brand-copy-logo-staub-100-100.png" },
  { id: 19, name: "Mauviel", logo: "https://phillipandlea.com.au/cdn/shop/collections/ezgif.com-webp-to-png.png?v=1625031301" },
  { id: 20, name: "Demeyere", logo: "https://supplies.gusta.ca/cdn/shop/collections/Demeyere_Logo_1200x1200.png?v=1671319732" },
  { id: 21, name: "Scanpan", logo: "https://thomaskristensen.com/wp/wp-content/uploads/SCANPAN-logo-1.png" },
  { id: 22, name: "Silit", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Silit-logo.svg/2560px-Silit-logo.svg.png" },
  { id: 23, name: "Berghoff", logo: "https://berghoff.com.au/cdn/shop/files/Berghoff_black.png?v=1712625664&width=600" },
  { id: 24, name: "Royal Doulton", logo: "https://cdn.freebiesupply.com/logos/large/2x/royal-doulton-logo-svg-vector.svg" },
];


const IndustrialBrandsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItems = 4; // Show 4 on desktop, adjust for mobile with CSS

  const nextSlide = () => {
    if (currentIndex < brandLogos.length - visibleItems) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="bg-white py-10 text-amber-600 my-[-30px]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Popular Clothing Brands
        </h2>

        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 z-10 p-2 bg-amber-700 text-gray-900 rounded-full hover:bg-amber-600 transition disabled:opacity-50`}
          >
            <FaChevronLeft size={18} />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden w-full">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * 25}%` }} // each card ~25% width
              transition={{ type: "spring", stiffness: 80 }}
            >
              {brandLogos.map((brand) => (
                <div
                  key={brand.id}
                  className="min-w-[50%] sm:min-w-[33%] md:min-w-[25%] bg-white rounded-lg p-4 flex flex-col items-center justify-center border border-amber-700 shadow-lg"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-14 object-contain mb-3"
                  />
                  <p className="text-sm font-semibold">{brand.name}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            disabled={currentIndex >= brandLogos.length - visibleItems}
            className={`absolute right-0 z-10 p-2 bg-amber-700 text-gray-900 rounded-full hover:bg-amber-600 transition disabled:opacity-50`}
          >
            <FaChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default IndustrialBrandsCarousel;
