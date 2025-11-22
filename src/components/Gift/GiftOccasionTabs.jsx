'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const occasions = [
  {
    id: 'birthday',
    label: 'Birthday',
    description:
      'Celebrate birthdays with unique and thoughtful gifts that bring joy and smiles.',
  },
  {
    id: 'anniversary',
    label: 'Anniversary',
    description:
      'Find perfect gifts to mark your special milestones and memorable moments.',
  },
  {
    id: 'wedding',
    label: 'Wedding',
    description:
      'Beautiful wedding gifts to congratulate and cherish the newlyweds.',
  },
  {
    id: 'newborn',
    label: 'Newborn',
    description:
      'Welcome the newest family member with adorable and practical gifts.',
  },
  {
    id: 'holiday',
    label: 'Holiday',
    description:
      'Festive gifts perfect for holidays and seasonal celebrations.',
  },
];

export default function GiftOccasionTabs() {
  const [active, setActive] = useState(occasions[0].id);
  const tabsRef = useRef(null);

  useEffect(() => {
    const tabList = tabsRef.current;
    const activeTab = tabList?.querySelector(`[aria-selected="true"]`);
    if (activeTab && tabList) {
      const tabRect = activeTab.getBoundingClientRect();
      const listRect = tabList.getBoundingClientRect();

      if (tabRect.left < listRect.left || tabRect.right > listRect.right) {
        activeTab.scrollIntoView({ behavior: 'smooth', inline: 'center' });
      }
    }
  }, [active]);

  const currentOccasion = occasions.find((o) => o.id === active);

  return (
    <section
      className="max-w-[1100px] mx-auto p-6 sm:p-10 bg-gray-900 rounded-2xl shadow-2xl text-yellow-900 select-none"
      aria-label="Gift ideas by occasion"
    >
      <h2 className="text-yellow-900 text-3xl sm:text-4xl font-extrabold mb-10 text-center drop-shadow-md tracking-wide font-sans">
        Gift Ideas by Occasion
      </h2>

      {/* Tabs container */}
      <nav
        ref={tabsRef}
        role="tablist"
        aria-label="Gift occasions"
        className="flex gap-4 overflow-x-auto no-scrollbar px-1 sm:px-3 pb-1"
      >
        {occasions.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              id={`tab-${id}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(id)}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                  e.preventDefault();
                  const nextIndex =
                    (occasions.findIndex((o) => o.id === active) + 1) %
                    occasions.length;
                  setActive(occasions[nextIndex].id);
                } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                  e.preventDefault();
                  const currentIndex = occasions.findIndex(
                    (o) => o.id === active
                  );
                  const prevIndex = (currentIndex - 1 + occasions.length) % occasions.length;
                  setActive(occasions[prevIndex].id);
                }
              }}
              className={`flex-shrink-0 whitespace-nowrap px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-700 my-1 focus:ring-opacity-60
              
              `}
            >
              {label}
            </button>
          );
        })}
      </nav>

      {/* Content panel */}
      <div className="mt-10 min-h-[140px] sm:min-h-[160px] px-4 sm:px-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            role="tabpanel"
            id={`panel-${active}`}
            aria-labelledby={`tab-${active}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="bg-gray-900 bg-opacity-20 rounded-xl shadow-md text-yellow-100 max-w-3xl mx-auto text-center text-lg sm:text-xl leading-relaxed select-text px-6 py-8 font-sans"
          >
            {currentOccasion.description}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
