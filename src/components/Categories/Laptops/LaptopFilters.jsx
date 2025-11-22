"use client";

import React, { useState, useCallback, useEffect, memo } from "react";

const brands = ["Apple", "Dell", "HP", "Lenovo", "Asus", "Acer"];
const ramOptions = ["8GB", "16GB", "32GB", "64GB"];

function LaptopFilters({ filters = {}, onFilterChange }) {
  const [selectedBrands, setSelectedBrands] = useState(filters.brands || []);
  const [priceRange, setPriceRange] = useState(filters.priceRange || [500, 3000]);
  const [selectedRam, setSelectedRam] = useState(filters.ram || []);
  const [showFilters, setShowFilters] = useState(true);

  // ✅ Debounced filter update for backend-like feel
  const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  };

  const updateFilters = useCallback(
    debounce((updatedFilters) => {
      if (onFilterChange) onFilterChange(updatedFilters);
    }, 300),
    [onFilterChange]
  );

  useEffect(() => {
    updateFilters({ brands: selectedBrands, priceRange, ram: selectedRam });
  }, [selectedBrands, priceRange, selectedRam, updateFilters]);

  const toggleBrand = useCallback((brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  }, []);

  const toggleRam = useCallback((ram) => {
    setSelectedRam((prev) =>
      prev.includes(ram) ? prev.filter((r) => r !== ram) : [...prev, ram]
    );
  }, []);

  const handlePriceChange = useCallback((index, value) => {
    setPriceRange((prev) => {
      const newRange = [...prev];
      newRange[index] = Number(value);
      if (newRange[0] > newRange[1]) newRange[index === 0 ? 1 : 0] = Number(value);
      return newRange;
    });
  }, []);

  const resetFilters = useCallback(() => {
    setSelectedBrands([]);
    setPriceRange([500, 3000]);
    setSelectedRam([]);
  }, []);

  return (
    <section className="bg-gray-900/80 backdrop-blur-md rounded-xl shadow-lg p-4 max-w-4xl mx-auto my-4 transition-all">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold text-gray-100">Filter Laptops</h2>
        <button
          onClick={() => setShowFilters((prev) => !prev)}
          className="text-gray-400 hover:text-white transition"
        >
          {showFilters ? "Hide" : "Show"}
        </button>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="space-y-4">
          {/* Summary */}
          <div className="text-sm text-gray-300">
            <b>Selected:</b>{" "}
            {selectedBrands.length > 0 && `Brands(${selectedBrands.join(", ")}) `}
            {selectedRam.length > 0 && `RAM(${selectedRam.join(", ")}) `}
            Price: ${priceRange[0]} - ${priceRange[1]}
          </div>

          {/* Brand Filter */}
          <div>
            <span className="block mb-2 text-gray-300 font-medium">Brands</span>
            <div className="flex flex-wrap gap-2">
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => toggleBrand(brand)}
                  className={`px-3 py-1.5 rounded-full border text-sm transition ${
                    selectedBrands.includes(brand)
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "border-gray-600 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <span className="block mb-2 text-gray-300 font-medium">Price Range</span>
            <div className="flex items-center gap-3">
              <input
                type="number"
                value={priceRange[0]}
                min="0"
                max="3000"
                onChange={(e) => handlePriceChange(0, e.target.value)}
                className="w-20 bg-gray-800 text-gray-100 rounded p-1"
              />
              <span className="text-gray-400">-</span>
              <input
                type="number"
                value={priceRange[1]}
                min="0"
                max="3000"
                onChange={(e) => handlePriceChange(1, e.target.value)}
                className="w-20 bg-gray-800 text-gray-100 rounded p-1"
              />
            </div>
            <input
              type="range"
              min="0"
              max="3000"
              step="50"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(1, e.target.value)}
              className="w-full mt-2 accent-blue-600"
            />
          </div>

          {/* RAM Filter */}
          <div>
            <span className="block mb-2 text-gray-300 font-medium">RAM</span>
            <div className="flex flex-wrap gap-2">
              {ramOptions.map((ram) => (
                <button
                  key={ram}
                  onClick={() => toggleRam(ram)}
                  className={`px-3 py-1.5 rounded-full border text-sm transition ${
                    selectedRam.includes(ram)
                      ? "bg-green-600 border-green-600 text-white"
                      : "border-gray-600 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {ram}
                </button>
              ))}
            </div>
          </div>

          {/* Reset Button */}
          <div className="text-right">
            <button
              onClick={resetFilters}
              className="text-red-400 hover:text-red-500 font-semibold"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default memo(LaptopFilters);
