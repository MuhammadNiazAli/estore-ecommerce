"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaBalanceScale } from "react-icons/fa";

const sampleBooks = [
  {
    id: 1,
    name: "Clean Code",
    author: "Robert C. Martin",
    image:
      "https://images.unsplash.com/photo-1531072901881-d644216d4bf9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$59",
    specs: ["Best Practices", "Readable Code", "Examples Included"],
  },
  {
    id: 2,
    name: "Deep Learning Illustrated",
    author: "Jon Krohn",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&auto=format&fit=crop&q=60",
    price: "$39",
    specs: ["Visual Guide", "AI Concepts", "Beginner Friendly"],
  },
  {
    id: 3,
    name: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    image:
      "https://images.unsplash.com/photo-1583484963886-cfe2bff2945f?w=400&auto=format&fit=crop&q=60",
    price: "$89",
    specs: ["Comprehensive", "Mathematical", "Algorithm Analysis"],
  },
];

const BooksCompareBar = () => {
  const [compareItems, setCompareItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCompare = (book) => {
    if (!compareItems.find((item) => item.id === book.id)) {
      setCompareItems([...compareItems, book]);
    }
  };

  const removeFromCompare = (id) => {
    setCompareItems(compareItems.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white text-amber-600 p-4 my-10">
      {/* Example Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {sampleBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white p-4 rounded-lg text-center shadow-md"
          >
            <img
              src={book.image}
              alt={book.name}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <p className="text-lg font-semibold mb-1">{book.name}</p>
            <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
            <p className="text-amber-500 mb-3">{book.price}</p>
            <button
              className="mt-2 w-full px-3 py-2 bg-amber-700 text-gray-900 rounded hover:bg-amber-600 font-semibold"
              onClick={() => addToCompare(book)}
              disabled={compareItems.find((item) => item.id === book.id)}
              title={
                compareItems.find((item) => item.id === book.id)
                  ? "Already added"
                  : "Add to Compare"
              }
            >
              {compareItems.find((item) => item.id === book.id)
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
            className="fixed bottom-0 left-0 right-0 bg-white text-amber-600 p-4 shadow-lg border-t border-amber-700 flex flex-col sm:flex-row justify-between items-center gap-4 z-50"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {compareItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-amber-700"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <span className="text-sm">{item.name}</span>
                  <button
                    onClick={() => removeFromCompare(item.id)}
                    className="text-amber-600 hover:text-red-400"
                    aria-label={`Remove ${item.name} from compare`}
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-amber-700 text-gray-900 px-5 py-2 rounded-lg font-semibold hover:bg-amber-600 transition flex items-center gap-2 w-full sm:w-auto"
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
          >
            <motion.div
              className="bg-white text-amber-600 rounded-xl p-4 md:p-6 w-full max-w-6xl overflow-x-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Compare Books</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-amber-600 hover:text-amber-500 text-xl"
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
                      <th className="p-2 border-b border-amber-700">Feature</th>
                      {compareItems.map((item) => (
                        <th
                          key={item.id}
                          className="p-2 border-b border-amber-700 text-center"
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
                      <td className="p-2 border-b border-gray-200">Author</td>
                      {compareItems.map((item) => (
                        <td
                          key={item.id}
                          className="p-2 border-b border-gray-200 text-center"
                        >
                          {item.author}
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
                          {item.price}
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

export default BooksCompareBar;
