'use client';

import React from 'react';
import AccountSidebar from '@/components/Account/AccountSidebar';

import NotificationHero from '@/components/Account/Notification/NotificationHero';
import NotificationTabs from '@/components/Account/Notification/NotificationTabs';
import NotificationList from '@/components/Account/Notification/NotificationList';
import NotificationEmpty from '@/components/Account/Notification/NotificationEmpty';
import NotificationSettingsLink from '@/components/Account/Notification/NotificationSettingsLink';
// Optional: import NotificationFilterBar from '@/components/Account/Notification/NotificationFilterBar';

const dummyNotifications = [
  {
    id: '1',
    title: 'Your order #1234 has shipped',
    message: 'Expected delivery in 2–3 days.',
    type: 'Orders',
    time: '2 hours ago',
  },
  {
    id: '2',
    title: ' Weekend Sale: 50% Off All Items',
    message: 'Don’t miss out on this limited-time deal!',
    type: 'Promotions',
    time: '1 day ago',
  },
  {
    id: '3',
    title: 'System Maintenance Scheduled',
    message: 'We’ll be offline for maintenance tonight from 12–2 AM.',
    type: 'System',
    time: '3 days ago',
  },
];

export default function NotificationPage() {
  const [activeTab, setActiveTab] = React.useState('All');

  const filteredNotifications =
    activeTab === 'All'
      ? dummyNotifications
      : dummyNotifications.filter((n) => n.type === activeTab);

  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 flex flex-col lg:flex-row max-w-[1200px] mx-auto pt-20 px-4 space-y-12 lg:space-y-0 lg:space-x-8">
      <AccountSidebar />

      <div className="flex-1 space-y-10">
        <NotificationHero />
        <NotificationTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Optional: <NotificationFilterBar /> */}

        {filteredNotifications.length > 0 ? (
          <NotificationList notifications={filteredNotifications} />
        ) : (
          <NotificationEmpty />
        )}

        <NotificationSettingsLink />
      </div>
    </main>
  );
}
