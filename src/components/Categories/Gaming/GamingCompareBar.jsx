"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaBalanceScale } from "react-icons/fa";

const sampleGamingProducts = [
  {
    id: 1,
    name: "RTX 4080 Graphics Card",
    image:
      "https://plus.unsplash.com/premium_photo-1723028769916-a767a6b0f719?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzM3x8fGVufDB8fHx8fA%3D%3D",
    price: "$1,199",
    specs: ["16GB GDDR6X", "DLSS 3.0", "Ray Tracing"],
  },
  {
    id: 2,
    name: "Gaming Laptop Pro X",
    image:
      "https://plus.unsplash.com/premium_photo-1682125222381-2c63b46905a0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzNHx8fGVufDB8fHx8fA%3D%3D",
    price: "$2,499",
    specs: ["Intel i9", "RTX 3080", "32GB RAM"],
  },
  {
    id: 3,
    name: "Pro Gaming Headset",
    image:
      "https://plus.unsplash.com/premium_photo-1739981551379-55cbd4675778?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzNXx8fGVufDB8fHx8fA%3D%3D",
    price: "$199",
    specs: ["7.1 Surround Sound", "Noise Cancelling", "RGB Lighting"],
  },
];

const GamingCompareBar = () => {
  const [compareItems, setCompareItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCompare = (product) => {
    if (!compareItems.find((item) => item.id === product.id)) {
      setCompareItems([...compareItems, product]);
    }
  };

  const removeFromCompare = (id) => {
    setCompareItems(compareItems.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-900 text-yellow-400 p-4 my-10">
      {/* Gaming Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {sampleGamingProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 p-4 rounded-lg text-center shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <p className="text-lg font-semibold mb-1">{product.name}</p>
            <p className="text-yellow-300 mb-2">{product.price}</p>
            <button
              className="mt-2 w-full px-3 py-2 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-400 font-semibold transition"
              onClick={() => addToCompare(product)}
              disabled={compareItems.find((item) => item.id === product.id)}
            >
              {compareItems.find((item) => item.id === product.id)
                ? "Added"
                : "Add to Compare"}
            </button>
          </div>
        ))}
      </div>

      {/* Floating Compare Bar */}
      <AnimatePresence>
        {compareItems.length > 0 && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 bg-gray-900 text-yellow-400 p-4 shadow-lg border-t border-yellow-500 flex flex-col sm:flex-row justify-between items-center gap-4 z-50"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {compareItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg border border-yellow-500"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <span className="text-sm">{item.name}</span>
                  <button
                    onClick={() => removeFromCompare(item.id)}
                    className="text-yellow-400 hover:text-red-400"
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow-500 text-gray-900 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition flex items-center gap-2 w-full sm:w-auto"
            >
              <FaBalanceScale /> Compare ({compareItems.length})
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Compare Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-800 text-yellow-400 rounded-xl p-4 md:p-6 w-full max-w-6xl overflow-x-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Compare Gaming Gear</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-yellow-400 hover:text-yellow-300 text-xl"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="p-2 border-b border-yellow-500">Feature</th>
                      {compareItems.map((item) => (
                        <th
                          key={item.id}
                          className="p-2 border-b border-yellow-500 text-center"
                        >
                          {item.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border-b border-gray-700">Image</td>
                      {compareItems.map((item) => (
                        <td
                          key={item.id}
                          className="p-2 border-b border-gray-700 text-center"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 mx-auto rounded"
                          />
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-2 border-b border-gray-700">Price</td>
                      {compareItems.map((item) => (
                        <td
                          key={item.id}
                          className="p-2 border-b border-gray-700 text-center"
                        >
                          {item.price}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-2 border-b border-gray-700">Specs</td>
                      {compareItems.map((item) => (
                        <td
                          key={item.id}
                          className="p-2 border-b border-gray-700 text-center text-sm"
                        >
                          {item.specs.join(", ")}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GamingCompareBar;
