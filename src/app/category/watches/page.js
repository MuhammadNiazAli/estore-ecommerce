'use client';

import React, { useState } from 'react';

import WatchesHero from '@/components/Categories/Watches/WatchesHero';
import WatchesFilters from '@/components/Categories/Watches/WatchesFilters';
import WatchesProductGrid from '@/components/Categories/Watches/WatchesProductGrid';
import WatchesSortBar from '@/components/Categories/Watches/WatchesSortBar';
import WatchesCategoryInfo from '@/components/Categories/Watches/WatchesCategoryInfo';
import WatchesFeaturedDeals from '@/components/Categories/Watches/WatchesFeaturedDeals';
import WatchesSpecsComparison from '@/components/Categories/Watches/WatchesSpecsComparison';
import WatchesReviewsPreview from '@/components/Categories/Watches/WatchesReviewsPreview';
import WatchesBrandsCarousel from '@/components/Categories/Watches/WatchesBrandsCarousel';
import WatchesAccessoriesSection from '@/components/Categories/Watches/WatchesAccessoriesSection';
import WatchesFaq from '@/components/Categories/Watches/WatchesFaq';
import WatchesNewsletterSignup from '@/components/Categories/Watches/WatchesNewsletterSignup';
import WatchesPagination from '@/components/Categories/Watches/WatchesPagination';
import WatchesCompareBar from '@/components/Categories/Watches/WatchesCompareBar';
import WatchesQuickViewModal from '@/components/Categories/Watches/WatchesQuickViewModal';

export default function WatchesPage() {
  const [filters, setFilters] = useState({
    brand: 'All',
    priceRange: [0, 10000],
  });

  const [sortOption, setSortOption] = useState('popularity');

  const [watches, setWatches] = useState([
    {
      id: 1,
      name: 'Rolex Submariner',
      price: 8500,
      image: '/watches/rolex-submariner.jpg',
      rating: 4.9,
      specs: { material: 'Stainless Steel', movement: 'Automatic' },
      brand: 'Rolex',
    },
    {
      id: 2,
      name: 'Omega Seamaster',
      price: 5200,
      image: '/watches/omega-seamaster.jpg',
      rating: 4.7,
      specs: { material: 'Titanium', movement: 'Automatic' },
      brand: 'Omega',
    },
    {
      id: 3,
      name: 'TAG Heuer Carrera',
      price: 4000,
      image: '/watches/tag-heuer-carrera.jpg',
      rating: 4.5,
      specs: { material: 'Stainless Steel', movement: 'Automatic' },
      brand: 'TAG Heuer',
    },
  ]);

  // Filtering watches
  const filteredWatches = watches.filter((watch) => {
    const matchesBrand = filters.brand === 'All' || watch.brand === filters.brand;
    const inPriceRange =
      watch.price >= filters.priceRange[0] && watch.price <= filters.priceRange[1];
    return matchesBrand && inPriceRange;
  });

  // Sorting watches
  const sortedWatches = [...filteredWatches].sort((a, b) => {
    switch (sortOption) {
      case 'priceLowHigh':
        return a.price - b.price;
      case 'priceHighLow':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
      default:
        return 0;
    }
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 max-w-[1200px] mx-auto pt-20 px-4 space-y-12">
      <WatchesHero />

      <WatchesFilters filters={filters} onFilterChange={handleFilterChange} />

      <WatchesSortBar sortOption={sortOption} onSortChange={handleSortChange} />

      <WatchesProductGrid watches={sortedWatches} />

      <WatchesCategoryInfo />

      <WatchesFeaturedDeals />

      <WatchesSpecsComparison watches={sortedWatches} />

      <WatchesReviewsPreview watches={sortedWatches} />

      <WatchesBrandsCarousel />

      <WatchesAccessoriesSection />

      <WatchesFaq />

      <WatchesNewsletterSignup />

      <WatchesPagination totalItems={sortedWatches.length} itemsPerPage={10} />

      <WatchesCompareBar />

      <WatchesQuickViewModal />
    </main>
  );
}
