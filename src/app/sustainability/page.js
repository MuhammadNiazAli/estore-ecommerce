'use client';

import React from 'react';
import SustainabilityHero from '@/components/Sustainability/SustainabilityHero';
import SustainabilityMission from '@/components/Sustainability/SustainabilityMission';
import SustainabilityInitiatives from '@/components/Sustainability/SustainabilityInitiatives';
import SustainabilityImpact from '@/components/Sustainability/SustainabilityImpact';
import SustainabilityGoals from '@/components/Sustainability/SustainabilityGoals';
import SustainabilityPartners from '@/components/Sustainability/SustainabilityPartners';
import SustainabilityTestimonials from '@/components/Sustainability/SustainabilityTestimonials';
import SustainabilityFAQ from '@/components/Sustainability/SustainabilityFAQ';
import SustainabilityTimeline from '@/components/Sustainability/SustainabilityTimeline';
import SustainabilityReports from '@/components/Sustainability/SustainabilityReports';

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen bg-[#101828] text-white flex flex-col items-center justify-start px-4 py-15 lg:py-35">
      <SustainabilityHero />
      <SustainabilityMission />
      <SustainabilityInitiatives />
      <SustainabilityImpact />
      <SustainabilityGoals />
      <SustainabilityPartners />
      <SustainabilityTestimonials />
      <SustainabilityFAQ />
      <SustainabilityTimeline />
      <SustainabilityReports />
    </main>
  );
}
