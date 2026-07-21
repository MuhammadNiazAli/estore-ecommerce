"use client";

import React, { useState } from "react";

import ShoesHero from "@/components/Categories/Shoes/ShoesHero";
import ShoesFilters from "@/components/Categories/Shoes/ShoesFilters";
import ShoesProductGrid from "@/components/Categories/Shoes/ShoesProductGrid";
import ShoesCategoryInfo from "@/components/Categories/Shoes/ShoesCategoryInfo";
import ShoesFeaturedDeals from "@/components/Categories/Shoes/ShoesFeaturedDeals";
import ShoesSpecsComparison from "@/components/Categories/Shoes/ShoesSpecsComparison";
import ShoesReviewsPreview from "@/components/Categories/Shoes/ShoesReviewsPreview";
import ShoesBrandsCarousel from "@/components/Categories/Shoes/ShoesBrandsCarousel";
import ShoesAccessoriesSection from "@/components/Categories/Shoes/ShoesAccessoriesSection";
import ShoesFaq from "@/components/Categories/Shoes/ShoesFaq";
import ShoesNewsletterSignup from "@/components/Categories/Shoes/ShoesNewsletterSignup";
import ShoesPagination from "@/components/Categories/Shoes/ShoesPagination";
import ShoesCompareBar from "@/components/Categories/Shoes/ShoesCompareBar";
import ShoesQuickViewModal from "@/components/Categories/Shoes/ShoesQuickViewModal";

export default function ShoesPage() {
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: [20, 1000],
  });

  const [sortOption, setSortOption] = useState("popularity");

  const [shoesProducts, setShoesProducts] = useState([
    {
      id: 1,
      name: "Running Sneakers",
      price: 120,
      image: "/shoes/running-sneakers.jpg",
      rating: 4.8,
      specs: { type: "Running", material: "Mesh", feature: "Breathable" },
      category: "Sports",
    },
    {
      id: 2,
      name: "Leather Formal Shoes",
      price: 199,
      image: "/shoes/leather-formal.jpg",
      rating: 4.7,
      specs: { type: "Formal", material: "Leather", feature: "Classic Design" },
      category: "Formal",
    },
    {
      id: 3,
      name: "Casual Slip-Ons",
      price: 59,
      image: "/shoes/casual-slipon.jpg",
      rating: 4.5,
      specs: { type: "Casual", material: "Canvas", feature: "Easy Wear" },
      category: "Casual",
    },
    {
      id: 4,
      name: "Basketball High-Tops",
      price: 149,
      image: "/shoes/basketball-high-tops.jpg",
      rating: 4.9,
      specs: { type: "Basketball", material: "Synthetic", feature: "Ankle Support" },
      category: "Sports",
    },
  ]);

  // ✅ Filter Logic
  const filteredShoes = shoesProducts.filter((item) => {
    const matchesCategory =
      filters.category === "All" || item.category === filters.category;
    const inPriceRange =
      item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // ✅ Sort Logic
  const sortedShoes = [...filteredShoes].sort((a, b) => {
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
      <ShoesHero />

      <ShoesFilters filters={filters} onFilterChange={setFilters} />

      <ShoesProductGrid products={sortedShoes} />

      <ShoesCategoryInfo />

      <ShoesFeaturedDeals />

      <ShoesSpecsComparison products={sortedShoes} />

      <ShoesReviewsPreview products={sortedShoes} />

      <ShoesBrandsCarousel />

      <ShoesAccessoriesSection />

      <ShoesFaq />

      <ShoesNewsletterSignup />

      <ShoesPagination totalItems={sortedShoes.length} itemsPerPage={10} />

      <ShoesCompareBar />

      <ShoesQuickViewModal />
    </main>
  );
}
