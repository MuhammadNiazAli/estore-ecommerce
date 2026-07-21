'use client';

import React from 'react';

// Newarrivals Components import
import NewarrivalsHero from '@/components/Newarrivals/NewarrivalsHero';
import NewarrivalsFilter from '@/components/Newarrivals/NewarrivalsFilter';
import NewarrivalsSort from '@/components/Newarrivals/NewarrivalsSort';
import NewarrivalsGrid from '@/components/Newarrivals/NewarrivalsGrid';
import NewarrivalsPagination from '@/components/Newarrivals/NewarrivalsPagination';
import NewarrivalsNewsletter from '@/components/Newarrivals/NewarrivalsNewsletter';

export default function Newarrivals() {
  return (
    <main className="min-h-[screen] bg-white text-gray-900 flex flex-col items-center justify-center px-4 py-15 lg:py-35">
      <NewarrivalsHero />
      <NewarrivalsFilter />
      <NewarrivalsSort />
      <NewarrivalsGrid/>
      <NewarrivalsPagination />
      <NewarrivalsNewsletter />
  
    </main>
  );
}
