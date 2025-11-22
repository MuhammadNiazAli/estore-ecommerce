'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PaperAirplaneIcon,
  XMarkIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/solid';

const roles = [
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'Mobile App Developer',
  'iOS Developer',
  'Android Developer',
  'Web Developer',
  'UI/UX Designer',
  'Product Manager',
  'Marketing Specialist',
  'DevOps Engineer',
  'Cloud Solutions Architect',
  'Data Scientist',
  'Machine Learning Engineer',
  'AI Researcher',
  'QA Engineer',
  'Automation Tester',
  'Security Analyst',
  'Cybersecurity Specialist',
  'System Administrator',
  'Database Administrator',
  'Software Architect',
  'Technical Lead',
  'Embedded Systems Engineer',
  'Game Developer',
  'AR/VR Developer',
  'Blockchain Developer',
  'Software Engineer in Test',
  'Network Engineer',
  'IT Support Specialist',
  'Data Engineer',
  'Business Analyst',
  'Technical Writer',
  'Scrum Master',
  'Site Reliability Engineer',
  'Performance Engineer',
  'Release Manager',
  'Front-End Architect',
  'Back-End Architect',
  'Cloud Engineer',
  'Big Data Engineer',
  'Mobile UI Designer',
  'UX Researcher',
  'Accessibility Specialist',
  'IoT Developer',
  'Robotics Engineer',
  'Graphics Programmer',
  'API Developer',
  'Automation Engineer',
  'Software Development Manager',
  'Tech Evangelist',
  'Data Analyst',
  'Computer Vision Engineer',
  'System Analyst',
  'Digital Product Designer',
  'Technical Project Manager',
  'AI Product Manager',
  'DevSecOps Engineer',
  'Localization Engineer',
];


const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: { repeat: Infinity, ease: 'linear', duration: 1 },
  },
};

const CareersCTA = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    coverLetter: '',
    resume: null,
  });

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = 'Email is invalid';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    else if (!/^\+?[\d\s\-]{7,15}$/.test(formData.phone))
      errors.phone = 'Phone number is invalid';
    if (!formData.role) errors.role = 'Please select a role';
    if (!formData.resume) errors.resume = 'Please upload your resume';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData((prev) => ({ ...prev, resume: files[0] || null }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
      }, 2200);
    }
  };

  const resetModal = () => {
    setShowForm(false);
    setSubmitted(false);
    setSubmitting(false);
    setFormErrors({});
    setFormData({
      name: '',
      email: '',
      phone: '',
      role: '',
      coverLetter: '',
      resume: null,
    });
  };

  return (
    <section className="bg-gray-900 w-full flex justify-center px-4 relative z-10 mb-[-150px]">
      <div className="w-full max-w-[1000px] py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold text-white leading-tight"
          aria-label="Ready to build the future with us heading"
        >
          Ready to Build the Future With Us?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-4 text-yellow-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        >
          Whether you're a visionary, builder, or creator—there’s a place here for
          you. We believe in ideas, growth, and people like you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8"
        >
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 md:gap-3 bg-yellow-500 text-gray-900 font-semibold px-6 md:px-7 py-3 md:py-4 rounded-xl shadow-lg hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-500 transition-all duration-200 select-none text-sm md:text-base"
            aria-haspopup="dialog"
            aria-expanded={showForm}
          >
            Apply Now
            <PaperAirplaneIcon className="h-5 w-5 md:h-6 md:w-6 rotate-45" aria-hidden="true" />
          </button>
        </motion.div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-950 bg-opacity-95 backdrop-blur-md z-[9999] flex justify-center items-center p-4 sm:p-8 overflow-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modalTitle"
            tabIndex={-1}
            onClick={(e) => {
              if (e.target === e.currentTarget) resetModal();
            }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 rounded-3xl shadow-xl max-w-lg w-full max-h-[85vh] overflow-y-auto
                p-6 sm:p-8 relative
                scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
              style={{ scrollbarColor: '#374151 #111827' }}
            >
              <button
                onClick={resetModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
                aria-label="Close application form"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>

              {!submitted ? (
                <>
                  <h2
                    id="modalTitle"
                    className="text-xl sm:text-2xl font-extrabold text-white mb-5 text-center"
                  >
                    Apply for a Role
                  </h2>

                  <form
                    className="space-y-4 sm:space-y-5"
                    onSubmit={handleSubmit}
                    noValidate
                    aria-describedby="formErrors"
                  >
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs sm:text-sm font-semibold text-gray-200 mb-1"
                      >
                        Full Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full rounded-lg px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 text-white border focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors placeholder-gray-400 text-sm sm:text-base ${
                          formErrors.name
                            ? 'border-red-600 focus:ring-red-600'
                            : 'border-gray-700'
                        }`}
                        aria-invalid={!!formErrors.name}
                        aria-describedby={formErrors.name ? 'error-name' : undefined}
                        placeholder="Enter your full name"
                        required
                      />
                      {formErrors.name && (
                        <p
                          id="error-name"
                          className="text-red-600 mt-1 text-xs sm:text-sm"
                          role="alert"
                        >
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs sm:text-sm font-semibold text-gray-200 mb-1"
                      >
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full rounded-lg px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 text-white border focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors placeholder-gray-400 text-sm sm:text-base ${
                          formErrors.email
                            ? 'border-red-600 focus:ring-red-600'
                            : 'border-gray-700'
                        }`}
                        aria-invalid={!!formErrors.email}
                        aria-describedby={formErrors.email ? 'error-email' : undefined}
                        placeholder="Enter your email"
                        required
                      />
                      {formErrors.email && (
                        <p
                          id="error-email"
                          className="text-red-600 mt-1 text-xs sm:text-sm"
                          role="alert"
                        >
                          {formErrors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs sm:text-sm font-semibold text-gray-200 mb-1"
                      >
                        Phone Number <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full rounded-lg px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 text-white border focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors placeholder-gray-400 text-sm sm:text-base ${
                          formErrors.phone
                            ? 'border-red-600 focus:ring-red-600'
                            : 'border-gray-700'
                        }`}
                        aria-invalid={!!formErrors.phone}
                        aria-describedby={formErrors.phone ? 'error-phone' : undefined}
                        placeholder="+123 456 7890"
                        required
                      />
                      {formErrors.phone && (
                        <p
                          id="error-phone"
                          className="text-red-600 mt-1 text-xs sm:text-sm"
                          role="alert"
                        >
                          {formErrors.phone}
                        </p>
                      )}
                    </div>

                    {/* Role */}
                    <div>
                      <label
                        htmlFor="role"
                        className="block text-xs sm:text-sm font-semibold text-gray-200 mb-1"
                      >
                        Select Role <span className="text-red-600">*</span>
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className={`w-full rounded-lg px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 text-white border focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors text-sm sm:text-base ${
                          formErrors.role
                            ? 'border-red-600 focus:ring-red-600'
                            : 'border-gray-700'
                        }`}
                        aria-invalid={!!formErrors.role}
                        aria-describedby={formErrors.role ? 'error-role' : undefined}
                        required
                      >
                        <option value="" disabled className="text-gray-500">
                          -- Choose a role --
                        </option>
                        {roles.map((r) => (
                          <option key={r} value={r} className="bg-gray-900 text-white">
                            {r}
                          </option>
                        ))}
                      </select>
                      {formErrors.role && (
                        <p
                          id="error-role"
                          className="text-red-600 mt-1 text-xs sm:text-sm"
                          role="alert"
                        >
                          {formErrors.role}
                        </p>
                      )}
                    </div>

                    {/* Cover Letter */}
                    <div>
                      <label
                        htmlFor="coverLetter"
                        className="block text-xs sm:text-sm font-semibold text-gray-200 mb-1"
                      >
                        Cover Letter (Optional)
                      </label>
                      <textarea
                        id="coverLetter"
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleChange}
                        rows={3}
                        className="w-full rounded-lg px-3 py-2 resize-none bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors placeholder-gray-400 text-sm sm:text-base"
                        placeholder="Write a brief introduction or message"
                      />
                    </div>

                    {/* Resume Upload */}
                    <div>
                      <label
                        htmlFor="resume"
                        className="block text-xs sm:text-sm font-semibold text-gray-200 mb-1"
                      >
                        Upload Resume (PDF, DOC, DOCX) <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        onChange={handleChange}
                        accept=".pdf,.doc,.docx"
                        className={`w-full rounded-lg px-3 py-2 bg-gray-800 text-white border focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors placeholder-gray-400 text-sm sm:text-base ${
                          formErrors.resume
                            ? 'border-red-600 focus:ring-red-600'
                            : 'border-gray-700'
                        }`}
                        aria-invalid={!!formErrors.resume}
                        aria-describedby={formErrors.resume ? 'error-resume' : undefined}
                        required
                      />
                      {formErrors.resume && (
                        <p
                          id="error-resume"
                          className="text-red-600 mt-1 text-xs sm:text-sm"
                          role="alert"
                        >
                          {formErrors.resume}
                        </p>
                      )}
                      {formData.resume && (
                        <p
                          className="mt-1 text-gray-400 text-xs sm:text-sm truncate select-text"
                          title={formData.resume.name}
                        >
                          Selected: {formData.resume.name}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className={`w-full flex justify-center items-center gap-2 md:gap-3 bg-yellow-500 text-gray-900 font-semibold py-2.5 md:py-3 rounded-xl hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-500 transition-colors text-sm md:text-base ${
                        submitting ? 'cursor-not-allowed opacity-70' : ''
                      }`}
                    >
                      {submitting ? (
                        <>
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="3"
                            stroke="currentColor"
                            className="w-5 h-5 animate-spin"
                            variants={spinnerVariants}
                            animate="animate"
                            aria-hidden="true"
                          >
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeDasharray="31.4"
                              strokeDashoffset="0"
                            />
                          </motion.svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <PaperAirplaneIcon
                            className="h-4 w-4 md:h-5 md:w-5 rotate-45"
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <CheckCircleIcon className="h-14 w-14 md:h-16 md:w-16 text-green-500 mx-auto mb-4 md:mb-5" />
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                    Application Submitted!
                  </h3>
                  <p className="text-gray-300 max-w-md mx-auto leading-relaxed text-sm sm:text-base mb-6">
                    Thank you for applying. You’ll receive an update within 24 hours
                    via SMS or email. We appreciate your interest in building the
                    future with us.
                  </p>
                  <button
                    onClick={resetModal}
                    className="mt-3 md:mt-4 bg-yellow-500 text-gray-900 font-semibold py-2.5 px-7 rounded-xl hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-500 transition-colors text-sm md:text-base"
                    aria-label="Close confirmation dialog"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CareersCTA;
