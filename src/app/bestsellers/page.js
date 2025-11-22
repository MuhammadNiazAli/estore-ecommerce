'use client';

import React from 'react';

import BestsellersHero from '@/components/Bestsellers/BestsellersHero';
import BestsellersProductGrid from '@/components/Bestsellers/BestsellersProductGrid';
import BestsellersFilters from '@/components/Bestsellers/BestsellersFilters';
import BestsellersCategoryTabs from '@/components/Bestsellers/BestsellersCategoryTabs';
import BestsellersCallout from '@/components/Bestsellers/BestsellersCallout';
import BestsellersTestimonials from '@/components/Bestsellers/BestsellersTestimonials';
import BestsellersNewsletter from '@/components/Bestsellers/BestsellersNewsletter';
import BestsellersFAQ from '@/components/Bestsellers/BestsellersFAQ';
import BestsellersLoadingSkeleton from '@/components/Bestsellers/BestsellersLoadingSkeleton';
import BestsellersEmptyState from '@/components/Bestsellers/BestsellersEmptyState';

export default function Bestsellers() {
  return (
       <main className="min-h-screen bg-[#101828] text-white flex flex-col items-center justify-start px-4 py-15 lg:py-35">
      <BestsellersHero />

      <BestsellersFilters />

      <BestsellersCategoryTabs />

      <BestsellersProductGrid />

      
      <BestsellersLoadingSkeleton />
      <BestsellersEmptyState />

      <BestsellersCallout />

      <BestsellersTestimonials />

      <BestsellersFAQ />

      <BestsellersNewsletter />
    </main>
  );
}
