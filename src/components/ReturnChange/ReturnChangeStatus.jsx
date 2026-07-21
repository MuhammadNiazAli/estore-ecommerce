'use client';

import React, { useState } from 'react';
import {
  Package,
  CalendarCheck,
  Truck,
  CheckCircle,
  Info,
} from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Request Received',
    icon: <Package size={20} aria-hidden="true" />,
    description: 'We have received your return/exchange request.',
  },
  {
    id: 2,
    title: 'Pickup Scheduled',
    icon: <CalendarCheck size={20} aria-hidden="true" />,
    description: 'Pickup is scheduled at your location.',
  },
  {
    id: 3,
    title: 'Item Picked Up',
    icon: <Truck size={20} aria-hidden="true" />,
    description: 'Your item has been picked up for processing.',
  },
  {
    id: 4,
    title: 'Refund Completed',
    icon: <CheckCircle size={20} aria-hidden="true" />,
    description: 'Your refund has been processed or new item shipped.',
  },
];

const ReturnChangeStatus = () => {
  const [currentStep, setCurrentStep] = useState(2);

  return (
    <section
      aria-labelledby="return-exchange-status-title"
      className="bg-white text-gray-900 px-4 py-16 flex justify-center mb-[-50px]"
    >
      <div className="max-w-[1000px] w-full text-center">
        <h2
          id="return-exchange-status-title"
          className="text-amber-600 text-3xl md:text-4xl font-bold mb-12"
        >
          Return & Exchange Status
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0 relative">
          {steps.map(({ id, title, icon, description }, idx) => {
            const isActive = id === currentStep;
            const isCompleted = id < currentStep;

            return (
              <div
                key={id}
                className="relative flex-1 flex flex-col items-center cursor-default group focus-within:ring-2 focus-within:ring-amber-600 rounded-md"
                tabIndex={0}
                aria-current={isActive ? 'step' : undefined}
                aria-label={`${title} - ${
                  isActive ? 'Current step' : isCompleted ? 'Completed' : 'Upcoming'
                }`}
              >
                {/* Connector line */}
                {idx !== steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={`hidden md:block absolute top-7 left-1/2 transform -translate-x-1/2 h-1 rounded-full transition-colors duration-300 ${
                      isCompleted ? 'bg-amber-600' : 'bg-amber-900'
                    }`}
                    style={{ width: 'calc(100% + 1.5rem)', zIndex: 0 }}
                  />
                )}

                {/* Circle with icon */}
                <div
                  className={`z-10 w-14 h-14 rounded-full flex items-center justify-center border-4 transition-colors duration-300 ${
                    isActive
                      ? 'border-amber-600 bg-amber-700 text-black shadow-lg'
                      : isCompleted
                      ? 'border-amber-600 bg-amber-950 text-amber-600'
                      : 'border-amber-950 bg-white text-amber-900'
                  }`}
                >
                  {/* Icon wrapper ensures perfect centering */}
                  <div className="flex items-center justify-center w-6 h-6">
                    {icon}
                  </div>
                </div>

                <h3
                  className={`mt-4 font-semibold text-center leading-snug transition-colors duration-300 max-w-[100px] truncate ${
                    isActive
                      ? 'text-amber-600'
                      : isCompleted
                      ? 'text-amber-500'
                      : 'text-amber-900'
                  }`}
                  title={title} // show full title on hover
                >
                  {title}
                </h3>

                {/* Tooltip with description */}
                <div
                  role="tooltip"
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 pointer-events-none bg-white text-gray-700 text-xs rounded-md p-2 mt-2 w-48 shadow-lg z-20 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
                >
                  <Info size={14} className="inline mr-1" />
                  {description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls to simulate changing status (for demo) */}
        <div className="mt-12 flex justify-center gap-6">
          <button
            onClick={() => setCurrentStep((s) => Math.max(1, s - 1))}
            disabled={currentStep === 1}
            className="px-5 py-2 rounded-md border border-amber-600 text-amber-600 disabled:opacity-40 hover:bg-amber-600 hover:text-black transition"
            aria-disabled={currentStep === 1}
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentStep((s) => Math.min(steps.length, s + 1))}
            disabled={currentStep === steps.length}
            className="px-5 py-2 rounded-md border border-amber-600 text-amber-600 disabled:opacity-40 hover:bg-amber-600 hover:text-black transition"
            aria-disabled={currentStep === steps.length}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReturnChangeStatus;
