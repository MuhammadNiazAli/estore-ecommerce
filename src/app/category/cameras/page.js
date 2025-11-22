'use client';

import React, { useState } from 'react';

import CamerasHero from '@/components/Categories/Cameras/CamerasHero';
import CamerasFilters from '@/components/Categories/Cameras/CamerasFilters';
import CamerasProductGrid from '@/components/Categories/Cameras/CamerasProductGrid';
import CamerasCategoryInfo from '@/components/Categories/Cameras/CamerasCategoryInfo';
import CamerasFeaturedDeals from '@/components/Categories/Cameras/CamerasFeaturedDeals';
import CamerasSpecsComparison from '@/components/Categories/Cameras/CamerasSpecsComparison';
import CamerasReviewsPreview from '@/components/Categories/Cameras/CamerasReviewsPreview';
import CamerasBrandsCarousel from '@/components/Categories/Cameras/CamerasBrandsCarousel';
import CamerasAccessoriesSection from '@/components/Categories/Cameras/CamerasAccessoriesSection';
import CamerasFaq from '@/components/Categories/Cameras/CamerasFaq';
import CamerasNewsletterSignup from '@/components/Categories/Cameras/CamerasNewsletterSignup';
import CamerasPagination from '@/components/Categories/Cameras/CamerasPagination';
import CamerasCompareBar from '@/components/Categories/Cameras/CamerasCompareBar';
import CamerasQuickViewModal from '@/components/Categories/Cameras/CamerasQuickViewModal';

export default function CamerasPage() {
  const [filters, setFilters] = useState({
    category: 'All',
    priceRange: [100, 5000],
  });

  const [sortOption, setSortOption] = useState('popularity');

  const [cameras, setCameras] = useState([
    {
      id: 1,
      name: 'Canon EOS R6 Mirrorless',
      price: 2499,
      image: '/cameras/canon-eos-r6.jpg',
      rating: 4.9,
      specs: { sensor: 'Full Frame', mp: '20MP', video: '4K' },
      category: 'Mirrorless',
    },
    {
      id: 2,
      name: 'Sony A7 III',
      price: 1999,
      image: '/cameras/sony-a7iii.jpg',
      rating: 4.8,
      specs: { sensor: 'Full Frame', mp: '24MP', video: '4K' },
      category: 'Mirrorless',
    },
    {
      id: 3,
      name: 'Nikon Z6 II',
      price: 1799,
      image: '/cameras/nikon-z6ii.jpg',
      rating: 4.7,
      specs: { sensor: 'Full Frame', mp: '24MP', video: '4K' },
      category: 'Mirrorless',
    },
    {
      id: 4,
      name: 'Fujifilm X-T4',
      price: 1699,
      image: '/cameras/fujifilm-xt4.jpg',
      rating: 4.6,
      specs: { sensor: 'APS-C', mp: '26MP', video: '4K' },
      category: 'Mirrorless',
    },
  ]);

  // Filter Logic
  const filteredCameras = cameras.filter((camera) => {
    const matchesCategory =
      filters.category === 'All' || camera.category === filters.category;
    const inPriceRange =
      camera.price >= filters.priceRange[0] &&
      camera.price <= filters.priceRange[1];
    return matchesCategory && inPriceRange;
  });

  // Sort Logic
  const sortedCameras = [...filteredCameras].sort((a, b) => {
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
      <CamerasHero />

      <CamerasFilters filters={filters} onFilterChange={setFilters} />

      <CamerasProductGrid cameras={sortedCameras} />

      <CamerasCategoryInfo />

      <CamerasFeaturedDeals />

      <CamerasSpecsComparison cameras={sortedCameras} />

      <CamerasReviewsPreview cameras={sortedCameras} />

      <CamerasBrandsCarousel />

      <CamerasAccessoriesSection />

      <CamerasFaq />

      <CamerasNewsletterSignup />

      <CamerasPagination totalItems={sortedCameras.length} itemsPerPage={10} />

      <CamerasCompareBar />

      <CamerasQuickViewModal />
    </main>
  );
}
