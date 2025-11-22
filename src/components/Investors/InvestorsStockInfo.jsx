'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, ArrowDown } from 'lucide-react';

const InvestorsStockInfo = () => {
  // Simulated stock data (could be replaced by real API fetch)
  const [stockData, setStockData] = useState({
    symbol: 'CMPY',
    price: 152.45,
    change: 3.15,
    changePercent: 2.12,
    marketCap: '45.8B',
    volume: '1.2M',
    open: 150.0,
    high: 153.0,
    low: 149.5,
  });

  // Optional: Simulate periodic update (mock)
  useEffect(() => {
    const interval = setInterval(() => {
      setStockData((prev) => {
        const randomChange = (Math.random() - 0.5) * 2; // fluctuate -1 to +1
        const newPrice = +(prev.price + randomChange).toFixed(2);
        const change = +(newPrice - prev.price).toFixed(2);
        const changePercent = +((change / prev.price) * 100).toFixed(2);

        return {
          ...prev,
          price: newPrice,
          change,
          changePercent,
        };
      });
    }, 10000); // every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const isPositive = stockData.change >= 0;

  // Animation variants for framer-motion
  const fadeVariant = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <section
      aria-label="Stock Information"
      className="bg-gray-900 text-yellow-400 flex justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1000px] w-full bg-gray-800 rounded-lg p-8 shadow-lg">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-8 text-yellow-400 text-center"
        >
          Stock Information
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center justify-center">
            <p className="text-yellow-300 font-semibold tracking-wide">Symbol</p>
            <p className="text-yellow-400 text-4xl font-bold tracking-wider mt-1 select-text">
              {stockData.symbol}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center relative">
            <p className="text-yellow-300 font-semibold tracking-wide">
              Current Price
            </p>
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={stockData.price}
                variants={fadeVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="text-yellow-400 text-4xl font-bold tracking-wider mt-1 select-text"
                aria-live="polite"
              >
                ${stockData.price.toFixed(2)}
              </motion.p>
            </AnimatePresence>

            <motion.div
              key={`${stockData.change}-${stockData.changePercent}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              aria-live="polite"
              className={`mt-2 flex items-center justify-center space-x-1 font-semibold ${
                isPositive ? 'text-green-400' : 'text-red-500'
              }`}
            >
              {isPositive ? (
                <ArrowUp className="w-5 h-5" aria-hidden="true" />
              ) : (
                <ArrowDown className="w-5 h-5" aria-hidden="true" />
              )}
              <span>
                {Math.abs(stockData.change)} (
                {isPositive ? '+' : '-'}
                {Math.abs(stockData.changePercent)}%)
              </span>
            </motion.div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-yellow-300 font-semibold tracking-wide">Market Cap</p>
            <p className="text-yellow-400 text-3xl font-semibold mt-1 select-text">
              {stockData.marketCap}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-center text-yellow-300 font-medium tracking-wide">
          <div>
            <p className="mb-1">Volume</p>
            <p className="text-yellow-400 select-text">{stockData.volume}</p>
          </div>
          <div>
            <p className="mb-1">Open</p>
            <p className="text-yellow-400 select-text">${stockData.open.toFixed(2)}</p>
          </div>
          <div>
            <p className="mb-1">Day’s Range</p>
            <p className="text-yellow-400 select-text">
              ${stockData.low.toFixed(2)} - ${stockData.high.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorsStockInfo;
