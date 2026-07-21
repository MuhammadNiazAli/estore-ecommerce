import React, { useState } from "react";

const SaleCategoryTabs = ({ categories = [], onTabChange }) => {
  const [activeTab, setActiveTab] = useState(categories[0] || "All");

  const handleTabClick = (category) => {
    setActiveTab(category);
    if (onTabChange) onTabChange(category);
  };

  return (
    <section className="w-full flex justify-center px-4 ">
      <div className="max-w-[1000px] w-full">
        {/* Tabs Wrapper */}
        <div className="flex overflow-x-auto scrollbar-hide gap-4 sm:gap-6 py-4 border-b border-gray-300">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(category)}
              className={`relative font-semibold text-sm sm:text-base whitespace-nowrap px-4 sm:px-5 py-2 rounded-md transition-all duration-300
                ${
                  activeTab === category
                    ? "text-gray-900 bg-amber-600 shadow-md scale-100"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SaleCategoryTabs;
