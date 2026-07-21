'use client';

import React from 'react';
import {
  MonitorSpeaker,
  Mic,
  MousePointerClick,
  Eye,
  ScreenShare,
  Smartphone,
} from 'lucide-react';
import { motion } from 'framer-motion';

const assistiveTechs = [
  {
    icon: <MonitorSpeaker className="w-7 h-7 text-black" aria-hidden="true" />,
    title: 'Screen Reader Compatibility',
    description:
      'We support major screen readers like NVDA, JAWS, and VoiceOver with proper ARIA labeling and semantic HTML structure.',
  },
  {
    icon: <Mic className="w-7 h-7 text-black" aria-hidden="true" />,
    title: 'Voice Command Navigation',
    description:
      'Our interface can be accessed using voice-control tools like Dragon NaturallySpeaking and Google Voice Access.',
  },
  {
    icon: <MousePointerClick className="w-7 h-7 text-black" aria-hidden="true" />,
    title: 'Pointer & Switch Devices',
    description:
      'We ensure clickable elements are large, visible, and logically ordered for alternative pointer/switch input devices.',
  },
  {
    icon: <Eye className="w-7 h-7 text-black" aria-hidden="true" />,
    title: 'Screen Magnifiers',
    description:
      'The layout and typography are optimized for users relying on magnification tools and zoom features.',
  },
  {
    icon: <ScreenShare className="w-7 h-7 text-black" aria-hidden="true" />,
    title: 'Text-to-Speech Tools',
    description:
      'Content is structured for clarity and simplicity so that tools like ChromeVox and Narrator deliver accurate results.',
  },
  {
    icon: <Smartphone className="w-7 h-7 text-black" aria-hidden="true" />,
    title: 'Mobile Accessibility',
    description:
      'Our platform supports mobile assistive tech such as TalkBack and VoiceOver for seamless experiences on smartphones and tablets.',
  },
];

const AssistiveTechSupport = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 text-gray-900 mb-[-30px]">
      <div className="max-w-[1000px] mx-auto space-y-10 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-bold text-black"
        >
          Assistive Technology Support
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed"
        >
          Our platform is built to be compatible with a wide range of assistive technologies, ensuring an inclusive experience for every user.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {assistiveTechs.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-md hover:shadow-gray-950/80 hover:border-gray-300 transition-shadow duration-300 cursor-default"
              role="region"
              aria-labelledby={`tech-title-${index}`}
            >
              <div className="flex items-center space-x-3 mb-3">
                {tech.icon}
                <h3
                  id={`tech-title-${index}`}
                  className="text-lg font-semibold text-black"
                >
                  {tech.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssistiveTechSupport;
