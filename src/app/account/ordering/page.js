'use client';

import React, { useState } from 'react';
import OrderingHero from '@/components/Account/Ordering/OrderingHero';
import OrderingList from '@/components/Account/Ordering/OrderingList';
import OrderingDetails from '@/components/Account/Ordering/OrderingDetails';
import OrderingStatus from '@/components/Account/Ordering/OrderingStatus';
import OrderingAddressInfo from '@/components/Account/Ordering/OrderingAddressInfo';
import OrderingPaymentInfo from '@/components/Account/Ordering/OrderingPaymentInfo';
import OrderingSupport from '@/components/Account/Ordering/OrderingSupport';
import OrderingActions from '@/components/Account/Ordering/OrderingActions';
import OrderingReviewPrompt from '@/components/Account/Ordering/OrderingReviewPrompt';
import OrderingEmptyState from '@/components/Account/Ordering/OrderingEmptyState';
import AccountSidebar from '@/components/Account/AccountSidebar';

export default function OrderingPage() {
  // Sample order data & UI state
  const [orders, setOrders] = useState([
    {
      id: 1,
      status: 'Delivered',
      date: '2025-07-05',
      items: [
        { id: 101, name: 'Wireless Headphones', quantity: 1, price: 99 },
        { id: 102, name: 'Bluetooth Speaker', quantity: 2, price: 49 },
      ],
      shippingAddress: {
        name: 'Niaz Ali',
        street: '123 Main St',
        city: 'Amsterdam',
        zip: '1011AB',
        country: 'Netherlands',
      },
      paymentMethod: 'Visa **** 1234',
      total: 197,
      canReview: true,
    },
    // Add more orders as needed
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 flex flex-col lg:flex-row max-w-[1200px] mx-auto pt-20 px-4 space-y-12 lg:space-y-0 lg:space-x-8">
      <AccountSidebar />
      <div className="flex-1 space-y-12">
        <OrderingHero />
        
        {orders.length === 0 ? (
          <OrderingEmptyState />
        ) : (
          <>
            <OrderingList orders={orders} onSelect={setSelectedOrder} selectedOrder={selectedOrder} />
            
            {selectedOrder ? (
              <>
                <OrderingDetails order={selectedOrder} />
                <OrderingStatus status={selectedOrder.status} />
                <OrderingAddressInfo address={selectedOrder.shippingAddress} />
                <OrderingPaymentInfo payment={selectedOrder.paymentMethod} total={selectedOrder.total} />
                <OrderingActions orderId={selectedOrder.id} />
                {selectedOrder.canReview && <OrderingReviewPrompt orderId={selectedOrder.id} />}
                <OrderingSupport orderId={selectedOrder.id} />
              </>
            ) : (
              <p className="text-center text-gray-400">Select an order to see details</p>
            )}
          </>
        )}
      </div>
    </main>
  );
}
