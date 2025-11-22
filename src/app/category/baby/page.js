"use client";

import React, { useState } from "react";

import BabyHero from "@/components/Categories/Baby/BabyHero";
import BabyFilters from "@/components/Categories/Baby/BabyFilters";
import BabyProductGrid from "@/components/Categories/Baby/BabyProductGrid";
import BabyCategoryInfo from "@/components/Categories/Baby/BabyCategoryInfo";
import BabyFeaturedDeals from "@/components/Categories/Baby/BabyFeaturedDeals";
import BabySpecsComparison from "@/components/Categories/Baby/BabySpecsComparison";
import BabyReviewsPreview from "@/components/Categories/Baby/BabyReviewsPreview";
import BabyBrandsCarousel from "@/components/Categories/Baby/BabyBrandsCarousel";
import BabyAccessoriesSection from "@/components/Categories/Baby/BabyAccessoriesSection";
import BabyFaq from "@/components/Categories/Baby/BabyFaq";
import BabyNewsletterSignup from "@/components/Categories/Baby/BabyNewsletterSignup";
import BabyPagination from "@/components/Categories/Baby/BabyPagination";
import BabyCompareBar from "@/components/Categories/Baby/BabyCompareBar";
import BabyQuickViewModal from "@/components/Categories/Baby/BabyQuickViewModal";

export default function BabyPage() {
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: [5, 1500],
  });

  const [sortOption, setSortOption] = useState("popularity");

  const [babyProducts, setBabyProducts] = useState([
    {
      id: 1,
      name: "Organic Cotton Baby Blanket",
      price: 49,
      image: "/baby/organic-cotton-blanket.jpg",
      rating: 4.9,
      specs: { type: "Blanket", material: "Organic Cotton", feature: "Hypoallergenic" },
      category: "Bedding",
    },
    {
      id: 2,
      name: "Baby Stroller Deluxe",
      price: 299,
      image: "/baby/baby-stroller-deluxe.jpg",
      rating: 4.8,
      specs: { type: "Stroller", feature: "Lightweight & Foldable" },
      category: "Strollers",
    },
    {
      id: 3,
      name: "Soft Silicone Teether",
      price: 15,
      image: "/baby/soft-silicone-teether.jpg",
      rating: 4.7,
      specs: { type: "Teether", material: "Silicone", feature: "BPA Free" },
      category: "Toys",
    },
    {
      id: 4,
      name: "Baby Feeding Bottle Set",
      price: 39,
      image: "/baby/baby-feeding-bottle-set.jpg",
      rating: 4.6,
      specs: { type: "Feeding", material: "Plastic", feature: "Anti-Colic" },
      category: "Feeding",
    },
  ]);

  // Filter Logic
  const filteredBaby = babyProducts.filter((item) => {
    const matchesCategory =
      filters.category === "All" || item.category === filters.category;
    const inPriceRange =
      item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // Sort Logic
  const sortedBaby = [...filteredBaby].sort((a, b) => {
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
      <BabyHero />

      <BabyFilters filters={filters} onFilterChange={setFilters} />

      <BabyProductGrid products={sortedBaby} />

      <BabyCategoryInfo />

      <BabyFeaturedDeals />

      <BabySpecsComparison products={sortedBaby} />

      <BabyReviewsPreview products={sortedBaby} />

      <BabyBrandsCarousel />

      <BabyAccessoriesSection />

      <BabyFaq />

      <BabyNewsletterSignup />

      <BabyPagination totalItems={sortedBaby.length} itemsPerPage={10} />

      <BabyCompareBar />

      <BabyQuickViewModal />
    </main>
  );
}
