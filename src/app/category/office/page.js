'use client';

import React, { useState } from 'react';

import OfficeHero from '@/components/Categories/Office/OfficeHero';
import OfficeFilters from '@/components/Categories/Office/OfficeFilters';
import OfficeProductGrid from '@/components/Categories/Office/OfficeProductGrid';
import OfficeCategoryInfo from '@/components/Categories/Office/OfficeCategoryInfo';
import OfficeFeaturedDeals from '@/components/Categories/Office/OfficeFeaturedDeals';
import OfficeSpecsComparison from '@/components/Categories/Office/OfficeSpecsComparison';
import OfficeReviewsPreview from '@/components/Categories/Office/OfficeReviewsPreview';
import OfficeBrandsCarousel from '@/components/Categories/Office/OfficeBrandsCarousel';
import OfficeAccessoriesSection from '@/components/Categories/Office/OfficeAccessoriesSection';
import OfficeFaq from '@/components/Categories/Office/OfficeFaq';
import OfficeNewsletterSignup from '@/components/Categories/Office/OfficeNewsletterSignup';
import OfficePagination from '@/components/Categories/Office/OfficePagination';
import OfficeCompareBar from '@/components/Categories/Office/OfficeCompareBar';
import OfficeQuickViewModal from '@/components/Categories/Office/OfficeQuickViewModal';

export default function OfficePage() {
  const [filters, setFilters] = useState({
    category: 'All',
    priceRange: [20, 5000],
  });

  const [sortOption, setSortOption] = useState('popularity');

  const [officeProducts, setOfficeProducts] = useState([
    {
      id: 1,
      name: 'Ergonomic Office Chair',
      price: 299,
      image: '/office/ergonomic-chair.jpg',
      rating: 4.8,
      specs: { type: 'Chair', feature: 'Adjustable', brand: 'ErgoComfort' },
      category: 'Furniture',
    },
    {
      id: 2,
      name: 'Standing Desk',
      price: 499,
      image: '/office/standing-desk.jpg',
      rating: 4.9,
      specs: { type: 'Desk', feature: 'Height Adjustable', brand: 'FlexiDesk' },
      category: 'Furniture',
    },
    {
      id: 3,
      name: 'Office Lamp',
      price: 89,
      image: '/office/office-lamp.jpg',
      rating: 4.6,
      specs: { type: 'Lighting', feature: 'LED', brand: 'BrightWork' },
      category: 'Lighting',
    },
    {
      id: 4,
      name: 'File Cabinet',
      price: 149,
      image: '/office/file-cabinet.jpg',
      rating: 4.7,
      specs: { type: 'Storage', feature: 'Lockable', brand: 'StoreMate' },
      category: 'Storage',
    },
  ]);

  // Filter Logic
  const filteredOffice = officeProducts.filter((item) => {
    const matchesCategory = filters.category === 'All' || item.category === filters.category;
    const inPriceRange =
      item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // Sort Logic
  const sortedOffice = [...filteredOffice].sort((a, b) => {
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
      <OfficeHero />

      <OfficeFilters filters={filters} onFilterChange={setFilters} />

      <OfficeProductGrid products={sortedOffice} />

      <OfficeCategoryInfo />

      <OfficeFeaturedDeals />

      <OfficeSpecsComparison products={sortedOffice} />

      <OfficeReviewsPreview products={sortedOffice} />

      <OfficeBrandsCarousel />

      <OfficeAccessoriesSection />

      <OfficeFaq />

      <OfficeNewsletterSignup />

      <OfficePagination totalItems={sortedOffice.length} itemsPerPage={10} />

      <OfficeCompareBar />

      <OfficeQuickViewModal />
    </main>
  );
}
