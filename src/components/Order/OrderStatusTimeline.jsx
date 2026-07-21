'use client';

import React from 'react';
import {
  FiCheckCircle,
  FiClock,
  FiPackage,
  FiTruck,
  FiHome,
} from 'react-icons/fi';

const steps = [
  {
    id: 1,
    title: 'Order Placed',
    date: 'July 5, 2025',
    completed: true,
    icon: <FiCheckCircle />,
    description:
      'We have received your order and it is now in our system. Our team will begin processing shortly.',
  },
  {
    id: 2,
    title: 'Processing',
    date: 'July 6, 2025',
    completed: true,
    icon: <FiClock />,
    description:
      'Your order is currently being prepared. We are verifying payment and gathering items for shipment.',
  },
  {
    id: 3,
    title: 'Shipped',
    date: 'July 7, 2025',
    completed: false,
    icon: <FiPackage />,
    description:
      'Your order has been dispatched from the warehouse and is on its way to the shipping carrier.',
  },
  {
    id: 4,
    title: 'Out for Delivery',
    date: '',
    completed: false,
    icon: <FiTruck />,
    description:
      'Your package is with the delivery agent and will reach your specified address soon.',
  },
  {
    id: 5,
    title: 'Delivered',
    date: '',
    completed: false,
    icon: <FiHome />,
    description:
      'Your package has been delivered. Please check the items and contact support if there are any issues.',
  },
];

const OrderStatusTimeline = () => {
  const currentStepIndex = steps.findIndex((step) => !step.completed);

  return (
    <section
      aria-label="Order status timeline"
      className="max-w-3xl mx-auto px-6 py-10 rounded-2xl bg-white text-gray-900 space-y-10 mb-[-50px]"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-6 tracking-tight">
        Order Status
      </h2>

      <ol className="relative border-l-[3px] border-blue-600 pl-8">
        {steps.map((step, idx) => {
          const isCurrent = idx === currentStepIndex;
          const isCompleted = step.completed;
          const isUpcoming = idx > currentStepIndex;
          const isLast = idx === steps.length - 1;

          return (
            <li
              key={step.id}
              className="relative mb-12 group transition-all duration-300 hover:bg-white/50 rounded-xl pl-4 pb-4"
            >
              {/* Connector Line */}
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="absolute top-8 left-[-1.2px] w-[3px] h-full bg-gradient-to-b from-blue-500 via-blue-400 to-blue-600 animate-pulse"
                />
              )}

              {/* Step Icon */}
              <span
                className={`absolute -left-5 top-2 z-10 w-9 h-9 flex items-center justify-center rounded-full ring-4 ring-gray-200 transition-all duration-300 
                ${isCompleted
                    ? 'bg-blue-600 text-gray-900 shadow-md'
                    : isCurrent
                    ? 'bg-amber-600 text-black animate-pulse ring-amber-500'
                    : 'bg-white text-gray-600 group-hover:bg-gray-50 group-hover:text-gray-700'
                }`}
              >
                {React.cloneElement(step.icon, { size: 18 })}
              </span>

              {/* Step Content */}
              <div className="ml-4">
                <h3
                  className={`text-lg sm:text-xl font-semibold ${
                    isCompleted
                      ? 'text-gray-900'
                      : isCurrent
                      ? 'text-amber-500'
                      : 'text-gray-600'
                  }`}
                >
                  {step.title}
                </h3>

                {step.date && (
                  <time
                    className="block text-sm font-medium text-blue-300 mb-1"
                    dateTime={new Date(step.date).toISOString()}
                  >
                    {step.date}
                  </time>
                )}

                <p
                  className={`max-w-xl text-sm leading-relaxed transition ${
                    isCompleted
                      ? 'text-gray-700'
                      : isCurrent
                      ? 'text-amber-400'
                      : 'text-gray-500 group-hover:text-gray-600 italic'
                  }`}
                >
                  {step.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default OrderStatusTimeline;
