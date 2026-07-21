'use client';

import React from 'react';
import HomeHero from '@/components/Home/HomeHero';
import HomeKnowicon from '@/components/Home/HomeKnowicon';
import HomeSlider from '@/components/Home/HomeSlider';
import HomeBestSeller from '../components/Home/HomeBestSeller';
import HomeFilter from '@/components/Home/HomeFilter';
import HomeCall from '@/components/Home/HomeCall';
import HomeShows from '@/components/Home/HomeShows';
import HomeAd from '@/components/Home/HomeAd';



export default function Home() {
  return (
     <main className="min-h-[screen] bg-white text-gray-900 flex flex-col items-center justify-center px-4 py-15 lg:py-35">
        <HomeHero />
        <HomeKnowicon/>
        <HomeSlider/>
        <HomeBestSeller/>
        <HomeFilter/>
        <HomeCall/>
        <HomeShows/>
        <HomeAd/>
     </main>
  );
}
