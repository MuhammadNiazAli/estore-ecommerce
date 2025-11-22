"use client";

import React, { useState } from "react";

import JewelryHero from "@/components/Categories/Jewelry/JewelryHero";
import JewelryFilters from "@/components/Categories/Jewelry/JewelryFilters";
import JewelryProductGrid from "@/components/Categories/Jewelry/JewelryProductGrid";
import JewelryCategoryInfo from "@/components/Categories/Jewelry/JewelryCategoryInfo";
import JewelryFeaturedDeals from "@/components/Categories/Jewelry/JewelryFeaturedDeals";
import JewelrySpecsComparison from "@/components/Categories/Jewelry/JewelrySpecsComparison";
import JewelryReviewsPreview from "@/components/Categories/Jewelry/JewelryReviewsPreview";
import JewelryBrandsCarousel from "@/components/Categories/Jewelry/JewelryBrandsCarousel";
import JewelryAccessoriesSection from "@/components/Categories/Jewelry/JewelryAccessoriesSection";
import JewelryFaq from "@/components/Categories/Jewelry/JewelryFaq";
import JewelryNewsletterSignup from "@/components/Categories/Jewelry/JewelryNewsletterSignup";
import JewelryPagination from "@/components/Categories/Jewelry/JewelryPagination";
import JewelryCompareBar from "@/components/Categories/Jewelry/JewelryCompareBar";
import JewelryQuickViewModal from "@/components/Categories/Jewelry/JewelryQuickViewModal";

export default function JewelryPage() {
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: [50, 5000],
  });

  const [sortOption, setSortOption] = useState("popularity");

  const [jewelryProducts, setJewelryProducts] = useState([
    {
      id: 1,
      name: "Diamond Stud Earrings",
      price: 1499,
      image: "/jewelry/diamond-stud-earrings.jpg",
      rating: 4.9,
      specs: { type: "Earrings", material: "Diamond", feature: "18k Gold" },
      category: "Earrings",
    },
    {
      id: 2,
      name: "Gold Chain Necklace",
      price: 899,
      image: "/jewelry/gold-chain-necklace.jpg",
      rating: 4.8,
      specs: { type: "Necklace", material: "Gold", feature: "Italian Design" },
      category: "Necklaces",
    },
    {
      id: 3,
      name: "Silver Charm Bracelet",
      price: 299,
      image: "/jewelry/silver-charm-bracelet.jpg",
      rating: 4.7,
      specs: { type: "Bracelet", material: "Sterling Silver", feature: "Adjustable" },
      category: "Bracelets",
    },
    {
      id: 4,
      name: "Engagement Ring",
      price: 2599,
      image: "/jewelry/engagement-ring.jpg",
      rating: 5.0,
      specs: { type: "Ring", material: "Diamond", feature: "Custom Cut" },
      category: "Rings",
    },
  ]);

  // ✅ Filter Logic
  const filteredJewelry = jewelryProducts.filter((item) => {
    const matchesCategory =
      filters.category === "All" || item.category === filters.category;
    const inPriceRange =
      item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // ✅ Sort Logic
  const sortedJewelry = [...filteredJewelry].sort((a, b) => {
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
      <JewelryHero />

      <JewelryFilters filters={filters} onFilterChange={setFilters} />

      <JewelryProductGrid products={sortedJewelry} />

      <JewelryCategoryInfo />

      <JewelryFeaturedDeals />

      <JewelrySpecsComparison products={sortedJewelry} />

      <JewelryReviewsPreview products={sortedJewelry} />

      <JewelryBrandsCarousel />

      <JewelryAccessoriesSection />

      <JewelryFaq />

      <JewelryNewsletterSignup />

      <JewelryPagination totalItems={sortedJewelry.length} itemsPerPage={10} />

      <JewelryCompareBar />

      <JewelryQuickViewModal />
    </main>
  );
}
