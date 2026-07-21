'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const sampleSales = [
  { id: 1, user: 'Alice', product: 'Wireless Headphones' },
  { id: 2, user: 'Bob', product: 'Smartwatch' },
  { id: 3, user: 'Clara', product: 'Gaming Mouse RGB' },
  { id: 4, user: 'David', product: 'Bluetooth Speaker' },
  { id: 5, user: 'Eva', product: 'Ergonomic Chair' },
  { id: 6, user: 'Frank', product: 'USB-C Hub' },
  { id: 7, user: 'Grace', product: 'Noise Cancelling Earbuds' },
  { id: 8, user: 'Hassan', product: 'Mechanical Keyboard' },
  { id: 9, user: 'Irene', product: '4K Monitor' },
  { id: 10, user: 'John', product: 'Gaming Chair' },
];

const TOTAL_SALES = 20;
const INITIAL_VISIBLE = 3;
const PAGE_SIZE = 3;

// Generate 20 fixed sales with unique keys
const generateFixedSales = () => {
  const batch = [];
  for (let i = 0; i < TOTAL_SALES; i++) {
    const base = sampleSales[i % sampleSales.length];
    batch.push({
      ...base,
      uniqueKey: `fixed-${base.id}-${i}`,
      time: 'just now',
      addedAt: Date.now() + i,
    });
  }
  return batch;
};

const saleVariants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: (direction = 1) => ({
    opacity: 0,
    x: direction > 0 ? 300 : -300,
    scale: 0.8,
    transition: { duration: 0.3, ease: 'easeInOut' },
  }),
};

const LiveSalesFeed = () => {
  const [allSales] = useState(generateFixedSales);
  const [visibleSales, setVisibleSales] = useState([]);
  const [hiddenQueue, setHiddenQueue] = useState([]);
  const [removalDirections, setRemovalDirections] = useState({});
  const [newKeys, setNewKeys] = useState(new Set());
  const [revealedCount, setRevealedCount] = useState(INITIAL_VISIBLE);

  // Initialize on mount and reset
  useEffect(() => {
    setVisibleSales(allSales.slice(0, INITIAL_VISIBLE));
    setHiddenQueue(allSales.slice(INITIAL_VISIBLE));
    setNewKeys(new Set(allSales.slice(0, INITIAL_VISIBLE).map((s) => s.uniqueKey)));
    setRemovalDirections({});
    setRevealedCount(INITIAL_VISIBLE);
  }, [allSales]);

  // Clear highlight after 2.5s
  useEffect(() => {
    if (newKeys.size === 0) return;
    const timer = setTimeout(() => setNewKeys(new Set()), 2500);
    return () => clearTimeout(timer);
  }, [newKeys]);

  // Remove sale with direction and replace from hidden queue atomically
  const removeSale = useCallback(
    (key, direction = 1) => {
      setRemovalDirections((prev) => ({ ...prev, [key]: direction }));

      setTimeout(() => {
        setVisibleSales((prevVisible) => {
          // Remove the sale
          const filtered = prevVisible.filter((item) => item.uniqueKey !== key);

          // We cannot call setHiddenQueue here; do it outside

          return filtered;
        });

        setRemovalDirections((prev) => {
          const copy = { ...prev };
          delete copy[key];
          return copy;
        });
      }, 310);
    },
    []
  );

  // After visibleSales updates, if hiddenQueue is not empty and visibleSales length < revealedCount,
  // add one sale from hiddenQueue to visibleSales
  useEffect(() => {
    if (visibleSales.length < revealedCount && hiddenQueue.length > 0) {
      const toAdd = hiddenQueue[0];
      setVisibleSales((prevVisible) => [...prevVisible, toAdd]);
      setHiddenQueue((prevHidden) => prevHidden.slice(1));
      setNewKeys((keys) => new Set(keys).add(toAdd.uniqueKey));
    }
  }, [visibleSales, hiddenQueue, revealedCount]);

  // Drag end to remove
  const handleDragEnd = (key, info) => {
    if (Math.abs(info.offset.x) > 100) {
      removeSale(key, info.offset.x > 0 ? 1 : -1);
    }
  };

  // Close button handler
  const handleCloseClick = (key) => {
    removeSale(key, 1);
  };

  // Show more reveals next PAGE_SIZE from hiddenQueue atomically
  const handleShowMore = () => {
    setHiddenQueue((prevHidden) => {
      if (prevHidden.length === 0) return prevHidden;

      const toReveal = prevHidden.slice(0, PAGE_SIZE);

      setVisibleSales((prevVisible) => {
        // Filter out keys already present to avoid duplicates
        const visibleKeys = new Set(prevVisible.map((s) => s.uniqueKey));
        const filteredToReveal = toReveal.filter((s) => !visibleKeys.has(s.uniqueKey));

        setNewKeys((keys) => {
          const newSet = new Set(keys);
          filteredToReveal.forEach((s) => newSet.add(s.uniqueKey));
          return newSet;
        });

        return [...prevVisible, ...filteredToReveal];
      });

      return prevHidden.slice(PAGE_SIZE);
    });

    setRevealedCount((count) => count + PAGE_SIZE);
  };

  // Reset when all sales removed
  useEffect(() => {
    if (visibleSales.length === 0 && hiddenQueue.length === 0) {
      const timer = setTimeout(() => {
        setVisibleSales(allSales.slice(0, INITIAL_VISIBLE));
        setHiddenQueue(allSales.slice(INITIAL_VISIBLE));
        setNewKeys(new Set(allSales.slice(0, INITIAL_VISIBLE).map((s) => s.uniqueKey)));
        setRemovalDirections({});
        setRevealedCount(INITIAL_VISIBLE);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [visibleSales, hiddenQueue, allSales]);

  // Badge count = hidden sales + (visible sales after initial 3)
  const hiddenBehindBadgeCount = hiddenQueue.length + Math.max(0, visibleSales.length - INITIAL_VISIBLE);

  // Display only initial 3 or revealed count visible sales
  const displayedSales = visibleSales.slice(0, revealedCount);

  return (
    <section
      aria-label="Live Sales Feed"
      className="w-full max-w-[1100px] mx-auto bg-gradient-to-br from-white text-amber-600 rounded-lg p-5 sm:p-8 shadow-2xl px-4"
    >
      <h3 className="text-xl sm:text-2xl font-extrabold mb-5 text-center border-b border-amber-600 pb-3 tracking-wide select-none">
        Live Sales Feed
      </h3>

      <div>
        <AnimatePresence initial={false}>
          {displayedSales.map((sale) => (
            <motion.div
              key={sale.uniqueKey}
              layout
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(e, info) => handleDragEnd(sale.uniqueKey, info)}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={removalDirections[sale.uniqueKey] || 1}
              variants={saleVariants}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={`bg-amber-200/10 backdrop-blur-md border border-amber-600/30 text-amber-400 rounded-md p-3 mb-3 shadow-lg
              flex flex-col sm:flex-row justify-between items-start sm:items-center cursor-grab
              select-none
              ${
                newKeys.has(sale.uniqueKey)
                  ? 'ring-2 ring-amber-600 shadow-amber-600/60 animate-pulse'
                  : ''
              }`}
              whileTap={{ cursor: 'grabbing', scale: 0.98 }}
              whileDrag={{
                scale: 1.05,
                boxShadow: '0 8px 15px rgba(255, 212, 38, 0.6)',
                transition: { duration: 0.15 },
              }}
              role="listitem"
              tabIndex={0}
            >
              <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base font-semibold">
                <span className="text-amber-500">{sale.user}</span> purchased{' '}
                <span className="text-amber-600">{sale.product}</span>
              </div>
              <time
                className="text-xs sm:text-sm text-amber-500 italic mt-2 sm:mt-0 sm:ml-4 whitespace-nowrap"
                dateTime={new Date(sale.addedAt).toISOString()}
                aria-label={`Sale time: ${sale.time}`}
              >
                {sale.time}
              </time>
              <button
                onClick={() => handleCloseClick(sale.uniqueKey)}
                aria-label={`Remove sale by ${sale.user}`}
                className="ml-auto mt-3 sm:mt-0 sm:ml-4 text-amber-500 hover:text-amber-300 transition"
                type="button"
                tabIndex={0}
              >
                <FiX size={20} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {hiddenBehindBadgeCount > 0 && (
        <div className="relative mt-4 flex justify-center">
          <button
            onClick={handleShowMore}
            className="inline-flex items-center gap-2 bg-amber-600 text-gray-900 font-semibold py-3 px-6 rounded-full hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-amber-500 transition-shadow shadow-lg select-none"
            aria-live="polite"
            aria-label={`Show more sales, ${hiddenBehindBadgeCount} hidden`}
          >
            Show More
            <span className="relative inline-flex items-center justify-center w-6 h-6 ml-2 bg-red-600 text-gray-900 text-xs font-bold rounded-full animate-pulse shadow-md">
              {hiddenBehindBadgeCount}
            </span>
          </button>
        </div>
      )}
    </section>
  );
};

export default LiveSalesFeed;
