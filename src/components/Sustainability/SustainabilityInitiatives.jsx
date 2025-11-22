import React from 'react';

const initiatives = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-yellow-400 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17v-6h13M9 11V7a2 2 0 10-4 0v4H1l8 8 8-8h-6z"
        />
      </svg>
    ),
    title: 'Green Building Programs',
    description:
      'Designing and constructing eco-friendly buildings that minimize environmental impact.',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-yellow-400 flex-shrink-0"
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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.071 4.929A10 10 0 105.707 18.293"
        />
      </svg>
    ),
    title: 'Renewable Energy Adoption',
    description:
      'Accelerating the shift to solar, wind, and other renewable energy sources globally.',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-yellow-400 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h2l.4 2M7 13h10l1-5H6.4M7 13L5 6h14"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17h6" />
      </svg>
    ),
    title: 'Waste Management',
    description:
      'Innovative strategies for reducing, reusing, and recycling waste materials efficiently.',
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-yellow-400 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: 'Community Education',
    description:
      'Engaging and educating communities about sustainable living and environmental stewardship.',
  },
];

const SustainabilityInitiatives = () => {
  return (
    <section
      aria-labelledby="sustainability-initiatives-title"
      className="bg-gray-900 text-yellow-400 px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="sustainability-initiatives-title"
          className="text-3xl sm:text-4xl font-extrabold text-yellow-300 mb-12 text-center select-none"
        >
          Our Sustainability Initiatives
        </h2>

        <ul role="list" className="space-y-10">
          {initiatives.map(({ icon, title, description }, i) => (
            <li
              key={i}
              tabIndex={0}
              role="listitem"
              aria-label={title}
              className="
                flex items-start gap-5 rounded-xl p-6
                bg-yellow-900/10 hover:bg-yellow-900/25
                transition-colors duration-300 shadow-lg
                cursor-default
                outline-none
                focus-visible:ring-4 focus-visible:ring-yellow-500
                focus-visible:ring-opacity-70
                focus-visible:shadow-yellow-400
                select-text
              "
            >
              {icon}
              <div>
                <h3 className="text-xl font-semibold text-yellow-300 mb-2">{title}</h3>
                <p className="text-yellow-200 leading-relaxed text-sm sm:text-base tracking-wide">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SustainabilityInitiatives;
