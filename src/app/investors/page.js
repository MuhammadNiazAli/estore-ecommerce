'use client';

import React from 'react';

import InvestorsHero from '@/components/Investors/InvestorsHero';
import InvestorsOverview from '@/components/Investors/InvestorsOverview';
import InvestorsFinancials from '@/components/Investors/InvestorsFinancials';
import InvestorsNews from '@/components/Investors/InvestorsNews';
import InvestorsStockInfo from '@/components/Investors/InvestorsStockInfo';
import InvestorsGovernance from '@/components/Investors/InvestorsGovernance';
import InvestorsFAQ from '@/components/Investors/InvestorsFAQ';
import InvestorsContact from '@/components/Investors/InvestorsContact';
import InvestorsEvents from '@/components/Investors/InvestorsEvents';
import InvestorsReports from '@/components/Investors/InvestorsReports';
import InvestorsTestimonials from '@/components/Investors/InvestorsTestimonials';

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-start px-4 py-15 lg:py-35">
      <InvestorsHero />
      <InvestorsOverview />
      <InvestorsFinancials />
      <InvestorsNews />
      <InvestorsStockInfo />
      <InvestorsGovernance />
      <InvestorsFAQ />
      <InvestorsContact />
      <InvestorsEvents />
      <InvestorsReports />
      <InvestorsTestimonials />
    </main>
  );
}
