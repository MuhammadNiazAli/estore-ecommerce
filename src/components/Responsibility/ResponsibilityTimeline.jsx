'use client';

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const timelineEvents = [
  {
    year: '2015',
    title: 'Founded with Purpose',
    description:
      'Our company was born with a commitment to sustainability and social responsibility.',
  },
  {
    year: '2017',
    title: 'First Community Partnership',
    description:
      'We partnered with local NGOs to launch education and recycling initiatives.',
  },
  {
    year: '2019',
    title: 'Carbon Neutral Certification',
    description:
      'Achieved carbon neutrality across all our operations worldwide.',
  },
  {
    year: '2022',
    title: 'Global Expansion',
    description:
      'Expanded our impact programs to 10+ countries and doubled community outreach.',
  },
];

// Motion variants for each timeline item
const itemVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === 'left' ? -50 : 50,
    y: 20,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const ResponsibilityTimeline = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="w-full bg-white flex justify-center px-4 py-16"
      aria-labelledby="timeline-title"
      role="region"
    >
      <div className="max-w-[1000px] w-full relative">
        <motion.h2
          id="timeline-title"
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-black text-4xl font-bold text-center mb-12 select-none"
        >
          Our Journey
        </motion.h2>

        {/* Timeline vertical line */}
        <div
          aria-hidden="true"
          className="hidden sm:block absolute top-16 left-1/2 -translate-x-1/2 w-1 bg-black h-[calc(100%-4rem)] rounded-full"
        />

        {/* Timeline items container */}
        <div className="flex flex-col space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16">
          {timelineEvents.map((event, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.article
                key={idx}
                className={`relative bg-white rounded-lg p-6 shadow-lg cursor-default
                  focus:outline-black focus-visible:outline-2 focus-visible:outline-offset-2
                  hover:scale-[1.04] hover:shadow-black/50 transition-transform duration-300
                  sm:max-w-[90%]`}
                tabIndex={0}
                aria-labelledby={`event-title-${idx}`}
                aria-describedby={`event-desc-${idx}`}
                custom={isLeft ? 'left' : 'right'}
                initial="hidden"
                animate={controls}
                variants={itemVariants}
                style={{
                  gridColumn: isLeft ? '1 / 2' : '2 / 3',
                  justifySelf: isLeft ? 'end' : 'start',
                }}
              >
                {/* Connector circle */}
                <span
                  className={`hidden sm:block absolute top-6 ${
                    isLeft ? 'right-[-20px]' : 'left-[-20px]'
                  } w-6 h-6 rounded-full bg-black border-2 border-gray-200`}
                />
                <time
                  id={`event-year-${idx}`}
                  className="text-black font-bold text-lg select-none"
                >
                  {event.year}
                </time>
                <h3
                  id={`event-title-${idx}`}
                  className="text-gray-900 text-xl font-semibold mt-2 mb-2"
                >
                  {event.title}
                </h3>
                <p
                  id={`event-desc-${idx}`}
                  className="text-gray-700 text-sm leading-relaxed"
                >
                  {event.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResponsibilityTimeline;
