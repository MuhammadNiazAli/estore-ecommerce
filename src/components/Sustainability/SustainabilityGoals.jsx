import React from 'react';

const goals = [
  {
    icon: (
      <svg
        className="w-10 h-10 text-yellow-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
      </svg>
    ),
    title: 'Carbon Neutrality',
    description:
      'Achieve net-zero carbon emissions through energy efficiency and renewable energy adoption.',
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-yellow-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 17h16M4 7h16M4 12h16" />
      </svg>
    ),
    title: 'Waste Reduction',
    description:
      'Minimize waste production by promoting recycling, reuse, and sustainable packaging.',
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-yellow-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.104 0-2 .896-2 2 0 .53.21 1.01.555 1.355L12 14l1.445-2.645A1.994 1.994 0 0014 10c0-1.104-.896-2-2-2z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.071 4.929A10 10 0 105.707 18.293" />
      </svg>
    ),
    title: 'Renewable Energy',
    description:
      'Increase the share of clean, renewable energy sources in total energy consumption.',
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-yellow-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: 'Sustainable Water Use',
    description:
      'Promote efficient water use and protect water resources for future generations.',
  },
];

const SustainabilityGoals = () => {
  return (
    <section
      aria-labelledby="sustainability-goals-title"
      className="bg-gray-900 text-yellow-400 px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          id="sustainability-goals-title"
          className="text-3xl sm:text-4xl font-extrabold text-yellow-300 mb-14 select-none"
        >
          Our Key Sustainability Goals
        </h2>

        <div
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {goals.map(({ icon, title, description }, i) => (
            <article
              role="listitem"
              key={i}
              tabIndex={0}
              aria-label={title}
              className="
                bg-yellow-900/10 rounded-xl p-6 shadow-lg
                cursor-pointer
                outline-none
                transition-colors duration-300
                hover:bg-yellow-900/25
                focus-visible:ring-4 focus-visible:ring-yellow-500
                focus-visible:ring-opacity-70
                focus-visible:shadow-yellow-400
                select-text
              "
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-yellow-300 mb-3">{title}</h3>
              <p className="text-yellow-200 text-sm sm:text-base leading-relaxed tracking-wide">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilityGoals;
