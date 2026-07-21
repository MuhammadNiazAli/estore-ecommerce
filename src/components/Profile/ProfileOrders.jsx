'use client';

import React, { useState } from 'react';
import { ClipboardDocumentCheckIcon, TruckIcon, XCircleIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const orders = [
  {
    id: 'ORD12345',
    date: 'July 12, 2025',
    total: '$120.00',
    status: 'Delivered',
    items: [
      { name: 'Wireless Headphones', qty: 1, price: '$60.00' },
      { name: 'USB-C Charger', qty: 2, price: '$30.00' },
    ],
    address: '123 Main Street, New York, NY, 10001',
  },
  {
    id: 'ORD12346',
    date: 'July 10, 2025',
    total: '$89.50',
    status: 'Shipped',
    items: [
      { name: 'Smartwatch Series 6', qty: 1, price: '$89.50' },
    ],
    address: '456 Elm Street, Los Angeles, CA, 90001',
  },
  {
    id: 'ORD12347',
    date: 'July 8, 2025',
    total: '$45.75',
    status: 'Cancelled',
    items: [
      { name: 'Bluetooth Speaker', qty: 1, price: '$45.75' },
    ],
    address: '789 Oak Avenue, Chicago, IL, 60601',
  },
];

const statusStyles = {
  Delivered: 'bg-black text-black',
  Shipped: 'bg-black text-black',
  Cancelled: 'bg-black text-black',
};

const statusIcons = {
  Delivered: <ClipboardDocumentCheckIcon className="w-5 h-5" />,
  Shipped: <TruckIcon className="w-5 h-5" />,
  Cancelled: <XCircleIcon className="w-5 h-5" />,
};

const ProfileOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const openDrawer = (order) => setSelectedOrder(order);
  const closeDrawer = () => setSelectedOrder(null);

  return (
    <section className="relative w-full bg-white text-gray-900 px-4 sm:px-6 py-8 sm:py-12 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold text-black mb-1">Your Orders</h2>
            <p className="text-sm text-gray-700">Track and review your past orders in detail.</p>
          </div>
          <div className="flex items-center gap-2 text-black font-medium text-sm sm:text-base">
            <ClipboardDocumentCheckIcon className="w-5 h-5 animate-pulse" />
            <span>Order History</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white my-6" />

        {/* Orders */}
        <div className="space-y-6">
          {orders.map((order) => (
            <button
              key={order.id}
              onClick={() => openDrawer(order)}
              className="w-full text-left bg-white hover:bg-gray-500 transition rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between shadow-md group"
            >
              <div className="mb-3 sm:mb-0">
                <p className="text-gray-900 font-semibold text-lg">{order.id}</p>
                <p className="text-gray-600 text-sm">{order.date}</p>
              </div>
              <div className="mb-3 sm:mb-0 text-black font-semibold text-lg">{order.total}</div>
              <div
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full font-semibold text-sm ${
                  statusStyles[order.status]
                }`}
              >
                {statusIcons[order.status]}
                <span>{order.status}</span>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-600 group-hover:translate-x-1 transition" />
            </button>
          ))}
        </div>
      </div>

      {/* Order Details Drawer */}
      <AnimatePresence>
        {selectedOrder && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed top-0 right-0 w-full sm:w-[500px] h-full bg-white text-gray-900 z-50 shadow-2xl overflow-y-auto"
          >
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-200 sticky top-0 bg-white z-10">
              <h3 className="text-xl font-bold text-black">Order Details</h3>
              <button onClick={closeDrawer}>
                <XMarkIcon className="w-6 h-6 text-gray-600 hover:text-black transition" />
              </button>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <p className="text-sm text-gray-600">Order ID</p>
                <p className="font-semibold text-lg">{selectedOrder.id}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Placed on</p>
                <p>{selectedOrder.date}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Delivery Address</p>
                <p>{selectedOrder.address}</p>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-2">Items</p>
                <ul className="space-y-2">
                  {selectedOrder.items.map((item, index) => (
                    <li key={index} className="flex justify-between text-sm">
                      <span>{item.name} × {item.qty}</span>
                      <span>{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-right mt-4 font-bold text-black text-lg">
                Total: {selectedOrder.total}
              </div>

              <div className="flex gap-3 mt-6">
                <button className="px-4 py-2 bg-black text-black rounded hover:bg-black text-sm font-semibold transition">
                  Track Order
                </button>
                <button className="px-4 py-2 bg-white border border-gray-200 text-gray-900 rounded hover:bg-gray-500 text-sm font-semibold transition">
                  Download Invoice
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProfileOrders;
