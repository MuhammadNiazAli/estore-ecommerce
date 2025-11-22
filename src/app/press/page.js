'use client';

import React from 'react';
import PressHero from '@/components/Press/PressHero';
import PressReleases from '@/components/Press/PressReleases';
import PressCoverage from '@/components/Press/PressCoverage';
import MediaKit from '@/components/Press/MediaKit';
import PressContacts from '@/components/Press/PressContacts';
import PressTestimonials from '@/components/Press/PressTestimonials';
import PressGallery from '@/components/Press/PressGallery';
import PressFAQ from '@/components/Press/PressFAQ';
import PressSubscribe from '@/components/Press/PressSubscribe';

export default function PressPage() {
  return (
    <main className="min-h-screen bg-[#101828] text-white flex flex-col items-center justify-start px-4 py-15 lg:py-35">
      <PressHero />
      <PressReleases />
      <PressCoverage />
      <MediaKit />
      <PressContacts />
      <PressTestimonials />
      <PressGallery />
      <PressFAQ />
      <PressSubscribe />
    </main>
  );
}
