import React, { useState } from "react";

const menSizes = [
  { size: "S", chest: '34-36"', waist: '28-30"' },
  { size: "M", chest: '38-40"', waist: '32-34"' },
  { size: "L", chest: '42-44"', waist: '36-38"' },
  { size: "XL", chest: '46-48"', waist: '40-42"' },
];

const womenSizes = [
  { size: "XS", bust: '31-33"', waist: '24-26"' },
  { size: "S", bust: '34-35"', waist: '27-28"' },
  { size: "M", bust: '36-37"', waist: '29-30"' },
  { size: "L", bust: '38.5-40"', waist: '31.5-33"' },
  { size: "XL", bust: '41.5-43"', waist: '34.5-36"' },
];

const SizeGuideHero = () => {
  const [activeTab, setActiveTab] = useState("men");

  return (
    <section
      className="w-full bg-white text-gray-800 flex justify-center px-4 py-12 sm:py-16 md:py-20 my-[-50px]"
      style={{ minHeight: "auto" }}
    >
      <div className="w-full max-w-5xl">
        {/* Title */}
        <h1
          className="text-center font-extrabold text-black select-none
            text-3xl sm:text-4xl md:text-5xl mb-6"
        >
          Size Guide
        </h1>

        {/* Intro text */}
        <p
          className="max-w-3xl mx-auto text-center text-gray-700 leading-relaxed
            text-sm sm:text-base md:text-lg mb-10 px-2 sm:px-0"
        >
          Find your perfect fit with our detailed size guide. Measure yourself
          carefully to ensure the best fit for your new purchase.
        </p>

        {/* Tabs */}
        <div className="flex justify-center space-x-6 mb-10">
          {["men", "women"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 font-semibold rounded-md transition-colors duration-300
                ${
                  activeTab === tab
                    ? "bg-black text-gray-900 shadow-lg"
                    : "bg-white text-gray-600 hover:text-black hover:bg-gray-500"
                }
              `}
              aria-pressed={activeTab === tab}
              aria-label={`Show ${tab} size guide`}
              type="button"
            >
              {tab === "men" ? "Men" : "Women"}
            </button>
          ))}
        </div>

        {/* Size tables */}
        <div
          className="overflow-x-auto rounded-lg shadow-lg bg-white
            scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-700"
          tabIndex={0}
          aria-label={`${activeTab} size guide table`}
        >
          {activeTab === "men" ? (
            <table className="w-full min-w-[400px] text-left border-collapse">
              <thead className="border-b border-black">
                <tr>
                  <th className="p-4 text-black text-sm sm:text-base md:text-lg">
                    Size
                  </th>
                  <th className="p-4 text-black text-sm sm:text-base md:text-lg">
                    Chest (inches)
                  </th>
                  <th className="p-4 text-black text-sm sm:text-base md:text-lg">
                    Waist (inches)
                  </th>
                </tr>
              </thead>
              <tbody>
                {menSizes.map(({ size, chest, waist }) => (
                  <tr
                    key={size}
                    className="border-b border-gray-200 hover:bg-black/10 transition-colors"
                  >
                    <td className="p-4 font-semibold text-sm sm:text-base md:text-lg">
                      {size}
                    </td>
                    <td className="p-4 text-sm sm:text-base md:text-lg">{chest}</td>
                    <td className="p-4 text-sm sm:text-base md:text-lg">{waist}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="w-full min-w-[440px] text-left border-collapse">
              <thead className="border-b border-black">
                <tr>
                  <th className="p-4 text-black text-sm sm:text-base md:text-lg">
                    Size
                  </th>
                  <th className="p-4 text-black text-sm sm:text-base md:text-lg">
                    Bust (inches)
                  </th>
                  <th className="p-4 text-black text-sm sm:text-base md:text-lg">
                    Waist (inches)
                  </th>
                </tr>
              </thead>
              <tbody>
                {womenSizes.map(({ size, bust, waist }) => (
                  <tr
                    key={size}
                    className="border-b border-gray-200 hover:bg-black/10 transition-colors"
                  >
                    <td className="p-4 font-semibold text-sm sm:text-base md:text-lg">
                      {size}
                    </td>
                    <td className="p-4 text-sm sm:text-base md:text-lg">{bust}</td>
                    <td className="p-4 text-sm sm:text-base md:text-lg">{waist}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Measuring Tips */}
        <div
          className="mt-10 max-w-xl mx-auto text-black text-center
            text-xs sm:text-sm md:text-base leading-relaxed select-text px-4 sm:px-0"
        >
          <p>
            <strong>Tip:</strong> Use a soft measuring tape and measure snugly
            around the fullest part of your chest/bust and the narrowest part of
            your waist for the most accurate results.
          </p>
          <p className="mt-2 text-gray-600 italic">
            If you're between sizes, we recommend sizing up for comfort.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SizeGuideHero;
