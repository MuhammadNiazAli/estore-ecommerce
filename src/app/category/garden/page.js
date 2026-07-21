"use client";

import React, { useState } from "react";

import GardenHero from "@/components/Categories/Garden/GardenHero";
import GardenFilters from "@/components/Categories/Garden/GardenFilters";
import GardenProductGrid from "@/components/Categories/Garden/GardenProductGrid";
import GardenCategoryInfo from "@/components/Categories/Garden/GardenCategoryInfo";
import GardenFeaturedDeals from "@/components/Categories/Garden/GardenFeaturedDeals";
import GardenSpecsComparison from "@/components/Categories/Garden/GardenSpecsComparison";
import GardenReviewsPreview from "@/components/Categories/Garden/GardenReviewsPreview";
import GardenBrandsCarousel from "@/components/Categories/Garden/GardenBrandsCarousel";
import GardenAccessoriesSection from "@/components/Categories/Garden/GardenAccessoriesSection";
import GardenFaq from "@/components/Categories/Garden/GardenFaq";
import GardenNewsletterSignup from "@/components/Categories/Garden/GardenNewsletterSignup";
import GardenPagination from "@/components/Categories/Garden/GardenPagination";
import GardenCompareBar from "@/components/Categories/Garden/GardenCompareBar";
import GardenQuickViewModal from "@/components/Categories/Garden/GardenQuickViewModal";

export default function GardenPage() {
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: [10, 2000],
  });

  const [sortOption, setSortOption] = useState("popularity");

  const [gardenProducts, setGardenProducts] = useState([
    {
      id: 1,
      name: "Garden Hose Reel",
      price: 79,
      image: "/garden/garden-hose-reel.jpg",
      rating: 4.8,
      specs: { type: "Hose", material: "Plastic", feature: "Wall-Mount" },
      category: "Watering",
    },
    {
      id: 2,
      name: "Patio Furniture Set",
      price: 599,
      image: "/garden/patio-furniture-set.jpg",
      rating: 4.9,
      specs: { type: "Furniture", material: "Rattan", feature: "Weatherproof" },
      category: "Furniture",
    },
    {
      id: 3,
      name: "Garden Tool Kit",
      price: 45,
      image: "/garden/garden-tool-kit.jpg",
      rating: 4.7,
      specs: { type: "Tools", material: "Steel", feature: "Ergonomic" },
      category: "Tools",
    },
    {
      id: 4,
      name: "Solar Garden Lights",
      price: 35,
      image: "/garden/solar-garden-lights.jpg",
      rating: 4.6,
      specs: { type: "Lighting", material: "ABS", feature: "Energy Saving" },
      category: "Lighting",
    },
  ]);

  // ✅ Filter Logic
  const filteredGarden = gardenProducts.filter((item) => {
    const matchesCategory =
      filters.category === "All" || item.category === filters.category;
    const inPriceRange =
      item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // ✅ Sort Logic
  const sortedGarden = [...filteredGarden].sort((a, b) => {
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
      <GardenHero />

      <GardenFilters filters={filters} onFilterChange={setFilters} />

      <GardenProductGrid products={sortedGarden} />

      <GardenCategoryInfo />

      <GardenFeaturedDeals />

      <GardenSpecsComparison products={sortedGarden} />

      <GardenReviewsPreview products={sortedGarden} />

      <GardenBrandsCarousel />

      <GardenAccessoriesSection />

      <GardenFaq />

      <GardenNewsletterSignup />

      <GardenPagination totalItems={sortedGarden.length} itemsPerPage={10} />

      <GardenCompareBar />

      <GardenQuickViewModal />
    </main>
  );
}
