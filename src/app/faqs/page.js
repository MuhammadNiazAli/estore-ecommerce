'use client';

import React from 'react';

import FaqsHero from '@/components/Faqs/FaqsHero';
import FaqsSearchBar from '@/components/Faqs/FaqsSearchBar';
import FaqsCategoryFilter from '@/components/Faqs/FaqsCategoryFilter';
import FaqsPopularQuestions from '@/components/Faqs/FaqsPopularQuestions';
import FaqsList from '@/components/Faqs/FaqsList';
import FaqsItem from '@/components/Faqs/FaqsItem';
import FaqsAccordion from '@/components/Faqs/FaqsAccordion';
import FaqsRelatedTopics from '@/components/Faqs/FaqsRelatedTopics';
import FaqsFeedback from '@/components/Faqs/FaqsFeedback';
import FaqsContact from '@/components/Faqs/FaqsContact';

export default function FaqsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-start px-6 py-12 lg:py-20 max-w-7xl mx-auto">
      <FaqsHero />
      <FaqsSearchBar />
      <FaqsCategoryFilter />
      <FaqsPopularQuestions />
      <FaqsList />
      <FaqsAccordion />
      <FaqsRelatedTopics />
      <FaqsFeedback />
      <FaqsContact />
    </main>
  );
}
