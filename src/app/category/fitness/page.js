'use client';

import React, { useState } from 'react';

import FitnessHero from '@/components/Categories/Fitness/FitnessHero';
import FitnessFilters from '@/components/Categories/Fitness/FitnessFilters';
import FitnessProductGrid from '@/components/Categories/Fitness/FitnessProductGrid';
import FitnessCategoryInfo from '@/components/Categories/Fitness/FitnessCategoryInfo';
import FitnessFeaturedDeals from '@/components/Categories/Fitness/FitnessFeaturedDeals';
import FitnessSpecsComparison from '@/components/Categories/Fitness/FitnessSpecsComparison';
import FitnessReviewsPreview from '@/components/Categories/Fitness/FitnessReviewsPreview';
import FitnessBrandsCarousel from '@/components/Categories/Fitness/FitnessBrandsCarousel';
import FitnessAccessoriesSection from '@/components/Categories/Fitness/FitnessAccessoriesSection';
import FitnessFaq from '@/components/Categories/Fitness/FitnessFaq';
import FitnessNewsletterSignup from '@/components/Categories/Fitness/FitnessNewsletterSignup';
import FitnessPagination from '@/components/Categories/Fitness/FitnessPagination';
import FitnessCompareBar from '@/components/Categories/Fitness/FitnessCompareBar';
import FitnessQuickViewModal from '@/components/Categories/Fitness/FitnessQuickViewModal';

export default function FitnessPage() {
  const [filters, setFilters] = useState({
    category: 'All',
    priceRange: [10, 3000],
  });

  const [sortOption, setSortOption] = useState('popularity');

  const [fitnessProducts, setFitnessProducts] = useState([
    {
      id: 1,
      name: 'Treadmill Pro X200',
      price: 1299,
      image: '/fitness/treadmill-pro-x200.jpg',
      rating: 4.8,
      specs: { type: 'Treadmill', weight: '150kg capacity', feature: 'LCD Screen' },
      category: 'Cardio',
    },
    {
      id: 2,
      name: 'Adjustable Dumbbell Set',
      price: 249,
      image: '/fitness/adjustable-dumbbell.jpg',
      rating: 4.7,
      specs: { type: 'Weights', weight: '5-50lbs', feature: 'Space-saving' },
      category: 'Strength',
    },
    {
      id: 3,
      name: 'Yoga Mat Premium',
      price: 49,
      image: '/fitness/yoga-mat.jpg',
      rating: 4.6,
      specs: { type: 'Yoga', material: 'Eco-friendly', feature: 'Non-slip' },
      category: 'Yoga',
    },
    {
      id: 4,
      name: 'Indoor Cycling Bike',
      price: 899,
      image: '/fitness/indoor-bike.jpg',
      rating: 4.9,
      specs: { type: 'Cardio', weight: '120kg capacity', feature: 'Bluetooth' },
      category: 'Cardio',
    },
  ]);

  // Filter Logic
  const filteredFitness = fitnessProducts.filter((item) => {
    const matchesCategory = filters.category === 'All' || item.category === filters.category;
    const inPriceRange =
      item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // Sort Logic
  const sortedFitness = [...filteredFitness].sort((a, b) => {
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
      <FitnessHero />

      <FitnessFilters filters={filters} onFilterChange={setFilters} />

      <FitnessProductGrid products={sortedFitness} />

      <FitnessCategoryInfo />

      <FitnessFeaturedDeals />

      <FitnessSpecsComparison products={sortedFitness} />

      <FitnessReviewsPreview products={sortedFitness} />

      <FitnessBrandsCarousel />

      <FitnessAccessoriesSection />

      <FitnessFaq />

      <FitnessNewsletterSignup />

      <FitnessPagination totalItems={sortedFitness.length} itemsPerPage={10} />

      <FitnessCompareBar />

      <FitnessQuickViewModal />
    </main>
  );
}
