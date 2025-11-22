import React from 'react';
import { Eye, Handshake, Heart, Ear } from 'lucide-react';

const commitments = [
  {
    icon: <Eye className="w-8 h-8 text-yellow-400" aria-hidden="true" />,
    title: 'Visual Clarity',
    description:
      'Ensuring all content is perceivable with high contrast and screen reader support.',
  },
  {
    icon: <Handshake className="w-8 h-8 text-yellow-400" aria-hidden="true" />,
    title: 'User Empowerment',
    description:
      'We prioritize intuitive navigation and user control for everyone.',
  },
  {
    icon: <Heart className="w-8 h-8 text-yellow-400" aria-hidden="true" />,
    title: 'Inclusive Design',
    description:
      'Our design considers all abilities and disabilities to create a welcoming experience.',
  },
  {
    icon: <Ear className="w-8 h-8 text-yellow-400" aria-hidden="true" />,
    title: 'Assistive Technologies',
    description:
      'Compatibility with assistive devices ensures no user is left behind.',
  },
];

const AccessibilityCommitment = () => {
  return (
    <section
      aria-labelledby="commitment-heading"
      className="w-full bg-gray-900 flex justify-center px-4 py-10 sm:py-16"
    >
      <div className="max-w-[1000px] w-full text-yellow-400">
        <h2
          id="commitment-heading"
          className="text-3xl sm:text-4xl font-bold mb-8 text-center"
          style={{ textShadow: '0 0 8px #FFD70099' }}
        >
          Our Accessibility Commitment
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-[900px] mx-auto">
          {commitments.map(({ icon, title, description }) => (
            <li
              key={title}
              className="flex items-start space-x-4 bg-gray-800 p-5 rounded-lg shadow-lg hover:bg-gray-950 transition-colors duration-300"
            >
              <div>{icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{title}</h3>
                <p className="text-sm font-light leading-relaxed">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AccessibilityCommitment;
