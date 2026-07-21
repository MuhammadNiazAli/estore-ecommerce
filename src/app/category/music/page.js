"use client";

import React, { useState } from "react";

import MusicHero from "@/components/Categories/Music/MusicHero";
import MusicFilters from "@/components/Categories/Music/MusicFilters";
import MusicProductGrid from "@/components/Categories/Music/MusicProductGrid";
import MusicCategoryInfo from "@/components/Categories/Music/MusicCategoryInfo";
import MusicFeaturedDeals from "@/components/Categories/Music/MusicFeaturedDeals";
import MusicSpecsComparison from "@/components/Categories/Music/MusicSpecsComparison";
import MusicReviewsPreview from "@/components/Categories/Music/MusicReviewsPreview";
import MusicBrandsCarousel from "@/components/Categories/Music/MusicBrandsCarousel";
import MusicAccessoriesSection from "@/components/Categories/Music/MusicAccessoriesSection";
import MusicFaq from "@/components/Categories/Music/MusicFaq";
import MusicNewsletterSignup from "@/components/Categories/Music/MusicNewsletterSignup";
import MusicPagination from "@/components/Categories/Music/MusicPagination";
import MusicCompareBar from "@/components/Categories/Music/MusicCompareBar";
import MusicQuickViewModal from "@/components/Categories/Music/MusicQuickViewModal";

export default function MusicPage() {
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: [20, 5000],
  });

  const [sortOption, setSortOption] = useState("popularity");

  const [musicProducts, setMusicProducts] = useState([
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 199,
      image: "/music/wireless-bluetooth-headphones.jpg",
      rating: 4.8,
      specs: { type: "Headphones", feature: "Noise Cancelling" },
      category: "Audio",
    },
    {
      id: 2,
      name: "Electric Guitar Pro",
      price: 899,
      image: "/music/electric-guitar-pro.jpg",
      rating: 4.7,
      specs: { type: "Guitar", feature: "Maple Neck" },
      category: "Instruments",
    },
    {
      id: 3,
      name: "Digital Piano 88 Keys",
      price: 1200,
      image: "/music/digital-piano-88-keys.jpg",
      rating: 4.9,
      specs: { type: "Piano", feature: "Weighted Keys" },
      category: "Instruments",
    },
    {
      id: 4,
      name: "Portable Speaker System",
      price: 349,
      image: "/music/portable-speaker-system.jpg",
      rating: 4.6,
      specs: { type: "Speaker", feature: "Water Resistant" },
      category: "Audio",
    },
  ]);

  // Filter Logic
  const filteredMusic = musicProducts.filter((item) => {
    const matchesCategory =
      filters.category === "All" || item.category === filters.category;
    const inPriceRange =
      item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // Sort Logic
  const sortedMusic = [...filteredMusic].sort((a, b) => {
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
      <MusicHero />

      <MusicFilters filters={filters} onFilterChange={setFilters} />

      <MusicProductGrid products={sortedMusic} />

      <MusicCategoryInfo />

      <MusicFeaturedDeals />

      <MusicSpecsComparison products={sortedMusic} />

      <MusicReviewsPreview products={sortedMusic} />

      <MusicBrandsCarousel />

      <MusicAccessoriesSection />

      <MusicFaq />

      <MusicNewsletterSignup />

      <MusicPagination totalItems={sortedMusic.length} itemsPerPage={10} />

      <MusicCompareBar />

      <MusicQuickViewModal />
    </main>
  );
}
