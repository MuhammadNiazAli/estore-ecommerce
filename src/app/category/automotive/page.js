"use client";

import React, { useState } from "react";

import AutomotiveHero from "@/components/Categories/Automotive/AutomotiveHero";
import AutomotiveFilters from "@/components/Categories/Automotive/AutomotiveFilters";
import AutomotiveProductGrid from "@/components/Categories/Automotive/AutomotiveProductGrid";
import AutomotiveCategoryInfo from "@/components/Categories/Automotive/AutomotiveCategoryInfo";
import AutomotiveFeaturedDeals from "@/components/Categories/Automotive/AutomotiveFeaturedDeals";
import AutomotiveSpecsComparison from "@/components/Categories/Automotive/AutomotiveSpecsComparison";
import AutomotiveReviewsPreview from "@/components/Categories/Automotive/AutomotiveReviewsPreview";
import AutomotiveBrandsCarousel from "@/components/Categories/Automotive/AutomotiveBrandsCarousel";
import AutomotiveAccessoriesSection from "@/components/Categories/Automotive/AutomotiveAccessoriesSection";
import AutomotiveFaq from "@/components/Categories/Automotive/AutomotiveFaq";
import AutomotiveNewsletterSignup from "@/components/Categories/Automotive/AutomotiveNewsletterSignup";
import AutomotivePagination from "@/components/Categories/Automotive/AutomotivePagination";
import AutomotiveCompareBar from "@/components/Categories/Automotive/AutomotiveCompareBar";
import AutomotiveQuickViewModal from "@/components/Categories/Automotive/AutomotiveQuickViewModal";

export default function AutomotivePage() {
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: [50, 5000],
  });

  const [sortOption, setSortOption] = useState("popularity");

  const [automotiveProducts, setAutomotiveProducts] = useState([
    {
      id: 1,
      name: "Car Seat Covers Premium",
      price: 199,
      image: "/automotive/car-seat-covers.jpg",
      rating: 4.7,
      specs: { type: "Interior", material: "Leather", feature: "Waterproof" },
      category: "Interior",
    },
    {
      id: 2,
      name: "LED Headlight Bulbs",
      price: 89,
      image: "/automotive/led-headlight-bulbs.jpg",
      rating: 4.8,
      specs: { type: "Lighting", material: "LED", feature: "High Brightness" },
      category: "Lighting",
    },
    {
      id: 3,
      name: "All-Weather Car Mats",
      price: 59,
      image: "/automotive/all-weather-mats.jpg",
      rating: 4.6,
      specs: { type: "Interior", material: "Rubber", feature: "Non-slip" },
      category: "Interior",
    },
    {
      id: 4,
      name: "Performance Air Filter",
      price: 129,
      image: "/automotive/performance-air-filter.jpg",
      rating: 4.9,
      specs: { type: "Engine", material: "Cotton", feature: "Reusable" },
      category: "Engine",
    },
  ]);

  // ✅ Filter Logic
  const filteredAutomotive = automotiveProducts.filter((item) => {
    const matchesCategory =
      filters.category === "All" || item.category === filters.category;
    const inPriceRange =
      item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // ✅ Sort Logic
  const sortedAutomotive = [...filteredAutomotive].sort((a, b) => {
    switch (sortOption) {
      case "priceLowHigh":
        return a.price - b.price;
      case "priceHighLow":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <main className="min-h-screen bg-white text-gray-800 max-w-[1200px] mx-auto pt-20 px-4 space-y-12">
      <AutomotiveHero />

      <AutomotiveFilters filters={filters} onFilterChange={setFilters} />

      <AutomotiveProductGrid products={sortedAutomotive} />

      <AutomotiveCategoryInfo />

      <AutomotiveFeaturedDeals />

      <AutomotiveSpecsComparison products={sortedAutomotive} />

      <AutomotiveReviewsPreview products={sortedAutomotive} />

      <AutomotiveBrandsCarousel />

      <AutomotiveAccessoriesSection />

      <AutomotiveFaq />

      <AutomotiveNewsletterSignup />

      <AutomotivePagination totalItems={sortedAutomotive.length} itemsPerPage={10} />

      <AutomotiveCompareBar />

      <AutomotiveQuickViewModal />
    </main>
  );
}
