'use client';

import React, { useState } from 'react';

import LaptopHero from '@/components/Categories/Laptops/LaptopHero';
import LaptopFilters from '@/components/Categories/Laptops/LaptopFilters';
import LaptopProductGrid from '@/components/Categories/Laptops/LaptopProductGrid';
import LaptopSortBar from '@/components/Categories/Laptops/LaptopSortBar';
import LaptopCategoryInfo from '@/components/Categories/Laptops/LaptopCategoryInfo';
import LaptopFeaturedDeals from '@/components/Categories/Laptops/LaptopFeaturedDeals';
import LaptopSpecsComparison from '@/components/Categories/Laptops/LaptopSpecsComparison';
import LaptopReviewsPreview from '@/components/Categories/Laptops/LaptopReviewsPreview';
import LaptopBrandsCarousel from '@/components/Categories/Laptops/LaptopBrandsCarousel';
import LaptopAccessoriesSection from '@/components/Categories/Laptops/LaptopAccessoriesSection';
import LaptopFaq from '@/components/Categories/Laptops/LaptopFaq';
import LaptopNewsletterSignup from '@/components/Categories/Laptops/LaptopNewsletterSignup';
import LaptopPagination from '@/components/Categories/Laptops/LaptopPagination';
import LaptopCompareBar from '@/components/Categories/Laptops/LaptopCompareBar';
import LaptopQuickViewModal from '@/components/Categories/Laptops/LaptopQuickViewModal';

export default function LaptopsPage() {
  const [filters, setFilters] = useState({
    brand: 'All',
    priceRange: [0, 3000],
  });

  const [sortOption, setSortOption] = useState('popularity'); // example sorting state

  const [laptops, setLaptops] = useState([
    {
      id: 1,
      name: 'MacBook Pro 16-inch',
      price: 2499,
      image: '/laptops/macbookpro16.jpg',
      rating: 4.9,
      specs: { ram: '16GB', storage: '1TB SSD', cpu: 'M1 Pro' },
      brand: 'Apple',
    },
    {
      id: 2,
      name: 'Dell XPS 13',
      price: 1399,
      image: '/laptops/dellxps13.jpg',
      rating: 4.6,
      specs: { ram: '16GB', storage: '512GB SSD', cpu: 'Intel i7' },
      brand: 'Dell',
    },
    {
      id: 3,
      name: 'HP Spectre x360',
      price: 1599,
      image: '/laptops/hpspectre.jpg',
      rating: 4.5,
      specs: { ram: '16GB', storage: '1TB SSD', cpu: 'Intel i7' },
      brand: 'HP',
    },
  ]);

  // Filter laptops based on filters state
  const filteredLaptops = laptops.filter((laptop) => {
    const inBrand = filters.brand === 'All' || laptop.brand === filters.brand;
    const inPriceRange =
      laptop.price >= filters.priceRange[0] && laptop.price <= filters.priceRange[1];
    return inBrand && inPriceRange;
  });

  // Sort laptops based on sortOption
  const sortedLaptops = filteredLaptops.sort((a, b) => {
    switch (sortOption) {
      case 'priceLowHigh':
        return a.price - b.price;
      case 'priceHighLow':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'popularity':
      default:
        return 0; // assuming original order is by popularity
    }
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 max-w-[1200px] mx-auto pt-20 px-4 space-y-12">
      <LaptopHero />

      <LaptopFilters filters={filters} onFilterChange={handleFilterChange} />

      <LaptopSortBar sortOption={sortOption} onSortChange={handleSortChange} />

      <LaptopProductGrid laptops={sortedLaptops} />

      <LaptopCategoryInfo />

      <LaptopFeaturedDeals />

      <LaptopSpecsComparison laptops={sortedLaptops} />

      <LaptopReviewsPreview laptops={sortedLaptops} />

      <LaptopBrandsCarousel />

      <LaptopAccessoriesSection />

      <LaptopFaq />

      <LaptopNewsletterSignup />

      <LaptopPagination totalItems={sortedLaptops.length} itemsPerPage={10} />

      <LaptopCompareBar />

      <LaptopQuickViewModal />
    </main>
  );
}
