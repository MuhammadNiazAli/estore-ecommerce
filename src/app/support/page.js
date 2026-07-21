'use client';

import React from 'react';
import SupportHero from '@/components/Support/SupportHero';
import SupportTopics from '@/components/Support/SupportTopics';
import FAQSection from '@/components/Support/FAQSection';
import ContactForm from '@/components/Support/ContactForm';
import LiveChatSupport from '@/components/Support/LiveChatSupport';
import ContactInfo from '@/components/Support/ContactInfo';
import SupportArticles from '@/components/Support/SupportArticles';
export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-start px-4 py-20 max-w-7xl mx-auto">
      <SupportHero />
      <SupportTopics />
      <FAQSection />
      <SupportArticles />
      <ContactForm />
      <LiveChatSupport />
      <ContactInfo />

    </main>
  );
}
