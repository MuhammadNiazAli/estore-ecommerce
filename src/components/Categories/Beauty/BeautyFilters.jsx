"use client";

import React, { useState, useEffect } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

// ✅ Beauty Products Data
export const beautyData = [
  {
    id: 1,
    name: "Organic Aloe Vera Gel",
    brand: "GlowNature",
    category: "Skincare",
    price: 29,
    features: ["Hydrating", "Organic", "Cooling"],
    rating: 5,
    stock: true,
    image:
      "https://media.istockphoto.com/id/1181366400/photo/in-the-hands-of-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=iBJjn9wqPMw4ShGNbQLlR_vvzxMMNQOxDZdycY1dYxs=",
  },
  {
    id: 2,
    name: "Rose Water Mist",
    brand: "BloomCare",
    category: "Skincare",
    price: 19,
    features: ["Refreshing", "Hydrating", "Vegan"],
    rating: 4,
    stock: true,
    image:
      "https://media.istockphoto.com/id/2160078318/photo/close-up-of-a-farmer-planting-a-lettuce-seedling-on-a-community-garden.webp?a=1&b=1&s=612x612&w=0&k=20&c=F022UBczsIpDndAciq8BqQejQBUJktj-70ebJpDv2yg=",
  },
  {
    id: 3,
    name: "Lavender Body Oil",
    brand: "PureBliss",
    category: "Body Care",
    price: 35,
    features: ["Calming", "Essential Oil", "Natural"],
    rating: 4,
    stock: true,
    image:
      "https://media.istockphoto.com/id/475172888/photo/leaf-surface-macro-shallow-dof.webp?a=1&b=1&s=612x612&w=0&k=20&c=IZKEJk8gl2sBRumsbzj1NlYctU6XUr7abTjaCfbV0Dk=",
  },
  {
    id: 4,
    name: "Luxury Hair Serum",
    brand: "SilkTress",
    category: "Hair Care",
    price: 49,
    features: ["Frizz Control", "Smooth Finish", "Lightweight"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1681140560926-ea741789469a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwcGxhbnRzfGVufDB8fDB8fHww",
  },
  {
    id: 5,
    name: "Charcoal Face Mask",
    brand: "GlowNature",
    category: "Skincare",
    price: 25,
    features: ["Detoxifying", "Deep Cleanse", "Natural"],
    rating: 4,
    stock: false,
    image:
      "https://images.unsplash.com/photo-1719153863464-b2ee7e28b6df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlJTIwcGxhbnRzfGVufDB8fDB8fHww",
  },
  // ✅ Generate extra demo items
  ...Array.from({ length: 51 }, (_, i) => {
    const brands = ["GlowNature", "BloomCare", "PureBliss", "SilkTress"];
    const categories = ["Skincare", "Hair Care", "Body Care"];
    const features = ["Organic", "Hydrating", "Natural", "Vegan", "Essential Oil"];
    const images = [
      "https://images.unsplash.com/photo-1718078722811-f0112de8b646?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlJTIwcGxhbnRzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1718078722811-f0112de8b646?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlJTIwcGxhbnRzfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1671548186112-f2f0bcf16745?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlJTIwcGxhbnRzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1651780779099-d2793929d51b?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://media.istockphoto.com/id/1471449298/photo/close-up-nature-tropical-green-leaves-background-and-textured.webp?a=1&s=612x612&w=0&k=20&c=WyBcILHH6BQH1dk5BLdZgc5dp3IZCddcj-XlS-TNOfU=",
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnR8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1675864663002-c330710c6ba0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxhbnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhbnR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1487700160041-babef9c3cb55?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGxhbnR8ZW58MHx8MHx8fDA%3D",
      "https://media.istockphoto.com/id/1458747323/photo/wood-podium-on-table-top-green-tropical-plant-white-space-background-promotion-beauty.webp?a=1&s=612x612&w=0&k=20&c=sss_rxD8xCX6004GTBTmMxkWD3kOY6iMejKXdNWcG1A=",
      "https://media.istockphoto.com/id/1783693660/photo/propagation-by-cuttings-of-dracaena-and-ficus-seedlings-in-water.webp?a=1&s=612x612&w=0&k=20&c=dSQKqgJtLZWzwq3tZhTu-9vuHSqhT2TtrU7Mq4u9EZs=",
      "https://images.unsplash.com/photo-1586356864805-2956a8798a07?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1586356864805-2956a8798a07?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1682542226608-736788c67e11?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1586191323955-0105fd538788?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1624976845869-59781225b4d0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1624976845869-59781225b4d0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1740499747511-5a05b79e3a05?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1661895419885-07825c64767d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1624976851805-e934c27be233?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1589420847301-caf51d62a5d1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1552248524-10d9a7e4841c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
      "https://plus.unsplash.com/premium_photo-1681807326608-ff8af57d796a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1698659036248-eea265b6ed57?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1586883573403-cb7ee339755b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1714507767653-bacd7af67d15?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1654847463181-7c340b89f5cc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1723672865237-9f9586b3e9bc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1548688265-62dae8daeb24?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1671379525148-74f39221dc22?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1525280008627-921852d87169?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1502810365585-56ffa361fdde?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1681290358247-c160fc097bdb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBsYW50fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYW50fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBsYW50fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1610448989365-1d259276cbb5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1610448989365-1d259276cbb5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1543258742-001eb2141837?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1543258742-001eb2141837?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1611588696789-9b58977ebab1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1557939628-3e476420db6a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1726873295485-0a43124078da?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
    ];
    return {
      id: i + 6,
      name: `Beauty Product ${i + 6}`,
      brand: brands[i % brands.length],
      category: categories[i % categories.length],
      price: Math.floor(Math.random() * 100) + 10,
      features: [
        features[i % features.length],
        features[(i + 1) % features.length],
      ],
      rating: Math.floor(Math.random() * 3) + 3,
      stock: i % 4 !== 0,
      image: images[i % images.length],
    };
  }),
];

const BeautyFilters = () => {
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

  const [filteredProducts, setFilteredProducts] = useState(beautyData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  // ✅ Apply Filters
  useEffect(() => {
    let result = beautyData;

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
    <div className="bg-gray-900 text-white py-8">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row gap-8 relative">
        {/* ✅ Filter Toggle for Mobile */}
        <div className="lg:hidden sticky top-20 z-40">
          <button
            className="bg-yellow-500 text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
            onClick={() => setIsFilterOpen(true)}
          >
            <FaFilter /> Filters
          </button>
        </div>

        {/* ✅ Sidebar Filters */}
        <aside
          className={`fixed top-0 left-0 h-full w-72 bg-gray-800 z-50 p-6 transform transition-transform duration-300 ease-in-out overflow-y-auto
            ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0 lg:relative lg:block lg:w-1/4 rounded-lg lg:sticky lg:top-4`}
        >
          {/* Close Btn for Mobile */}
          <button
            className="absolute top-4 right-4 text-yellow-400 text-2xl lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          >
            <FaTimes />
          </button>

          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <button
            className="text-sm text-yellow-400 hover:underline mb-4"
            onClick={resetFilters}
          >
            Reset Filters
          </button>

          {/* Search */}
          <input
            type="text"
            placeholder="Search beauty products..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full border border-gray-700 bg-gray-900 rounded-md px-3 py-2 mb-4 text-white"
          />

          {/* Brand */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-yellow-400">Brand</h3>
            {["GlowNature", "BloomCare", "PureBliss", "SilkTress"].map(
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
            <h3 className="font-semibold mb-2 text-yellow-400">Category</h3>
            {["Skincare", "Hair Care", "Body Care"].map((cat) => (
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
            <h3 className="font-semibold mb-2 text-yellow-400">Features</h3>
            {[
              "Organic",
              "Hydrating",
              "Natural",
              "Vegan",
              "Essential Oil",
            ].map((feature) => (
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
            <h3 className="font-semibold mb-2 text-yellow-400">Price</h3>
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
            <h3 className="font-semibold mb-2 text-yellow-400">Rating</h3>
            {[5, 4, 3].map((r) => (
              <button
                key={r}
                className={`mr-2 mb-2 px-2 py-1 border rounded ${
                  filters.rating === r ? "bg-yellow-400 text-black" : ""
                }`}
                onClick={() => setFilters({ ...filters, rating: r })}
              >
                {r}★ & Up
              </button>
            ))}
          </div>

          {/* Stock */}
          <div>
            <h3 className="font-semibold mb-2 text-yellow-400">Availability</h3>
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
              className="bg-gray-800 text-white border border-gray-700 px-3 py-2 rounded"
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
                className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-xl transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-400">{product.brand}</p>
                <p className="text-lg font-bold text-yellow-400">
                  ${product.price}
                </p>
                <p className="text-sm">
                  {product.stock ? "In Stock" : "Out of Stock"}
                </p>
                <button className="mt-3 bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition inline-flex items-center justify-center whitespace-nowrap text-sm sm:text-base">
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
                className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
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

export default BeautyFilters;
