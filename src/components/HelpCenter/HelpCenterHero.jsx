'use client';

import React, { useState, useEffect, useRef } from 'react';

const HelpCenterHero = () => {
  const [query, setQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const inputRef = useRef(null);

  const topics = ['Orders', 'Returns', 'Payments'];

  const handleSearch = () => {
    const trimmed = query.trim();
    if (trimmed.length === 0) {
      alert('Please enter a search term.');
      inputRef.current?.focus();
      return;
    }
    alert(`Searching help for: "${trimmed}"`);
  };

  // Search on Enter key pressed in input field
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    alert(`Navigating to: ${topic} Help Section`);
  };

  return (
    <section
      className="bg-white w-full px-4 py-12 flex justify-center my-[-80px] mb-0"
      aria-label="Help Center Hero Section"
    >
      <div className="w-full max-w-[1000px] text-center text-gray-900 space-y-8">
        {/* Title */}
        <header>
          <h1
            className="text-3xl sm:text-5xl font-extrabold text-black drop-shadow-md"
            tabIndex={-1}
          >
            How can we help you?
          </h1>
          <p className="mt-2 text-gray-700 text-sm sm:text-base max-w-xl mx-auto">
            Get answers to your questions, solve problems, and explore help topics.
          </p>
        </header>

        {/* Search bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-full mx-auto"
          role="search"
          aria-label="Search help topics"
        >
          <input
            type="search"
            aria-label="Search help topics"
            ref={inputRef}
            placeholder="Search help topics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full sm:w-[60%] px-4 py-3 text-black rounded-md outline-none focus:ring-4 ring-black shadow-sm transition duration-300"
            autoComplete="off"
            spellCheck={false}
          />
          <button
            type="submit"
            className="px-6 py-3 bg-black hover:bg-black text-black font-semibold rounded-md shadow-md transition duration-200 focus:ring-4 focus:ring-black focus:ring-offset-2 focus:outline-none"
          >
            Search
          </button>
        </form>

        {/* Quick Topics */}
        <nav
          aria-label="Quick help topics"
          className="flex flex-wrap justify-center gap-4 mt-4"
        >
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => handleTopicClick(topic)}
              className={`px-5 py-2 rounded-full font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-black
                ${
                  selectedTopic === topic
                    ? 'bg-black text-black shadow-lg'
                    : 'bg-white hover:bg-black text-black'
                }
              `}
              aria-pressed={selectedTopic === topic}
              role="button"
              tabIndex={0}
            >
              {topic}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default HelpCenterHero;
