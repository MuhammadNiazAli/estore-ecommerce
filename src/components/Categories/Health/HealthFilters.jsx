"use client";

import React, { useState, useEffect } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

// ✅ Sample Health Products Data
export const healthData = [
  {
    id: 1,
    name: "Vitamin C Supplement",
    brand: "NutraHealth",
    category: "Supplements",
    price: 25,
    features: ["Organic", "Non-GMO", "Gluten-Free"],
    rating: 5,
    stock: true,
    image:
      "https://media.istockphoto.com/id/2198318980/photo/a-wife-checking-her-husbands-blood-pressure.webp?a=1&b=1&s=612x612&w=0&k=20&c=8t4HoEckJbphwHl6Y5VpaH5HHakJ9XFR7FJi-TQgc90=",
  },
  {
    id: 2,
    name: "Yoga Mat",
    brand: "FlexFit",
    category: "Fitness",
    price: 40,
    features: ["Eco-Friendly", "Non-Slip", "Lightweight"],
    rating: 4,
    stock: true,
    image:
      "https://media.istockphoto.com/id/1993451390/photo/medicine-doctor-touching-medical-symbol-network-connection-interface-3d-rendering-interface.webp?a=1&b=1&s=612x612&w=0&k=20&c=DXdL8_ZbJ-lavgPiVzliVTiDIOXkgfLADmLABr6hSDE=",
  },
  {
    id: 3,
    name: "Herbal Tea Set",
    brand: "Wellness Brew",
    category: "Beverages",
    price: 18,
    features: ["Organic", "Caffeine-Free", "Antioxidant"],
    rating: 4,
    stock: true,
    image:
      "https://media.istockphoto.com/id/2181934420/photo/focused-research-scientist-analyzing-sample.webp?a=1&b=1&s=612x612&w=0&k=20&c=wloMhmQB9LiJjhlUkhbYVAa1AA9376LwFvMKidkjf8U=",
  },
  {
    id: 4,
    name: "Resistance Bands",
    brand: "PowerFlex",
    category: "Fitness",
    price: 30,
    features: ["Durable", "Portable", "Latex-Free"],
    rating: 5,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRofGVufDB8fDB8fHww",
  },
  {
    id: 5,
    name: "Massage Roller",
    brand: "RelaxPro",
    category: "Recovery",
    price: 22,
    features: ["Ergonomic", "Portable", "Durable"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRofGVufDB8fDB8fHww",
  },
  // Generate more items similarly if needed
];

// Generate demo items (optional)
const demoBrands = ["NutraHealth", "FlexFit", "Wellness Brew", "PowerFlex", "RelaxPro"];
const demoCategories = ["Supplements", "Fitness", "Beverages", "Recovery", "Wellness"];
const demoFeatures = ["Organic", "Non-GMO", "Gluten-Free", "Eco-Friendly", "Durable", "Portable"];
const demoImages = [
  "https://plus.unsplash.com/premium_photo-1667762241847-37471e8c8bc0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRofGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://media.istockphoto.com/id/1209610362/photo/healthy-vegan-food-diet-concept-ingredients-for-smoothie-from-apple-banana-avocado-broccoli.webp?a=1&s=612x612&w=0&k=20&c=Jx9X48VB85eJ7wr3b4Cy1xp1MgWJ6hR9Wr0-lIxFOQo=",
  "https://media.istockphoto.com/id/1125970558/photo/green-healthy-smoothie.webp?a=1&s=612x612&w=0&k=20&c=FD9RjAjRvYdU3owr3nA3MNUTXx2E1LDJ23am0rRIxlY=",
  "https://media.istockphoto.com/id/1399138100/photo/vegetables-detox-water-in-bottle-on-white-background.webp?a=1&s=612x612&w=0&k=20&c=SCbCT7lnjnn4JqxoJs5V-_oAA1fDpZqUAFTC4y-weDk=",
  "https://images.unsplash.com/photo-1634934044791-44efcd71ac04?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1706267701238-b4d69fc8f640?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1540298901673-82186025e606?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  "https://plus.unsplash.com/premium_photo-1724100961169-c5e13cdfffd9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1543362905-bddfadc3d44f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1669909910353-7bcf47c2139d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1516521068948-fb56e9a3331c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
  "https://plus.unsplash.com/premium_photo-1707242994139-fd1c5ab72aac?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1705352240612-0269414e6399?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1590779032260-5623d6774f7a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1649067846117-2d71b76be1e0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1664527306363-7a5798f0621c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1606307305578-9f4121dde6d9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1542624601729-1a12b3f11237?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1598214813841-a898787c7837?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1699976106481-02baab9811da?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1737042682060-612302be0bbe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1584615467021-1854ddeb1bae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1718128304872-36b06c4c831c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1605279682024-5a25531582dc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1724100592120-95e2f013128a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
  "https://plus.unsplash.com/premium_photo-1724100592120-95e2f013128a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1598264100889-f607dc58f5fa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1607522154179-da1c051ed109?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1590779032653-67a947bf8492?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1607522154446-86a1b4b90556?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1598214814103-969912a35c15?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1660092751699-39905fc4e4c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1631021967410-02c235efd7fc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1718972766557-8c38a0bcb96f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1610415946201-295954703dd9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM5fHx8ZW58MHx8fHx8",
];

const generateDemoHealthItems = () =>
  Array.from({ length: 40 }, (_, i) => ({
    id: i + 6,
    name: `Health Product ${i + 6}`,
    brand: demoBrands[i % demoBrands.length],
    category: demoCategories[i % demoCategories.length],
    price: Math.floor(Math.random() * 100) + 10,
    features: [
      demoFeatures[i % demoFeatures.length],
      demoFeatures[(i + 1) % demoFeatures.length],
    ],
    rating: Math.floor(Math.random() * 3) + 3,
    stock: i % 4 !== 0,
    image: demoImages[i % demoImages.length],
  }));

const HealthFilters = () => {
  const [filters, setFilters] = useState({
    brand: [],
    category: [],
    features: [],
    minPrice: 0,
    maxPrice: 150,
    rating: 0,
    stock: null,
    search: "",
    sort: "",
  });

  const [filteredProducts, setFilteredProducts] = useState([...healthData, ...generateDemoHealthItems()]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  // Apply Filters
  useEffect(() => {
    let result = [...healthData, ...generateDemoHealthItems()];

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
      maxPrice: 150,
      rating: 0,
      stock: null,
      search: "",
      sort: "",
    });
  };

  return (
    <div className="bg-white text-gray-900 py-8">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row gap-8 relative">
        {/* Filter Toggle for Mobile */}
        <div className="lg:hidden sticky top-20 z-40">
          <button
            className="bg-black text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
            onClick={() => setIsFilterOpen(true)}
          >
            <FaFilter /> Filters
          </button>
        </div>

        {/* Sidebar Filters */}
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
            placeholder="Search health products..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full border border-gray-200 bg-white rounded-md px-3 py-2 mb-4 text-gray-900"
          />

          {/* Brand */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Brand</h3>
            {demoBrands.map((brand) => (
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
            {demoCategories.map((cat) => (
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
            {demoFeatures.map((feature) => (
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
              max="150"
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

        {/* Products */}
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
                <p className="text-lg font-bold text-black">${product.price}</p>
                <p className="text-sm">{product.stock ? "In Stock" : "Out of Stock"}</p>
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

export default HealthFilters;
