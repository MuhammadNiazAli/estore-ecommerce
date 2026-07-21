'use client';

import React from 'react';
import CareersHero from "@/components/Careers/CareersHero";
import CareersValues from "@/components/Careers/CareersValues";
import CareersTeams from "@/components/Careers/CareersTeams";
import CareersBenefits from "@/components/Careers/CareersBenefits";
import CareersOpenRoles from "@/components/Careers/CareersOpenRoles";
import CareersProcess from "@/components/Careers/CareersProcess";
import CareersTestimonials from "@/components/Careers/CareersTestimonials";
import CareersStats from "@/components/Careers/CareersStats";
import CareersCultureGallery from "@/components/Careers/CareersCultureGallery";
import CareersFAQ from "@/components/Careers/CareersFAQ";
import CareersCTA from "@/components/Careers/CareersCTA";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-start px-4 py-15 lg:py-35">
      <CareersHero />
      <CareersValues />
      <CareersTeams />
      <CareersBenefits />
      <CareersOpenRoles />
      <CareersProcess />
      <CareersTestimonials />
      <CareersStats />
      <CareersCultureGallery />
      <CareersFAQ />
      <CareersCTA />
    </main>
  );
}
