"use client";
import React, { useState } from "react";
import { AdjustmentsHorizontalIcon, Squares2X2Icon, Bars3Icon } from "@heroicons/react/24/solid";

const WatchesSortBar = ({ onSortChange, onSearchChange, onViewChange, onItemsPerPage }) => {
  const [sort, setSort] = useState("default");
  const [viewMode, setViewMode] = useState("grid");
  const [items, setItems] = useState(12);

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSort(value);
    onSortChange && onSortChange(value);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    onSearchChange && onSearchChange(value);
  };

  const handleViewChange = (mode) => {
    setViewMode(mode);
    onViewChange && onViewChange(mode);
  };

  const handleItemsPerPage = (e) => {
    const value = parseInt(e.target.value);
    setItems(value);
    onItemsPerPage && onItemsPerPage(value);
  };

  return (
    <div className="w-full bg-white text-amber-600 py-3 px-4 md:px-8 top-0 z-50 shadow-lg my-15">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 w-full md:w-auto">
          {/* Search Bar */}
          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="Search watches..."
              className="w-full rounded-lg bg-white text-gray-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600 placeholder-gray-400"
              onChange={handleSearch}
            />
          </div>

          {/* Sort Dropdown */}
          <div>
            <select
              value={sort}
              onChange={handleSortChange}
              className="rounded-lg bg-white text-amber-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
            >
              <option value="default">Sort By: Default</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
              <option value="rating">Rating: High to Low</option>
              <option value="name">Name: A-Z</option>
            </select>
          </div>

          {/* Items Per Page */}
          <div>
            <select
              value={items}
              onChange={handleItemsPerPage}
              className="rounded-lg bg-white text-amber-600 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
            >
              <option value={6}>6 per page</option>
              <option value={12}>12 per page</option>
              <option value={24}>24 per page</option>
              <option value={48}>48 per page</option>
            </select>
          </div>
        </div>

        {/* Right Section - View Switch */}
        <div className="flex items-center justify-between md:justify-end gap-3">
          <button
            onClick={() => handleViewChange("grid")}
            className={`p-2 rounded-lg border ${
              viewMode === "grid"
                ? "bg-amber-600 text-gray-900"
                : "bg-white text-amber-600"
            }`}
            title="Grid View"
          >
            <Squares2X2Icon className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleViewChange("list")}
            className={`p-2 rounded-lg border ${
              viewMode === "list"
                ? "bg-amber-600 text-gray-900"
                : "bg-white text-amber-600"
            }`}
            title="List View"
          >
            <Bars3Icon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchesSortBar;
