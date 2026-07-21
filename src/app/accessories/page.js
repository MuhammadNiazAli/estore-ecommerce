'use client';

import React from 'react';

// Accessories Components Import
import AccessoriesHero from '@/components/Accessories/AccessoriesHero';
import AccessoriesFilters from '@/components/Accessories/AccessoriesFilters';
import AccessoriesFeatured from '@/components/Accessories/AccessoriesFeatured';
import AccessoriesTrending from '@/components/Accessories/AccessoriesTrending';
import AccessoriesDeals from '@/components/Accessories/AccessoriesDeals';
import AccessoriesBrands from '@/components/Accessories/AccessoriesBrands';
import AccessoriesReviews from '@/components/Accessories/AccessoriesReviews';
import AccessoriesNewsletter from '@/components/Accessories/AccessoriesNewsletter';
import AccessoriesRelated from '@/components/Accessories/AccessoriesRelated';
import AccessoriesAd from '@/components/Accessories/AccessoriesAd';

export default function AccessoriesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-start px-4 py-10 lg:py-20">

      {/* Hero Section */}
      <AccessoriesHero />

      {/* Filters */}
      <AccessoriesFilters />

      {/* Featured Accessories */}
      <AccessoriesFeatured />

      {/* Trending Accessories Carousel */}
      <AccessoriesTrending />

      {/* Limited-Time Deals */}
      <AccessoriesDeals />

      {/* Brand Showcase */}
      <AccessoriesBrands />

      {/* Customer Reviews */}
      <AccessoriesReviews />

      {/* Related Accessories */}
      <AccessoriesRelated />

      {/* Advertisement / Promo Section */}
      <AccessoriesAd />

      {/* Newsletter Signup */}
      <AccessoriesNewsletter />

    </main>
  );
}
