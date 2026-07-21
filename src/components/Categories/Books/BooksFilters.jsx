"use client";

import React, { useState, useEffect } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

// ✅ Sample Books Data
export const booksData = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    price: 19,
    features: ["Hardcover", "Classic", "Collector Edition"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "Science",
    price: 29,
    features: ["Hardcover", "Illustrated", "Bestseller"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1750360905827-af6cb76a55bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 3,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    category: "History",
    price: 24,
    features: ["Paperback", "Modern", "Award Winner"],
    rating: 4,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1750360906456-b28d130fa7f8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 4,
    title: "The Art of War",
    author: "Sun Tzu",
    category: "Philosophy",
    price: 14,
    features: ["Pocket Edition", "Classic", "Strategic"],
    rating: 4,
    stock: false,
    image:
      "https://plus.unsplash.com/premium_photo-1750530064486-0ea710b9cfd4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
  {
    id: 5,
    title: "Educated: A Memoir",
    author: "Tara Westover",
    category: "Biography",
    price: 21,
    features: ["Hardcover", "New York Times Bestseller", "Inspirational"],
    rating: 5,
    stock: true,
    image:
      "https://plus.unsplash.com/premium_photo-1750360905805-5edd9a3ec8b1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  },
  // ✅ Generate more sample books dynamically
  ...Array.from({ length: 40 }, (_, index) => {
    const id = index + 6;
    const sampleAuthors = [
      "George Orwell",
      "J.K. Rowling",
      "Ernest Hemingway",
      "Jane Austen",
      "Mark Twain",
    ];
    const sampleCategories = [
      "Fiction",
      "Science",
      "History",
      "Philosophy",
      "Biography",
    ];
    const sampleFeatures = [
      "Hardcover",
      "Illustrated",
      "Pocket Edition",
      "Classic",
      "Bestseller",
    ];
    const sampleImages = [
      "https://plus.unsplash.com/premium_photo-1677187301660-5e557d9c0724?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1667251760208-5149aa5a2f48?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1715107534067-040e38ee7049?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
      "https://plus.unsplash.com/premium_photo-1750360904761-b93b9400426e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1664006988924-16f386bcd40e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1510172951991-856a654063f9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1529158062015-cad636e205a0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1681825268400-c561bd47d586?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1513185041617-8ab03f83d6c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1529590003495-b2646e2718bf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1667251760504-096946b820af?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1484415063229-3d6335668531?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1677187301660-5e557d9c0724?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1683141243517-5730698ff67f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1546521343-4eb2c01aa44b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1508169351866-777fc0047ac5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1506962240359-bd03fbba0e3d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1673615349100-77adde1c01cf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1721762724233-1332468b252f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1585521747230-516376e5a85d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1577627444534-b38e16c9d796?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1575709527142-a93ed587bb83?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1630343710506-89f8b9f21d31?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGJvb2t8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1512508561942-18fbe6d5d0cf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGJvb2t8ZW58MHx8MHx8fDA%3D",
    ];

    return {
      id,
      title: `Book Title ${id}`,
      author: sampleAuthors[id % sampleAuthors.length],
      category: sampleCategories[id % sampleCategories.length],
      price: Math.floor(Math.random() * 50) + 10,
      features: [
        sampleFeatures[id % sampleFeatures.length],
        sampleFeatures[(id + 1) % sampleFeatures.length],
      ],
      rating: Math.floor(Math.random() * 3) + 3,
      stock: id % 4 !== 0,
      image: sampleImages[id % sampleImages.length],
    };
  }),
];

const BooksFilters = () => {
  const [filters, setFilters] = useState({
    author: [],
    category: [],
    features: [],
    minPrice: 0,
    maxPrice: 100,
    rating: 0,
    stock: null,
    search: "",
    sort: "",
  });

  const [filteredBooks, setFilteredBooks] = useState(booksData);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  // ✅ Apply Filters
  useEffect(() => {
    let result = booksData;

    if (filters.search) {
      result = result.filter((b) =>
        b.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.author.length > 0) {
      result = result.filter((b) => filters.author.includes(b.author));
    }

    if (filters.category.length > 0) {
      result = result.filter((b) => filters.category.includes(b.category));
    }

    if (filters.features.length > 0) {
      result = result.filter((b) =>
        filters.features.every((f) => b.features.includes(f))
      );
    }

    result = result.filter(
      (b) => b.price >= filters.minPrice && b.price <= filters.maxPrice
    );

    if (filters.rating > 0) {
      result = result.filter((b) => b.rating >= filters.rating);
    }

    if (filters.stock !== null) {
      result = result.filter((b) => b.stock === filters.stock);
    }

    if (filters.sort === "low-high") {
      result = result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "high-low") {
      result = result.sort((a, b) => b.price - a.price);
    }

    setFilteredBooks([...result]);
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
      author: [],
      category: [],
      features: [],
      minPrice: 0,
      maxPrice: 100,
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
            placeholder="Search books..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full border border-gray-200 bg-white rounded-md px-3 py-2 mb-4 text-gray-900"
          />

          {/* Author */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Author</h3>
            {["F. Scott Fitzgerald", "Stephen Hawking", "Yuval Noah Harari"].map(
              (author) => (
                <label key={author} className="block mb-1 text-sm">
                  <input
                    type="checkbox"
                    checked={filters.author.includes(author)}
                    onChange={() => toggleFilter("author", author)}
                    className="mr-2"
                  />
                  {author}
                </label>
              )
            )}
          </div>

          {/* Category */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Category</h3>
            {["Fiction", "Science", "History", "Philosophy", "Biography"].map(
              (cat) => (
                <label key={cat} className="block mb-1 text-sm">
                  <input
                    type="checkbox"
                    checked={filters.category.includes(cat)}
                    onChange={() => toggleFilter("category", cat)}
                    className="mr-2"
                  />
                  {cat}
                </label>
              )
            )}
          </div>

          {/* Features */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-black">Features</h3>
            {["Hardcover", "Illustrated", "Pocket Edition", "Classic"].map(
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
              max="100"
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

        {/* ✅ Books Grid */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p>{filteredBooks.length} books found</p>
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

          {/* Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.slice(0, visibleCount).map((book) => (
              <div
                key={book.id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-600">{book.author}</p>
                <p className="text-lg font-bold text-black">
                  ${book.price}
                </p>
                <p className="text-sm">
                  {book.stock ? "In Stock" : "Out of Stock"}
                </p>
                <button className="mt-3 bg-black text-black px-5 py-2 rounded-full font-semibold hover:bg-black transition inline-flex items-center justify-center whitespace-nowrap text-sm sm:text-base">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Load More */}
          {visibleCount < filteredBooks.length && (
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

export default BooksFilters;
