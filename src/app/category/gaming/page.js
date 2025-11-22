'use client';

import React, { useState } from 'react';

import GamingHero from '@/components/Categories/Gaming/GamingHero';
import GamingFilters from '@/components/Categories/Gaming/GamingFilters';
import GamingProductGrid from '@/components/Categories/Gaming/GamingProductGrid';
import GamingCategoryInfo from '@/components/Categories/Gaming/GamingCategoryInfo';
import GamingFeaturedDeals from '@/components/Categories/Gaming/GamingFeaturedDeals';
import GamingSpecsComparison from '@/components/Categories/Gaming/GamingSpecsComparison';
import GamingReviewsPreview from '@/components/Categories/Gaming/GamingReviewsPreview';
import GamingBrandsCarousel from '@/components/Categories/Gaming/GamingBrandsCarousel';
import GamingAccessoriesSection from '@/components/Categories/Gaming/GamingAccessoriesSection';
import GamingFaq from '@/components/Categories/Gaming/GamingFaq';
import GamingNewsletterSignup from '@/components/Categories/Gaming/GamingNewsletterSignup';
import GamingPagination from '@/components/Categories/Gaming/GamingPagination';
import GamingCompareBar from '@/components/Categories/Gaming/GamingCompareBar';
import GamingQuickViewModal from '@/components/Categories/Gaming/GamingQuickViewModal';

export default function GamingPage() {
  const [filters, setFilters] = useState({
    category: 'All',
    priceRange: [20, 5000],
  });

  const [sortOption, setSortOption] = useState('popularity');

  const [gamingProducts, setGamingProducts] = useState([
    {
      id: 1,
      name: 'PlayStation 5 Console',
      price: 499,
      image: '/gaming/ps5-console.jpg',
      rating: 4.9,
      specs: { type: 'Console', storage: '825GB SSD', brand: 'Sony' },
      category: 'Consoles',
    },
    {
      id: 2,
      name: 'Xbox Series X',
      price: 499,
      image: '/gaming/xbox-series-x.jpg',
      rating: 4.8,
      specs: { type: 'Console', storage: '1TB SSD', brand: 'Microsoft' },
      category: 'Consoles',
    },
    {
      id: 3,
      name: 'Gaming Mouse RGB',
      price: 79,
      image: '/gaming/gaming-mouse.jpg',
      rating: 4.6,
      specs: { type: 'Accessory', feature: 'RGB Lighting', brand: 'Razer' },
      category: 'Accessories',
    },
    {
      id: 4,
      name: 'Gaming Headset 7.1',
      price: 129,
      image: '/gaming/gaming-headset.jpg',
      rating: 4.7,
      specs: { type: 'Accessory', feature: 'Surround Sound', brand: 'SteelSeries' },
      category: 'Accessories',
    },
  ]);

  // Filter Logic
  const filteredGaming = gamingProducts.filter((item) => {
    const matchesCategory = filters.category === 'All' || item.category === filters.category;
    const inPriceRange =
      item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // Sort Logic
  const sortedGaming = [...filteredGaming].sort((a, b) => {
    switch (sortOption) {
      case 'priceLowHigh':
        return a.price - b.price;
      case 'priceHighLow':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 max-w-[1200px] mx-auto pt-20 px-4 space-y-12">
      <GamingHero />

      <GamingFilters filters={filters} onFilterChange={setFilters} />

      <GamingProductGrid products={sortedGaming} />

      <GamingCategoryInfo />

      <GamingFeaturedDeals />

      <GamingSpecsComparison products={sortedGaming} />

      <GamingReviewsPreview products={sortedGaming} />

      <GamingBrandsCarousel />

      <GamingAccessoriesSection />

      <GamingFaq />

      <GamingNewsletterSignup />

      <GamingPagination totalItems={sortedGaming.length} itemsPerPage={10} />

      <GamingCompareBar />

      <GamingQuickViewModal />
    </main>
  );
}
