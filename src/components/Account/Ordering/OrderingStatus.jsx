import React from 'react';

const steps = ['Ordered', 'Processed', 'Shipped', 'Delivered'];

const OrderingStatus = ({ status }) => {
  const currentIndex = steps.findIndex(
    (step) => step.toLowerCase() === status?.toLowerCase()
  );

  return (
    <section
      aria-label="Order status"
      className="w-full max-w-4xl mx-auto bg-white rounded-lg p-6 shadow-md"
    >
      <h2 className="text-xl font-semibold text-black border-b border-black pb-2 mb-6">
        Order Status
      </h2>

      <div className="overflow-x-auto">
        <ol className="relative flex min-w-[480px] sm:min-w-0 justify-between text-sm font-medium text-gray-600 px-1">
          {steps.map((step, index) => {
            const isComplete = index < currentIndex;
            const isActive = index === currentIndex;

            return (
              <li
                key={step}
                className="flex flex-col items-center relative flex-1 min-w-[80px]"
              >
                {/* Step circle */}
                <span
                  aria-hidden="true"
                  className={`w-8 h-8 flex items-center justify-center mb-2 rounded-full font-semibold transition-colors duration-300 ${
                    isComplete || isActive
                      ? 'bg-black text-gray-900'
                      : 'bg-white text-gray-500'
                  }`}
                >
                  {index + 1}
                </span>

                {/* Step label */}
                <span
                  className={`uppercase tracking-wide text-center text-[10px] sm:text-xs ${
                    isComplete || isActive ? 'text-black' : 'text-gray-500'
                  }`}
                >
                  {step}
                </span>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={`absolute top-4 right-0 h-0.5 w-full z-0 transition-colors duration-300 ${
                      isComplete ? 'bg-black' : 'bg-white'
                    }`}
                    style={{ left: '50%', right: '-50%', marginLeft: 0 }}
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default OrderingStatus;
