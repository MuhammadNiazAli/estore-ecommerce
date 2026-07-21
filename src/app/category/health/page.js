"use client";

import React, { useState } from "react";

import HealthHero from "@/components/Categories/Health/HealthHero";
import HealthFilters from "@/components/Categories/Health/HealthFilters";
import HealthProductGrid from "@/components/Categories/Health/HealthProductGrid";
import HealthCategoryInfo from "@/components/Categories/Health/HealthCategoryInfo";
import HealthFeaturedDeals from "@/components/Categories/Health/HealthFeaturedDeals";
import HealthSpecsComparison from "@/components/Categories/Health/HealthSpecsComparison";
import HealthReviewsPreview from "@/components/Categories/Health/HealthReviewsPreview";
import HealthBrandsCarousel from "@/components/Categories/Health/HealthBrandsCarousel";
import HealthAccessoriesSection from "@/components/Categories/Health/HealthAccessoriesSection";
import HealthFaq from "@/components/Categories/Health/HealthFaq";
import HealthNewsletterSignup from "@/components/Categories/Health/HealthNewsletterSignup";
import HealthPagination from "@/components/Categories/Health/HealthPagination";
import HealthCompareBar from "@/components/Categories/Health/HealthCompareBar";
import HealthQuickViewModal from "@/components/Categories/Health/HealthQuickViewModal";

export default function HealthPage() {
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: [5, 1000],
  });

  const [sortOption, setSortOption] = useState("popularity");

  const [healthProducts, setHealthProducts] = useState([
    {
      id: 1,
      name: "Vitamin C Supplements",
      price: 29,
      image: "/health/vitamin-c-supplements.jpg",
      rating: 4.8,
      specs: { type: "Supplements", feature: "Immune Support" },
      category: "Supplements",
    },
    {
      id: 2,
      name: "Yoga Mat Premium",
      price: 59,
      image: "/health/yoga-mat-premium.jpg",
      rating: 4.7,
      specs: { type: "Fitness", feature: "Non-slip, Eco-friendly" },
      category: "Fitness",
    },
    {
      id: 3,
      name: "Digital Blood Pressure Monitor",
      price: 89,
      image: "/health/blood-pressure-monitor.jpg",
      rating: 4.9,
      specs: { type: "Medical Device", feature: "Automatic Measurement" },
      category: "Medical Devices",
    },
    {
      id: 4,
      name: "Essential Oils Set",
      price: 49,
      image: "/health/essential-oils-set.jpg",
      rating: 4.6,
      specs: { type: "Wellness", feature: "Aromatherapy" },
      category: "Wellness",
    },
  ]);

  // ✅ Filter Logic
  const filteredHealth = healthProducts.filter((item) => {
    const matchesCategory =
      filters.category === "All" || item.category === filters.category;
    const inPriceRange =
      item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // ✅ Sort Logic
  const sortedHealth = [...filteredHealth].sort((a, b) => {
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
      <HealthHero />

      <HealthFilters filters={filters} onFilterChange={setFilters} />

      <HealthProductGrid products={sortedHealth} />

      <HealthCategoryInfo />

      <HealthFeaturedDeals />

      <HealthSpecsComparison products={sortedHealth} />

      <HealthReviewsPreview products={sortedHealth} />

      <HealthBrandsCarousel />

      <HealthAccessoriesSection />

      <HealthFaq />

      <HealthNewsletterSignup />

      <HealthPagination totalItems={sortedHealth.length} itemsPerPage={10} />

      <HealthCompareBar />

      <HealthQuickViewModal />
    </main>
  );
}
