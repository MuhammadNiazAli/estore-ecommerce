import React from 'react';

const impactData = [
  {
    label: 'Tons of CO₂ Reduced',
    value: '12,450',
    description: 'Equivalent to removing 2,700 cars from the road annually.',
  },
  {
    label: 'Renewable Energy Projects',
    value: '85',
    description: 'Solar, wind, and hydro projects supported worldwide.',
  },
  {
    label: 'Waste Diverted from Landfills (tons)',
    value: '7,300',
    description: 'Through recycling and waste reduction programs.',
  },
  {
    label: 'Community Members Engaged',
    value: '15,000+',
    description: 'Educated and empowered for sustainable living.',
  },
];

const SustainabilityImpact = () => {
  return (
    <section
      aria-labelledby="sustainability-impact-title"
      className="bg-white text-black px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2
          id="sustainability-impact-title"
          className="text-3xl sm:text-4xl font-extrabold text-black mb-16 select-none"
        >
          Our Impact in Numbers
        </h2>

        <div
          role="list"
          className="grid grid-cols-1 sm:grid-cols-2 gap-12"
        >
          {impactData.map(({ label, value, description }, i) => (
            <article
              key={i}
              role="listitem"
              tabIndex={0}
              aria-label={`${value} - ${label}`}
              className="
                bg-black/10 rounded-xl p-8 shadow-lg
                cursor-default
                outline-none
                transition
                duration-300
                hover:bg-black/25
                focus-visible:ring-4 focus-visible:ring-black
                focus-visible:ring-opacity-70
                focus-visible:shadow-black
                select-text
              "
            >
              <p className="text-black font-extrabold text-5xl sm:text-6xl mb-4 leading-none tracking-tight">
                {value}
              </p>
              <h3 className="text-black font-semibold text-xl sm:text-2xl mb-3">
                {label}
              </h3>
              <p className="text-black text-base sm:text-lg leading-relaxed tracking-wide">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilityImpact;
