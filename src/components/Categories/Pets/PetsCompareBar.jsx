"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaBalanceScale } from "react-icons/fa";

const petProducts = [
  {
    id: 1,
    name: "Deluxe Dog Bed",
    image:
      "https://images.unsplash.com/photo-1632218938210-9fd0e8fc1f8d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM5fHx8ZW58MHx8fHx8",
    price: "$45",
    specs: ["Soft Cushion", "Washable Cover", "Non-slip Base"],
  },
  {
    id: 2,
    name: "Cat Scratching Post",
    image:
      "https://plus.unsplash.com/premium_photo-1677101626318-422def4d9b8b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8",
    price: "$30",
    specs: ["Durable Rope", "Stable Base"],
  },
  {
    id: 3,
    name: "Pet Travel Carrier",
    image:
      "https://images.unsplash.com/photo-1696995664079-caa4d4950da2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM4fHx8ZW58MHx8fHx8",
    price: "$60",
    specs: ["Airline Approved", "Comfortable Padding"],
  },
];

const PetsCompareBar = () => {
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
    <div className="bg-white text-amber-600 p-6 my-10">
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {petProducts.map((product) => {
          const isAdded = compareItems.find((item) => item.id === product.id);
          return (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-44 object-cover rounded-md mb-4"
                loading="lazy"
              />
              <h3 className="font-semibold text-xl mb-1">{product.name}</h3>
              <p className="text-amber-500 mb-3">{product.price}</p>
              <button
                onClick={() => addToCompare(product)}
                disabled={!!isAdded}
                title={isAdded ? "Already added" : "Add to Compare"}
                className={`w-full py-2 rounded-lg font-semibold transition ${
                  isAdded
                    ? "bg-amber-800 cursor-not-allowed"
                    : "bg-amber-700 hover:bg-amber-600 text-gray-900"
                }`}
              >
                {isAdded ? "Added" : "Add to Compare"}
              </button>
            </div>
          );
        })}
      </div>

      {/* Floating Compare Bar */}
      <AnimatePresence>
        {compareItems.length > 0 && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 bg-white border-t border-amber-700 shadow-lg flex flex-col sm:flex-row justify-between items-center gap-4 p-4 z-50"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
          >
            <div className="flex flex-wrap justify-center gap-4 max-w-[80vw] overflow-x-auto">
              {compareItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 bg-white rounded-lg border border-amber-700 px-3 py-2 min-w-[150px]"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded object-cover flex-shrink-0"
                  />
                  <span className="truncate">{item.name}</span>
                  <button
                    onClick={() => removeFromCompare(item.id)}
                    className="text-amber-600 hover:text-red-400 transition"
                    aria-label={`Remove ${item.name} from compare`}
                  >
                    <FaTimes size={18} />
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-amber-700 hover:bg-amber-600 text-gray-900 px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition w-full sm:w-auto justify-center"
              aria-label={`Compare ${compareItems.length} products`}
            >
              <FaBalanceScale />
              Compare ({compareItems.length})
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Compare Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-white bg-opacity-70 flex justify-center items-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-amber-600 rounded-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto p-6 relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <header className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Compare Pet Products</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-amber-600 hover:text-amber-500 text-3xl"
                  aria-label="Close compare modal"
                >
                  <FaTimes />
                </button>
              </header>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] table-auto border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b border-amber-700 p-3 text-left">Feature</th>
                      {compareItems.map((item) => (
                        <th
                          key={item.id}
                          className="border-b border-amber-700 p-3 text-center"
                        >
                          {item.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-gray-200 p-3 font-semibold">Image</td>
                      {compareItems.map((item) => (
                        <td
                          key={item.id}
                          className="border-b border-gray-200 p-3 text-center"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 mx-auto rounded"
                          />
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 p-3 font-semibold">Price</td>
                      {compareItems.map((item) => (
                        <td
                          key={item.id}
                          className="border-b border-gray-200 p-3 text-center"
                        >
                          {item.price}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border-b border-gray-200 p-3 font-semibold">Specs</td>
                      {compareItems.map((item) => (
                        <td
                          key={item.id}
                          className="border-b border-gray-200 p-3 text-center text-sm"
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

export default PetsCompareBar;
