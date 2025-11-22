import React from 'react';

const values = [
  {
    title: 'Integrity',
    description: 'Honesty and transparency in everything we do.',
    icon: (
      <svg
        className="w-8 h-8 text-yellow-400 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 1v22M17 5l-5 7-5-7" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    description: 'Pushing boundaries to deliver cutting-edge solutions.',
    icon: (
      <svg
        className="w-8 h-8 text-yellow-400 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Customer Focus',
    description: 'Our customers are at the heart of everything we create.',
    icon: (
      <svg
        className="w-8 h-8 text-yellow-400 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M3 12l2-2 4 4 8-8 4 4" />
      </svg>
    ),
  },
  {
    title: 'Sustainability',
    description: 'Committed to responsible practices for a better future.',
    icon: (
      <svg
        className="w-8 h-8 text-yellow-400 mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 21V3M6 9l6 6 6-6" />
      </svg>
    ),
  },
];

const AboutValues = () => {
  return (
    <section
      className="bg-gray-900 text-gray-100 py-16 px-6 sm:px-12 lg:px-20 my-[-40px]"
      aria-label="Our core values"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-400 mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {values.map(({ title, description, icon }, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-md border border-gray-700 hover:shadow-yellow-400/30 transition-shadow duration-300 flex flex-col items-center"
              style={{ minHeight: '260px', maxHeight: '260px' }}
            >
              <div className="flex justify-center">{icon}</div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-gray-300 leading-snug">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
