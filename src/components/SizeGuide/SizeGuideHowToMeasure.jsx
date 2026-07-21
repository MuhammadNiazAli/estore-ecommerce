import React from 'react';

const steps = [
  {
    title: 'Chest / Bust',
    description:
      'Wrap the tape measure around the fullest part of your chest or bust, keeping it snug but comfortable.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-amber-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
      </svg>
    ),
  },
  {
    title: 'Waist',
    description:
      'Measure around your natural waistline, usually the narrowest part above your belly button.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-amber-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={2} fill="none" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8" />
      </svg>
    ),
  },
  {
    title: 'Hips',
    description:
      'Measure around the fullest part of your hips, keeping the tape level all around.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-amber-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <rect x="6" y="8" width="12" height="8" rx="4" ry="4" />
      </svg>
    ),
  },
];

const SizeGuideHowToMeasure = () => {
  return (
    <section className="w-full bg-white text-gray-800 flex justify-center py-12 px-4 sm:px-6 md:py-16">
      <div className="max-w-[1000px] w-full">
        <h2 className="text-amber-600 text-3xl sm:text-4xl font-extrabold mb-12 text-center select-none">
          How to Measure Yourself
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {steps.map(({ title, description, icon }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center md:items-start text-center md:text-left bg-white p-6 rounded-lg shadow-md flex-1 transition-transform hover:scale-[1.03]"
            >
              <div className="mb-5">{icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-amber-600 mb-3">{title}</h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SizeGuideHowToMeasure;
