"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCartPlus, FaEye } from "react-icons/fa";

const accessories = [
  {
    id: 1,
    name: "Premium Chef Knife",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1513082243229-8831438c7f64?q=80&w=1090&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "High-carbon stainless steel knife for precision cutting. Perfect for every kitchen.",
  },
  {
    id: 2,
    name: "Non-Stick Fry Pan",
    price: 35.0,
    image:
      "https://media.istockphoto.com/id/175450792/photo/frying-pan.webp?a=1&b=1&s=612x612&w=0&k=20&c=ooZbcHEQeufGUdVgnfP3k70TipQaCbUQF1ddmmtPFP8=",
    description:
      "Durable non-stick coating for easy cooking and cleaning. Heat-resistant handle.",
  },
  {
    id: 3,
    name: "Wooden Cutting Board",
    price: 19.99,
    image:
      "https://plus.unsplash.com/premium_photo-1714638224435-f225b9e9e2fa?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Premium hardwood cutting board for professional use. Gentle on knife blades.",
  },
  {
    id: 4,
    name: "Stainless Steel Tongs",
    price: 12.99,
    image:
      "https://media.istockphoto.com/id/175385479/photo/tongs-w-clipping-path.webp?a=1&b=1&s=612x612&w=0&k=20&c=RdgKFq2pssDm004IPE7JahNgohPDMNFCMXCyoXpr4zE=",
    description:
      "Strong grip and durable construction, perfect for grilling and serving.",
  },
  {
    id: 5,
    name: "Silicone Spatula Set",
    price: 15.49,
    image:
      "https://media.istockphoto.com/id/2026277451/photo/modern-set-of-utensils-kitchenware-and-mixer-attachments-hanging-on-wall-in-light-kitchen-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=APwCNyNK5DlY9HINvz3tbqBc5JTY94tyCLzkeCmsNhY=",
    description:
      "Heat-resistant silicone spatulas for baking and cooking, safe on non-stick surfaces.",
  },
  {
    id: 6,
    name: "Glass Measuring Cups",
    price: 18.99,
    image:
      "https://media.istockphoto.com/id/175601617/photo/isolated-shot-of-empty-measuring-beaker-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=n461XCzr5fqsz3b_Saq_sQsIZcPDBpCEg8cz0oBwYRs=",
    description:
      "Set of glass measuring cups with clear markings for accurate measurements.",
  },
  {
    id: 7,
    name: "Stainless Steel Whisk",
    price: 10.99,
    image:
      "https://media.istockphoto.com/id/521707765/photo/wire-whisk.webp?a=1&b=1&s=612x612&w=0&k=20&c=fO1azJTG35cQKD9jV3_AkRa6bZs4dz55xNQZMD7-lQ8=",
    description:
      "Durable stainless steel whisk, ideal for mixing and whipping ingredients.",
  },
  {
    id: 8,
    name: "Rolling Pin",
    price: 14.99,
    image:
      "https://media.istockphoto.com/id/186835942/photo/rolling-pin.webp?a=1&b=1&s=612x612&w=0&k=20&c=fg65hUJQeSR5rZdOOQqEWjikcbsoXI8AXzX1BHe0iA0=",
    description:
      "Classic wooden rolling pin for baking and pastry preparation, smooth and easy to use.",
  },
];

const KitchenAccessoriesSection = () => {
  const [selectedAccessory, setSelectedAccessory] = useState(null);

  const handleViewDetails = (accessory) => {
    setSelectedAccessory(accessory);
  };

  const handleCloseOverlay = () => {
    setSelectedAccessory(null);
  };

  return (
    <section className="bg-white text-amber-600 py-10">
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
                    className="flex-1 bg-white text-amber-600 px-3 py-2 rounded-lg flex items-center justify-center gap-2 text-xs font-semibold hover:bg-gray-50 transition"
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

export default KitchenAccessoriesSection;
