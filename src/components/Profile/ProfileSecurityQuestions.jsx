'use client';

import React, { useState } from 'react';
import {
  ShieldCheckIcon,
  PencilSquareIcon,
  CheckIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const initialQuestions = [
  {
    id: 1,
    question: 'What was the name of your first pet?',
    answer: 'Fluffy',
  },
  {
    id: 2,
    question: 'What is your mother’s maiden name?',
    answer: 'Smith',
  },
  {
    id: 3,
    question: 'What was the model of your first car?',
    answer: 'Toyota Corolla',
  },
];

const ProfileSecurityQuestions = () => {
  const [questions, setQuestions] = useState(initialQuestions);
  const [editingId, setEditingId] = useState(null);
  const [editAnswer, setEditAnswer] = useState('');

  const handleEdit = (id, currentAnswer) => {
    setEditingId(id);
    setEditAnswer(currentAnswer);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditAnswer('');
  };

  const handleSave = (id) => {
    if (!editAnswer.trim()) return;

    const updated = questions.map((q) =>
      q.id === id ? { ...q, answer: editAnswer } : q
    );
    setQuestions(updated);
    setEditingId(null);
    setEditAnswer('');
  };

  return (
    <section className="w-full bg-white text-gray-900 px-4 sm:px-6 py-8 sm:py-12">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-1">
              Security Questions
            </h2>
            <p className="text-sm sm:text-base text-gray-700 max-w-md">
              Manage your security questions to help protect your account.
            </p>
          </div>
          <div className="flex items-center gap-2 text-black font-medium text-sm sm:text-base">
            <ShieldCheckIcon className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
            <span>Account Safety</span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white my-6" />

        {/* Questions List */}
        <div className="space-y-6">
          {questions.map(({ id, question, answer }) => (
            <div
              key={id}
              className="bg-white rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between shadow-md gap-4"
            >
              <div className="flex-1">
                <p className="text-black font-semibold text-lg mb-1">{question}</p>

                {editingId === id ? (
                  <input
                    type="text"
                    value={editAnswer}
                    onChange={(e) => setEditAnswer(e.target.value)}
                    className="w-full sm:w-[300px] px-4 py-2 bg-white text-gray-900 border border-black rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Enter your new answer"
                  />
                ) : (
                  <p className="text-gray-700 text-sm sm:text-base mt-1">
                    Answer: {answer}
                  </p>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-2 sm:mt-0">
                {editingId === id ? (
                  <>
                    <button
                      onClick={() => handleSave(id)}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-black hover:bg-black text-gray-900 font-semibold text-sm transition"
                    >
                      <CheckIcon className="w-5 h-5" />
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-gray-500 text-gray-900 font-medium text-sm transition"
                    >
                      <XMarkIcon className="w-5 h-5" />
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => handleEdit(id, answer)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black hover:bg-black text-gray-900 font-semibold shadow-lg transition text-sm sm:text-base"
                  >
                    <PencilSquareIcon className="w-5 h-5" />
                    Edit
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileSecurityQuestions;
