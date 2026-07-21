'use client';

import React, { useState, useRef } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';

const HelpCenterSearch = () => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  const handleClear = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      // Optional: alert or focus input if empty submit
      inputRef.current?.focus();
      return;
    }
    // Replace alert with your real search logic or navigation
    alert(`Searching for: ${query.trim()}`);
  };

  return (
    <section className="bg-white w-full px-4 py-12 flex justify-center mb-[-40px]">
      <form
        onSubmit={handleSubmit}
        role="search"
        aria-label="Help Center search"
        className="w-full max-w-[1000px] flex items-center bg-white rounded-lg shadow-md overflow-hidden"
        noValidate
      >
        {/* Search button */}
        <button
          type="submit"
          aria-label="Search"
          className="flex items-center justify-center px-4 text-black hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black transition-colors duration-200"
        >
          <SearchIcon size={20} />
        </button>

        {/* Search input */}
        <input
          type="search"
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Help Center..."
          aria-label="Search Help Center"
          className="flex-grow bg-white text-gray-900 placeholder-gray-500 py-3 px-3 focus:outline-none focus:ring-2 focus:ring-black"
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          enterKeyHint="search"
        />

        {/* Clear button - visible only if query has content */}
        {query && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search"
            className="flex items-center justify-center px-4 text-black hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black transition-colors duration-200"
          >
            <X size={20} />
          </button>
        )}
      </form>
    </section>
  );
};

export default HelpCenterSearch;
