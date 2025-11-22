"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HeartIcon, ShoppingCartIcon, EyeIcon, StarIcon } from "@heroicons/react/24/solid";

// ✅ Watches Data (Direct Array)
const watchesData = [
  {
    id: 1,
    name: "Rolex Submariner",
    brand: "Rolex",
    price: 12500,
    material: "Steel",
    features: ["Waterproof", "Sapphire Glass"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1568154106189-717dc85b0a3b?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Omega Speedmaster",
    brand: "Omega",
    price: 9800,
    material: "Steel",
    features: ["Chronograph", "Tachymeter"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1588840437680-2706a4222709?q=80&w=1256&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Apple Watch Ultra",
    brand: "Apple",
    price: 799,
    material: "Aluminum",
    features: ["Smartwatch", "GPS", "Heart Monitor"],
    rating: 5,
    stock: false,
    image: "https://plus.unsplash.com/premium_photo-1723561230205-3a8f566f8ba9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Tag Heuer Carrera",
    brand: "Tag Heuer",
    price: 4200,
    material: "Steel",
    features: ["Chronograph", "Waterproof"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1598463370698-bba402980d47?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Seiko Prospex Diver",
    brand: "Seiko",
    price: 950,
    material: "Steel",
    features: ["Waterproof", "Automatic"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1588136785383-f18061cca903?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Casio G-Shock Mudmaster",
    brand: "Casio",
    price: 350,
    material: "Resin",
    features: ["Shock Resistant", "Waterproof"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1736506362481-92a2d0d7a252?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Patek Philippe Nautilus",
    brand: "Patek Philippe",
    price: 32000,
    material: "Steel",
    features: ["Luxury", "Automatic"],
    rating: 5,
    stock: false,
    image: "https://images.unsplash.com/photo-1624522032510-44b9b792d2a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Tissot PRX Powermatic",
    brand: "Tissot",
    price: 750,
    material: "Steel",
    features: ["Automatic", "Waterproof"],
    rating: 4,
    stock: true,
    image: "https://images.unsplash.com/photo-1609587183263-eeef82370010?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Apple Watch Series 9",
    brand: "Apple",
    price: 499,
    material: "Aluminum",
    features: ["Smartwatch", "GPS", "Health Tracking"],
    rating: 5,
    stock: true,
    image: "https://images.unsplash.com/photo-1586383334472-84d9bc3a9fe3?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Rolex Daytona",
    brand: "Rolex",
    price: 14000,
    material: "Gold",
    features: ["Chronograph", "Luxury"],
    rating: 5,
    stock: false,
    image: "https://images.unsplash.com/photo-1605143185597-9fe1a8065fbb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// ✅ Watches Product Grid Component
const WatchesProductGrid = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [itemsPerPage] = useState(12);
  const [products, setProducts] = useState(watchesData);
  const [currentPage, setCurrentPage] = useState(1);

  // ✅ Filter, Sort, Search Logic
  useEffect(() => {
    let filtered = [...watchesData];

    if (searchQuery) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOption === "priceLowHigh") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceHighLow") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "name") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setProducts(filtered);
    setCurrentPage(1);
  }, [searchQuery, sortOption]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = products.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div className="w-full px-4 md:px-8 py-6 bg-gray-900 text-yellow-400">
      {/* Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        {/* Search */}
        <input
          type="text"
          placeholder="Search watches..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-72 rounded-lg bg-gray-800 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />

        {/* Sort */}
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="rounded-lg bg-gray-800 text-yellow-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <option value="default">Sort By: Default</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="rating">Rating: High to Low</option>
          <option value="name">Name: A-Z</option>
        </select>
      </div>

      {/* Grid */}
      <div
        className={`grid ${
          viewMode === "grid"
            ? "grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-6"
            : "grid-cols-1 gap-4"
        }`}
      >
        {paginatedProducts.map((watch) => (
          <motion.div
            key={watch.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 ${
              viewMode === "list" ? "flex gap-4 p-4" : ""
            }`}
          >
            <div className={`${viewMode === "list" ? "w-40" : ""} relative`}>
              <img
                src={watch.image}
                alt={watch.name}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className={`${viewMode === "list" ? "flex-1" : "p-4 text-center"}`}>
              <h3 className="text-lg font-semibold">{watch.name}</h3>
              <p className="text-sm text-yellow-300">{watch.brand}</p>
              <div className="flex justify-center md:justify-start mt-2 gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-4 h-4 ${
                      i < watch.rating ? "text-yellow-400" : "text-gray-500"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-2 text-xl font-bold">${watch.price.toLocaleString()}</p>
              <p
                className={`text-sm mt-1 ${
                  watch.stock ? "text-green-400" : "text-red-400"
                }`}
              >
                {watch.stock ? "In Stock" : "Out of Stock"}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === i + 1
                  ? "bg-yellow-400 text-gray-900"
                  : "bg-gray-700 text-yellow-400"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchesProductGrid;
