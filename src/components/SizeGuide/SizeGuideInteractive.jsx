import React, { useState, useEffect } from 'react';

const sizeChart = [
  { size: 'XS', chestMin: 30, chestMax: 33, waistMin: 24, waistMax: 26 },
  { size: 'S', chestMin: 34, chestMax: 36, waistMin: 27, waistMax: 29 },
  { size: 'M', chestMin: 37, chestMax: 40, waistMin: 30, waistMax: 33 },
  { size: 'L', chestMin: 41, chestMax: 44, waistMin: 34, waistMax: 37 },
  { size: 'XL', chestMin: 45, chestMax: 48, waistMin: 38, waistMax: 41 },
  { size: 'XXL', chestMin: 49, chestMax: 52, waistMin: 42, waistMax: 45 },
];

const SizeGuideInteractive = () => {
  const [chest, setChest] = useState(36);
  const [waist, setWaist] = useState(29);
  const [recommendedSize, setRecommendedSize] = useState('N/A');

  useEffect(() => {
    const size = sizeChart.find(
      (s) =>
        chest >= s.chestMin &&
        chest <= s.chestMax &&
        waist >= s.waistMin &&
        waist <= s.waistMax
    );
    setRecommendedSize(size ? size.size : 'Custom / Check Size Chart');
  }, [chest, waist]);

  return (
    <section className="w-full bg-white text-gray-800 flex justify-center py-12 px-4 sm:px-6 md:py-16">
      <div className="max-w-[600px] w-full bg-white rounded-lg p-8 shadow-lg">
        <h2 className="text-amber-600 text-3xl sm:text-4xl font-extrabold mb-10 text-center select-none">
          Find Your Size
        </h2>

        {/* Inputs */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 mb-12">
          {/* Chest */}
          <div>
            <label
              htmlFor="chest"
              className="block mb-3 font-semibold text-amber-600 text-lg select-none"
            >
              Chest / Bust (inches):{' '}
              <span className="text-gray-700 font-normal">{chest}"</span>
            </label>
            <input
              type="range"
              id="chest"
              min="28"
              max="54"
              step="1"
              value={chest}
              onChange={(e) => setChest(Number(e.target.value))}
              className="w-full h-3 bg-amber-800 rounded-lg appearance-none cursor-pointer
                         hover:bg-amber-700 transition-colors"
              aria-valuemin={28}
              aria-valuemax={54}
              aria-valuenow={chest}
              aria-label="Chest measurement in inches"
            />
          </div>

          {/* Waist */}
          <div>
            <label
              htmlFor="waist"
              className="block mb-3 font-semibold text-amber-600 text-lg select-none"
            >
              Waist (inches):{' '}
              <span className="text-gray-700 font-normal">{waist}"</span>
            </label>
            <input
              type="range"
              id="waist"
              min="22"
              max="46"
              step="1"
              value={waist}
              onChange={(e) => setWaist(Number(e.target.value))}
              className="w-full h-3 bg-amber-800 rounded-lg appearance-none cursor-pointer
                         hover:bg-amber-700 transition-colors"
              aria-valuemin={22}
              aria-valuemax={46}
              aria-valuenow={waist}
              aria-label="Waist measurement in inches"
            />
          </div>
        </div>

        {/* Recommended size */}
        <div className="text-center mb-8">
          <p className="text-gray-700 mb-2 text-base sm:text-lg">
            Based on your measurements, your recommended size is:
          </p>
          <p className="text-amber-600 text-5xl sm:text-6xl font-extrabold select-none tracking-wide">
            {recommendedSize}
          </p>
        </div>

        {/* Note */}
        <p className="text-gray-600 text-center text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          If you are between sizes or unsure, we recommend choosing the larger size for comfort.
        </p>
      </div>
    </section>
  );
};

export default SizeGuideInteractive;
