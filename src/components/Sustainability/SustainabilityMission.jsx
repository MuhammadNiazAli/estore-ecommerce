import React from 'react';

const SustainabilityMission = () => {
  return (
    <section
      aria-labelledby="sustainability-mission-title"
      className="bg-white text-amber-600 px-6 sm:px-8 lg:px-12 py-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          id="sustainability-mission-title"
          className="text-4xl font-extrabold text-amber-500 mb-8 select-none"
        >
          Our Mission
        </h2>
        <p className="text-amber-400 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto tracking-wide">
          We are committed to fostering a sustainable future by driving innovation, promoting
          responsible environmental stewardship, and empowering communities worldwide. Our
          mission is to integrate sustainable practices into every aspect of business and society,
          ensuring a healthier planet for generations to come.
        </p>
        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-8">
          {[
            {
              title: 'Innovate',
              description:
                'Develop cutting-edge sustainable technologies and solutions.',
            },
            {
              title: 'Empower',
              description:
                'Equip individuals and organizations with the knowledge and tools for sustainable impact.',
            },
            {
              title: 'Protect',
              description:
                'Preserve natural resources and promote eco-friendly practices worldwide.',
            },
          ].map(({ title, description }, i) => (
            <article
              key={i}
              tabIndex={0}
              aria-label={title}
              className="
                bg-amber-950/20 rounded-xl p-6 shadow-lg flex-1
                cursor-default
                outline-none
                transition-colors duration-300
                hover:bg-amber-950/30
                focus-visible:ring-4 focus-visible:ring-amber-700
                focus-visible:ring-opacity-70
                focus-visible:shadow-amber-600
                select-text
              "
            >
              <h3 className="text-amber-500 font-semibold text-2xl mb-4">{title}</h3>
              <p className="text-amber-400 text-base leading-relaxed tracking-wide">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilityMission;
