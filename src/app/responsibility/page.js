'use client';

import React from 'react';
import ResponsibilityHero from '@/components/Responsibility/ResponsibilityHero';
import ResponsibilityStats from '@/components/Responsibility/ResponsibilityStats';
import ResponsibilityMission from '@/components/Responsibility/ResponsibilityMission';
import ResponsibilityPillars from '@/components/Responsibility/ResponsibilityPillars';
import ResponsibilityTimeline from '@/components/Responsibility/ResponsibilityTimeline';
import ResponsibilityInitiatives from '@/components/Responsibility/ResponsibilityInitiatives';
import ResponsibilityPartners from '@/components/Responsibility/ResponsibilityPartners';
import ResponsibilityImpactStories from '@/components/Responsibility/ResponsibilityImpactStories';
import ResponsibilityVideos from '@/components/Responsibility/ResponsibilityVideos';
import ResponsibilityFAQ from '@/components/Responsibility/ResponsibilityFAQ';
import ResponsibilityCertifications from '@/components/Responsibility/ResponsibilityCertifications';
import ResponsibilityCTA from '@/components/Responsibility/ResponsibilityCTA';
import ResponsibilitySubscribe from '@/components/Responsibility/ResponsibilitySubscribe';
import ResponsibilityTestimonials from '@/components/Responsibility/ResponsibilityTestimonials';

export default function ResponsibilityPage() {
  return (
    <main className="min-h-screen bg-[#101828] text-white flex flex-col items-center justify-start px-4 py-15 lg:py-35">
      <ResponsibilityHero />
      <ResponsibilityStats />
      <ResponsibilityMission />
      <ResponsibilityPillars />
      <ResponsibilityTimeline />
      <ResponsibilityInitiatives />
      <ResponsibilityPartners />
      <ResponsibilityImpactStories />
      <ResponsibilityVideos />
      <ResponsibilityTestimonials />
      <ResponsibilityCertifications />
      <ResponsibilityFAQ />
      <ResponsibilityCTA />
      <ResponsibilitySubscribe />
    </main>
  );
}
