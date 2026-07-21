'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronDownIcon, ChevronUpIcon, MapPinIcon } from '@heroicons/react/24/outline';

const countries = [
  'Netherlands',
  'Germany',
  'France',
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'India',
  'Japan',
  'Brazil',
  'South Africa',
  'Italy',
  'Spain',
  'Sweden',
  'Norway',
  'Mexico',
  'China',
  'Russia',
];

export default function GiftLocationPicker() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState('Netherlands');
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const containerRef = useRef(null);
  const listRef = useRef(null);
  const searchInputRef = useRef(null);

  // Filter countries based on search input
  const filteredCountries = countries.filter((c) =>
    c.toLowerCase().includes(search.toLowerCase())
  );

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
        setSearch('');
        setHighlightedIndex(0);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Open dropdown and focus search input
  const openDropdown = () => {
    setIsOpen(true);
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 0);
  };

  // Toggle dropdown open/close
  const toggleOpen = () => {
    if (isOpen) {
      setIsOpen(false);
      setSearch('');
      setHighlightedIndex(0);
    } else {
      openDropdown();
    }
  };

  // Handle selection
  const onSelect = (country) => {
    setSelected(country);
    setIsOpen(false);
    setSearch('');
    setHighlightedIndex(0);
  };

  // Keyboard navigation for list items
  const onKeyDownList = useCallback(
    (e) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setHighlightedIndex((prev) => (prev + 1) % filteredCountries.length);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setHighlightedIndex((prev) =>
            prev - 1 < 0 ? filteredCountries.length - 1 : prev - 1
          );
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          if (filteredCountries[highlightedIndex]) {
            onSelect(filteredCountries[highlightedIndex]);
          }
          break;
        case 'Escape':
          e.preventDefault();
          setIsOpen(false);
          setSearch('');
          setHighlightedIndex(0);
          break;
        default:
          break;
      }
    },
    [highlightedIndex, filteredCountries, isOpen]
  );

  // Scroll highlighted item into view
  useEffect(() => {
    if (listRef.current && isOpen) {
      const item = listRef.current.querySelector(
        `[data-index="${highlightedIndex}"]`
      );
      if (item) {
        item.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [highlightedIndex, isOpen]);

  return (
    <div ref={containerRef} className="relative max-w-xs w-full mx-auto text-gray-900">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby="location-label"
        onClick={toggleOpen}
        className="w-full flex items-center justify-between bg-white border border-amber-600 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600"
      >
        <div className="flex items-center gap-2">
          <MapPinIcon className="w-5 h-5 text-amber-600" aria-hidden="true" />
          <span id="location-label" className="truncate">
            {selected}
          </span>
        </div>
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5 text-amber-600" aria-hidden="true" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-amber-600" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-activedescendant={`option-${highlightedIndex}`}
          tabIndex={-1}
          onKeyDown={onKeyDownList}
          className="absolute z-50 mt-1 w-full bg-white border border-amber-600 rounded-md max-h-60 overflow-auto shadow-lg focus:outline-none scrollbar-thin scrollbar-thumb-amber-600 scrollbar-track-gray-800"
          ref={listRef}
        >
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setHighlightedIndex(0);
            }}
            placeholder="Search country..."
            className="w-full px-3 py-2 bg-white border-b border-amber-600 text-amber-500 placeholder-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-600 rounded-t-md"
            autoFocus
            aria-label="Search countries"
            ref={searchInputRef}
          />
          <ul>
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country, idx) => {
                const isSelected = selected === country;
                const isHighlighted = idx === highlightedIndex;

                return (
                  <li
                    key={country}
                    id={`option-${idx}`}
                    role="option"
                    aria-selected={isSelected}
                    tabIndex={-1}
                    data-index={idx}
                    onClick={() => onSelect(country)}
                    onMouseEnter={() => setHighlightedIndex(idx)}
                    className={`cursor-pointer px-4 py-2 text-amber-500 hover:bg-amber-600 hover:text-gray-900 focus:bg-amber-600 focus:text-gray-900 ${
                      isSelected
                        ? 'bg-amber-600 text-gray-900 font-semibold'
                        : isHighlighted
                        ? 'bg-amber-800 text-gray-800'
                        : ''
                    }`}
                  >
                    {country}
                  </li>
                );
              })
            ) : (
              <li className="px-4 py-2 text-amber-700 italic">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
