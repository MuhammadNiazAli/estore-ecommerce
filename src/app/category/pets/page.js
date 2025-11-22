"use client";

import React, { useState } from "react";

import PetsHero from "@/components/Categories/Pets/PetsHero";
import PetsFilters from "@/components/Categories/Pets/PetsFilters";
import PetsProductGrid from "@/components/Categories/Pets/PetsProductGrid";
import PetsCategoryInfo from "@/components/Categories/Pets/PetsCategoryInfo";
import PetsFeaturedDeals from "@/components/Categories/Pets/PetsFeaturedDeals";
import PetsSpecsComparison from "@/components/Categories/Pets/PetsSpecsComparison";
import PetsReviewsPreview from "@/components/Categories/Pets/PetsReviewsPreview";
import PetsBrandsCarousel from "@/components/Categories/Pets/PetsBrandsCarousel";
import PetsAccessoriesSection from "@/components/Categories/Pets/PetsAccessoriesSection";
import PetsFaq from "@/components/Categories/Pets/PetsFaq";
import PetsNewsletterSignup from "@/components/Categories/Pets/PetsNewsletterSignup";
import PetsPagination from "@/components/Categories/Pets/PetsPagination";
import PetsCompareBar from "@/components/Categories/Pets/PetsCompareBar";
import PetsQuickViewModal from "@/components/Categories/Pets/PetsQuickViewModal";

export default function PetsPage() {
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: [5, 1000],
  });

  const [sortOption, setSortOption] = useState("popularity");

  const [petsProducts, setPetsProducts] = useState([
    {
      id: 1,
      name: "Deluxe Dog Bed",
      price: 89,
      image: "/pets/deluxe-dog-bed.jpg",
      rating: 4.9,
      specs: { type: "Bed", material: "Memory Foam", feature: "Washable Cover" },
      category: "Beds",
    },
    {
      id: 2,
      name: "Cat Scratching Post",
      price: 45,
      image: "/pets/cat-scratching-post.jpg",
      rating: 4.8,
      specs: { type: "Toy", material: "Sisal Rope", feature: "Stable Base" },
      category: "Toys",
    },
    {
      id: 3,
      name: "Automatic Pet Feeder",
      price: 129,
      image: "/pets/automatic-pet-feeder.jpg",
      rating: 4.7,
      specs: { type: "Feeder", material: "Plastic", feature: "Timed Portions" },
      category: "Feeding",
    },
    {
      id: 4,
      name: "Pet Grooming Kit",
      price: 59,
      image: "/pets/pet-grooming-kit.jpg",
      rating: 4.6,
      specs: { type: "Grooming", material: "Steel", feature: "Complete Set" },
      category: "Grooming",
    },
  ]);

  // ✅ Filter Logic
  const filteredPets = petsProducts.filter((item) => {
    const matchesCategory =
      filters.category === "All" || item.category === filters.category;
    const inPriceRange =
      item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // ✅ Sort Logic
  const sortedPets = [...filteredPets].sort((a, b) => {
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
      <PetsHero />

      <PetsFilters filters={filters} onFilterChange={setFilters} />

      <PetsProductGrid products={sortedPets} />

      <PetsCategoryInfo />

      <PetsFeaturedDeals />

      <PetsSpecsComparison products={sortedPets} />

      <PetsReviewsPreview products={sortedPets} />

      <PetsBrandsCarousel />

      <PetsAccessoriesSection />

      <PetsFaq />

      <PetsNewsletterSignup />

      <PetsPagination totalItems={sortedPets.length} itemsPerPage={10} />

      <PetsCompareBar />

      <PetsQuickViewModal />
    </main>
  );
}
