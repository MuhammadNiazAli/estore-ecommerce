'use client';

import React from 'react';
import ShopHero from '@/components/Shop/ShopHero';
import ShopBreadcrumb from '@/components/Shop/ShopBreadcrumb';
import ShopCategoryNav from '@/components/Shop/ShopCategoryNav';
import ShopFlashDealStrip from '@/components/Shop/ShopFlashDealStrip';
import ShopFilters from '@/components/Shop/ShopFilters';
import ShopSortBar from '@/components/Shop/ShopSortBar';
import ShopProductsGrid from '@/components/Shop/ShopProductsGrid';
import ShopPagination from '@/components/Shop/ShopPagination';
import ShopSidebarFilters from '@/components/Shop/ShopSidebarFilters';
import ShopBannerStrip from '@/components/Shop/ShopBannerStrip';
import ShopEmptyState from '@/components/Shop/ShopEmptyState';
import ShopLoadMore from '@/components/Shop/ShopLoadMore';
import ShopMobileFilters from '@/components/Shop/ShopMobileFilters';
import ShopTagCloud from '@/components/Shop/ShopTagCloud';
import ShopTopBarStats from '@/components/Shop/ShopTopBarStats';

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-4 py-20">
      <ShopHero />
      <ShopBreadcrumb />
      <ShopCategoryNav />
      <ShopFlashDealStrip />
      <ShopBannerStrip />
      <ShopTopBarStats />
      <ShopFilters />
      <ShopMobileFilters />
      <ShopSidebarFilters />
      <ShopTagCloud />
      <ShopSortBar />
      <ShopProductsGrid />
      <ShopLoadMore />
      <ShopPagination />
      <ShopEmptyState />
    </main>
    
  );
}
