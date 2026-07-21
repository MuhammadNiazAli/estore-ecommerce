'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  DocumentTextIcon,
  ChatBubbleBottomCenterTextIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

const steps = [
  {
    title: '1. Apply Online',
    description: 'Submit your resume and any relevant work samples through our application portal.',
    icon: DocumentTextIcon,
  },
  {
    title: '2. Initial Interview',
    description: 'Have a short video or phone call with our team to discuss your background and goals.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    title: '3. Team Interview',
    description: 'Meet with potential teammates to assess collaboration, problem-solving, and culture fit.',
    icon: UserGroupIcon,
  },
  {
    title: '4. Offer & Onboarding',
    description: 'If it’s a match, we’ll send an offer and walk you through a thoughtful onboarding experience.',
    icon: CheckCircleIcon,
  },
];

const CareersProcess = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCompletedSteps((prev) => [...new Set([...prev, currentStep])]);
      setCurrentStep((prev) => prev + 1);
    }
  };

  const resetProcess = () => {
    setCurrentStep(0);
    setCompletedSteps([]);
  };

  const goToStep = (index) => {
    if (index <= currentStep || completedSteps.includes(index)) {
      setCurrentStep(index);
    }
  };

  return (
    <section className="bg-white w-full flex justify-center px-4">
      <div className="w-full max-w-[1000px] py-16">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
        >
          Our Hiring Process
        </motion.h2>

        {/* Progress bar */}
        <div className="flex items-center justify-between mb-10 px-2 sm:px-6">
          {steps.map((_, i) => (
            <div key={i} className="flex-1 flex items-center">
              <div
                className={`h-3 w-3 rounded-full ${
                  i <= currentStep ? 'bg-amber-600' : 'bg-white'
                }`}
              />
              {i < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-1 ${
                    i < currentStep ? 'bg-amber-600' : 'bg-white'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = completedSteps.includes(index);
            const isActive = index === currentStep;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`rounded-xl p-6 shadow-lg border transition-all duration-300 cursor-pointer
                  ${isActive ? 'bg-white border-amber-600 scale-[1.01]' : 'bg-white border-transparent'}
                  ${isCompleted ? 'opacity-70 hover:opacity-100' : 'hover:scale-[1.02]'}
                `}
                onClick={() => goToStep(index)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`h-8 w-8 ${isCompleted ? 'text-green-400' : 'text-amber-600'}`} />
                  <span
                    className={`text-lg font-semibold ${
                      isCompleted
                        ? 'text-green-300'
                        : isActive
                        ? 'text-amber-500'
                        : 'text-amber-300'
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                <p className="text-amber-300 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={nextStep}
            disabled={currentStep >= steps.length - 1}
            className="bg-amber-600 hover:bg-amber-500 text-gray-900 font-bold py-2 px-6 rounded-lg transition shadow-md disabled:opacity-30"
          >
            Next Step →
          </button>

          <button
            onClick={resetProcess}
            className="flex items-center gap-2 border border-amber-600 text-amber-600 hover:text-amber-500 hover:border-amber-500 py-2 px-6 rounded-lg transition"
          >
            <ArrowPathIcon className="w-5 h-5" />
            Restart Process
          </button>
        </div>

        {/* Final Message */}
        {currentStep === steps.length - 1 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-center text-green-400 font-medium"
          >
             You're ready for onboarding!
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default CareersProcess;
