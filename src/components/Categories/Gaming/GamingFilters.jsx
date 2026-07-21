"use client";

import React, { useState, useEffect } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

// ✅ Sample Gaming Data
export const gamingData = [
  {
    id: 1,
    name: "Pro Gaming Mouse X",
    brand: "HyperTech",
    category: "Accessories",
    price: 89,
    features: ["RGB Lighting", "Ergonomic", "Wireless"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1670183859029-99a0a2c1912b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtZSUyMGNoZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Gaming Keyboard RGB",
    brand: "KeyMaster",
    category: "Accessories",
    price: 129,
    features: ["Mechanical", "RGB Backlight", "Programmable Keys"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1585038021831-8afd9f9ab27f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZSUyMGNoZXNzfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "4K Gaming Monitor",
    brand: "ViewPro",
    category: "Displays",
    price: 599,
    features: ["4K UHD", "144Hz", "HDR"],
    rating: 5,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1642056875787-a6e372fdbb1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWUlMjBjaGVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Gaming Headset Pro",
    brand: "SoundBlaze",
    category: "Audio",
    price: 149,
    features: ["Noise Cancelling", "Surround Sound", "Wireless"],
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1627279622499-5678705ce453?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhbWUlMjBjaGVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    name: "Gaming Chair Elite",
    brand: "ComfortMax",
    category: "Furniture",
    price: 349,
    features: ["Ergonomic", "Recliner", "Lumbar Support"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1672855928180-9aed9213f266?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdhbWUlMjBjaGVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },

  // ✅ Generate more products dynamically
  ...Array.from({ length: 50 }, (_, index) => {
    const id = index + 6;
    const brands = ["HyperTech", "KeyMaster", "ViewPro", "SoundBlaze", "ComfortMax"];
    const categories = ["Accessories", "Displays", "Audio", "Furniture"];
    const features = ["RGB Lighting", "Wireless", "Mechanical", "HDR", "Ergonomic"];
    const images = [
      "https://images.unsplash.com/photo-1522069213448-443a614da9b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2FtZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1553481187-be93c21490a9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdhbWV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1594652634010-275456c808d0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdhbWV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdhbWV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1555864326-5cf22ef123cf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhbWV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1555864326-5cf22ef123cf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhbWV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1570303345338-e1f0eddf4946?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGdhbWV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1511213966740-24d719a0a814?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGdhbWV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1588591795084-1770cb3be374?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGdhbWV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1535043205849-513fe27db33e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGdhbWV8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1687991219939-44366920a571?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGdhbWV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGdhbWV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1609050470944-59dd791705ac?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGdhbWV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGdhbWV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGdhbWV8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1719356331501-32714c9df5b7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGdhbWV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1590061826933-c84b0891bc03?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGdhbWV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGdhbWV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1519744346361-7a029b427a59?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGdhbWV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1551368998-d349c755c74c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGdhbWV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1595744043037-68de3376ed59?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGdhbWV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1663411605375-98e52ab7e276?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1723619045120-cd35f3ebbc0f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1675762226695-bec5748d4d00?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1670429843953-e523e38560e7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1743581340390-910c93b86d66?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1663411605301-60a3a93b1567?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1745602447364-5dbcc97dd830?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1701028855368-680faeac40d7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1570551532211-b11e3d044d16?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1673089624486-d6bb7baf14a7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1686855493864-96b245f98962?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1670183858968-23bc1257a47a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ0fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1675762226675-48880233ce50?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ4fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1675896162496-fde0929269d8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYwfHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1670183858867-6e7f7ebc8d35?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYxfHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1660929028790-8d7282f17f05?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY4fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1675896162382-133c265e43cc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcxfHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1752471970410-5a50e4271c0b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc0fHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1606779218751-57d4684a9422?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc4fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1673089624442-14bc846ded76?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDgzfHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1672855191351-e26398f27e5f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg3fHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1744948078667-ab685685ae5a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg4fHx8ZW58MHx8fHx8",
    ];

    return {
      id,
      name: `Gaming Gear ${id}`,
      brand: brands[id % brands.length],
      category: categories[id % categories.length],
      price: Math.floor(Math.random() * 900) + 50,
      features: [
        features[id % features.length],
        features[(id + 1) % features.length],
        features[(id + 2) % features.length],
      ],
      rating: Math.floor(Math.random() * 3) + 3,
      stock: id % 4 !== 0,
      image: images[id % images.length],
    };
  }),
];

const GamingFilters = () => {
  const [filters, setFilters] = useState({
    brand: [],
    category: [],
    features: [],
    minPrice: 0,
    maxPrice: 1000,
    rating: 0,
    stock: null,
    search: "",
    sort: "",
  });

  const [filteredProducts, setFilteredProducts] = useState(gamingData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  // ✅ Apply Filters
  useEffect(() => {
    let result = gamingData;

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
      maxPrice: 1000,
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
            placeholder="Search products..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full border border-gray-200 bg-white rounded-md px-3 py-2 mb-4 text-gray-900"
          />

          {/* Brand */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Brand</h3>
            {["HyperTech", "KeyMaster", "ViewPro", "SoundBlaze", "ComfortMax"].map(
              (brand) => (
                <label key={brand} className="block mb-1 text-sm">
                  <input
                    type="checkbox"
                    checked={filters.brand.includes(brand)}
                    onChange={() => toggleFilter("brand", brand)}
                    className="mr-2"
                  />
                  {brand}
                </label>
              )
            )}
          </div>

          {/* Category */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Category</h3>
            {["Accessories", "Displays", "Audio", "Furniture"].map((cat) => (
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
            {["RGB Lighting", "Wireless", "Mechanical", "HDR", "Ergonomic"].map(
              (feature) => (
                <label key={feature} className="block mb-1 text-sm">
                  <input
                    type="checkbox"
                    checked={filters.features.includes(feature)}
                    onChange={() => toggleFilter("features", feature)}
                    className="mr-2"
                  />
                  {feature}
                </label>
              )
            )}
          </div>

          {/* Price */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Price</h3>
            <input
              type="range"
              min="0"
              max="1000"
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
                <button className="mt-3 bg-black text-black px-5 py-2 rounded-full font-semibold hover:bg-black transition">
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

export default GamingFilters;
