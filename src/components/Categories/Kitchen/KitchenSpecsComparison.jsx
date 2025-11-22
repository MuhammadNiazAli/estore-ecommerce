"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const productsData = [
  {
    id: 1,
    name: "Non-Stick Cookware Set",
    price: "$120",
    weight: "5kg",
    material: "Aluminum",
    dishwasherSafe: "Yes",
    warranty: "2 Years",
    image:
      "https://media.istockphoto.com/id/2196540232/photo/image-of-black-plastic-spatula-scraping-up-messy-sunny-side-up-fried-eggs-with-broken-yolk.webp?a=1&b=1&s=612x612&w=0&k=20&c=cavtq0mzlBLL3LCzA6L-qfXpm325GRt0QsHgHQ0OuTc=",
  },
  {
    id: 2,
    name: "Premium Chef Knife",
    price: "$45",
    weight: "0.5kg",
    material: "Stainless Steel",
    dishwasherSafe: "No",
    warranty: "1 Year",
    image:
      "https://images.unsplash.com/photo-1543875929-c09f1e273428?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Electric Blender Pro",
    price: "$89",
    weight: "3kg",
    material: "Plastic + Steel",
    dishwasherSafe: "Yes",
    warranty: "3 Years",
    image:
      "https://media.istockphoto.com/id/1335504801/photo/young-woman-making-detox-smoothie-at-home-woman-pouring-smoothie-to-glass-healthy-food-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=mmWRgfJ_RkbLhq__S_TbHUEYMECrdky1vLBQccORu-Y=",
  },
];

const specs = [
  { key: "price", label: "Price" },
  { key: "weight", label: "Weight" },
  { key: "material", label: "Material" },
  { key: "dishwasherSafe", label: "Dishwasher Safe" },
  { key: "warranty", label: "Warranty" },
];

const KitchenSpecsComparison = () => {
  const [products] = useState(productsData);

  return (
    <section className="bg-gray-900 text-yellow-400 py-12 my-[-50px]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Compare Kitchen Products
        </h2>

        {/* Desktop View: Table */}
        <div className="hidden lg:block border border-yellow-500 rounded-lg shadow-lg overflow-hidden">
          <div className="min-w-full">
            {/* Header Row */}
            <div className="grid grid-cols-[200px_repeat(3,minmax(150px,1fr))] bg-gray-800">
              <div className="p-3 font-semibold text-gray-300">Specs</div>
              {products.map((product) => (
                <div
                  key={product.id}
                  className="p-3 text-center border-l border-yellow-500"
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
                  idx % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
                }`}
              >
                <div className="p-3 font-semibold text-gray-400">
                  {spec.label}
                </div>
                {products.map((product) => (
                  <div
                    key={product.id + spec.key}
                    className="p-3 text-center border-l border-yellow-500 text-sm"
                  >
                    {product[spec.key] === "Yes" ? (
                      <FaCheckCircle className="text-yellow-500 mx-auto" />
                    ) : (
                      product[spec.key]
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet View: Cards */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-800 rounded-lg shadow-lg border border-yellow-500 overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  {specs.map((spec, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center border-b border-gray-700 pb-1"
                    >
                      <span className="text-gray-400">{spec.label}</span>
                      <span>
                        {product[spec.key] === "Yes" ? (
                          <FaCheckCircle className="text-yellow-500" />
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

export default KitchenSpecsComparison;
