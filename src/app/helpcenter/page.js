'use client';

import React from 'react';

import HelpCenterHero from '@/components/HelpCenter/HelpCenterHero';
import HelpCenterSearch from '@/components/HelpCenter/HelpCenterSearch';
import HelpCenterCategories from '@/components/HelpCenter/HelpCenterCategories';
import HelpCenterPopularArticles from '@/components/HelpCenter/HelpCenterPopularArticles';
import HelpCenterTopicCard from '@/components/HelpCenter/HelpCenterTopicCard';
import HelpCenterContactSupport from '@/components/HelpCenter/HelpCenterContactSupport';
import HelpCenterHowItWorks from '@/components/HelpCenter/HelpCenterHowItWorks';
import HelpCenterFAQ from '@/components/HelpCenter/HelpCenterFAQ';
import HelpCenterBreadcrumb from '@/components/HelpCenter/HelpCenterBreadcrumb';
import HelpCenterArticle from '@/components/HelpCenter/HelpCenterArticle';
import HelpCenterFeedbackForm from '@/components/HelpCenter/HelpCenterFeedbackForm';
import HelpCenterSidebar from '@/components/HelpCenter/HelpCenterSidebar';
import HelpCenterVideoGuides from '@/components/HelpCenter/HelpCenterVideoGuides';
import HelpCenterChatbotEntry from '@/components/HelpCenter/HelpCenterChatbotEntry';

export default function HelpCenterPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-start px-4 py-16 lg:py-32 space-y-20">
      <HelpCenterHero />
      <HelpCenterSearch />
      <HelpCenterCategories />
      <HelpCenterPopularArticles />
      <HelpCenterTopicCard />
      <HelpCenterHowItWorks />
      <HelpCenterFAQ />
      <HelpCenterArticle />
      <HelpCenterFeedbackForm />
      <HelpCenterSidebar />
      <HelpCenterVideoGuides />
      <HelpCenterContactSupport />
      <HelpCenterChatbotEntry />
      <HelpCenterBreadcrumb />
    </main>
  );
}
