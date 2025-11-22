"use client";

import React, { useState } from "react";

import TravelHero from "@/components/Categories/Travel/TravelHero";
import TravelFilters from "@/components/Categories/Travel/TravelFilters";
import TravelProductGrid from "@/components/Categories/Travel/TravelProductGrid";
import TravelCategoryInfo from "@/components/Categories/Travel/TravelCategoryInfo";
import TravelFeaturedDeals from "@/components/Categories/Travel/TravelFeaturedDeals";
import TravelSpecsComparison from "@/components/Categories/Travel/TravelSpecsComparison";
import TravelReviewsPreview from "@/components/Categories/Travel/TravelReviewsPreview";
import TravelBrandsCarousel from "@/components/Categories/Travel/TravelBrandsCarousel";
import TravelAccessoriesSection from "@/components/Categories/Travel/TravelAccessoriesSection";
import TravelFaq from "@/components/Categories/Travel/TravelFaq";
import TravelNewsletterSignup from "@/components/Categories/Travel/TravelNewsletterSignup";
import TravelPagination from "@/components/Categories/Travel/TravelPagination";
import TravelCompareBar from "@/components/Categories/Travel/TravelCompareBar";
import TravelQuickViewModal from "@/components/Categories/Travel/TravelQuickViewModal";

export default function TravelPage() {
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: [50, 5000],
  });

  const [sortOption, setSortOption] = useState("popularity");

  const [travelProducts, setTravelProducts] = useState([
    {
      id: 1,
      name: "Lightweight Travel Backpack",
      price: 120,
      image: "/travel/lightweight-backpack.jpg",
      rating: 4.8,
      specs: { type: "Backpack", feature: "Water Resistant" },
      category: "Bags",
    },
    {
      id: 2,
      name: "Portable Travel Charger",
      price: 45,
      image: "/travel/portable-travel-charger.jpg",
      rating: 4.7,
      specs: { type: "Charger", feature: "Fast Charging" },
      category: "Accessories",
    },
    {
      id: 3,
      name: "Compact Travel Tent",
      price: 350,
      image: "/travel/compact-travel-tent.jpg",
      rating: 4.9,
      specs: { type: "Tent", feature: "Easy Setup" },
      category: "Outdoor",
    },
    {
      id: 4,
      name: "Noise Cancelling Travel Headphones",
      price: 299,
      image: "/travel/noise-cancelling-headphones.jpg",
      rating: 4.6,
      specs: { type: "Headphones", feature: "Noise Cancelling" },
      category: "Audio",
    },
  ]);

  // Filter Logic
  const filteredTravel = travelProducts.filter((item) => {
    const matchesCategory =
      filters.category === "All" || item.category === filters.category;
    const inPriceRange =
      item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // Sort Logic
  const sortedTravel = [...filteredTravel].sort((a, b) => {
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
    <main className="min-h-screen bg-gray-900 text-gray-50 max-w-[1200px] mx-auto pt-20 px-4 space-y-12">
      <TravelHero />

      <TravelFilters filters={filters} onFilterChange={setFilters} />

      <TravelProductGrid products={sortedTravel} />

      <TravelCategoryInfo />

      <TravelFeaturedDeals />

      <TravelSpecsComparison products={sortedTravel} />

      <TravelReviewsPreview products={sortedTravel} />

      <TravelBrandsCarousel />

      <TravelAccessoriesSection />

      <TravelFaq />

      <TravelNewsletterSignup />

      <TravelPagination totalItems={sortedTravel.length} itemsPerPage={10} />

      <TravelCompareBar />

      <TravelQuickViewModal />
    </main>
  );
}
