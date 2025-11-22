'use client';

import OrderHero from '@/components/Order/OderHero';
import OrderActions from '@/components/Order/OrderActions';
import OrderDetails from '@/components/Order/OrderDetails';
import OrderStatusTimeline from '@/components/Order/OrderStatusTimeline';
import OrderSummary from '@/components/Order/OrderSummary';
import React from 'react';



export default function OrdersPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-4 py-20 max-w-screen-xl mx-auto flex flex-col gap-8">
      <OrderHero/>
      <OrderSummary/>
      <OrderDetails/>
      <OrderStatusTimeline/>
      <OrderActions/>
    </main>
  );
}
 