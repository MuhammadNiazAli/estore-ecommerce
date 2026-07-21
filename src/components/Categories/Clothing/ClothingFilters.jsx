"use client";

import React, { useState, useEffect } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

// ✅ Clothing Products Data
export const clothingData = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    brand: "UrbanWear",
    category: "T-Shirts",
    price: 25,
    features: ["Cotton", "Slim Fit", "Comfortable"],
    rating: 5,
    stock: true,
    image:
      "https://media.istockphoto.com/id/482949611/photo/blank-white-t-shirt-front-with-clipping-path.webp?a=1&b=1&s=612x612&w=0&k=20&c=xW5QrpcrFqCSvCetK7hPow9dzankuczBjFT6Z5SC8Kc=",
  },
  {
    id: 2,
    name: "Denim Jacket",
    brand: "StyleHub",
    category: "Jackets",
    price: 79,
    features: ["Denim", "Casual", "Trendy"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1618354691321-e851c56960d1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY5fHx0c2hpcnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Running Sneakers",
    brand: "Sportify",
    category: "Shoes",
    price: 99,
    features: ["Breathable", "Lightweight", "Durable"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHNoaXJ0fGVufDB8fDB8fHww",
  },
  {
    id: 4,
    name: "Hooded Sweatshirt",
    brand: "CozyFit",
    category: "Hoodies",
    price: 49,
    features: ["Warm", "Cotton Blend", "Soft"],
    rating: 5,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHNoaXJ0fGVufDB8fDB8fHww",
  },
  {
    id: 5,
    name: "Slim Fit Jeans",
    brand: "UrbanWear",
    category: "Jeans",
    price: 59,
    features: ["Stretchable", "Skinny Fit", "Durable"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHNoaXJ0fGVufDB8fDB8fHww",
  },
  // ✅ Generate demo items
  ...Array.from({ length: 45 }, (_, i) => {
    const brands = ["UrbanWear", "StyleHub", "CozyFit", "Sportify"];
    const categories = ["T-Shirts", "Jackets", "Shoes", "Jeans", "Hoodies"];
    const features = ["Cotton", "Slim Fit", "Durable", "Breathable"];
    const images = [
      "https://plus.unsplash.com/premium_photo-1718913931807-4da5b5dd27fa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHNoaXJ0fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1718913931807-4da5b5dd27fa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHNoaXJ0fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1714070700737-24acfe6b957c?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1718913931807-4da5b5dd27fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wxfHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1678218594563-9fe0d16c6838?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1753788346709-f18afe543a4f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1747643595799-331fabe5dc9d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1673977132898-0deb4b659935?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1689977743847-75edbea25a84?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMwfHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1705554519869-fdcebc4ba94b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMxfHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1671028547411-12a7fb233ddd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1691367279053-ffa6edf80181?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1521498542256-5aeb47ba2b36?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1716951910901-3f595611cf3d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1716951910901-3f595611cf3d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1578021127722-1f1ff95b429e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1621951753015-740c699ab970?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1716369786631-b8b9c7ac1dc4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1651761179569-4ba2aa054997?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1621951767587-b24334f11c65?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1716951988375-37d5793385d0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1716951848908-8907bb6c655b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1643881080002-afdc695936e0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1610502778270-c5c6f4c7d575?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1716951923523-0c76b14d4852?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1618677603286-0ec56cb6e1b5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1618677603286-0ec56cb6e1b5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1716951918731-77d7682b4e63?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1564859228273-274232fdb516?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1716951220992-2bbe913ddbf8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHx0c2hpcnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1716951735063-3d60c2c288e4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1716369786499-22d29031021b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHx0c2hpcnR8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1690038783904-b9d3edc24992?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHx0c2hpcnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1696086152504-4843b2106ab4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHx0c2hpcnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1657016028615-0157f9e43678?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHx0c2hpcnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1585032767761-878270336a0b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHx0c2hpcnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1693443688057-85f57b872a3c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHx0c2hpcnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1603113730470-780cbb2f32ca?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ1fHx0c2hpcnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1627225925683-1da7021732ea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTczfHx0c2hpcnR8ZW58MHx8MHx8fDA%3D",
    ];
    return {
      id: i + 6,
      name: `Clothing Item ${i + 6}`,
      brand: brands[i % brands.length],
      category: categories[i % categories.length],
      price: Math.floor(Math.random() * 150) + 20,
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

const ClothingFilters = () => {
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

  const [filteredProducts, setFilteredProducts] = useState(clothingData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  // ✅ Apply Filters
  useEffect(() => {
    let result = clothingData;

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
            className="bg-amber-700 text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
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
            className="absolute top-4 right-4 text-amber-600 text-2xl lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          >
            <FaTimes />
          </button>

          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <button
            className="text-sm text-amber-600 hover:underline mb-4"
            onClick={resetFilters}
          >
            Reset Filters
          </button>

          {/* Search */}
          <input
            type="text"
            placeholder="Search clothing..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full border border-gray-200 bg-white rounded-md px-3 py-2 mb-4 text-gray-900"
          />

          {/* Brand */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-amber-600">Brand</h3>
            {["UrbanWear", "StyleHub", "CozyFit", "Sportify"].map((brand) => (
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
            <h3 className="font-semibold mb-2 text-amber-600">Category</h3>
            {["T-Shirts", "Jackets", "Jeans", "Shoes", "Hoodies"].map((cat) => (
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
            <h3 className="font-semibold mb-2 text-amber-600">Features</h3>
            {["Cotton", "Slim Fit", "Durable", "Breathable"].map((feature) => (
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
            <h3 className="font-semibold mb-2 text-amber-600">Price</h3>
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
            <h3 className="font-semibold mb-2 text-amber-600">Rating</h3>
            {[5, 4, 3].map((r) => (
              <button
                key={r}
                className={`mr-2 mb-2 px-2 py-1 border rounded ${
                  filters.rating === r ? "bg-amber-600 text-black" : ""
                }`}
                onClick={() => setFilters({ ...filters, rating: r })}
              >
                {r}★ & Up
              </button>
            ))}
          </div>

          {/* Stock */}
          <div>
            <h3 className="font-semibold mb-2 text-amber-600">Availability</h3>
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
                <p className="text-lg font-bold text-amber-600">
                  ${product.price}
                </p>
                <p className="text-sm">
                  {product.stock ? "In Stock" : "Out of Stock"}
                </p>
                <button className="mt-3 bg-amber-700 text-black px-5 py-2 rounded-full font-semibold hover:bg-amber-600 transition inline-flex items-center justify-center whitespace-nowrap text-sm sm:text-base">
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
                className="bg-amber-700 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition"
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

export default ClothingFilters;
