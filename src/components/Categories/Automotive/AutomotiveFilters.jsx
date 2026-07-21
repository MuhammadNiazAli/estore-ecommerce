"use client";

import React, { useState, useEffect } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

// ✅ Automotive Products Data
export const automotiveData = [
  {
    id: 1,
    name: "Premium Alloy Wheels",
    brand: "AutoMaster",
    category: "Wheels",
    price: 450,
    features: ["Lightweight", "Durable", "Stylish"],
    rating: 5,
    stock: true,
    image:
      "https://media.istockphoto.com/id/2195282762/photo/traveling-in-the-evening-summer-reflecting-the-sky-in-the-car-mirror.webp?a=1&b=1&s=612x612&w=0&k=20&c=1EPOMtqFL4qDDwEuXTw1CQob6778NC0ev9Rp9q1rJdE=",
  },
  {
    id: 2,
    name: "High-Performance Brake Pads",
    brand: "BrakeX",
    category: "Brakes",
    price: 120,
    features: ["Ceramic", "Noise-Free", "Long-Lasting"],
    rating: 4,
    stock: true,
    image:
      "https://media.istockphoto.com/id/2181732830/photo/aerial-drone-landscape-of-the-dutch-countryside-and-farmland-and-motorway.webp?a=1&b=1&s=612x612&w=0&k=20&c=8A-1a7oACcN0WNY0GnOdkW_68cRJgmRYgYvmyiEUkQk=",
  },
  {
    id: 3,
    name: "LED Headlights Kit",
    brand: "BrightRide",
    category: "Lighting",
    price: 89,
    features: ["Energy Efficient", "Waterproof", "High Brightness"],
    rating: 4,
    stock: true,
    image:
      "https://media.istockphoto.com/id/1487884408/photo/truck-on-the-bridge-across-the-river-in-norway.webp?a=1&b=1&s=612x612&w=0&k=20&c=o_Nn3Oy6elodHzzyfFBE0SxrdxOSqMeirfCdjMScj_Q=",
  },
  {
    id: 4,
    name: "Sport Exhaust System",
    brand: "TurboFlow",
    category: "Exhaust",
    price: 399,
    features: ["Performance Boost", "Stainless Steel", "Sporty Sound"],
    rating: 5,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1677094310899-02303289cadf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXV0b21hdGl2ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    name: "All-Season Tires",
    brand: "GripPro",
    category: "Tires",
    price: 299,
    features: ["Durable", "High Traction", "All Weather"],
    rating: 4,
    stock: true,
    image:
      "https://images.unsplash.com/photo-1735179644170-e0512990fb23?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXV0b21hdGl2ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  // ✅ Demo data
  ...Array.from({ length: 30 }, (_, i) => {
    const brands = ["AutoMaster", "BrakeX", "TurboFlow", "BrightRide", "GripPro"];
    const categories = ["Wheels", "Brakes", "Tires", "Lighting", "Exhaust"];
    const features = ["Durable", "Lightweight", "Performance", "Stylish"];
    const images = [
      "https://images.unsplash.com/photo-1657888363481-a95a68f9fcbe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXV0b21hdGl2ZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1723742810196-2e002d1530c6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXV0b21hdGl2ZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1677094310956-7f88ae5f5c6b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXV0b21hdGl2ZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1719410829263-07b996aa68a8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF1dG9tYXRpdmV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1668970121112-5281c96e838c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXV0b21hdGl2ZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1676637656198-e2bbf752103a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGF1dG9tYXRpdmV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1594420307680-4e404e105d86?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF1dG9tYXRpdmV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1635432575521-57e46e58a3d7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF1dG9tYXRpdmV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1719410829034-e70481c87312?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF1dG9tYXRpdmV8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1713773249135-5fd1ecf2007a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGF1dG9tYXRpdmV8ZW58MHx8MHx8fDA%3D",
      "https://media.istockphoto.com/id/170640706/photo/front-view-of-jet-engine-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=oa8sfoW6ZE1HpnE5sdnl9ZF0bJXvIPl17p6vllMwTd4=",
      "https://media.istockphoto.com/id/528679231/photo/auto-parts.webp?a=1&b=1&s=612x612&w=0&k=20&c=BS5oaB2WGG4YJDh5nlUaVoFqAht8gcrdXczizGw0268=",
      "https://images.unsplash.com/photo-1625242824584-96574ead8959?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2ljbGUlMjBwYXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1724253380577-203d25af280f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2ljbGUlMjBwYXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1529016517436-8e1768fb30e7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2ljbGUlMjBwYXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1600368544663-05493ab49549?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2ljbGUlMjBwYXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1699469786384-3717a73da415?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2ljbGUlMjBwYXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1476894265716-216b83574f0d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1510909412967-0cb2ce08023b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1494153695676-b3d8a5219535?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1598612580228-7b662f2bf74a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1677688010633-138cea460828?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1551895738-6d0216165381?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1463587480257-3c60227e1e52?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/reserve/2jEqzi01Ru2HBhGLTBgB_MG_5236.jpg?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1593062037896-764e9f52029e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1521925033579-50964452844a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1546020715-418a7d7e13d3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1421429167374-8fc8ab6d0f66?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1566738601015-ca5c06d9f6df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1572243672277-82fcefdeebd2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1605737710291-98fe72919667?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1674582717310-a0299ca7d0e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1487631693776-4d0bc8fc9f79?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1653730785856-8a1281aa31a5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D  ",
      "https://images.unsplash.com/photo-1481901173350-844f14f3a3da?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1571042191361-6408e398e484?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1612979684256-db2c541044c1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1570169043013-de63774bbf97?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1591586894752-715eed1f70db?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1579985106522-85200b4c5ff0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1678718711951-e1add4d05f59?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1673860083076-1bf4d409aa5d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1521907215356-918bfb8b0b46?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1552889583-b5cc62133b84?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGNpY2xlJTIwcGFydHN8ZW58MHx8MHx8fDA%3D",
    ];
    return {
      id: i + 6,
      name: `Automotive Item ${i + 6}`,
      brand: brands[i % brands.length],
      category: categories[i % categories.length],
      price: Math.floor(Math.random() * 500) + 50,
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

const AutomotiveFilters = () => {
  const [filters, setFilters] = useState({
    brand: [],
    category: [],
    features: [],
    minPrice: 0,
    maxPrice: 600,
    rating: 0,
    stock: null,
    search: "",
    sort: "",
  });

  const [filteredProducts, setFilteredProducts] = useState(automotiveData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  // ✅ Apply Filters
  useEffect(() => {
    let result = automotiveData;

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
      maxPrice: 600,
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
            placeholder="Search automotive..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full border border-gray-200 bg-white rounded-md px-3 py-2 mb-4 text-gray-900"
          />

          {/* Brand */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Brand</h3>
            {["AutoMaster", "BrakeX", "TurboFlow", "BrightRide", "GripPro"].map(
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
            {["Wheels", "Brakes", "Tires", "Lighting", "Exhaust"].map((cat) => (
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
            {["Durable", "Lightweight", "Performance", "Stylish"].map(
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
              max="600"
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

export default AutomotiveFilters;
