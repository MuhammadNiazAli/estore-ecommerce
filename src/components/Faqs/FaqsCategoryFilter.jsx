import React, { useState } from 'react';

const categories = [
  'All',
  'Account',
  'Billing',
  'Shipping',
  'Technical',
  'Returns',
  'Privacy',
  'Other',
];

const FaqsCategoryFilter = ({ onSelectCategory }) => {
  const [selected, setSelected] = useState('All');

  const handleClick = (category) => {
    setSelected(category);
    if (onSelectCategory) onSelectCategory(category);
  };

  return (
    <nav
      aria-label="FAQ Categories"
      className="bg-white py-4 px-4 max-w-[1000px] mx-auto"
    >
      <ul
        className="
          flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4
          "
      >
        {categories.map((cat) => {
          const isSelected = selected === cat;
          return (
            <li key={cat}>
              <button
                type="button"
                onClick={() => handleClick(cat)}
                className={`
                  px-4 py-2 rounded-md font-semibold text-sm whitespace-nowrap transition
                  focus:outline-none focus:ring-2 focus:ring-amber-600
                  ${
                    isSelected
                      ? 'bg-amber-700 text-gray-900 shadow-md'
                      : 'bg-white text-amber-600 hover:bg-amber-800 hover:text-gray-900'
                  }
                `}
                aria-current={isSelected ? 'true' : undefined}
              >
                {cat}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default FaqsCategoryFilter;
