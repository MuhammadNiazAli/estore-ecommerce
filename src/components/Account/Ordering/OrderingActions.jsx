'use client';

import React, { useState } from 'react';

// Import all components from OrderBtns folder
import TrackShipmentContent from './OrderBtns/TrackOrder';
import CancelOrderContent from './OrderBtns/CancelOrderContent';
import ReorderContent from './OrderBtns/ReorderContent';
import DownloadInvoiceContent from './OrderBtns/DownloadInvoiceContent';

const orderActions = [
  {
    id: 'track-shipment',
    label: 'Track Shipment',
    type: 'primary',
    ariaLabel: 'Track your shipment',
    content: (closePanel) => <TrackShipmentContent closePanel={closePanel} />,
  },
  {
    id: 'cancel-order',
    label: 'Cancel Order',
    type: 'secondary',
    ariaLabel: 'Cancel this order',
    content: (closePanel) => <CancelOrderContent closePanel={closePanel} />,
  },
  {
    id: 'reorder',
    label: 'Reorder',
    type: 'secondary',
    ariaLabel: 'Reorder items',
    content: (closePanel) => <ReorderContent closePanel={closePanel} />,
  },
  {
    id: 'download-invoice',
    label: 'Download Invoice',
    type: 'secondary',
    ariaLabel: 'Download invoice',
    content: (closePanel) => <DownloadInvoiceContent closePanel={closePanel} />,
  },
];

function OrderingActions() {
  const [activeId, setActiveId] = useState(null);

  const closePanel = () => setActiveId(null);

  const currentAction = orderActions.find((action) => action.id === activeId);

  return (
    <section aria-label="Order Actions" className="max-w-7xl mx-auto px-4 py-6">
      {/* Buttons */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
        {orderActions.map(({ id, label, type, ariaLabel }) => {
          const isPrimary = type === 'primary';
          const isSelected = activeId === id;

          return (
            <button
              key={id}
              type="button"
              onClick={() => setActiveId(isSelected ? null : id)}
              aria-expanded={isSelected}
              aria-controls={`${id}-details`}
              aria-label={ariaLabel}
              className={`px-6 py-3 rounded-full font-semibold shadow-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isPrimary
                  ? 'bg-yellow-400 text-black hover:bg-yellow-300 focus:ring-yellow-400'
                  : 'border border-white text-white hover:bg-white hover:text-black focus:ring-white'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Content Panel */}
      {currentAction && (
        <article
          id={`${currentAction.id}-details`}
          role="region"
          aria-live="polite"
          className="bg-gray-900 rounded-lg p-8 max-w-3xl mx-auto text-white shadow-lg transition-opacity duration-300"
        >
          {currentAction.content(closePanel)}
        </article>
      )}
    </section>
  );
}

export default OrderingActions;
