'use client';

import React, { useState, useEffect, useRef } from 'react';
import { BriefcaseIcon, ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const roles = [
  {
    title: 'Frontend Developer',
    location: 'Remote',
    type: 'Full-Time',
    description: `As a Frontend Developer, you will create stunning, performant user interfaces with React and modern tools. You'll work closely with designers and backend engineers.`,
    requirements: [
      '3+ years experience with React.js',
      'Strong JavaScript and TypeScript skills',
      'Experience with responsive design and accessibility',
      'Knowledge of modern CSS and animation',
    ],
  },
  {
    title: 'Backend Developer',
    location: 'Berlin, Germany',
    type: 'Full-Time',
    description: `Build robust, scalable backend services with Node.js, Express, and databases. Collaborate to design APIs and optimize performance.`,
    requirements: [
      'Proficiency in Node.js and Express',
      'Experience with SQL and NoSQL databases',
      'Understanding of RESTful API design',
      'Familiarity with cloud platforms (AWS/GCP/Azure)',
    ],
  },
  {
    title: 'UI/UX Designer',
    location: 'Remote',
    type: 'Contract',
    description: `Design beautiful, user-friendly interfaces and workflows. Collaborate closely with frontend engineers to bring designs to life.`,
    requirements: [
      'Strong portfolio in UI/UX design',
      'Experience with Figma, Sketch, or Adobe XD',
      'Knowledge of user-centered design principles',
      'Ability to prototype and iterate quickly',
    ],
  },
  {
    title: 'DevOps Engineer',
    location: 'New York, USA',
    type: 'Full-Time',
    description: `Manage cloud infrastructure and CI/CD pipelines to ensure smooth deployments and high availability of services.`,
    requirements: [
      'Experience with AWS, Azure, or Google Cloud',
      'Strong knowledge of Docker, Kubernetes, and Terraform',
      'Familiarity with Jenkins, GitLab CI, or CircleCI',
      'Ability to automate infrastructure and monitor systems',
    ],
  },
  {
    title: 'Mobile App Developer',
    location: 'Remote',
    type: 'Full-Time',
    description: `Develop high-quality mobile applications for iOS and Android using React Native or native languages.`,
    requirements: [
      '2+ years experience with React Native or Swift/Kotlin',
      'Strong understanding of mobile UX/UI principles',
      'Knowledge of app store submission and maintenance',
      'Experience integrating RESTful APIs and third-party SDKs',
    ],
  },
  {
    title: 'Data Scientist',
    location: 'San Francisco, USA',
    type: 'Full-Time',
    description: `Analyze large datasets to extract actionable insights and build predictive models to drive business decisions.`,
    requirements: [
      'Proficiency in Python or R for data analysis',
      'Experience with machine learning frameworks like TensorFlow or PyTorch',
      'Strong statistics and data visualization skills',
      'Familiarity with SQL and big data technologies',
    ],
  },
  {
    title: 'QA Engineer',
    location: 'London, UK',
    type: 'Contract',
    description: `Develop and execute automated and manual test cases to ensure product quality and reliability.`,
    requirements: [
      'Experience with Selenium, Cypress, or similar tools',
      'Strong understanding of software testing methodologies',
      'Ability to write clear bug reports and communicate with development teams',
      'Knowledge of CI/CD integration for automated testing',
    ],
  },
  {
    title: 'Product Manager',
    location: 'Remote',
    type: 'Full-Time',
    description: `Lead cross-functional teams to define product vision, roadmap, and deliver impactful features that solve user problems.`,
    requirements: [
      'Strong communication and leadership skills',
      'Experience with Agile methodologies and tools like Jira',
      'Ability to analyze market trends and customer feedback',
      'Background in tech or software development is a plus',
    ],
  },
  {
    title: 'Cloud Architect',
    location: 'Toronto, Canada',
    type: 'Full-Time',
    description: `Design scalable and secure cloud architectures to support business applications and data workflows.`,
    requirements: [
      'Deep knowledge of AWS, Azure, or Google Cloud services',
      'Experience designing microservices and serverless applications',
      'Strong understanding of security best practices in the cloud',
      'Ability to collaborate with development and operations teams',
    ],
  },
  {
    title: 'Security Engineer',
    location: 'Remote',
    type: 'Full-Time',
    description: `Implement and maintain security protocols to protect company data and infrastructure from threats.`,
    requirements: [
      'Experience with penetration testing and vulnerability assessment',
      'Knowledge of network security, firewalls, and encryption',
      'Familiarity with compliance frameworks like GDPR, HIPAA, or SOC2',
      'Ability to develop security policies and train staff',
    ],
  },
  {
    title: 'Full Stack Developer',
    location: 'Austin, USA',
    type: 'Full-Time',
    description: `Build and maintain both frontend and backend systems using modern frameworks and technologies.`,
    requirements: [
      'Proficient in JavaScript/TypeScript, React, Node.js',
      'Experience with database design (SQL and NoSQL)',
      'Understanding of RESTful and GraphQL APIs',
      'Strong problem-solving and debugging skills',
    ],
  },
  {
    title: 'Technical Writer',
    location: 'Remote',
    type: 'Contract',
    description: `Create clear and concise documentation for APIs, SDKs, and user manuals to enhance developer and customer experience.`,
    requirements: [
      'Excellent writing and communication skills',
      'Familiarity with technical concepts and software development',
      'Experience with documentation tools like Markdown, Docusaurus',
      'Ability to collaborate with engineering and product teams',
    ],
  },
  {
    title: 'AI/ML Engineer',
    location: 'Boston, USA',
    type: 'Full-Time',
    description: `Develop machine learning models and AI-driven features to innovate products and services.`,
    requirements: [
      'Strong programming skills in Python or Java',
      'Experience with ML frameworks such as TensorFlow or PyTorch',
      'Knowledge of data preprocessing, feature engineering',
      'Ability to deploy models into production environments',
    ],
  },
  {
    title: 'Site Reliability Engineer (SRE)',
    location: 'Remote',
    type: 'Full-Time',
    description: `Ensure system reliability and scalability by implementing automation, monitoring, and incident response strategies.`,
    requirements: [
      'Experience with Linux system administration',
      'Strong scripting skills (Python, Bash)',
      'Familiarity with monitoring tools like Prometheus, Grafana',
      'Understanding of cloud infrastructure and networking',
    ],
  },
  {
    title: 'Database Administrator',
    location: 'Chicago, USA',
    type: 'Full-Time',
    description: `Manage and optimize relational and NoSQL databases to ensure data integrity, availability, and performance.`,
    requirements: [
      'Experience with MySQL, PostgreSQL, MongoDB, or Cassandra',
      'Strong backup, recovery, and security skills',
      'Ability to tune queries and optimize database performance',
      'Familiarity with cloud database services',
    ],
  },
  {
    title: 'Digital Marketing Specialist',
    location: 'Remote',
    type: 'Contract',
    description: `Plan and execute digital marketing campaigns to increase brand awareness and drive user acquisition.`,
    requirements: [
      'Experience with SEO, SEM, Google Analytics, and social media',
      'Strong content creation and copywriting skills',
      'Ability to analyze campaign performance and optimize strategies',
      'Knowledge of marketing automation tools',
    ],
  },
  {
    title: 'Technical Support Engineer',
    location: 'Remote',
    type: 'Full-Time',
    description: `Provide expert technical assistance to customers, troubleshoot issues, and ensure timely resolution.`,
    requirements: [
      'Excellent communication and problem-solving skills',
      'Experience with software troubleshooting and debugging',
      'Knowledge of customer support tools like Zendesk',
      'Ability to work independently and in teams',
    ],
  },
  {
    title: 'Scrum Master',
    location: 'Berlin, Germany',
    type: 'Full-Time',
    description: `Facilitate Agile ceremonies, remove blockers, and coach teams to improve productivity and collaboration.`,
    requirements: [
      'Certified Scrum Master (CSM) or equivalent',
      'Strong knowledge of Agile methodologies',
      'Excellent interpersonal and conflict resolution skills',
      'Experience working with distributed teams',
    ],
  },
  {
    title: 'Embedded Systems Engineer',
    location: 'Munich, Germany',
    type: 'Full-Time',
    description: `Design and develop firmware and software for embedded devices in consumer electronics or IoT products.`,
    requirements: [
      'Proficiency in C/C++ programming',
      'Experience with real-time operating systems (RTOS)',
      'Knowledge of hardware interfaces and debugging tools',
      'Strong problem-solving and analytical skills',
    ],
  },
  {
    title: 'Game Developer',
    location: 'Remote',
    type: 'Contract',
    description: `Create immersive games using Unity or Unreal Engine, focusing on gameplay mechanics, graphics, and performance.`,
    requirements: [
      'Experience with C# (Unity) or C++ (Unreal Engine)',
      'Strong understanding of game physics and AI',
      'Ability to optimize code for performance',
      'Passion for gaming and creative problem-solving',
    ],
  },
  {
    title: 'Accessibility Specialist',
    location: 'Remote',
    type: 'Contract',
    description: `Ensure digital products comply with accessibility standards (WCAG) to provide inclusive user experiences.`,
    requirements: [
      'Knowledge of WCAG guidelines and assistive technologies',
      'Experience conducting accessibility audits and testing',
      'Ability to train teams on accessibility best practices',
      'Strong HTML, CSS, and JavaScript skills',
    ],
  },
  {
    title: 'Technical Recruiter',
    location: 'Remote',
    type: 'Full-Time',
    description: `Identify, attract, and hire top tech talent by building strong relationships and managing the recruitment pipeline.`,
    requirements: [
      'Experience in technical recruiting or talent acquisition',
      'Strong communication and negotiation skills',
      'Familiarity with ATS and sourcing tools',
      'Ability to assess candidate skills and cultural fit',
    ],
  },
];

const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: { repeat: Infinity, duration: 1, ease: 'linear' },
  },
};

const CareersHero = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false); // spinner for loading role details
  const [scrolledToBottom, setScrolledToBottom] = useState(false);
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(null); // null means showing list
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (showPopup) {
      setLoading(false);
      setSelectedRoleIndex(null);
    }
  }, [showPopup]);

  useEffect(() => {
    const esc = (e) => {
      if (e.key === 'Escape') {
        if (showSuccessPopup) {
          setShowSuccessPopup(false);
        } else if (showPopup) {
          setShowPopup(false);
        }
      }
    };
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [showPopup, showSuccessPopup]);

  // Scroll listener for roles list
  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 5;
    setScrolledToBottom(atBottom);
  };

  const handleArrowClick = () => {
    const el = scrollRef.current;
    if (!el) return;
    if (scrolledToBottom) {
      el.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    }
  };

  // When clicking a role: show loading spinner then show detail
  const handleRoleClick = (index) => {
    setLoading(true);
    setSelectedRoleIndex(null);
    // simulate loading delay
    setTimeout(() => {
      setSelectedRoleIndex(index);
      setLoading(false);
      // Reset scroll for details content (optional)
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    }, 1000);
  };

  // Back to roles list
  const handleBackToList = () => {
    setSelectedRoleIndex(null);
  };

  // After submitting application, show success popup
  const handleApplicationSubmit = () => {
    setShowPopup(false);
    setSelectedRoleIndex(null);
    setLoading(false);
    setShowSuccessPopup(true);
  };

  return (
    <>
      <section className="relative bg-white w-full flex justify-center px-6 sm:px-8 md:px-12 py-16 sm:py-20 md:py-28 overflow-hidden my-[-50px]">
        <div className="relative z-10 max-w-[1000px] w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mx-auto mb-6 flex justify-center rounded-full bg-amber-600/20 p-4 w-20 h-20 items-center shadow-lg"
          >
            <BriefcaseIcon className="h-10 w-10 text-amber-600" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className="font-extrabold text-gray-900 text-[clamp(2rem,4vw,3.5rem)] leading-tight max-w-xl mx-auto"
          >
            Join Our Mission
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.7, ease: 'easeOut' }}
            className="mx-auto mt-3 w-24 h-1 bg-amber-600 origin-left rounded"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="mt-6 max-w-2xl mx-auto text-amber-400 text-lg sm:text-xl leading-relaxed tracking-wide"
          >
            Be part of a passionate, innovative team shaping the future of digital commerce and design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
            className="mt-10"
          >
            <button
              onClick={() => setShowPopup(true)}
              className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-gray-900 font-semibold text-lg px-8 py-3 rounded-lg shadow-lg transition duration-300"
            >
              Explore Open Roles
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Main Roles Popup */}
        <AnimatePresence>
          {showPopup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-xl p-4"
              aria-modal="true"
              role="dialog"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white text-gray-900 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl border border-gray-200 flex flex-col"
              >
                {/* Close button */}
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-20"
                  aria-label="Close popup"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>

                <div className="flex-1 flex flex-col p-6 sm:p-8 relative">
                  <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-4">
                    {selectedRoleIndex === null ? "We're Hiring!" : roles[selectedRoleIndex].title}
                  </h2>

                  {loading ? (
                    <motion.div
                      variants={spinnerVariants}
                      animate="animate"
                      className="w-10 h-10 border-4 border-amber-600 border-t-transparent rounded-full mx-auto my-10"
                    />
                  ) : selectedRoleIndex === null ? (
                    <>
                      {/* Roles List */}
                      <div
                        ref={scrollRef}
                        onScroll={onScroll}
                        className="overflow-y-auto pr-2 space-y-3 max-h-[65vh] scroll-smooth careers-scrollbar"
                      >
                        {roles.map((role, i) => (
                          <motion.button
                            key={i}
                            onClick={() => handleRoleClick(i)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 * i }}
                            className="w-full text-left p-4 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-amber-950/50 focus:outline-none focus:ring-2 focus:ring-amber-600"
                            type="button"
                            aria-label={`View details for ${role.title}`}
                          >
                            <h3 className="text-lg font-semibold text-amber-500">{role.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">
                              {role.type} · {role.location}
                            </p>
                          </motion.button>
                        ))}
                      </div>

                      {/* Scroll Arrow */}
                      <button
                        onClick={handleArrowClick}
                        aria-label={scrolledToBottom ? 'Scroll to top' : 'Scroll to bottom'}
                        className={`absolute left-1/2 -translate-x-1/2 bg-amber-600 hover:bg-amber-500 text-gray-900 rounded-full p-2 shadow-lg transition
                          ${
                            scrolledToBottom
                              ? 'top-6'   // Arrow on top when scrolled to bottom
                              : 'bottom-6' // Arrow on bottom when not at bottom
                          }
                          z-10
                        `}
                        style={{ width: '44px', height: '44px' }}
                        type="button"
                      >
                        {scrolledToBottom ? (
                          <ChevronUpIcon className="w-6 h-6 mx-auto" />
                        ) : (
                          <ChevronDownIcon className="w-6 h-6 mx-auto" />
                        )}
                      </button>
                    </>
                  ) : (
                    <>
                      {/* Role Details View */}
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="overflow-y-auto max-h-[65vh] pr-2 careers-scrollbar"
                        ref={scrollRef}
                      >
                        <p className="mb-4 text-amber-400">{roles[selectedRoleIndex].description}</p>

                        <h4 className="font-semibold text-amber-500 mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside mb-6 text-gray-700">
                          {roles[selectedRoleIndex].requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>

                        {/* Application form */}
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            // Show success popup
                            handleApplicationSubmit();
                          }}
                          className="space-y-4"
                        >
                          <div>
                            <label htmlFor="name" className="block mb-1 text-amber-500 font-medium">
                              Your Name
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              className="w-full rounded-md bg-white border border-gray-200 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
                              placeholder="John Doe"
                            />
                          </div>

                          <div>
                            <label htmlFor="email" className="block mb-1 text-amber-500 font-medium">
                              Email Address
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              className="w-full rounded-md bg-white border border-gray-200 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
                              placeholder="john@example.com"
                            />
                          </div>

                          <div>
                            <label htmlFor="coverLetter" className="block mb-1 text-amber-500 font-medium">
                              Cover Letter
                            </label>
                            <textarea
                              id="coverLetter"
                              name="coverLetter"
                              rows={4}
                              className="w-full rounded-md bg-white border border-gray-200 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-600 resize-none"
                              placeholder="Why do you want to join us?"
                              required
                            />
                          </div>

                          <div className="flex justify-between items-center">
                            <button
                              type="button"
                              onClick={handleBackToList}
                              className="inline-flex items-center gap-1 px-4 py-2 rounded-md bg-white hover:bg-gray-500 transition text-amber-600 font-semibold"
                            >
                              ← Back to roles
                            </button>
                            <button
                              type="submit"
                              className="inline-flex items-center gap-1 px-6 py-2 rounded-md bg-amber-600 hover:bg-amber-500 transition text-gray-900 font-semibold"
                            >
                              Apply
                            </button>
                          </div>
                        </form>
                      </motion.div>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success Popup */}
        <AnimatePresence>
          {showSuccessPopup && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-60 flex items-center justify-center bg-white/70 backdrop-blur-xl p-4"
              aria-modal="true"
              role="alertdialog"
              aria-labelledby="success-title"
              aria-describedby="success-desc"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white text-gray-900 rounded-2xl w-full max-w-md max-h-[60vh] overflow-hidden shadow-2xl border border-gray-200 flex flex-col p-8"
              >
                <button
                  onClick={() => setShowSuccessPopup(false)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-20"
                  aria-label="Close success popup"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>

                <div className="text-center">
                  <BriefcaseIcon className="mx-auto mb-4 h-14 w-14 text-amber-600" />
                  <h3 id="success-title" className="text-2xl font-bold text-amber-600 mb-2">
                    Application Submitted!
                  </h3>
                  <p id="success-desc" className="text-amber-400 mb-6">
                    Thank you for applying. You will be contacted soon via SMS and email with further details.
                  </p>
                  <button
                    onClick={() => setShowSuccessPopup(false)}
                    className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-gray-900 font-semibold text-lg px-8 py-3 rounded-lg shadow-lg transition duration-300"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        /* For Firefox */
        .careers-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(252, 211, 77, 0.7) #ffffff; /* thumb amber-600/70 and track gray-900 */
        }
        /* For Webkit Browsers */
        .careers-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .careers-scrollbar::-webkit-scrollbar-track {
          background: #ffffff; /* gray-900 */
          border-radius: 9999px;
        }
        .careers-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(252, 211, 77, 0.7); /* amber-600/70 */
          border-radius: 9999px;
          border: 2px solid transparent; /* to create padding */
          background-clip: content-box;
        }
        .careers-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(252, 211, 77, 0.9);
        }
      `}</style>
    </>
  );
};

export default CareersHero;
