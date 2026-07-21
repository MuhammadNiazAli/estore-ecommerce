import React from 'react';

const tips = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-amber-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    title: 'Measure Twice',
    description: 'Always double-check your measurements for the most accurate fit.',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-amber-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
    title: 'Refer to Size Chart',
    description: 'Use our detailed size chart to pick the best size for you.',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-amber-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21l6-3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21l-6-3" />
      </svg>
    ),
    title: 'Ask for Help',
    description: 'Contact our support if you have any questions or concerns.',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-amber-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    title: 'Choose Comfort',
    description: 'If unsure, always pick the larger size for better comfort.',
  },
];

const SizeGuideTips = () => {
  return (
    <section className="w-full bg-white text-gray-800 flex justify-center py-12 px-4 sm:px-6 md:py-16">
      <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {tips.map(({ icon, title, description }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg p-6 flex flex-col items-center text-center shadow-md
                       hover:bg-amber-200/10 transition-colors duration-300 cursor-default"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-amber-600 text-xl sm:text-2xl font-semibold mb-3 select-none">
              {title}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SizeGuideTips;
