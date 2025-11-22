'use client';

import React, { useState } from 'react';

import KitchenHero from '@/components/Categories/Kitchen/KitchenHero';
import KitchenFilters from '@/components/Categories/Kitchen/KitchenFilters';
import KitchenProductGrid from '@/components/Categories/Kitchen/KitchenProductGrid';
import KitchenCategoryInfo from '@/components/Categories/Kitchen/KitchenCategoryInfo';
import KitchenFeaturedDeals from '@/components/Categories/Kitchen/KitchenFeaturedDeals';
import KitchenSpecsComparison from '@/components/Categories/Kitchen/KitchenSpecsComparison';
import KitchenReviewsPreview from '@/components/Categories/Kitchen/KitchenReviewsPreview';
import KitchenBrandsCarousel from '@/components/Categories/Kitchen/KitchenBrandsCarousel';
import KitchenAccessoriesSection from '@/components/Categories/Kitchen/KitchenAccessoriesSection';
import KitchenFaq from '@/components/Categories/Kitchen/KitchenFaq';
import KitchenNewsletterSignup from '@/components/Categories/Kitchen/KitchenNewsletterSignup';
import KitchenPagination from '@/components/Categories/Kitchen/KitchenPagination';
import KitchenCompareBar from '@/components/Categories/Kitchen/KitchenCompareBar';
import KitchenQuickViewModal from '@/components/Categories/Kitchen/KitchenQuickViewModal';

export default function KitchenPage() {
  const [filters, setFilters] = useState({
    brand: 'All',
    priceRange: [0, 5000],
  });

  const [sortOption, setSortOption] = useState('popularity');

  const [kitchenProducts, setKitchenProducts] = useState([
    {
      id: 1,
      name: 'Philips Air Fryer',
      price: 299,
      image: '/kitchen/philips-airfryer.jpg',
      rating: 4.8,
      specs: { power: '1500W', capacity: '4.1L' },
      brand: 'Philips',
    },
    {
      id: 2,
      name: 'Instant Pot Duo 7-in-1',
      price: 129,
      image: '/kitchen/instant-pot.jpg',
      rating: 4.7,
      specs: { capacity: '6 Qt', functions: '7-in-1' },
      brand: 'Instant Pot',
    },
    {
      id: 3,
      name: 'KitchenAid Stand Mixer',
      price: 499,
      image: '/kitchen/kitchenaid-mixer.jpg',
      rating: 4.9,
      specs: { power: '325W', bowl: '4.5 Qt' },
      brand: 'KitchenAid',
    },
  ]);

  // Filter logic
  const filteredProducts = kitchenProducts.filter((product) => {
    const matchesBrand = filters.brand === 'All' || product.brand === filters.brand;
    const inPriceRange =
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    return matchesBrand && inPriceRange;
  });

  // Sort logic
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
      <KitchenHero />

      <KitchenFilters filters={filters} onFilterChange={handleFilterChange} />

      <KitchenProductGrid products={sortedProducts} />

      <KitchenCategoryInfo />

      <KitchenFeaturedDeals />

      <KitchenSpecsComparison products={sortedProducts} />

      <KitchenReviewsPreview products={sortedProducts} />

      <KitchenBrandsCarousel />

      <KitchenAccessoriesSection />

      <KitchenFaq />

      <KitchenNewsletterSignup />

      <KitchenPagination totalItems={sortedProducts.length} itemsPerPage={10} />

      <KitchenCompareBar />

      <KitchenQuickViewModal />
    </main>
  );
}
