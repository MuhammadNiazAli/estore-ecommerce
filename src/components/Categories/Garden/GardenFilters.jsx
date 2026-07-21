"use client";

import React, { useState, useEffect } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

// ✅ Garden Products Data
export const gardenData = [
  {
    id: 1,
    name: "Ceramic Plant Pot",
    brand: "GreenStyle",
    category: "Pots",
    price: 15,
    features: ["Eco-Friendly", "Durable", "Elegant"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1673141390230-8b4a3c3152b1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FyZGVufGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Wooden Garden Chair",
    brand: "NatureCraft",
    category: "Furniture",
    price: 120,
    features: ["Wood", "Weather Resistant", "Stylish"],
    rating: 4,
    stock: true,
    image:
      "https://media.istockphoto.com/id/2183200931/photo/flower-in-macewan-terrace-garden-and-the-riverwood-conservancy-mississauga-canada.webp?a=1&b=1&s=612x612&w=0&k=20&c=hum64GT6U8cNpfYl9K8aFjX1VAkJPIKypnbj3LkPLxk=",
  },
  {
    id: 3,
    name: "Hanging Planter Set",
    brand: "Bloomify",
    category: "Decor",
    price: 35,
    features: ["Durable", "Trendy", "Space-Saving"],
    rating: 4,
    stock: true,
    image:
      "https://media.istockphoto.com/id/2027302675/photo/woman-gardener-working-in-summer-garden-flowerbed-with-blooming-stachys-and-peonies.webp?a=1&b=1&s=612x612&w=0&k=20&c=pA4mLgP4qqMSBrMpg_tQe_I4SOvZK5ex95SxE0Uw380=",
  },
  {
    id: 4,
    name: "LED Garden Lights",
    brand: "GlowGarden",
    category: "Lighting",
    price: 49,
    features: ["Waterproof", "Energy-Saving", "Bright"],
    rating: 5,
    stock: false,
    image:
      "https://media.istockphoto.com/id/1322349508/photo/young-woman-laughing-while-relaxing-outside-on-her-patio-with-a-coffee.webp?a=1&b=1&s=612x612&w=0&k=20&c=ts69gThfWbn6wA5HOGgnUIeVlkMvHYaMOgzfX2WmnjI=",
  },
  {
    id: 5,
    name: "Garden Watering Can",
    brand: "EcoTools",
    category: "Tools",
    price: 20,
    features: ["Eco-Friendly", "Portable", "Durable"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1534710961216-75c88202f43e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FyZGVufGVufDB8fDB8fHww",
  },
  // ✅ Generate demo items
  ...Array.from({ length: 40 }, (_, i) => {
    const brands = ["GreenStyle", "NatureCraft", "Bloomify", "EcoTools", "GlowGarden"];
    const categories = ["Pots", "Furniture", "Decor", "Lighting", "Tools"];
    const features = ["Eco-Friendly", "Durable", "Stylish", "Weather Resistant"];
    const images = [
      "https://images.unsplash.com/photo-1558293842-c0fd3db86157?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FyZGVufGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1667423049497-291580083466?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2FyZGVufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1601654253194-260e0b6984f9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FyZGVufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1563714193017-5a5fb60bc02b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FyZGVufGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1661963333824-fd020faec5fc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2FyZGVufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1572085313466-6710de8d7ba3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FyZGVufGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FyZGVufGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1673141390222-2bd01b623bf3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1675039871605-eb156cc0575d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1544727219-d2ff78f0f148?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1578302758063-0ef3e048ca89?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1432958576632-8a39f6b97dc7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1550948390-6eb7fa773072?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1463554050456-f2ed7d3fec09?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1580600301354-0ce8faef576c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1591091421779-f5ffb333c27c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1546580594-a64816022c1b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1678912442369-15866eb909af?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1683586217826-f8496c0adec2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1621459555843-9a77f1d03fae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1547391076-c6132ab72010?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1464297162577-f5295c892194?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1591383496652-db773e57b1d0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1527451668186-d17acdb68207?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1680288884596-4ccbf5355297?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1571192776145-9f563c1df686?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1678836292789-6bb8d1f14a43?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1667308529745-eef03bcf486f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1611764837904-aaab5f6ab8af?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1563127673-b35a42ef206c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1598368457390-95a84ecb87c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1722794093194-5827c57f3960?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGdhcmRlbnxlbnwwfHwwfHx8MA%3D%3D",
    ];
    return {
      id: i + 6,
      name: `Garden Item ${i + 6}`,
      brand: brands[i % brands.length],
      category: categories[i % categories.length],
      price: Math.floor(Math.random() * 150) + 10,
      features: [
        features[i % features.length],
        features[(i + 1) % features.length],
      ],
      rating: Math.floor(Math.random() * 3) + 3,
      stock: i % 3 !== 0,
      image: images[i % images.length],
    };
  }),
];

const GardenFilters = () => {
  const [filters, setFilters] = useState({
    brand: [],
    category: [],
    features: [],
    minPrice: 0,
    maxPrice: 200,
    rating: 0,
    stock: null,
    search: "",
    sort: "",
  });

  const [filteredProducts, setFilteredProducts] = useState(gardenData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  // ✅ Apply Filters
  useEffect(() => {
    let result = gardenData;

    if (filters.search) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.brand.length > 0) {
      result = result.filter((p) => filters.brand.includes(p.brand));
    }

    if (filters.category.length > 0) {
      result = result.filter((p) => filters.category.includes(p.category));
    }

    if (filters.features.length > 0) {
      result = result.filter((p) =>
        filters.features.every((f) => p.features.includes(f))
      );
    }

    result = result.filter(
      (p) => p.price >= filters.minPrice && p.price <= filters.maxPrice
    );

    if (filters.rating > 0) {
      result = result.filter((p) => p.rating >= filters.rating);
    }

    if (filters.stock !== null) {
      result = result.filter((p) => p.stock === filters.stock);
    }

    if (filters.sort === "low-high") {
      result = result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "high-low") {
      result = result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts([...result]);
    setVisibleCount(8);
  }, [filters]);

  const toggleFilter = (type, value) => {
    setFilters((prev) => {
      const newArr = prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value];
      return { ...prev, [type]: newArr };
    });
  };

  const resetFilters = () => {
    setFilters({
      brand: [],
      category: [],
      features: [],
      minPrice: 0,
      maxPrice: 200,
      rating: 0,
      stock: null,
      search: "",
      sort: "",
    });
  };

  return (
    <div className="bg-white text-gray-900 py-8">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row gap-8 relative">
        {/* ✅ Filter Toggle for Mobile */}
        <div className="lg:hidden sticky top-20 z-40">
          <button
            className="bg-black text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
            onClick={() => setIsFilterOpen(true)}
          >
            <FaFilter /> Filters
          </button>
        </div>

        {/* ✅ Sidebar Filters */}
        <aside
          className={`fixed top-0 left-0 h-full w-72 bg-white z-50 p-6 transform transition-transform duration-300 ease-in-out overflow-y-auto
            ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0 lg:relative lg:block lg:w-1/4 rounded-lg lg:sticky lg:top-4`}
        >
          {/* Close Btn for Mobile */}
          <button
            className="absolute top-4 right-4 text-black text-2xl lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          >
            <FaTimes />
          </button>

          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <button
            className="text-sm text-black hover:underline mb-4"
            onClick={resetFilters}
          >
            Reset Filters
          </button>

          {/* Search */}
          <input
            type="text"
            placeholder="Search garden items..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full border border-gray-200 bg-white rounded-md px-3 py-2 mb-4 text-gray-900"
          />

          {/* Brand */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Brand</h3>
            {["GreenStyle", "NatureCraft", "Bloomify", "EcoTools", "GlowGarden"].map((brand) => (
              <label key={brand} className="block mb-1 text-sm">
                <input
                  type="checkbox"
                  checked={filters.brand.includes(brand)}
                  onChange={() => toggleFilter("brand", brand)}
                  className="mr-2"
                />
                {brand}
              </label>
            ))}
          </div>

          {/* Category */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Category</h3>
            {["Pots", "Furniture", "Decor", "Lighting", "Tools"].map((cat) => (
              <label key={cat} className="block mb-1 text-sm">
                <input
                  type="checkbox"
                  checked={filters.category.includes(cat)}
                  onChange={() => toggleFilter("category", cat)}
                  className="mr-2"
                />
                {cat}
              </label>
            ))}
          </div>

          {/* Features */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Features</h3>
            {["Eco-Friendly", "Durable", "Stylish", "Weather Resistant"].map((feature) => (
              <label key={feature} className="block mb-1 text-sm">
                <input
                  type="checkbox"
                  checked={filters.features.includes(feature)}
                  onChange={() => toggleFilter("features", feature)}
                  className="mr-2"
                />
                {feature}
              </label>
            ))}
          </div>

          {/* Price */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Price</h3>
            <input
              type="range"
              min="0"
              max="200"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters({ ...filters, maxPrice: parseInt(e.target.value) })
              }
              className="w-full"
            />
            <p className="text-sm">Up to ${filters.maxPrice}</p>
          </div>

          {/* Rating */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Rating</h3>
            {[5, 4, 3].map((r) => (
              <button
                key={r}
                className={`mr-2 mb-2 px-2 py-1 border rounded ${
                  filters.rating === r ? "bg-black text-black" : ""
                }`}
                onClick={() => setFilters({ ...filters, rating: r })}
              >
                {r}★ & Up
              </button>
            ))}
          </div>

          {/* Stock */}
          <div>
            <h3 className="font-semibold mb-2 text-black">Availability</h3>
            <label className="block">
              <input
                type="radio"
                name="stock"
                checked={filters.stock === true}
                onChange={() => setFilters({ ...filters, stock: true })}
                className="mr-2"
              />
              In Stock
            </label>
            <label className="block">
              <input
                type="radio"
                name="stock"
                checked={filters.stock === false}
                onChange={() => setFilters({ ...filters, stock: false })}
                className="mr-2"
              />
              Out of Stock
            </label>
          </div>
        </aside>

        {/* ✅ Products */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p>{filteredProducts.length} products found</p>
            <select
              value={filters.sort}
              onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
              className="bg-white text-gray-900 border border-gray-200 px-3 py-2 rounded"
            >
              <option value="">Sort By</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.slice(0, visibleCount).map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.brand}</p>
                <p className="text-lg font-bold text-black">
                  ${product.price}
                </p>
                <p className="text-sm">
                  {product.stock ? "In Stock" : "Out of Stock"}
                </p>
                <button className="mt-3 bg-black text-black px-5 py-2 rounded-full font-semibold hover:bg-black transition inline-flex items-center justify-center whitespace-nowrap text-sm sm:text-base">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Load More */}
          {visibleCount < filteredProducts.length && (
            <div className="text-center mt-6">
              <button
                onClick={() => setVisibleCount((prev) => prev + 8)}
                className="bg-black text-black px-6 py-3 rounded-full font-semibold hover:bg-black transition"
              >
                Load More
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default GardenFilters;
