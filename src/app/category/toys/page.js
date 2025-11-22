'use client';

import React, { useState } from 'react';

import ToysHero from '@/components/Categories/Toys/ToysHero';
import ToysFilters from '@/components/Categories/Toys/ToysFilters';
import ToysProductGrid from '@/components/Categories/Toys/ToysProductGrid';
import ToysCategoryInfo from '@/components/Categories/Toys/ToysCategoryInfo';
import ToysFeaturedDeals from '@/components/Categories/Toys/ToysFeaturedDeals';
import ToysSpecsComparison from '@/components/Categories/Toys/ToysSpecsComparison';
import ToysReviewsPreview from '@/components/Categories/Toys/ToysReviewsPreview';
import ToysBrandsCarousel from '@/components/Categories/Toys/ToysBrandsCarousel';
import ToysAccessoriesSection from '@/components/Categories/Toys/ToysAccessoriesSection';
import ToysFaq from '@/components/Categories/Toys/ToysFaq';
import ToysNewsletterSignup from '@/components/Categories/Toys/ToysNewsletterSignup';
import ToysPagination from '@/components/Categories/Toys/ToysPagination';
import ToysCompareBar from '@/components/Categories/Toys/ToysCompareBar';
import ToysQuickViewModal from '@/components/Categories/Toys/ToysQuickViewModal';

export default function ToysPage() {
  const [filters, setFilters] = useState({
    category: 'All',
    priceRange: [0, 500],
  });

  const [sortOption, setSortOption] = useState('popularity');

  const [toys, setToys] = useState([
    {
      id: 1,
      name: 'Lego Classic Brick Set',
      price: 59,
      image: '/toys/lego-classic.jpg',
      rating: 4.9,
      specs: { material: 'Plastic', age: '4+' },
      category: 'Building Blocks',
    },
    {
      id: 2,
      name: 'Barbie Dreamhouse',
      price: 199,
      image: '/toys/barbie-dreamhouse.jpg',
      rating: 4.8,
      specs: { material: 'Plastic', age: '3+' },
      category: 'Dolls',
    },
    {
      id: 3,
      name: 'Hot Wheels Mega Garage',
      price: 89,
      image: '/toys/hotwheels-garage.jpg',
      rating: 4.6,
      specs: { material: 'Plastic', age: '5+' },
      category: 'Vehicles',
    },
    {
      id: 4,
      name: 'Nerf Elite Blaster',
      price: 49,
      image: '/toys/nerf-blaster.jpg',
      rating: 4.7,
      specs: { material: 'Plastic', age: '8+' },
      category: 'Action Toys',
    },
  ]);

  // Filtering toys
  const filteredToys = toys.filter((toy) => {
    const matchesCategory = filters.category === 'All' || toy.category === filters.category;
    const inPriceRange =
      toy.price >= filters.priceRange[0] && toy.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // Sorting toys
  const sortedToys = [...filteredToys].sort((a, b) => {
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
      <ToysHero />

      <ToysFilters filters={filters} onFilterChange={handleFilterChange} />

      <ToysProductGrid toys={sortedToys} />

      <ToysCategoryInfo />

      <ToysFeaturedDeals />

      <ToysSpecsComparison toys={sortedToys} />

      <ToysReviewsPreview toys={sortedToys} />

      <ToysBrandsCarousel />

      <ToysAccessoriesSection />

      <ToysFaq />

      <ToysNewsletterSignup />

      <ToysPagination totalItems={sortedToys.length} itemsPerPage={10} />

      <ToysCompareBar />

      <ToysQuickViewModal />
    </main>
  );
}
