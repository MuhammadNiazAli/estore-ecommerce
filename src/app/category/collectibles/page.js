"use client";

import React, { useState } from "react";

import CollectiblesHero from "@/components/Categories/Collectibles/CollectiblesHero";
import CollectiblesFilters from "@/components/Categories/Collectibles/CollectiblesFilters";
import CollectiblesProductGrid from "@/components/Categories/Collectibles/CollectiblesProductGrid";
import CollectiblesCategoryInfo from "@/components/Categories/Collectibles/CollectiblesCategoryInfo";
import CollectiblesFeaturedDeals from "@/components/Categories/Collectibles/CollectiblesFeaturedDeals";
import CollectiblesSpecsComparison from "@/components/Categories/Collectibles/CollectiblesSpecsComparison";
import CollectiblesReviewsPreview from "@/components/Categories/Collectibles/CollectiblesReviewsPreview";
import CollectiblesBrandsCarousel from "@/components/Categories/Collectibles/CollectiblesBrandsCarousel";
import CollectiblesAccessoriesSection from "@/components/Categories/Collectibles/CollectiblesAccessoriesSection";
import CollectiblesFaq from "@/components/Categories/Collectibles/CollectiblesFaq";
import CollectiblesNewsletterSignup from "@/components/Categories/Collectibles/CollectiblesNewsletterSignup";
import CollectiblesPagination from "@/components/Categories/Collectibles/CollectiblesPagination";
import CollectiblesCompareBar from "@/components/Categories/Collectibles/CollectiblesCompareBar";
import CollectiblesQuickViewModal from "@/components/Categories/Collectibles/CollectiblesQuickViewModal";

export default function CollectiblesPage() {
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: [10, 10000],
  });

  const [sortOption, setSortOption] = useState("popularity");

  const [collectiblesProducts, setCollectiblesProducts] = useState([
    {
      id: 1,
      name: "Limited Edition Action Figure",
      price: 350,
      image: "/collectibles/action-figure.jpg",
      rating: 4.9,
      specs: { type: "Figure", material: "PVC", feature: "Limited Edition" },
      category: "Figures",
    },
    {
      id: 2,
      name: "Vintage Comic Book Set",
      price: 1200,
      image: "/collectibles/vintage-comic-books.jpg",
      rating: 4.8,
      specs: { type: "Comic Books", condition: "Mint", feature: "Collector's Item" },
      category: "Books",
    },
    {
      id: 3,
      name: "Autographed Sports Memorabilia",
      price: 4500,
      image: "/collectibles/autographed-sports.jpg",
      rating: 4.7,
      specs: { type: "Sports", certification: "Authenticated", feature: "Signed" },
      category: "Memorabilia",
    },
    {
      id: 4,
      name: "Rare Coin Collection",
      price: 3000,
      image: "/collectibles/rare-coins.jpg",
      rating: 4.6,
      specs: { type: "Coins", material: "Gold", feature: "Limited Mint" },
      category: "Coins",
    },
  ]);

  // Filter Logic
  const filteredCollectibles = collectiblesProducts.filter((item) => {
    const matchesCategory =
      filters.category === "All" || item.category === filters.category;
    const inPriceRange =
      item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // Sort Logic
  const sortedCollectibles = [...filteredCollectibles].sort((a, b) => {
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
      <CollectiblesHero />

      <CollectiblesFilters filters={filters} onFilterChange={setFilters} />

      <CollectiblesProductGrid products={sortedCollectibles} />

      <CollectiblesCategoryInfo />

      <CollectiblesFeaturedDeals />

      <CollectiblesSpecsComparison products={sortedCollectibles} />

      <CollectiblesReviewsPreview products={sortedCollectibles} />

      <CollectiblesBrandsCarousel />

      <CollectiblesAccessoriesSection />

      <CollectiblesFaq />

      <CollectiblesNewsletterSignup />

      <CollectiblesPagination totalItems={sortedCollectibles.length} itemsPerPage={10} />

      <CollectiblesCompareBar />

      <CollectiblesQuickViewModal />
    </main>
  );
}
