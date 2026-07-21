'use client';

import React from 'react';

// Components
import DashboardHero from '@/components/Dashboard/DashboardHero';
import DashboardStats from '@/components/Dashboard/DashboardStats';
import DashboardWidgets from '@/components/Dashboard/DashboardWidgets';
import DashboardOverview from '@/components/Dashboard/DashboardOverview';
import DashboardActivity from '@/components/Dashboard/DashboardActivity';
import DashboardSidebar from '@/components/Dashboard/DashboardSidebar';
import DashboardNotifications from '@/components/Dashboard/DashboardNotifications';
import DashboardProfile from '@/components/Dashboard/DashboardProfile';
import DashboardReports from '@/components/Dashboard/DashboardReports';
import DashboardTasks from '@/components/Dashboard/DashboardTasks';
import DashboardSettings from '@/components/Dashboard/DashboardSettings';
import DashboardHeader from '@/components/Dashboard/DashboardHeader';
import DashboardFooter from '@/components/Dashboard/DashboardFooter';

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-start px-4 py-15 lg:py-35">
      <DashboardHeader />
      <DashboardHero />
      <DashboardStats />
      <DashboardWidgets />
      <DashboardOverview />
      <DashboardActivity />
      <DashboardSidebar />
      <DashboardNotifications />
      <DashboardProfile />
      <DashboardReports />
      <DashboardTasks />
      <DashboardSettings />
      <DashboardFooter />
    </main>
  );
}
