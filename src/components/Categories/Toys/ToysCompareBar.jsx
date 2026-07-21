"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaBalanceScale } from "react-icons/fa";

const sampleProducts = [
  {
    id: 1,
    name: "Super Robot Toy",
    brand: "ToyCo",
    price: 29.99,
    image:
      "https://media.istockphoto.com/id/2197732981/photo/friendly-cute-cartoon-robot-holding-icon-3d-render-technology-concept-social-media-apps-ui.webp?a=1&b=1&s=612x612&w=0&k=20&c=Io166CXDvlG65u1Ya3BFk5b7G2UH6wR_6rgeuIj12L8=",
    features: ["Battery Powered", "LED Lights"],
    specs: ["Battery powered", "LED lights", "Remote controlled"],
  },
  {
    id: 2,
    name: "Puzzle Cube",
    brand: "BrainyToys",
    price: 15.5,
    image:
      "https://media.istockphoto.com/id/1368293502/photo/wooden-colorful-square-blocks-puzzle.webp?a=1&b=1&s=612x612&w=0&k=20&c=4aHYHFz8eZ62P6Kpv94UjR5NIMCyV-f9mJL-dXkILro=",
    features: ["Educational", "Colorful"],
    specs: ["Wooden blocks", "Colorful", "Educational toy"],
  },
  {
    id: 3,
    name: "Classic Teddy Bear",
    brand: "CuddleKids",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1748399998178-b95d91df385a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2xhc3NpYyUyMFRlZGR5JTIwQmVhcnxlbnwwfHwwfHx8MA%3D%3D",
    features: ["Soft Plush", "Handmade"],
    specs: ["Soft plush", "Handmade", "Non-toxic material"],
  },
];

const ToysCompareBar = () => {
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
    <div className="bg-white text-black p-4 my-8">
      {/* Example Add Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {sampleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg text-center shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-3"
            />
            <p className="text-lg font-semibold mb-1">{product.name}</p>
            <p className="text-black mb-2">${product.price}</p>
            <button
              className="mt-2 w-full px-3 py-2 bg-black text-gray-900 rounded hover:bg-black font-semibold"
              onClick={() => addToCompare(product)}
              aria-label={`Add ${product.name} to compare`}
            >
              Add to Compare
            </button>
          </div>
        ))}
      </div>

      {/* Floating Compare Bar */}
      <AnimatePresence>
        {compareItems.length > 0 && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 bg-white text-black p-4 shadow-lg border-t border-black flex flex-col sm:flex-row justify-between items-center gap-4 z-50"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {compareItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-black"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <span className="text-sm">{item.name}</span>
                  <button
                    onClick={() => removeFromCompare(item.id)}
                    className="text-black hover:text-black"
                    aria-label={`Remove ${item.name} from compare`}
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-black text-gray-900 px-5 py-2 rounded-lg font-semibold hover:bg-black transition flex items-center gap-2 w-full sm:w-auto"
              aria-label="Open compare modal"
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
            className="fixed inset-0 bg-white bg-opacity-60 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-modal="true"
            role="dialog"
            aria-labelledby="compare-modal-title"
          >
            <motion.div
              className="bg-white text-black rounded-xl p-4 md:p-6 w-full max-w-6xl overflow-x-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2
                  className="text-xl font-bold"
                  id="compare-modal-title"
                >
                  Compare Products
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-black hover:text-black text-xl"
                  aria-label="Close compare modal"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Responsive Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="p-2 border-b border-black">Feature</th>
                      {compareItems.map((item) => (
                        <th
                          key={item.id}
                          className="p-2 border-b border-black text-center"
                        >
                          {item.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border-b border-gray-200">Image</td>
                      {compareItems.map((item) => (
                        <td
                          key={item.id}
                          className="p-2 border-b border-gray-200 text-center"
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
                      <td className="p-2 border-b border-gray-200">Price</td>
                      {compareItems.map((item) => (
                        <td
                          key={item.id}
                          className="p-2 border-b border-gray-200 text-center"
                        >
                          ${item.price}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-2 border-b border-gray-200">Specs</td>
                      {compareItems.map((item) => (
                        <td
                          key={item.id}
                          className="p-2 border-b border-gray-200 text-center text-sm"
                        >
                          {item.specs ? item.specs.join(", ") : "N/A"}
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

export default ToysCompareBar;
