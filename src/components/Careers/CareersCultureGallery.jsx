'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
  {
    src: 'https://plus.unsplash.com/premium_photo-1661277627943-9d4a72b27693?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Team brainstorming',
    label: 'Innovation & Ideas',
    details:
      'Our team engages in creative brainstorming sessions to cultivate breakthrough ideas that transform industries and set new benchmarks.',
    fullDetails:
      `At our company, innovation isn't just a buzzword; it's ingrained in our DNA. We foster a culture where every team member is empowered to challenge the status quo and bring forth fresh ideas.

We organize frequent, structured brainstorming workshops that bring together diverse perspectives from cross-functional teams including engineering, marketing, design, and sales. This interdisciplinary approach sparks creativity and uncovers novel solutions.

Our commitment includes:
- Monthly Innovation Sprints to rapidly prototype and test new concepts
- Access to cutting-edge innovation labs equipped with latest tech tools
- Funding and mentorship for employee-driven passion projects
- Recognition through awards, showcases, and company-wide celebrations

By nurturing an environment that encourages risk-taking and continuous learning, we've successfully launched multiple market-leading products and optimized internal processes.

Join us to be a catalyst for change and make your creative impact felt globally!`,
   moreOptions: {
      website: 'https:niaz-aigensite.vercel.app',
      contactEmail: 'niaz@example.com',
      shareText: 'Join our team adventures at Our Company!',
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Remote collaboration',
    label: 'Global Teamwork',
    details:
      'Collaboration transcending borders through state-of-the-art remote tools, connecting diverse talent for shared goals and growth.',
    fullDetails:
      `Our global teamwork culture is designed to leverage talent without geographical limitations, harnessing the best minds worldwide.

We invest in advanced communication platforms that facilitate real-time video conferences, asynchronous discussions, and project tracking, ensuring every team member stays engaged and aligned.

Key pillars include:
- Fully flexible working hours supporting work-life balance across time zones
- Regular virtual team-building sessions, cultural exchange events, and knowledge-sharing forums
- Comprehensive cross-cultural competency training to foster inclusion and understanding
- Diverse hiring practices that embrace global perspectives and skills

This approach has enabled us to deliver high-quality projects on time, foster innovation through diverse viewpoints, and build resilient, motivated teams.

Become part of a thriving global community that breaks down barriers and accelerates collective success!`,
   moreOptions: {
      website: 'https:niaz-aigensite.vercel.app',
      contactEmail: 'niaz@example.com',
      shareText: 'Join our team adventures at Our Company!',
    },
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1664297567290-18efebea7e74?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Celebration moment',
    label: 'We Celebrate Wins',
    details:
      'Recognizing and celebrating achievements of all sizes to motivate teams and foster a culture of appreciation.',
    fullDetails:
      `At our company, every success—no matter how big or small—is an opportunity to celebrate the collective efforts behind it.

We host monthly recognition ceremonies where team members nominate peers for exceptional contributions, highlighting innovation, teamwork, and leadership.

Our culture embraces:
- Personalized shoutouts during company meetings and internal newsletters
- Annual awards recognizing excellence in various domains like customer service, innovation, and impact
- Fun social activities post-achievement, including team lunches, parties, and retreats
- Digital platforms for peer-to-peer recognition and feedback

This practice of appreciation boosts morale, reinforces positive behaviors, and strengthens team cohesion, contributing to a healthy and motivated workplace.

Join us where your hard work and dedication will always be acknowledged and celebrated!`,
  moreOptions: {
      website: 'https:niaz-aigensite.vercel.app',
      contactEmail: 'niaz@example.com',
      shareText: 'Join our team adventures at Our Company!',
    },
  },
  {
    src: 'https://images.unsplash.com/photo-1632910121591-29e2484c0259?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Coding together',
    label: 'Collaboration Culture',
    details:
      'A dynamic culture of pairing, open communication, and teamwork driving innovation and high-quality outcomes.',
    fullDetails:
      `Collaboration lies at the heart of our development process. We believe that pairing talents and open communication produce superior products and happier teams.

Our collaborative culture features:
- Pair programming sessions to share knowledge and catch issues early
- Cross-functional projects encouraging diverse expertise and perspectives
- Transparent communication channels using Slack, Microsoft Teams, and regular standups
- Continuous feedback loops promoting learning and growth

This environment fosters trust, accelerates problem-solving, and enables rapid iteration, resulting in innovative and robust solutions.

Come contribute to a team where your voice is heard and collective success is prioritized!`,
   moreOptions: {
      website: 'https:niaz-aigensite.vercel.app',
      contactEmail: 'niaz@example.com',
      shareText: 'Join our team adventures at Our Company!',
    },
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1743125670276-1ac28a0bafe9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Relaxed break space',
    label: 'Work-Life Balance',
    details:
      'Designed spaces and programs that nurture well-being, creativity, and sustained productivity.',
    fullDetails:
      `We recognize that a healthy work-life balance is essential for creativity and long-term productivity.

Our commitment includes:
- Comfortable, relaxing break areas equipped with ergonomic furniture and calming decor
- Comprehensive wellness programs covering fitness classes, mindfulness sessions, and nutrition guidance
- Flexible working schedules allowing employees to tailor their hours to personal needs
- Mental health resources including counseling, workshops, and support groups

These initiatives help reduce stress, boost job satisfaction, and foster a positive workplace culture.

Join us to experience an environment where your well-being is a priority, enabling you to thrive both professionally and personally.`,
   moreOptions: {
      website: 'https:niaz-aigensite.vercel.app',
      contactEmail: 'niaz@example.com',
      shareText: 'Join our team adventures at Our Company!',
    },
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1723575911960-a155e5be8ba0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Team hiking event',
    label: 'Adventures Together',
    details:
      'Engaging in team outings and adventures that build camaraderie, trust, and lasting memories.',
    fullDetails:
      `We believe strong teams are built outside the office as well.

Our activities include:
- Regular hiking and outdoor adventure trips that encourage teamwork and resilience
- Team sports leagues and fitness challenges fostering friendly competition and health
- Annual retreats combining workshops with recreational activities for bonding
- Social gatherings like game nights, cultural celebrations, and volunteer events

These experiences strengthen interpersonal relationships, improve communication, and enhance workplace morale.

Come join a company where work and fun go hand in hand to build meaningful connections!`,
    moreOptions: {
      website: 'https:niaz-aigensite.vercel.app',
      contactEmail: 'niaz@example.com',
      shareText: 'Join our team adventures at Our Company!',
    },
  },
];


const overlayVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const modalBackdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalContentVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const CareersCultureGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [modalIndex, setModalIndex] = useState(null);
  const modalRef = useRef(null);

  // Trap focus & close modal with Esc key
  useEffect(() => {
    if (modalIndex !== null) {
      const focusableEls = modalRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      const firstFocusable = focusableEls?.[0];
      const lastFocusable = focusableEls?.[focusableEls.length - 1];

      function onKeyDown(e) {
        if (e.key === 'Escape') {
          e.preventDefault();
          setModalIndex(null);
        }
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
              e.preventDefault();
              lastFocusable.focus();
            }
          } else {
            if (document.activeElement === lastFocusable) {
              e.preventDefault();
              firstFocusable.focus();
            }
          }
        }
      }

      document.addEventListener('keydown', onKeyDown);
      firstFocusable?.focus();

      return () => document.removeEventListener('keydown', onKeyDown);
    }
  }, [modalIndex]);

  const handleShare = (text) => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Our Company Culture',
          text,
          url: window.location.href,
        })
        .catch(() => alert('Sharing failed or cancelled'));
    } else {
      navigator.clipboard.writeText(text + ' ' + window.location.href);
      alert('Share text copied to clipboard!');
    }
  };

  return (
    <section className="bg-white w-full flex justify-center px-4 min-h-screen">
      <div className="w-full max-w-[1100px] py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-10"
        >
          Life at Our Company
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer focus:outline-black"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              tabIndex={0}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
              aria-describedby={`desc-${index}`}
              aria-label={`${img.label}: ${img.details}`}
            >
              {/* Image with blur on hover */}
              <motion.img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-64 sm:h-72 object-cover transition-transform duration-300 ease-in-out"
                animate={{
                  scale: hoveredIndex === index ? 1.05 : 1,
                  filter: hoveredIndex === index ? 'blur(3px)' : 'blur(0px)',
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Overlay with details */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    key="overlay"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={overlayVariants}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-white/60 flex flex-col justify-center items-center p-6 text-center rounded-2xl"
                  >
                    <h3 className="text-black font-bold text-xl sm:text-2xl mb-2">
                      {img.label}
                    </h3>
                    <p
                      id={`desc-${index}`}
                      className="text-black text-sm sm:text-base mb-4 max-h-32 overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-800"
                    >
                      {img.details}
                    </p>
                    <button
                      onClick={() => setModalIndex(index)}
                      className="inline-block bg-black hover:bg-black text-gray-900 font-semibold px-6 py-2 rounded-md shadow-md transition"
                      type="button"
                      aria-label={`Learn more about ${img.label}`}
                    >
                      Learn More
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalIndex !== null && (
          <motion.div
            key="modal-backdrop"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalBackdropVariants}
            className="fixed inset-0 bg-white bg-opacity-90 backdrop-blur-sm z-[1000] flex justify-center items-center p-6 overflow-auto"
            aria-modal="true"
            role="dialog"
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            onClick={(e) => {
              if (e.target === e.currentTarget) setModalIndex(null);
            }}
          >
            <motion.div
              key="modal-content"
              ref={modalRef}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={modalContentVariants}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] p-8 overflow-y-auto text-black shadow-2xl relative focus:outline-black"
              tabIndex={-1}
            >
              {/* Close Button */}
              <button
                onClick={() => setModalIndex(null)}
                aria-label="Close details overlay"
                className="absolute top-5 right-5 text-black hover:text-black focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <h2
                id="modal-title"
                className="text-4xl font-extrabold mb-4 text-black"
              >
                {galleryImages[modalIndex].label}
              </h2>

              <img
                src={galleryImages[modalIndex].src}
                alt={galleryImages[modalIndex].alt}
                className="w-full rounded-2xl mb-6 object-cover max-h-72 mx-auto"
                loading="lazy"
              />

              <p
                id="modal-desc"
                className="whitespace-pre-line text-black text-lg mb-6 leading-relaxed max-h-[40vh] overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-800"
              >
                {galleryImages[modalIndex].fullDetails || galleryImages[modalIndex].details}
              </p>

              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                {galleryImages[modalIndex].moreOptions?.website && (
                  <a
                    href={galleryImages[modalIndex].moreOptions.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-black hover:bg-black text-gray-900 font-semibold px-5 py-3 rounded-md shadow-md transition text-center"
                    aria-label={`Visit website for ${galleryImages[modalIndex].label}`}
                  >
                    Visit Website
                  </a>
                )}
                {galleryImages[modalIndex].moreOptions?.contactEmail && (
                  <a
                    href={`mailto:${galleryImages[modalIndex].moreOptions.contactEmail}`}
                    className="inline-block bg-black hover:bg-black text-gray-900 font-semibold px-5 py-3 rounded-md shadow-md transition text-center"
                    aria-label={`Contact team for ${galleryImages[modalIndex].label}`}
                  >
                    Contact Us
                  </a>
                )}
                {galleryImages[modalIndex].moreOptions?.shareText && (
                  <button
                    onClick={() => handleShare(galleryImages[modalIndex].moreOptions.shareText)}
                    className="inline-block bg-black hover:bg-black text-gray-900 font-semibold px-5 py-3 rounded-md shadow-md transition"
                    aria-label={`Share about ${galleryImages[modalIndex].label}`}
                    type="button"
                  >
                    Share
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scrollbar styles (applied globally where needed) */}
      <style jsx>{`
        /* Thin yellow scrollbar for overlays and modal */
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #ffffff; /* gray-800 */
          border-radius: 9999px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #111827; /* amber-600 */
          border-radius: 9999px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background-color: #111827; /* amber-700 */
        }

        /* Firefox */
        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #111827 #ffffff;
        }
      `}</style>
    </section>
  );
};

export default CareersCultureGallery;
