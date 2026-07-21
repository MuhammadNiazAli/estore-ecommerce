"use client";

import React, { useState } from "react";

import ArtHero from "@/components/Categories/Art/ArtHero";
import ArtFilters from "@/components/Categories/Art/ArtFilters";
import ArtProductGrid from "@/components/Categories/Art/ArtProductGrid";
import ArtCategoryInfo from "@/components/Categories/Art/ArtCategoryInfo";
import ArtFeaturedDeals from "@/components/Categories/Art/ArtFeaturedDeals";
import ArtSpecsComparison from "@/components/Categories/Art/ArtSpecsComparison";
import ArtReviewsPreview from "@/components/Categories/Art/ArtReviewsPreview";
import ArtBrandsCarousel from "@/components/Categories/Art/ArtBrandsCarousel";
import ArtAccessoriesSection from "@/components/Categories/Art/ArtAccessoriesSection";
import ArtFaq from "@/components/Categories/Art/ArtFaq";
import ArtNewsletterSignup from "@/components/Categories/Art/ArtNewsletterSignup";
import ArtPagination from "@/components/Categories/Art/ArtPagination";
import ArtCompareBar from "@/components/Categories/Art/ArtCompareBar";
import ArtQuickViewModal from "@/components/Categories/Art/ArtQuickViewModal";

export default function ArtPage() {
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: [10, 5000],
  });

  const [sortOption, setSortOption] = useState("popularity");

  const [artProducts, setArtProducts] = useState([
    {
      id: 1,
      name: "Abstract Canvas Painting",
      price: 450,
      image: "/art/abstract-canvas-painting.jpg",
      rating: 4.8,
      specs: { type: "Canvas", size: "24x36 inches", feature: "Hand Painted" },
      category: "Paintings",
    },
    {
      id: 2,
      name: "Modern Sculpture Set",
      price: 1200,
      image: "/art/modern-sculpture-set.jpg",
      rating: 4.7,
      specs: { type: "Sculpture", material: "Bronze", feature: "Limited Edition" },
      category: "Sculptures",
    },
    {
      id: 3,
      name: "Decorative Wall Art",
      price: 300,
      image: "/art/decorative-wall-art.jpg",
      rating: 4.9,
      specs: { type: "Wall Art", material: "Metal", feature: "Rust Resistant" },
      category: "Wall Decor",
    },
    {
      id: 4,
      name: "Handmade Ceramic Vase",
      price: 150,
      image: "/art/handmade-ceramic-vase.jpg",
      rating: 4.6,
      specs: { type: "Ceramics", material: "Clay", feature: "Glazed Finish" },
      category: "Ceramics",
    },
  ]);

  // Filter Logic
  const filteredArt = artProducts.filter((item) => {
    const matchesCategory =
      filters.category === "All" || item.category === filters.category;
    const inPriceRange =
      item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // Sort Logic
  const sortedArt = [...filteredArt].sort((a, b) => {
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
      <ArtHero />

      <ArtFilters filters={filters} onFilterChange={setFilters} />

      <ArtProductGrid products={sortedArt} />

      <ArtCategoryInfo />

      <ArtFeaturedDeals />

      <ArtSpecsComparison products={sortedArt} />

      <ArtReviewsPreview products={sortedArt} />

      <ArtBrandsCarousel />

      <ArtAccessoriesSection />

      <ArtFaq />

      <ArtNewsletterSignup />

      <ArtPagination totalItems={sortedArt.length} itemsPerPage={10} />

      <ArtCompareBar />

      <ArtQuickViewModal />
    </main>
  );
}
