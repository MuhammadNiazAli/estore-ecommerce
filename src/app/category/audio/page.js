'use client';

import React, { useState } from 'react';

import AudioHero from '@/components/Categories/Audio/AudioHero';
import AudioFilters from '@/components/Categories/Audio/AudioFilters';
import AudioProductGrid from '@/components/Categories/Audio/AudioProductGrid';
import AudioCategoryInfo from '@/components/Categories/Audio/AudioCategoryInfo';
import AudioFeaturedDeals from '@/components/Categories/Audio/AudioFeaturedDeals';
import AudioSpecsComparison from '@/components/Categories/Audio/AudioSpecsComparison';
import AudioReviewsPreview from '@/components/Categories/Audio/AudioReviewsPreview';
import AudioBrandsCarousel from '@/components/Categories/Audio/AudioBrandsCarousel';
import AudioAccessoriesSection from '@/components/Categories/Audio/AudioAccessoriesSection';
import AudioFaq from '@/components/Categories/Audio/AudioFaq';
import AudioNewsletterSignup from '@/components/Categories/Audio/AudioNewsletterSignup';
import AudioPagination from '@/components/Categories/Audio/AudioPagination';
import AudioCompareBar from '@/components/Categories/Audio/AudioCompareBar';
import AudioQuickViewModal from '@/components/Categories/Audio/AudioQuickViewModal';

export default function AudioPage() {
  const [filters, setFilters] = useState({
    category: 'All',
    priceRange: [20, 5000],
  });

  const [sortOption, setSortOption] = useState('popularity');

  const [audioProducts, setAudioProducts] = useState([
    {
      id: 1,
      name: 'Noise Cancelling Headphones',
      price: 299,
      image: '/audio/noise-cancelling-headphones.jpg',
      rating: 4.9,
      specs: { type: 'Headphones', feature: 'ANC', brand: 'Bose' },
      category: 'Headphones',
    },
    {
      id: 2,
      name: 'Wireless Bluetooth Speaker',
      price: 149,
      image: '/audio/bluetooth-speaker.jpg',
      rating: 4.7,
      specs: { type: 'Speaker', feature: 'Portable', brand: 'JBL' },
      category: 'Speakers',
    },
    {
      id: 3,
      name: 'Studio Monitor Speakers',
      price: 499,
      image: '/audio/studio-monitors.jpg',
      rating: 4.8,
      specs: { type: 'Speaker', feature: 'Studio', brand: 'Yamaha' },
      category: 'Studio',
    },
    {
      id: 4,
      name: 'True Wireless Earbuds',
      price: 129,
      image: '/audio/true-wireless-earbuds.jpg',
      rating: 4.6,
      specs: { type: 'Earbuds', feature: 'Wireless', brand: 'Sony' },
      category: 'Earbuds',
    },
  ]);

  // Filter Logic
  const filteredAudio = audioProducts.filter((item) => {
    const matchesCategory = filters.category === 'All' || item.category === filters.category;
    const inPriceRange =
      item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // Sort Logic
  const sortedAudio = [...filteredAudio].sort((a, b) => {
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
      <AudioHero />

      <AudioFilters filters={filters} onFilterChange={setFilters} />

      <AudioProductGrid products={sortedAudio} />

      <AudioCategoryInfo />

      <AudioFeaturedDeals />

      <AudioSpecsComparison products={sortedAudio} />

      <AudioReviewsPreview products={sortedAudio} />

      <AudioBrandsCarousel />

      <AudioAccessoriesSection />

      <AudioFaq />

      <AudioNewsletterSignup />

      <AudioPagination totalItems={sortedAudio.length} itemsPerPage={10} />

      <AudioCompareBar />

      <AudioQuickViewModal />
    </main>
  );
}
