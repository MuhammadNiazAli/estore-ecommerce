"use client";

import React, { useState, useEffect } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

// ✅ Audio Products Data
export const audioData = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    brand: "SoundMax",
    category: "Headphones",
    price: 149,
    features: ["Noise Cancelling", "Wireless", "Hi-Fi Sound"],
    rating: 5,
    stock: true,
    image:
      "https://media.istockphoto.com/id/1304350116/photo/music-mixer.webp?a=1&b=1&s=612x612&w=0&k=20&c=OJK_QUmBqSrDI5fnEbB_Gjh7LwHwdalzpy4hhjsR1cQ=",
  },
  {
    id: 2,
    name: "Portable Bluetooth Speaker",
    brand: "BassBoom",
    category: "Speakers",
    price: 99,
    features: ["Waterproof", "Portable", "Deep Bass"],
    rating: 4,
    stock: true,
    image:
      "https://media.istockphoto.com/id/1501910741/photo/close-up-view-of-black-female-ear-and-sound-waveform.webp?a=1&b=1&s=612x612&w=0&k=20&c=BrRZVWPNsKDeXeB3iu9UNgNfgEfy6bZjvx9VkU0Gf1E=",
  },
  {
    id: 3,
    name: "Studio Monitor Speakers",
    brand: "ProAudio",
    category: "Speakers",
    price: 299,
    features: ["Studio Quality", "Wired", "Balanced Output"],
    rating: 5,
    stock: true,
    image:
      "https://media.istockphoto.com/id/638651064/photo/festival-vibes.webp?a=1&b=1&s=612x612&w=0&k=20&c=XGCrdUPTNW-xmkWnCUy-g7qEysgyNmP-AGEnbOtfEdY=",
  },
  {
    id: 4,
    name: "Noise Cancelling Earbuds",
    brand: "SoundMax",
    category: "Earbuds",
    price: 79,
    features: ["Compact", "Wireless", "Noise Cancelling"],
    rating: 4,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1664195074794-35beb8cd632f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXVkaW98ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    name: "Premium Gaming Headset",
    brand: "GameBeats",
    category: "Headphones",
    price: 129,
    features: ["Surround Sound", "Comfortable", "RGB Lighting"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1664699106369-b25664e7bbf6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXVkaW98ZW58MHx8MHx8fDA%3D",
  },
  // ✅ Generate additional demo items
  ...Array.from({ length: 49 }, (_, i) => {
    const brands = ["SoundMax", "BassBoom", "ProAudio", "GameBeats"];
    const categories = ["Headphones", "Speakers", "Earbuds"];
    const features = [
      "Wireless",
      "Noise Cancelling",
      "Waterproof",
      "Portable",
      "Hi-Fi Sound",
    ];
    const images = [
      "https://images.unsplash.com/photo-1466428996289-fb355538da1b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXVkaW98ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXVkaW98ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1619472351888-f844a0b33f5b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF1ZGlvfGVufDB8fDB8fHwwhttps://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=400",
      "https://images.unsplash.com/photo-1483032469466-b937c425697b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXVkaW98ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXVkaW98ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXVkaW98ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1679082307672-02ebf0ba9b9a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1489797715492-dbd3bd61c6b5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1489797715492-dbd3bd61c6b5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1677846525894-9c3825b8bdb4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1673533034198-89bdebdd82d2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1565533137649-8ca980cef388?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1565533137649-8ca980cef388?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1617994452722-4145e196248b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1611532736637-13a8bdf96127?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1664195074818-94ba78e36c3f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1526708286628-e9e0b57f84fa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1612367289874-0fba3b4a07dd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1655947717064-d856af599bd1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1608538770329-65941f62f9f8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1564064927589-19a68c199e42?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1520444451380-ebe0f7b9cfd5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1664195074804-9926094f2c6f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1664195074804-9926094f2c6f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1664195074851-5f01bce49621?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1732695833395-bbb34db17397?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1457689146074-bd667e343a9c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1710736885726-b6f00ecc8dcc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1664195074940-c385f20e62ee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1605879106524-3b493464ec9b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1590602846581-7d3eec520d07?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1664195074855-0fa39676386a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1664195074891-75aed2ce51f3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1660087031197-f483b4388e91?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1549822531-d99bcfebc360?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1687166440943-cbd8f4f406f4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1664195074912-13f88375bc65?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxhdWRpb3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1655947717064-d856af599bd1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1608538770329-65941f62f9f8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1664195074851-5f01bce49621?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1492879291357-620e858bd26a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1492879291357-620e858bd26a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1492879291357-620e858bd26a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGF1ZGlvfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1627773167916-f52e5113f0d3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGF1ZGlvfGVufDB8fDB8fHww"
    ];
    return {
      id: i + 6,
      name: `Audio Product ${i + 6}`,
      brand: brands[i % brands.length],
      category: categories[i % categories.length],
      price: Math.floor(Math.random() * 300) + 50,
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

const AudioFilters = () => {
  const [filters, setFilters] = useState({
    brand: [],
    category: [],
    features: [],
    minPrice: 0,
    maxPrice: 500,
    rating: 0,
    stock: null,
    search: "",
    sort: "",
  });

  const [filteredProducts, setFilteredProducts] = useState(audioData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  // ✅ Apply Filters
  useEffect(() => {
    let result = audioData;

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
      maxPrice: 500,
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
            placeholder="Search audio products..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full border border-gray-700 bg-gray-900 rounded-md px-3 py-2 mb-4 text-white"
          />

          {/* Brand */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-yellow-400">Brand</h3>
            {["SoundMax", "BassBoom", "ProAudio", "GameBeats"].map((brand) => (
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
            <h3 className="font-semibold mb-2 text-yellow-400">Category</h3>
            {["Headphones", "Speakers", "Earbuds"].map((cat) => (
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
              "Wireless",
              "Noise Cancelling",
              "Waterproof",
              "Portable",
              "Hi-Fi Sound",
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
              max="500"
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

export default AudioFilters;
