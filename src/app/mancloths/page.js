'use client';

import React from 'react';

// ManClothes Components import
import ManClothesHero from '@/components/ManClothes/ManClothesHero';
import ManClothesFilter from '@/components/ManClothes/ManClothesFilter';
import ManClothesFeatured from '@/components/ManClothes/ManClothesFeatured';
import ManClothesGrid from '@/components/ManClothes/ManClothesGrid';
import ManClothesBanner from '@/components/ManClothes/ManClothesBanner';
import ManClothesCarousel from '@/components/ManClothes/ManClothesCarousel';
import ManClothesFlashDeals from '@/components/ManClothes/ManClothesFlashDeals';
import ManClothesBrands from '@/components/ManClothes/ManClothesBrands';
import ManClothesAccessories from '@/components/ManClothes/ManClothesAccessories';
import ManClothesOffers from '@/components/ManClothes/ManClothesOffers';
import ManClothesTestimonials from '@/components/ManClothes/ManClothesTestimonials';
import ManClothesNewsletter from '@/components/ManClothes/ManClothesNewsletter';
import ManClothesFooterBanner from '@/components/ManClothes/ManClothesFooterBanner';

export default function ManClothes() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-start px-4 py-10 lg:py-20">
      
      {/* Hero Section */}
      <ManClothesHero />

      {/* Filters */}
      <ManClothesFilter />

      {/* Featured Collections */}
      <ManClothesFeatured />

      {/* Product Grid */}
      <ManClothesGrid />

      {/* Promotional Banner */}
      <ManClothesBanner />

      {/* Trending Carousel */}
      <ManClothesCarousel />

      {/* Flash Deals */}
      <ManClothesFlashDeals />

      {/* Brand Logos */}
      <ManClothesBrands />

      {/* Accessories Section */}
      <ManClothesAccessories />

      {/* Limited-Time Offers */}
      <ManClothesOffers />

      {/* Testimonials */}
      <ManClothesTestimonials />

      {/* Newsletter Signup */}
      <ManClothesNewsletter />

      {/* Footer CTA Banner */}
      <ManClothesFooterBanner />
      
    </main>
  );
}
