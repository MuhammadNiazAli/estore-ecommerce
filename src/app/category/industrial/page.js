"use client";

import React, { useState } from "react";

import IndustrialHero from "@/components/Categories/Industrial/IndustrialHero";
import IndustrialFilters from "@/components/Categories/Industrial/IndustrialFilters";
import IndustrialProductGrid from "@/components/Categories/Industrial/IndustrialProductGrid";
import IndustrialCategoryInfo from "@/components/Categories/Industrial/IndustrialCategoryInfo";
import IndustrialFeaturedDeals from "@/components/Categories/Industrial/IndustrialFeaturedDeals";
import IndustrialSpecsComparison from "@/components/Categories/Industrial/IndustrialSpecsComparison";
import IndustrialReviewsPreview from "@/components/Categories/Industrial/IndustrialReviewsPreview";
import IndustrialBrandsCarousel from "@/components/Categories/Industrial/IndustrialBrandsCarousel";
import IndustrialAccessoriesSection from "@/components/Categories/Industrial/IndustrialAccessoriesSection";
import IndustrialFaq from "@/components/Categories/Industrial/IndustrialFaq";
import IndustrialNewsletterSignup from "@/components/Categories/Industrial/IndustrialNewsletterSignup";
import IndustrialPagination from "@/components/Categories/Industrial/IndustrialPagination";
import IndustrialCompareBar from "@/components/Categories/Industrial/IndustrialCompareBar";
import IndustrialQuickViewModal from "@/components/Categories/Industrial/IndustrialQuickViewModal";

export default function IndustrialPage() {
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: [50, 10000],
  });

  const [sortOption, setSortOption] = useState("popularity");

  const [industrialProducts, setIndustrialProducts] = useState([
    {
      id: 1,
      name: "Heavy Duty Welding Machine",
      price: 2500,
      image: "/industrial/welding-machine.jpg",
      rating: 4.7,
      specs: { type: "Welding", power: "220V", feature: "Portable" },
      category: "Machinery",
    },
    {
      id: 2,
      name: "Industrial Safety Helmet",
      price: 150,
      image: "/industrial/safety-helmet.jpg",
      rating: 4.8,
      specs: { type: "Safety", material: "Polycarbonate", feature: "Shock Resistant" },
      category: "Safety Equipment",
    },
    {
      id: 3,
      name: "Hydraulic Press 20 Ton",
      price: 7200,
      image: "/industrial/hydraulic-press.jpg",
      rating: 4.9,
      specs: { type: "Machinery", capacity: "20 Ton", feature: "High Precision" },
      category: "Machinery",
    },
    {
      id: 4,
      name: "Industrial Work Gloves",
      price: 35,
      image: "/industrial/work-gloves.jpg",
      rating: 4.6,
      specs: { type: "Safety", material: "Leather", feature: "Heat Resistant" },
      category: "Safety Equipment",
    },
  ]);

  // Filter Logic
  const filteredIndustrial = industrialProducts.filter((item) => {
    const matchesCategory =
      filters.category === "All" || item.category === filters.category;
    const inPriceRange =
      item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // Sort Logic
  const sortedIndustrial = [...filteredIndustrial].sort((a, b) => {
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
      <IndustrialHero />

      <IndustrialFilters filters={filters} onFilterChange={setFilters} />

      <IndustrialProductGrid products={sortedIndustrial} />

      <IndustrialCategoryInfo />

      <IndustrialFeaturedDeals />

      <IndustrialSpecsComparison products={sortedIndustrial} />

      <IndustrialReviewsPreview products={sortedIndustrial} />

      <IndustrialBrandsCarousel />

      <IndustrialAccessoriesSection />

      <IndustrialFaq />

      <IndustrialNewsletterSignup />

      <IndustrialPagination totalItems={sortedIndustrial.length} itemsPerPage={10} />

      <IndustrialCompareBar />

      <IndustrialQuickViewModal />
    </main>
  );
}
