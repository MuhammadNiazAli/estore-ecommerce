'use client';

import React from 'react';

const steps = [
  { title: 'Order Placed', description: 'We receive and confirm your order.' },
  { title: 'Processing', description: 'Your order is being prepared for shipment.' },
  { title: 'Shipped', description: 'Package has left the warehouse.' },
  { title: 'In Transit', description: 'Your package is on its way.' },
  { title: 'Delivered', description: 'Your package has arrived at your doorstep.' },
];

const ShippingTimeline = () => {
  return (
    <section
      aria-label="Shipping process timeline"
      className="max-w-[900px] mx-auto px-6 py-16 sm:py-24 text-gray-300"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-amber-400 mb-12 text-center drop-shadow-md select-none">
        Shipping Timeline
      </h2>

      {/* Timeline container */}
      <div
        role="list"
        className="relative flex flex-col sm:flex-row sm:space-x-8"
      >
        {/* Vertical line for mobile, horizontal for desktop */}
        <div
          aria-hidden="true"
          className="absolute top-12 left-6 sm:top-10 sm:left-0 sm:right-0 sm:bottom-auto h-[calc(100%-48px)] w-1 sm:h-1 sm:w-full bg-amber-700 opacity-30"
          style={{ transformOrigin: 'left top' }}
        />

        {steps.map(({ title, description }, i) => (
          <div
            role="listitem"
            key={title}
            className="relative flex items-start sm:flex-col flex-row sm:flex-1 cursor-default"
            tabIndex={0}
            aria-label={`Step ${i + 1}: ${title}`}
          >
            {/* Step circle & line connector */}
            <div className="flex items-center sm:mb-6 sm:justify-center">
              <div
                className="z-10 flex items-center justify-center rounded-full border-4 border-amber-400 bg-amber-600 text-amber-50 w-10 h-10 font-semibold shadow-lg select-none"
                aria-hidden="true"
              >
                {i + 1}
              </div>

              {/* Connector line between steps (hidden on last step) */}
              {i !== steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden sm:block flex-grow h-1 bg-amber-700 opacity-30 ml-2"
                />
              )}
            </div>

            {/* Step content */}
            <div className="ml-4 sm:ml-0 sm:text-center sm:flex-grow">
              <h3 className="text-lg sm:text-xl font-semibold text-amber-300 mb-1">
                {title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShippingTimeline;
