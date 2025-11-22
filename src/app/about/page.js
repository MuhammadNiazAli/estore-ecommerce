'use client';

import React from 'react';
import AboutHero from '@/components/About/AboutHero';
import AboutMission from '@/components/About/AboutMission';
import AboutTeam from '@/components/About/AboutTeam';
import AboutHistory from '@/components/About/AboutHistory';
import AboutValues from '@/components/About/AboutValues';
import AboutTestimonials from '@/components/About/AboutTestimonials';
import AboutContact from '@/components/About/AboutContact';

export default function About() {
  return (
    <main className="min-h-screen bg-[#101828] text-white flex flex-col items-center justify-start px-4 py-15 lg:py-35">
      <AboutHero />
      <AboutMission />
      <AboutTeam />
      <AboutHistory />
      <AboutValues />
      <AboutTestimonials />
      <AboutContact />
    </main>
  );
}
