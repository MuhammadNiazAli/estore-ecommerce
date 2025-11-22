import React from 'react';

const timelineEvents = [
  {
    date: 'Jan 2022',
    title: 'Launched Carbon Neutral Program',
    description:
      'Initiated our first carbon neutrality efforts, reducing emissions across all operations.',
  },
  {
    date: 'Jul 2022',
    title: 'Implemented Renewable Energy Systems',
    description:
      'Installed solar panels at headquarters powering 50% of energy needs sustainably.',
  },
  {
    date: 'Dec 2022',
    title: 'Waste Reduction Milestone',
    description:
      'Achieved a 40% reduction in landfill waste through recycling and reuse programs.',
  },
  {
    date: 'Apr 2023',
    title: 'Community Education Campaign',
    description:
      'Started workshops educating 5,000+ community members on sustainable practices.',
  },
];

const SustainabilityTimeline = () => {
  return (
    <section
      aria-labelledby="sustainability-timeline-title"
      className="bg-gray-900 text-yellow-400 px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="sustainability-timeline-title"
          className="text-3xl sm:text-4xl font-extrabold text-yellow-300 mb-16 text-center select-none"
        >
          Our Sustainability Journey
        </h2>

        <ol className="relative border-l-2 border-yellow-700 ml-6 sm:ml-10 space-y-12">
          {timelineEvents.map(({ date, title, description }, index) => (
            <li key={index} className="relative pl-8 sm:pl-12">
              {/* Circle */}
              <span
                className="absolute -left-[18px] top-2 w-6 h-6 rounded-full bg-yellow-400 border-2 border-yellow-700 shadow-md"
                aria-hidden="true"
              ></span>

              <time className="text-yellow-300 font-semibold text-sm sm:text-base select-text">
                {date}
              </time>

              <h3 className="mt-2 text-yellow-200 text-xl font-semibold select-text">{title}</h3>
              <p className="mt-2 text-yellow-200 text-sm sm:text-base leading-relaxed max-w-prose select-text">
                {description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default SustainabilityTimeline;
