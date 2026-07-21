import React, { useState, useEffect, useRef } from 'react';

const categories = [
  { id: 'jackets', label: 'Jackets' },
  { id: 'shoes', label: 'Shoes' },
  { id: 'accessories', label: 'Accessories' },
  { id: 'bags', label: 'Bags' },
  { id: 'watches', label: 'Watches' },
  { id: 'hats', label: 'Hats' },
  { id: 'scarves', label: 'Scarves' },
  { id: 'sunglasses', label: 'Sunglasses' },
  { id: 'belts', label: 'Belts' },
  { id: 'gloves', label: 'Gloves' },
];

const BestsellersCategoryTabs = () => {
  const [active, setActive] = useState(categories[0].id);
  const tabsRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0, top: 0 });

  // Scroll active tab into view on small screens
  useEffect(() => {
    if (window.innerWidth >= 1024) return; // only for mobile/tablet
    const activeTab = tabsRef.current?.querySelector(`[data-id="${active}"]`);
    if (activeTab && tabsRef.current) {
      activeTab.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  }, [active]);

  // Update underline position and size
  useEffect(() => {
    const activeTab = tabsRef.current?.querySelector(`[data-id="${active}"]`);
    if (activeTab) {
      setUnderlineStyle({
        width: activeTab.offsetWidth,
        left: activeTab.offsetLeft,
        top: activeTab.offsetTop + activeTab.offsetHeight - 3, // position bottom
      });
    }
  }, [active]);

  return (
    <nav
      aria-label="Bestsellers categories"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-6 relative mb-[-40px]"
    >
      {/* Tabs container */}
      <div
        ref={tabsRef}
        className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-6
          lg:overflow-visible overflow-x-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent snap-x snap-mandatory
          relative
        "
        role="tablist"
      >
        {categories.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              data-id={id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${id}`}
              id={`tab-${id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActive(id)}
              className={`
                relative snap-start text-base sm:text-lg font-medium whitespace-nowrap px-2 py-2 w-full text-center rounded-md
                transition-all duration-300 ease-in-out
                ${isActive
                  ? 'text-black dark:text-black'
                  : 'text-gray-600 dark:text-gray-600 hover:text-black dark:hover:text-black'}
                focus:outline-none
              `}
            >
              {label}
            </button>
          );
        })}

        {/* Underline */}
        <span
          className="absolute bg-black rounded-full transition-all duration-500 ease-[cubic-bezier(.68,-0.55,.27,1.55)]"
          style={{
            width: underlineStyle.width,
            height: 3,
            transform: `translate(${underlineStyle.left}px, ${underlineStyle.top}px)`,
          }}
          aria-hidden="true"
        />
      </div>
    </nav>
  );
};

export default BestsellersCategoryTabs;
