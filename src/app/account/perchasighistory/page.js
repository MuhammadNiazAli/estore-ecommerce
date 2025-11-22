'use client';

import React from 'react';
import AccountSidebar from '@/components/Account/AccountSidebar';

import PerchasigHistoryHero from '@/components/Account/PerchasigHistory/PerchasigHistoryHero';
import PerchasigHistoryList from '@/components/Account/PerchasigHistory/PerchasigHistoryList';
import PerchasigHistoryFilters from '@/components/Account/PerchasigHistory/PerchasigHistoryFilters';
import PerchasigHistoryDetails from '@/components/Account/PerchasigHistory/PerchasigHistoryDetails';
import PerchasigHistoryPagination from '@/components/Account/PerchasigHistory/PerchasigHistoryPagination';

export default function PerchasigHistoryPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 flex flex-col lg:flex-row max-w-[1200px] mx-auto pt-20 px-4 space-y-12 lg:space-y-0 lg:space-x-8">
      <AccountSidebar />
      <div className="flex-1 space-y-12">
        <PerchasigHistoryHero />
        <PerchasigHistoryFilters />
        <PerchasigHistoryList />
        <PerchasigHistoryDetails />
        <PerchasigHistoryPagination />
      </div>
    </main>
  );
}
