'use client';

import React, { useState } from 'react';

import BeautyHero from '@/components/Categories/Beauty/BeautyHero';
import BeautyFilters from '@/components/Categories/Beauty/BeautyFilters';
import BeautyProductGrid from '@/components/Categories/Beauty/BeautyProductGrid';
import BeautyCategoryInfo from '@/components/Categories/Beauty/BeautyCategoryInfo';
import BeautyFeaturedDeals from '@/components/Categories/Beauty/BeautyFeaturedDeals';
import BeautySpecsComparison from '@/components/Categories/Beauty/BeautySpecsComparison';
import BeautyReviewsPreview from '@/components/Categories/Beauty/BeautyReviewsPreview';
import BeautyBrandsCarousel from '@/components/Categories/Beauty/BeautyBrandsCarousel';
import BeautyAccessoriesSection from '@/components/Categories/Beauty/BeautyAccessoriesSection';
import BeautyFaq from '@/components/Categories/Beauty/BeautyFaq';
import BeautyNewsletterSignup from '@/components/Categories/Beauty/BeautyNewsletterSignup';
import BeautyPagination from '@/components/Categories/Beauty/BeautyPagination';
import BeautyCompareBar from '@/components/Categories/Beauty/BeautyCompareBar';
import BeautyQuickViewModal from '@/components/Categories/Beauty/BeautyQuickViewModal';

export default function BeautyPage() {
  const [filters, setFilters] = useState({
    category: 'All',
    priceRange: [5, 1000],
  });

  const [sortOption, setSortOption] = useState('popularity');

  const [beautyProducts, setBeautyProducts] = useState([
    {
      id: 1,
      name: 'Hydrating Face Cream',
      price: 29,
      image: '/beauty/face-cream.jpg',
      rating: 4.8,
      specs: { type: 'Moisturizer', size: '50ml', brand: 'GlowSkin' },
      category: 'Skincare',
    },
    {
      id: 2,
      name: 'Matte Lipstick',
      price: 19,
      image: '/beauty/matte-lipstick.jpg',
      rating: 4.7,
      specs: { type: 'Lipstick', finish: 'Matte', brand: 'LuxeBeauty' },
      category: 'Makeup',
    },
    {
      id: 3,
      name: 'Hair Repair Serum',
      price: 35,
      image: '/beauty/hair-serum.jpg',
      rating: 4.6,
      specs: { type: 'Serum', size: '100ml', brand: 'SilkHair' },
      category: 'Haircare',
    },
    {
      id: 4,
      name: 'Anti-Aging Eye Cream',
      price: 45,
      image: '/beauty/eye-cream.jpg',
      rating: 4.9,
      specs: { type: 'Eye Cream', size: '30ml', brand: 'YouthfulGlow' },
      category: 'Skincare',
    },
  ]);

  // Filter Logic
  const filteredBeauty = beautyProducts.filter((item) => {
    const matchesCategory = filters.category === 'All' || item.category === filters.category;
    const inPriceRange =
      item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // Sort Logic
  const sortedBeauty = [...filteredBeauty].sort((a, b) => {
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
    <main className="min-h-screen bg-white text-gray-800 max-w-[1200px] mx-auto pt-20 px-4 space-y-12">
      <BeautyHero />

      <BeautyFilters filters={filters} onFilterChange={setFilters} />

      <BeautyProductGrid products={sortedBeauty} />

      <BeautyCategoryInfo />

      <BeautyFeaturedDeals />

      <BeautySpecsComparison products={sortedBeauty} />

      <BeautyReviewsPreview products={sortedBeauty} />

      <BeautyBrandsCarousel />

      <BeautyAccessoriesSection />

      <BeautyFaq />

      <BeautyNewsletterSignup />

      <BeautyPagination totalItems={sortedBeauty.length} itemsPerPage={10} />

      <BeautyCompareBar />

      <BeautyQuickViewModal />
    </main>
  );
}
