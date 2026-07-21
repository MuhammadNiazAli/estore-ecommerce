'use client';

import React from 'react';

import NewseasonHero from '@/components/Newseason/NewseasonHero';
import NewseasonCollection from '@/components/Newseason/NewseasonCollection';
import NewseasonLookbook from '@/components/Newseason/NewseasonLookbook';
import NewseasonHighlights from '@/components/Newseason/NewseasonHighlights';
import NewseasonPromoBanner from '@/components/Newseason/NewseasonPromoBanner';
import NewseasonTestimonials from '@/components/Newseason/NewseasonTestimonials';
import NewseasonCountdown from '@/components/Newseason/NewseasonCountdown';
import NewseasonNewsletter from '@/components/Newseason/NewseasonNewsletter';
import NewseasonFAQ from '@/components/Newseason/NewseasonFAQ';

export default function NewseasonPage() {
  return (
    <main className="min-h-[screen] bg-white text-gray-900 flex flex-col items-center justify-center px-4 py-15 lg:py-35">
      <NewseasonHero />
      <NewseasonCollection />
      <NewseasonLookbook />
      <NewseasonHighlights />
      <NewseasonPromoBanner />
      <NewseasonTestimonials />
      <NewseasonCountdown />
      <NewseasonNewsletter />
      <NewseasonFAQ />
    </main>
  );
}
