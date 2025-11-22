'use client';

import React, { useState } from 'react';

import PhoneAccessoriesHero from '@/components/Categories/Phone-Accessories/PhoneAccessoriesHero';
import PhoneAccessoriesFilters from '@/components/Categories/Phone-Accessories/PhoneAccessoriesFilters';
import PhoneAccessoriesProductGrid from '@/components/Categories/Phone-Accessories/PhoneAccessoriesProductGrid';
import PhoneAccessoriesCategoryInfo from '@/components/Categories/Phone-Accessories/PhoneAccessoriesCategoryInfo';
import PhoneAccessoriesFeaturedDeals from '@/components/Categories/Phone-Accessories/PhoneAccessoriesFeaturedDeals';
import PhoneAccessoriesSpecsComparison from '@/components/Categories/Phone-Accessories/PhoneAccessoriesSpecsComparison';
import PhoneAccessoriesReviewsPreview from '@/components/Categories/Phone-Accessories/PhoneAccessoriesReviewsPreview';
import PhoneAccessoriesBrandsCarousel from '@/components/Categories/Phone-Accessories/PhoneAccessoriesBrandsCarousel';
import PhoneAccessoriesAccessoriesSection from '@/components/Categories/Phone-Accessories/PhoneAccessoriesAccessoriesSection';
import PhoneAccessoriesFaq from '@/components/Categories/Phone-Accessories/PhoneAccessoriesFaq';
import PhoneAccessoriesNewsletterSignup from '@/components/Categories/Phone-Accessories/PhoneAccessoriesNewsletterSignup';
import PhoneAccessoriesPagination from '@/components/Categories/Phone-Accessories/PhoneAccessoriesPagination';
import PhoneAccessoriesCompareBar from '@/components/Categories/Phone-Accessories/PhoneAccessoriesCompareBar';
import PhoneAccessoriesQuickViewModal from '@/components/Categories/Phone-Accessories/PhoneAccessoriesQuickViewModal';

export default function PhoneAccessoriesPage() {
  const [filters, setFilters] = useState({
    category: 'All',
    priceRange: [5, 500],
  });

  const [sortOption, setSortOption] = useState('popularity');

  const [phoneAccessories, setPhoneAccessories] = useState([
    {
      id: 1,
      name: 'Wireless Charging Pad',
      price: 39,
      image: '/phone-accessories/wireless-charger.jpg',
      rating: 4.8,
      specs: { type: 'Charger', compatibility: 'Qi-enabled devices', brand: 'PowerPlus' },
      category: 'Chargers',
    },
    {
      id: 2,
      name: 'Protective Phone Case',
      price: 25,
      image: '/phone-accessories/phone-case.jpg',
      rating: 4.7,
      specs: { type: 'Case', material: 'Silicone', brand: 'SafeGrip' },
      category: 'Cases',
    },
    {
      id: 3,
      name: 'Bluetooth Earbuds',
      price: 99,
      image: '/phone-accessories/bluetooth-earbuds.jpg',
      rating: 4.6,
      specs: { type: 'Earbuds', battery: '24h', brand: 'SoundBeat' },
      category: 'Audio',
    },
    {
      id: 4,
      name: 'Screen Protector Pack',
      price: 15,
      image: '/phone-accessories/screen-protector.jpg',
      rating: 4.9,
      specs: { type: 'Protector', material: 'Tempered Glass', brand: 'CrystalClear' },
      category: 'Screen Protection',
    },
  ]);

  // Filter Logic
  const filteredAccessories = phoneAccessories.filter((item) => {
    const matchesCategory = filters.category === 'All' || item.category === filters.category;
    const inPriceRange =
      item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // Sort Logic
  const sortedAccessories = [...filteredAccessories].sort((a, b) => {
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
      <PhoneAccessoriesHero />

      <PhoneAccessoriesFilters filters={filters} onFilterChange={setFilters} />

      <PhoneAccessoriesProductGrid products={sortedAccessories} />

      <PhoneAccessoriesCategoryInfo />

      <PhoneAccessoriesFeaturedDeals />

      <PhoneAccessoriesSpecsComparison products={sortedAccessories} />

      <PhoneAccessoriesReviewsPreview products={sortedAccessories} />

      <PhoneAccessoriesBrandsCarousel />

      <PhoneAccessoriesAccessoriesSection />

      <PhoneAccessoriesFaq />

      <PhoneAccessoriesNewsletterSignup />

      <PhoneAccessoriesPagination totalItems={sortedAccessories.length} itemsPerPage={10} />

      <PhoneAccessoriesCompareBar />

      <PhoneAccessoriesQuickViewModal />
    </main>
  );
}
