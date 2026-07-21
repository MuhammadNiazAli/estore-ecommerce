"use client";
import React, { useState, useMemo } from "react";
import { List, Grid, Filter } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const productsData = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 19.99,
    category: "Clothing",
    rating: 4.5,
    image: "https://media.istockphoto.com/id/1354020635/photo/white-t-shirt-mockup-front-used-as-design-template-tee-shirt-blank-isolated-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=04SAcG6yGhLDPZFNh3KJiGOXevIp8hWojuLtxtO5PQg="
  },
  {
    id: 2,
    name: "Blue Denim Jeans",
    price: 49.99,
    category: "Clothing",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1589226849736-8d0e0c78e869?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Stylish Sunglasses",
    price: 75,
    category: "Accessories",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1577909698488-3c3705c9c265?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 199.99,
    category: "Electronics",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 5,
    name: "Leather Wallet",
    price: 45.99,
    category: "Accessories",
    rating: 4.7,
    image: "https://media.istockphoto.com/id/182880925/photo/plain-brown-leather-wallet-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=EgtIEKMnpvxPl702JcEq27IPARqZLavu9AFMHgL2JS0="
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 99.99,
    category: "Electronics",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1588131153911-a4ea5189fe19?q=80&w=1162&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 7,
    name: "Running Shoes",
    price: 89.99,
    category: "Clothing",
    rating: 4.8,
    image: "https://media.istockphoto.com/id/2147533892/photo/closeup-man-and-tie-shoelace-with-fitness-outdoor-and-exercise-for-wellness-and-training.webp?a=1&b=1&s=612x612&w=0&k=20&c=L-ndZocCJjlsV32_xZngF0RSP6uCgszYnc9QKBBV3AM="
  },
  {
    id: 8,
    name: "Leather Handbag",
    price: 149.99,
    category: "Accessories",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80"
  }
];


const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Newest"];
const categories = ["All", "Clothing", "Accessories", "Electronics"];

export default function ClearanceFilterBar() {
  const [sortOption, setSortOption] = useState("Featured");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [minRating, setMinRating] = useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = [...productsData];
    if (selectedCategory !== "All") filtered = filtered.filter((p) => p.category === selectedCategory);
    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    filtered = filtered.filter((p) => p.rating >= minRating);
    if (sortOption === "Price: Low to High") filtered.sort((a, b) => a.price - b.price);
    else if (sortOption === "Price: High to Low") filtered.sort((a, b) => b.price - a.price);
    else if (sortOption === "Newest") filtered.sort((a, b) => b.id - a.id);
    return filtered;
  }, [sortOption, selectedCategory, priceRange, minRating]);

  return (
    <div className="bg-white text-amber-600 w-full flex flex-col items-center py-4 px-3 sm:px-6 my-5">
      {/* FILTER BAR */}
      <div className="max-w-[1200px] w-full flex flex-col gap-3 mb-6">
        {/* Categories: 2 per row on mobile, inline on bigger screens */}
        <div className="grid grid-cols-2 sm:flex gap-2 sm:gap-4 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-2 text-xs sm:text-sm rounded-md font-medium transition ${
                selectedCategory === cat
                  ? "bg-amber-600 text-gray-900"
                  : "border border-amber-600 hover:bg-amber-600 hover:text-gray-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort + View + Filter */}
        <div className="flex justify-center sm:justify-between items-center gap-3 flex-wrap">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="bg-white border border-amber-600 text-amber-600 px-3 py-2 text-xs sm:text-sm rounded-md"
          >
            {sortOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md ${viewMode === "grid" ? "bg-amber-600 text-gray-900" : "hover:bg-gray-500"}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md ${viewMode === "list" ? "bg-amber-600 text-gray-900" : "hover:bg-gray-500"}`}
            >
              <List className="w-4 h-4" />
            </button>

            <button
              className="sm:hidden p-2 rounded-md border border-amber-600 hover:bg-amber-600 hover:text-gray-900"
              onClick={() => setIsFilterOpen(true)}
            >
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Filter Sidebar */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-4/5 sm:w-1/3 h-full bg-white text-amber-600 p-5 shadow-lg z-50 overflow-y-auto"
          >
            <button
              onClick={() => setIsFilterOpen(false)}
              className="text-gray-700 mb-4 border border-amber-600 px-3 py-1 rounded-md"
            >
              Close
            </button>
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="mb-4">
              <label className="block mb-2 text-sm">Price Range (${priceRange[0]} - ${priceRange[1]})</label>
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                className="w-full"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm">Minimum Rating: {minRating} ★</label>
              <input
                type="range"
                min="0"
                max="5"
                step="0.5"
                value={minRating}
                onChange={(e) => setMinRating(parseFloat(e.target.value))}
                className="w-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PRODUCT GRID */}
      <div
        className={`grid gap-4 w-full max-w-[1200px] ${
          viewMode === "grid" ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4" : "grid-cols-1"
        }`}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-md overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-36 sm:h-44 object-cover"
              />
              <div className="p-3 text-xs sm:text-sm">
                <h3 className="text-amber-600 font-semibold truncate">{product.name}</h3>
                <p className="text-amber-500">${product.price.toFixed(2)}</p>
                <p className="text-amber-600 text-[11px]">{product.rating} ★</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-amber-500 text-center col-span-full text-sm">No products match your filters.</p>
        )}
      </div>
    </div>
  );
}
