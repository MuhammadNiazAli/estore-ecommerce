"use client";

import React, { useState } from "react";

import MoviesHero from "@/components/Categories/Movies/MoviesHero";
import MoviesFilters from "@/components/Categories/Movies/MoviesFilters";
import MoviesProductGrid from "@/components/Categories/Movies/MoviesProductGrid";
import MoviesCategoryInfo from "@/components/Categories/Movies/MoviesCategoryInfo";
import MoviesFeaturedDeals from "@/components/Categories/Movies/MoviesFeaturedDeals";
import MoviesSpecsComparison from "@/components/Categories/Movies/MoviesSpecsComparison";
import MoviesReviewsPreview from "@/components/Categories/Movies/MoviesReviewsPreview";
import MoviesBrandsCarousel from "@/components/Categories/Movies/MoviesBrandsCarousel";
import MoviesAccessoriesSection from "@/components/Categories/Movies/MoviesAccessoriesSection";
import MoviesFaq from "@/components/Categories/Movies/MoviesFaq";
import MoviesNewsletterSignup from "@/components/Categories/Movies/MoviesNewsletterSignup";
import MoviesPagination from "@/components/Categories/Movies/MoviesPagination";
import MoviesCompareBar from "@/components/Categories/Movies/MoviesCompareBar";
import MoviesQuickViewModal from "@/components/Categories/Movies/MoviesQuickViewModal";

export default function MoviesPage() {
  const [filters, setFilters] = useState({
    category: "All",
    priceRange: [5, 100],
  });

  const [sortOption, setSortOption] = useState("popularity");

  const [moviesProducts, setMoviesProducts] = useState([
    {
      id: 1,
      name: "Classic Movie Collection DVD",
      price: 29,
      image: "/movies/classic-movie-dvd.jpg",
      rating: 4.8,
      specs: { type: "DVD", format: "Standard", feature: "Remastered" },
      category: "DVDs",
    },
    {
      id: 2,
      name: "4K Ultra HD Blu-ray Set",
      price: 59,
      image: "/movies/4k-ultra-hd-bluray.jpg",
      rating: 4.7,
      specs: { type: "Blu-ray", format: "4K Ultra HD", feature: "Dolby Atmos" },
      category: "Blu-rays",
    },
    {
      id: 3,
      name: "Streaming Subscription 1 Year",
      price: 99,
      image: "/movies/streaming-subscription.jpg",
      rating: 4.9,
      specs: { type: "Subscription", format: "Digital", feature: "Access to 1000+ movies" },
      category: "Subscriptions",
    },
    {
      id: 4,
      name: "Director’s Cut Special Edition",
      price: 49,
      image: "/movies/directors-cut-special.jpg",
      rating: 4.6,
      specs: { type: "DVD", format: "Special Edition", feature: "Bonus Content" },
      category: "DVDs",
    },
  ]);

  // Filter Logic
  const filteredMovies = moviesProducts.filter((item) => {
    const matchesCategory =
      filters.category === "All" || item.category === filters.category;
    const inPriceRange =
      item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // Sort Logic
  const sortedMovies = [...filteredMovies].sort((a, b) => {
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
      <MoviesHero />

      <MoviesFilters filters={filters} onFilterChange={setFilters} />

      <MoviesProductGrid products={sortedMovies} />

      <MoviesCategoryInfo />

      <MoviesFeaturedDeals />

      <MoviesSpecsComparison products={sortedMovies} />

      <MoviesReviewsPreview products={sortedMovies} />

      <MoviesBrandsCarousel />

      <MoviesAccessoriesSection />

      <MoviesFaq />

      <MoviesNewsletterSignup />

      <MoviesPagination totalItems={sortedMovies.length} itemsPerPage={10} />

      <MoviesCompareBar />

      <MoviesQuickViewModal />
    </main>
  );
}
