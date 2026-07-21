"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCartPlus, FaEye } from "react-icons/fa";

const accessories = [
 {
    id: 1,
    name: "Canon EOS R5",
    brand: "Canon",
    category: "Mirrorless",
    price: 3899,
    lensMount: "RF",
    features: ["8K Video", "IBIS", "Touchscreen"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1648781329670-5f00c1b37404?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2Fub24lMjBFT1MlMjBSNXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Sony A7 IV",
    brand: "Sony",
    category: "Mirrorless",
    price: 2499,
    lensMount: "E",
    features: ["4K Video", "IBIS", "Weather-Sealed"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1647920564028-5756c7af4bd1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U29ueSUyMEE3JTIwSVZ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Nikon Z6 II",
    brand: "Nikon",
    category: "Mirrorless",
    price: 1999,
    lensMount: "Z",
    features: ["4K Video", "Touchscreen", "Weather-Sealed"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1692030179940-c65af6a0e6b0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U29ueSUyMEE3JTIwSVZ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "Canon 5D Mark IV",
    brand: "Canon",
    category: "DSLR",
    price: 2799,
    lensMount: "EF",
    features: ["Full Frame", "Weather-Sealed"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1692030179565-814c41b22ad5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNvbnklMjBBNyUyMElWfGVufDB8fDB8fHww",
  },
  {
    id: 5,
    name: "Nikon D850",
    brand: "Nikon",
    category: "DSLR",
    price: 2999,
    lensMount: "F",
    features: ["45MP Sensor", "Weather-Sealed"],
    rating: 5,
    stock: false,
    image: "https://media.istockphoto.com/id/152128250/photo/wide-angle-lens-on-a-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=FEmzUXsK3Nf1DgUh5m0LZOvEQOcqIhv8bqzCrOqmgbc=",
  },
  {
    id: 6,
    name: "Fujifilm X-T5",
    brand: "Fujifilm",
    category: "Mirrorless",
    price: 1699,
    lensMount: "X",
    features: ["Retro Design", "IBIS", "4K Video"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1562528100-7790642cc75d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg2fHx8ZW58MHx8fHx8",
  },
  {
    id: 7,
    name: "Sony A6400",
    brand: "Sony",
    category: "Mirrorless",
    price: 899,
    lensMount: "E",
    features: ["Compact", "Touchscreen", "4K Video"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1470940511639-1068d7764233?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 8,
    name: "GoPro Hero 11",
    brand: "GoPro",
    category: "Action",
    price: 499,
    lensMount: "Fixed",
    features: ["Waterproof", "4K Video", "Stabilization"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1532963190277-e82a9d6e2d54?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtZXJhc3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

const CamerasAccessoriesSection = () => {
  const [selectedAccessory, setSelectedAccessory] = useState(null);

  const handleViewDetails = (accessory) => {
    setSelectedAccessory(accessory);
  };

  const handleCloseOverlay = () => {
    setSelectedAccessory(null);
  };

  return (
    <section className="bg-white text-amber-600 py-10 my-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center tracking-wide">
          Kitchen Accessories
        </h2>

        {/* Accessories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {accessories.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-amber-700 hover:border-amber-600 transition-all"
              whileHover={{ scale: 1.03 }}
            >
              {/* Image */}
              <div className="w-full h-44 sm:h-40">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-4 flex flex-col items-center text-center">
                <h3 className="text-lg font-semibold line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-amber-500 font-bold mt-1 text-sm">
                  ${item.price}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full">
                  <button className="flex-1 bg-amber-700 text-gray-900 px-3 py-2 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold hover:bg-amber-600 transition">
                    <FaCartPlus size={14} /> Add
                  </button>
                  <button
                    className="flex-1 bg-white text-amber-600 px-3 py-2 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold hover:bg-gray-500 transition"
                    onClick={() => handleViewDetails(item)}
                  >
                    <FaEye size={14} /> View
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Details Overlay */}
      <AnimatePresence>
        {selectedAccessory && (
          <motion.div
            className="fixed inset-0 bg-white bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-amber-600 rounded-xl p-5 md:p-6 max-w-sm sm:max-w-md w-full shadow-xl relative border border-amber-700"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-amber-600 text-xl hover:text-amber-500"
                onClick={handleCloseOverlay}
              >
                ✖
              </button>

              {/* Image */}
              <img
                src={selectedAccessory.image}
                alt={selectedAccessory.name}
                className="w-full h-48 sm:h-56 object-cover rounded-lg mb-4"
              />

              {/* Details */}
              <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">
                {selectedAccessory.name}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-center">
                {selectedAccessory.description}
              </p>
              <p className="text-lg font-bold mb-4 text-center">
                Price: ${selectedAccessory.price}
              </p>

              {/* Add to Cart */}
              <button className="bg-amber-700 text-gray-900 px-4 py-3 rounded-lg w-full text-sm font-semibold hover:bg-amber-600 transition">
                Add to Cart
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CamerasAccessoriesSection;
