"use client";

import React, { useState } from "react";

import ClothingHero from "@/components/Categories/Clothing/ClothingHero";
import ClothingFilters from "@/components/Categories/Clothing/ClothingFilters";
import ClothingProductGrid from "@/components/Categories/Clothing/ClothingProductGrid";
import ClothingCategoryInfo from "@/components/Categories/Clothing/ClothingCategoryInfo";
import ClothingFeaturedDeals from "@/components/Categories/Clothing/ClothingFeaturedDeals";
import ClothingSpecsComparison from "@/components/Categories/Clothing/ClothingSpecsComparison";
import ClothingReviewsPreview from "@/components/Categories/Clothing/ClothingReviewsPreview";
import ClothingBrandsCarousel from "@/components/Categories/Clothing/ClothingBrandsCarousel";
import ClothingAccessoriesSection from "@/components/Categories/Clothing/ClothingAccessoriesSection";
import ClothingFaq from "@/components/Categories/Clothing/ClothingFaq";
import ClothingNewsletterSignup from "@/components/Categories/Clothing/ClothingNewsletterSignup";
import ClothingPagination from "@/components/Categories/Clothing/ClothingPagination";
import ClothingCompareBar from "@/components/Categories/Clothing/ClothingCompareBar";
import ClothingQuickViewModal from "@/components/Categories/Clothing/ClothingQuickViewModal";

export default function ClothingPage() {
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: [10, 1000],
  });

  const [sortOption, setSortOption] = useState("popularity");

  const [clothingProducts, setClothingProducts] = useState([
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: 29,
      image: "/clothing/classic-white-tshirt.jpg",
      rating: 4.7,
      specs: { type: "T-Shirt", material: "Cotton", feature: "Regular Fit" },
      category: "Tops",
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      price: 69,
      image: "/clothing/slim-fit-jeans.jpg",
      rating: 4.8,
      specs: { type: "Jeans", material: "Denim", feature: "Stretchable" },
      category: "Bottoms",
    },
    {
      id: 3,
      name: "Summer Floral Dress",
      price: 89,
      image: "/clothing/summer-floral-dress.jpg",
      rating: 4.6,
      specs: { type: "Dress", material: "Polyester", feature: "Lightweight" },
      category: "Dresses",
    },
    {
      id: 4,
      name: "Leather Jacket",
      price: 249,
      image: "/clothing/leather-jacket.jpg",
      rating: 4.9,
      specs: { type: "Jacket", material: "Leather", feature: "Premium Finish" },
      category: "Outerwear",
    },
  ]);

  // ✅ Filter Logic
  const filteredClothing = clothingProducts.filter((item) => {
    const matchesCategory =
      filters.category === "All" || item.category === filters.category;
    const inPriceRange =
      item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // ✅ Sort Logic
  const sortedClothing = [...filteredClothing].sort((a, b) => {
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
      <ClothingHero />

      <ClothingFilters filters={filters} onFilterChange={setFilters} />

      <ClothingProductGrid products={sortedClothing} />

      <ClothingCategoryInfo />

      <ClothingFeaturedDeals />

      <ClothingSpecsComparison products={sortedClothing} />

      <ClothingReviewsPreview products={sortedClothing} />

      <ClothingBrandsCarousel />

      <ClothingAccessoriesSection />

      <ClothingFaq />

      <ClothingNewsletterSignup />

      <ClothingPagination totalItems={sortedClothing.length} itemsPerPage={10} />

      <ClothingCompareBar />

      <ClothingQuickViewModal />
    </main>
  );
}
