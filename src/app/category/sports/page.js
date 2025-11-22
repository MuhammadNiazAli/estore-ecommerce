'use client';

import React, { useState } from 'react';

import SportsHero from '@/components/Categories/Sports/SportsHero';
import SportsFilters from '@/components/Categories/Sports/SportsFilters';
import SportsProductGrid from '@/components/Categories/Sports/SportsProductGrid';
import SportsCategoryInfo from '@/components/Categories/Sports/SportsCategoryInfo';
import SportsFeaturedDeals from '@/components/Categories/Sports/SportsFeaturedDeals';
import SportsSpecsComparison from '@/components/Categories/Sports/SportsSpecsComparison';
import SportsReviewsPreview from '@/components/Categories/Sports/SportsReviewsPreview';
import SportsBrandsCarousel from '@/components/Categories/Sports/SportsBrandsCarousel';
import SportsAccessoriesSection from '@/components/Categories/Sports/SportsAccessoriesSection';
import SportsFaq from '@/components/Categories/Sports/SportsFaq';
import SportsNewsletterSignup from '@/components/Categories/Sports/SportsNewsletterSignup';
import SportsPagination from '@/components/Categories/Sports/SportsPagination';
import SportsCompareBar from '@/components/Categories/Sports/SportsCompareBar';
import SportsQuickViewModal from '@/components/Categories/Sports/SportsQuickViewModal';

export default function SportsPage() {
  const [filters, setFilters] = useState({
    brand: 'All',
    priceRange: [0, 2000],
  });

  const [sortOption, setSortOption] = useState('popularity');

  const [sportsProducts, setSportsProducts] = useState([
    {
      id: 1,
      name: 'Nike Air Zoom Pegasus',
      price: 120,
      image: '/sports/nike-pegasus.jpg',
      rating: 4.8,
      specs: { type: 'Running Shoes', size: 'Multiple' },
      brand: 'Nike',
    },
    {
      id: 2,
      name: 'Adidas Predator Soccer Ball',
      price: 40,
      image: '/sports/adidas-ball.jpg',
      rating: 4.6,
      specs: { type: 'Football', material: 'PU' },
      brand: 'Adidas',
    },
    {
      id: 3,
      name: 'Wilson Pro Staff Tennis Racket',
      price: 250,
      image: '/sports/wilson-racket.jpg',
      rating: 4.7,
      specs: { weight: '315g', balance: '32cm' },
      brand: 'Wilson',
    },
  ]);

  // Filter products
  const filteredProducts = sportsProducts.filter((product) => {
    const matchesBrand = filters.brand === 'All' || product.brand === filters.brand;
    const inPriceRange =
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    return matchesBrand && inPriceRange;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
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
      <SportsHero />

      <SportsFilters filters={filters} onFilterChange={handleFilterChange} />

      <SportsProductGrid products={sortedProducts} />

      <SportsCategoryInfo />

      <SportsFeaturedDeals />

      <SportsSpecsComparison products={sortedProducts} />

      <SportsReviewsPreview products={sortedProducts} />

      <SportsBrandsCarousel />

      <SportsAccessoriesSection />

      <SportsFaq />

      <SportsNewsletterSignup />

      <SportsPagination totalItems={sortedProducts.length} itemsPerPage={10} />

      <SportsCompareBar />

      <SportsQuickViewModal />
    </main>
  );
}
