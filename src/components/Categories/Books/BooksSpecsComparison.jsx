"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const booksProducts = [
  {
    id: 1,
    name: "The Art of Programming",
    price: "$49",
    pages: "672",
    language: "English",
    hardcover: "Yes",
    warranty: "N/A",
    image:
      "https://images.unsplash.com/photo-1589578641895-56f5e660549f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU1fHx8ZW58MHx8fHx8",
  },
  {
    id: 2,
    name: "Deep Learning Illustrated",
    price: "$39",
    pages: "528",
    language: "English",
    hardcover: "Yes",
    warranty: "N/A",
    image:
      "https://images.unsplash.com/photo-1559235387-25d3011f5ba8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU3fHx8ZW58MHx8fHx8",
  },
  {
    id: 3,
    name: "Clean Code",
    price: "$59",
    pages: "464",
    language: "English",
    hardcover: "No",
    warranty: "N/A",
    image:
      "https://images.unsplash.com/photo-1565038941323-e5ceac0fcde2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU5fHx8ZW58MHx8fHx8",
  },
];

const specs = [
  { key: "price", label: "Price" },
  { key: "pages", label: "Pages" },
  { key: "language", label: "Language" },
  { key: "hardcover", label: "Hardcover" },
  { key: "warranty", label: "Warranty" },
];

const BooksSpecsComparison = () => {
  const [products] = useState(booksProducts);

  return (
    <section className="bg-white text-black py-12 my-[-50px]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Compare Book Specifications
        </h2>

        {/* ✅ Desktop View: Table */}
        <div className="hidden lg:block border border-black rounded-lg shadow-lg overflow-hidden">
          <div className="min-w-full">
            {/* Header Row */}
            <div className="grid grid-cols-[200px_repeat(3,minmax(150px,1fr))] bg-white">
              <div className="p-3 font-semibold text-gray-700">Specs</div>
              {products.map((product) => (
                <div
                  key={product.id}
                  className="p-3 text-center border-l border-black"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 mx-auto object-cover rounded mb-2"
                  />
                  <p className="text-sm font-semibold">{product.name}</p>
                </div>
              ))}
            </div>

            {/* Specs Rows */}
            {specs.map((spec, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-[200px_repeat(3,minmax(150px,1fr))] ${
                  idx % 2 === 0 ? "bg-white" : "bg-white"
                }`}
              >
                <div className="p-3 font-semibold text-gray-600">
                  {spec.label}
                </div>
                {products.map((product) => (
                  <div
                    key={product.id + spec.key}
                    className="p-3 text-center border-l border-black text-sm"
                  >
                    {product[spec.key] === "Yes" ? (
                      <FaCheckCircle className="text-black mx-auto" />
                    ) : (
                      product[spec.key]
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ✅ Mobile & Tablet View: Cards */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-lg shadow-lg border border-black overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {specs.map((spec, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center border-b border-gray-200 pb-1"
                    >
                      <span className="text-gray-600">{spec.label}</span>
                      <span>
                        {product[spec.key] === "Yes" ? (
                          <FaCheckCircle className="text-black" />
                        ) : (
                          product[spec.key]
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSpecsComparison;
