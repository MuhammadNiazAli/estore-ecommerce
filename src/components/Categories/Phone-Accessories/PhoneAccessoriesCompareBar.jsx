"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaBalanceScale } from "react-icons/fa";

const phoneAccessories = [
  {
    id: 1,
    name: "Wireless Bluetooth Earbuds",
    image:
      "https://plus.unsplash.com/premium_photo-1680709373720-0a6baadc2a63?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
    price: "$59",
    specs: ["Noise Cancelling", "24h Battery", "Touch Control"],
  },
  {
    id: 2,
    name: "Fast Charging Power Bank",
    image:
      "https://images.unsplash.com/photo-1593055454503-531d165c2ed8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
    price: "$35",
    specs: ["20,000mAh", "Quick Charge 3.0", "Dual USB Ports"],
  },
  {
    id: 3,
    name: "MagSafe Wireless Charger",
    image:
      "https://images.unsplash.com/photo-1706210063693-51cec7c4c757?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBob25lJTIwYWNjZXNzb3JpZXN8ZW58MHx8MHx8fDA%3D",
    price: "$29",
    specs: ["15W Fast Charging", "Magnetic Alignment", "Compact Design"],
  },
];

const PhoneAccessoriesCompareBar = () => {
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
    <div className="bg-white text-black p-6 my-10">
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {phoneAccessories.map((product) => {
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
              <p className="text-black mb-3">{product.price}</p>
              <button
                onClick={() => addToCompare(product)}
                disabled={!!isAdded}
                title={isAdded ? "Already added" : "Add to Compare"}
                className={`w-full py-2 rounded-lg font-semibold transition ${
                  isAdded
                    ? "bg-black cursor-not-allowed"
                    : "bg-black hover:bg-black text-gray-900"
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
            className="fixed bottom-0 left-0 right-0 bg-white border-t border-black shadow-lg flex flex-col sm:flex-row justify-between items-center gap-4 p-4 z-50"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
          >
            {/* Selected Items */}
            <div className="flex flex-wrap justify-center gap-4 max-w-[80vw] overflow-x-auto">
              {compareItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 bg-white rounded-lg border border-black px-3 py-2 min-w-[150px]"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded object-cover flex-shrink-0"
                  />
                  <span className="truncate">{item.name}</span>
                  <button
                    onClick={() => removeFromCompare(item.id)}
                    className="text-black hover:text-black transition"
                    aria-label={`Remove ${item.name} from compare`}
                  >
                    <FaTimes size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* Compare Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-black hover:bg-black text-gray-900 px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition w-full sm:w-auto justify-center"
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
              className="bg-white text-black rounded-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto p-6 relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              {/* Header */}
              <header className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Compare Accessories</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-black hover:text-black text-3xl"
                  aria-label="Close compare modal"
                >
                  <FaTimes />
                </button>
              </header>

              {/* Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] table-auto border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b border-black p-3 text-left">
                        Feature
                      </th>
                      {compareItems.map((item) => (
                        <th
                          key={item.id}
                          className="border-b border-black p-3 text-center"
                        >
                          {item.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-gray-200 p-3 font-semibold">
                        Image
                      </td>
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
                      <td className="border-b border-gray-200 p-3 font-semibold">
                        Price
                      </td>
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
                      <td className="border-b border-gray-200 p-3 font-semibold">
                        Specs
                      </td>
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

export default PhoneAccessoriesCompareBar;
