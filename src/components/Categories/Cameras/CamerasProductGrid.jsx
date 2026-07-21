"use client";

import React, { useState } from "react";
import { FaStar, FaRegStar, FaCartPlus, FaEye, FaHeart } from "react-icons/fa";

// ✅ Sample cameras array (you can replace with your full 50 items dataset)
const camerasData = [
  {
    id: 1,
    name: "Canon EOS R5",
    brand: "Canon",
    category: "Mirrorless",
    price: 3899,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1626666559270-88de6981c797?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg5fHx8ZW58MHx8fHx8",
  },
  {
    id: 2,
    name: "Sony A7 IV",
    brand: "Sony",
    category: "Mirrorless",
    price: 2499,
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1496256214014-357e5312d037?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg4fHx8ZW58MHx8fHx8",
  },
  {
    id: 3,
    name: "Nikon Z6 II",
    brand: "Nikon",
    category: "Mirrorless",
    price: 1999,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1548171549-ac863fe3fe98?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkyfHx8ZW58MHx8fHx8",
  },
  {
    id: 4,
    name: "GoPro Hero 11",
    brand: "GoPro",
    category: "Action",
    price: 499,
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1551779600-8d5cef6d6845?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk2fHx8ZW58MHx8fHx8",
  },
];

const CamerasProductGrid = () => {
  const [products, setProducts] = useState(camerasData);
  const [sortOption, setSortOption] = useState("");

  // ✅ Sorting logic
  const handleSort = (option) => {
    setSortOption(option);
    let sortedProducts = [...products];
    if (option === "low-high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "high-low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };

  return (
    <section className="bg-white text-gray-900 py-12 my-[-50px]">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header and Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-3xl font-bold text-black">
            Explore Premium Cameras
          </h2>
          <select
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
            className="bg-white text-gray-900 border border-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="">Sort by</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((camera) => (
            <div
              key={camera.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-2xl transition duration-300 group"
            >
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src={camera.image}
                  alt={camera.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Hover Icons */}
                <div className="absolute inset-0 bg-white bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
                  <button className="bg-black text-black p-2 rounded-full hover:bg-black">
                    <FaEye />
                  </button>
                  <button className="bg-black text-black p-2 rounded-full hover:bg-black">
                    <FaHeart />
                  </button>
                </div>
              </div>

              {/* Details */}
              <div className="p-4 space-y-3">
                <h3 className="text-lg font-semibold">{camera.name}</h3>
                <p className="text-gray-600 text-sm">{camera.brand}</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) =>
                    i < camera.rating ? (
                      <FaStar key={i} className="text-black text-sm" />
                    ) : (
                      <FaRegStar key={i} className="text-gray-500 text-sm" />
                    )
                  )}
                </div>
                <p className="text-xl font-bold text-black">
                  ${camera.price}
                </p>
                <p
                  className={`text-sm ${
                    camera.stock ? "text-black" : "text-black"
                  }`}
                >
                  {camera.stock ? "In Stock" : "Out of Stock"}
                </p>
                {/* Add to Cart */}
                <button
                  className="w-full bg-black text-black px-5 py-2 mt-3 rounded-full font-semibold hover:bg-black transition flex items-center justify-center gap-2"
                >
                  <FaCartPlus /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CamerasProductGrid;
