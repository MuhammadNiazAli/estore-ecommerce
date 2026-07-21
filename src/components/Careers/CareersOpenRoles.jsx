'use client';

import React, { useState } from 'react';
import {
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  XMarkIcon,
  EnvelopeIcon,
  UserIcon,
  PhoneIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const jobRoles = [
  {
    id: 1,
    title: 'Frontend Developer',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    location: 'Amsterdam, NL',
    type: 'Hybrid',
  },
  {
    id: 3,
    title: 'Backend Engineer',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    id: 4,
    title: 'Marketing Strategist',
    location: 'New York, USA',
    type: 'Part-time',
  },
];

const CareersOpenRoles = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleApplyClick = (role) => {
    setSelectedRole(role);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000); // simulate async
  };

  const handleClose = () => {
    setSelectedRole(null);
    setSubmitted(false);
  };

  return (
    <section className="bg-white w-full flex justify-center px-4">
      <div className="w-full max-w-[1000px] py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10"
        >
          Open Roles
        </motion.h2>

        <div className="space-y-6">
          {jobRoles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-amber-600">{role.title}</h3>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-amber-400 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPinIcon className="h-4 w-4" />
                      {role.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <ClockIcon className="h-4 w-4" />
                      {role.type}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleApplyClick(role)}
                  className="bg-amber-600 hover:bg-amber-500 text-gray-900 font-semibold px-5 py-2 rounded-lg transition cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overlay Popup */}
        <AnimatePresence>
          {selectedRole && (
            <motion.div
              className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white w-full max-w-lg rounded-xl p-6 relative text-gray-900"
              >
                <button onClick={handleClose} className="absolute top-4 right-4 text-gray-900 hover:text-amber-600 ">
                  <XMarkIcon className="h-6 w-6" />
                </button>

                {!submitted ? (
                  <>
                    <h3 className="text-2xl font-bold mb-1">{selectedRole.title}</h3>
                    <p className="text-amber-600 mb-6">{selectedRole.location} · {selectedRole.type}</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="flex items-center gap-2 bg-white p-2 rounded">
                        <UserIcon className="h-5 w-5 text-amber-600" />
                        <input
                          type="text"
                          placeholder="Full Name"
                          required
                          className="w-full bg-transparent outline-none text-gray-900"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="flex items-center gap-2 bg-white p-2 rounded">
                        <EnvelopeIcon className="h-5 w-5 text-amber-600" />
                        <input
                          type="email"
                          placeholder="Email"
                          required
                          className="w-full bg-transparent outline-none text-gray-900"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div className="flex items-center gap-2 bg-white p-2 rounded">
                        <PhoneIcon className="h-5 w-5 text-amber-600" />
                        <input
                          type="tel"
                          placeholder="Phone"
                          required
                          className="w-full bg-transparent outline-none text-gray-900"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="flex items-start gap-2 bg-white p-2 rounded">
                        <DocumentTextIcon className="h-5 w-5 text-amber-600 mt-1" />
                        <textarea
                          placeholder="Why should we hire you?"
                          required
                          className="w-full bg-transparent outline-none text-gray-900 resize-none h-24"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-amber-600 hover:bg-amber-500 text-gray-900 font-bold py-2 rounded transition flex justify-center items-center"
                      >
                        {loading ? (
                          <motion.div
                            className="h-5 w-5 border-2 border-gray-200 border-t-transparent rounded-full animate-spin "
                          />
                        ) : (
                          'Submit Application'
                        )}
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center p-6"
                  >
                    <h3 className="text-2xl font-bold text-green-400 mb-4">Application Submitted!</h3>
                    <p className="text-gray-900">Thank you for applying. We’ve received your details and will contact you via email shortly.</p>
                    <button
                      onClick={handleClose}
                      className="mt-6 bg-amber-600 hover:bg-amber-500 text-gray-900 font-semibold px-6 py-2 rounded-lg transition cursor-pointer"
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CareersOpenRoles;
