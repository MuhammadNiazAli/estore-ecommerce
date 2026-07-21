'use client';

import React from 'react';

// WomanCloths Components import
import WomanClothsHero from '@/components/WomanCloths/WomanClothsHero';
import WomanClothsFilter from '@/components/WomanCloths/WomanClothsFilter';
import WomanClothsFeatured from '@/components/WomanCloths/WomanClothsFeatured';
import WomanClothsGrid from '@/components/WomanCloths/WomanClothsGrid';
import WomanClothsBanner from '@/components/WomanCloths/WomanClothsBanner';
import WomanClothsCarousel from '@/components/WomanCloths/WomanClothsCarousel';
import WomanClothsTestimonials from '@/components/WomanCloths/WomanClothsTestimonials';
import WomanClothsNewsletter from '@/components/WomanCloths/WomanClothsNewsletter';
import WomanClothsFooterBanner from '@/components/WomanCloths/WomanClothsFooterBanner';
import WomanClothsOffers from '@/components/WomanCloths/WomanClothsOffers';

export default function WomanCloths() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-start px-4 py-10 lg:py-20">
      
      {/* Hero Banner */}
      <WomanClothsHero />

      {/* Filters */}
      <WomanClothsFilter />

      {/* Featured Products */}
      <WomanClothsFeatured />

      {/* Main Grid */}
      <WomanClothsGrid />

      {/* Promotional Banner */}
      <WomanClothsBanner />

      {/* Trending Carousel */}
      <WomanClothsCarousel />

      {/* Limited-Time Offers */}
      <WomanClothsOffers />

      {/* Testimonials */}
      <WomanClothsTestimonials />

      {/* Newsletter */}
      <WomanClothsNewsletter />

      {/* Footer CTA Banner */}
      <WomanClothsFooterBanner />
      
    </main>
  );
}
