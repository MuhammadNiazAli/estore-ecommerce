import React, { useState } from "react";
import { motion } from "framer-motion";

const brands = [
  {
    id: 1,
    name: "Gucci",
    logo: "https://www.freeiconspng.com/uploads/gucci-logo-letters-png-hd-13.png",
  },
  {
    id: 2,
    name: "Armani",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Giorgio_Armani.svg/2560px-Giorgio_Armani.svg.png",
  },
  {
    id: 3,
    name: "Zara",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/512px-Zara_Logo.svg.png",
  },
  {
    id: 4,
    name: "Prada",
    logo: "https://1000logos.net/wp-content/uploads/2017/05/Prada-Logo.png",
  },
  {
    id: 5,
    name: "Hugo Boss",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Hugo-Boss-Logo.svg",
  },
  {
    id: 6,
    name: "Burberry",
    logo: "https://logos-world.net/wp-content/uploads/2020/10/Burberry-Logo.png",
  },
];

const ManClothesBrands = () => {
  const [activeBrand, setActiveBrand] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Shop by <span className="text-amber-700">Top Brands</span>
        </h2>
        <p className="text-gray-600 text-sm max-w-md mx-auto">
          Explore premium brands known for luxury, style, and comfort. Choose
          your favorite and elevate your wardrobe today.
        </p>
      </div>

      {/* Brands Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {brands.map((brand) => (
          <motion.div
            key={brand.id}
            whileHover={{ scale: 1.08 }}
            onClick={() => setActiveBrand(brand.name)}
            className={`relative group bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-4 flex flex-col items-center justify-center cursor-pointer transition ${
              activeBrand === brand.name ? "ring-4 ring-amber-600" : ""
            }`}
          >
            {/* Brand Logo */}
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-12 sm:h-16 object-contain grayscale group-hover:grayscale-0 transition duration-300"
            />

            {/* Brand Name */}
            <p className="mt-3 text-gray-900 font-semibold text-sm sm:text-base group-hover:text-amber-700">
              {brand.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Active Brand Info */}
      {activeBrand && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-700 text-sm">
            Showing products for:{" "}
            <span className="font-bold text-amber-700">{activeBrand}</span>
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default ManClothesBrands;
