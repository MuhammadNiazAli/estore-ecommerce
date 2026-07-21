"use client";

import React, { useState } from "react";

import SoftwareHero from "@/components/Categories/Software/SoftwareHero";
import SoftwareFilters from "@/components/Categories/Software/SoftwareFilters";
import SoftwareProductGrid from "@/components/Categories/Software/SoftwareProductGrid";
import SoftwareCategoryInfo from "@/components/Categories/Software/SoftwareCategoryInfo";
import SoftwareFeaturedDeals from "@/components/Categories/Software/SoftwareFeaturedDeals";
import SoftwareSpecsComparison from "@/components/Categories/Software/SoftwareSpecsComparison";
import SoftwareReviewsPreview from "@/components/Categories/Software/SoftwareReviewsPreview";
import SoftwareBrandsCarousel from "@/components/Categories/Software/SoftwareBrandsCarousel";
import SoftwareAccessoriesSection from "@/components/Categories/Software/SoftwareAccessoriesSection";
import SoftwareFaq from "@/components/Categories/Software/SoftwareFaq";
import SoftwareNewsletterSignup from "@/components/Categories/Software/SoftwareNewsletterSignup";
import SoftwarePagination from "@/components/Categories/Software/SoftwarePagination";
import SoftwareCompareBar from "@/components/Categories/Software/SoftwareCompareBar";
import SoftwareQuickViewModal from "@/components/Categories/Software/SoftwareQuickViewModal";

export default function SoftwarePage() {
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: [0, 1000],
  });

  const [sortOption, setSortOption] = useState("popularity");

  const [softwareProducts, setSoftwareProducts] = useState([
    {
      id: 1,
      name: "Antivirus Pro 2025",
      price: 49,
      image: "/software/antivirus-pro-2025.jpg",
      rating: 4.8,
      specs: { type: "Security", license: "1 Year", feature: "Real-time Protection" },
      category: "Security",
    },
    {
      id: 2,
      name: "Photo Editor X",
      price: 79,
      image: "/software/photo-editor-x.jpg",
      rating: 4.7,
      specs: { type: "Productivity", license: "Lifetime", feature: "AI Enhancements" },
      category: "Productivity",
    },
    {
      id: 3,
      name: "Project Management Suite",
      price: 129,
      image: "/software/project-management-suite.jpg",
      rating: 4.9,
      specs: { type: "Business", license: "Monthly", feature: "Collaboration Tools" },
      category: "Business",
    },
    {
      id: 4,
      name: "VPN Secure Connect",
      price: 59,
      image: "/software/vpn-secure-connect.jpg",
      rating: 4.6,
      specs: { type: "Security", license: "1 Year", feature: "Unlimited Bandwidth" },
      category: "Security",
    },
  ]);

  // Filter Logic
  const filteredSoftware = softwareProducts.filter((item) => {
    const matchesCategory =
      filters.category === "All" || item.category === filters.category;
    const inPriceRange =
      item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // Sort Logic
  const sortedSoftware = [...filteredSoftware].sort((a, b) => {
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
      <SoftwareHero />

      <SoftwareFilters filters={filters} onFilterChange={setFilters} />

      <SoftwareProductGrid products={sortedSoftware} />

      <SoftwareCategoryInfo />

      <SoftwareFeaturedDeals />

      <SoftwareSpecsComparison products={sortedSoftware} />

      <SoftwareReviewsPreview products={sortedSoftware} />

      <SoftwareBrandsCarousel />

      <SoftwareAccessoriesSection />

      <SoftwareFaq />

      <SoftwareNewsletterSignup />

      <SoftwarePagination totalItems={sortedSoftware.length} itemsPerPage={10} />

      <SoftwareCompareBar />

      <SoftwareQuickViewModal />
    </main>
  );
}
