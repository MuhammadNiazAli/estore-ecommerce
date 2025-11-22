'use client';

import React, { useState } from 'react';

import HomeDecorHero from '@/components/Categories/Home-Decor/HomeDecorHero';
import HomeDecorFilters from '@/components/Categories/Home-Decor/HomeDecorFilters';
import HomeDecorProductGrid from '@/components/Categories/Home-Decor/HomeDecorProductGrid';
import HomeDecorCategoryInfo from '@/components/Categories/Home-Decor/HomeDecorCategoryInfo';
import HomeDecorFeaturedDeals from '@/components/Categories/Home-Decor/HomeDecorFeaturedDeals';
import HomeDecorSpecsComparison from '@/components/Categories/Home-Decor/HomeDecorSpecsComparison';
import HomeDecorReviewsPreview from '@/components/Categories/Home-Decor/HomeDecorReviewsPreview';
import HomeDecorBrandsCarousel from '@/components/Categories/Home-Decor/HomeDecorBrandsCarousel';
import HomeDecorAccessoriesSection from '@/components/Categories/Home-Decor/HomeDecorAccessoriesSection';
import HomeDecorFaq from '@/components/Categories/Home-Decor/HomeDecorFaq';
import HomeDecorNewsletterSignup from '@/components/Categories/Home-Decor/HomeDecorNewsletterSignup';
import HomeDecorPagination from '@/components/Categories/Home-Decor/HomeDecorPagination';
import HomeDecorCompareBar from '@/components/Categories/Home-Decor/HomeDecorCompareBar';
import HomeDecorQuickViewModal from '@/components/Categories/Home-Decor/HomeDecorQuickViewModal';

export default function HomeDecorPage() {
  const [filters, setFilters] = useState({
    category: 'All',
    priceRange: [10, 2000],
  });

  const [sortOption, setSortOption] = useState('popularity');

  const [homeDecorProducts, setHomeDecorProducts] = useState([
    {
      id: 1,
      name: 'Modern Table Lamp',
      price: 79,
      image: '/home-decor/table-lamp.jpg',
      rating: 4.8,
      specs: { type: 'Lighting', material: 'Ceramic', brand: 'BrightHome' },
      category: 'Lighting',
    },
    {
      id: 2,
      name: 'Wall Art Canvas Set',
      price: 120,
      image: '/home-decor/wall-art.jpg',
      rating: 4.7,
      specs: { type: 'Decor', material: 'Canvas', brand: 'Artify' },
      category: 'Wall Decor',
    },
    {
      id: 3,
      name: 'Area Rug 8x10',
      price: 199,
      image: '/home-decor/area-rug.jpg',
      rating: 4.6,
      specs: { type: 'Rug', material: 'Polypropylene', brand: 'CozyLiving' },
      category: 'Rugs',
    },
    {
      id: 4,
      name: 'Decorative Throw Pillow Set',
      price: 49,
      image: '/home-decor/throw-pillow.jpg',
      rating: 4.9,
      specs: { type: 'Textile', material: 'Cotton', brand: 'SoftNest' },
      category: 'Pillows',
    },
  ]);

  // Filter Logic
  const filteredDecor = homeDecorProducts.filter((item) => {
    const matchesCategory = filters.category === 'All' || item.category === filters.category;
    const inPriceRange =
      item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // Sort Logic
  const sortedDecor = [...filteredDecor].sort((a, b) => {
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
      <HomeDecorHero />

      <HomeDecorFilters filters={filters} onFilterChange={setFilters} />

      <HomeDecorProductGrid products={sortedDecor} />

      <HomeDecorCategoryInfo />

      <HomeDecorFeaturedDeals />

      <HomeDecorSpecsComparison products={sortedDecor} />

      <HomeDecorReviewsPreview products={sortedDecor} />

      <HomeDecorBrandsCarousel />

      <HomeDecorAccessoriesSection />

      <HomeDecorFaq />

      <HomeDecorNewsletterSignup />

      <HomeDecorPagination totalItems={sortedDecor.length} itemsPerPage={10} />

      <HomeDecorCompareBar />

      <HomeDecorQuickViewModal />
    </main>
  );
}
