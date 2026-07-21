'use client';

import React, { useState, useMemo } from 'react';
import {
  TrophyIcon,
  SparklesIcon,
  CheckCircleIcon,
  CheckBadgeIcon,
  StarIcon,
  HeartIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const achievementsData = [
  {
    id: 1,
    title: 'First Purchase',
    description: 'Congrats on completing your first purchase!',
    icon: <SparklesIcon className="w-6 h-6 text-black" />,
    progress: 100,
    category: 'Completed',
  },
  {
    id: 2,
    title: 'Top Reviewer',
    description: 'You have written 50+ helpful reviews.',
    icon: <StarIcon className="w-6 h-6 text-black" />,
    progress: 75,
    category: 'In Progress',
  },
  {
    id: 3,
    title: 'Loyal Customer',
    description: 'You’ve shopped with us for over 1 year.',
    icon: <CheckBadgeIcon className="w-6 h-6 text-black" />,
    progress: 50,
    category: 'In Progress',
  },
  {
    id: 4,
    title: 'Holiday Shopper',
    description: 'Active during holiday sales with 5+ purchases.',
    icon: <TrophyIcon className="w-6 h-6 text-black" />,
    progress: 40,
    category: 'In Progress',
  },
  {
    id: 5,
    title: 'Early Adopter',
    description: 'Joined within the first 6 months of launch.',
    icon: <SparklesIcon className="w-6 h-6 text-black" />,
    progress: 100,
    category: 'Completed',
  },
  {
    id: 6,
    title: 'Wishlist Master',
    description: 'Added over 100 items to your wishlist.',
    icon: <HeartIcon className="w-6 h-6 text-black" />,
    progress: 60,
    category: 'In Progress',
  },
];

const categories = ['All', 'Completed', 'In Progress'];

const ProfileAchievements = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter and search logic
  const filteredAchievements = useMemo(() => {
    return achievementsData.filter((ach) => {
      const matchesCategory = filter === 'All' || ach.category === filter;
      const matchesSearch =
        ach.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ach.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [filter, searchTerm]);

  return (
    <section
      className="w-full bg-white text-gray-900 px-4 sm:px-8 md:px-12 py-8 sm:py-12 rounded-lg max-w-[1200px] mx-auto"
      aria-label="User achievements section"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6"
      >
        <div className="max-w-full sm:max-w-lg">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-2 drop-shadow-lg leading-tight">
            Your Achievements
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-md">
            Celebrate your progress and milestones reached on our platform.
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 text-black font-semibold text-xs sm:text-sm md:text-base select-none whitespace-nowrap">
          <TrophyIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 animate-bounce text-black drop-shadow-md" />
          <AnimatedNumber value={achievementsData.length} /> badges earned
        </div>
      </motion.div>

      {/* Filter & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold transition text-sm sm:text-base whitespace-nowrap ${
                filter === cat
                  ? 'bg-black text-gray-900 shadow-lg'
                  : 'bg-black/30 text-black hover:bg-black/60'
              } focus:outline-none focus:ring-2 focus:ring-black`}
              aria-pressed={filter === cat}
              aria-label={`Filter achievements by ${cat}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search input */}
        <input
          type="search"
          placeholder="Search achievements..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-64 md:w-72 px-4 py-2 rounded-full bg-white border border-black/50 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-black transition text-sm sm:text-base"
          aria-label="Search achievements"
        />
      </div>

      {/* Divider */}
      <div className="w-full h-[1.5px] bg-black/30 rounded-full mb-8 shadow-sm" />

      {/* Achievements Grid */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {filteredAchievements.length === 0 && (
          <p className="text-black col-span-full text-center py-10 font-semibold">
            No achievements match your filter/search criteria.
          </p>
        )}
        {filteredAchievements.map(({ id, title, description, icon, progress }) => (
          <AchievementCard
            key={id}
            title={title}
            description={description}
            icon={icon}
            progress={progress}
          />
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-8 flex justify-center sm:justify-end"
      >
        <button
          aria-label="View all achievements"
          className="flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-base sm:text-lg bg-black hover:bg-black text-gray-900 font-extrabold shadow-xl transition-transform hover:scale-[1.05] focus-visible:ring-4 focus-visible:ring-black focus:outline-none"
          onClick={() => alert('Navigate to full achievements page or show modal')}
          type="button"
        >
          <SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          View All Achievements
        </button>
      </motion.div>
    </section>
  );
};

const AchievementCard = ({ title, description, icon, progress }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div
      tabIndex={0}
      className="relative flex flex-col gap-3 bg-white p-4 sm:p-5 rounded-xl shadow-inner border border-black/20 hover:border-black transition cursor-pointer focus:outline-none focus:ring-4 focus:ring-black"
      aria-describedby={`desc-${title.replace(/\s+/g, '-')}`}
      role="group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="p-2 sm:p-3 bg-black/20 rounded-full flex items-center justify-center min-w-[38px] min-h-[38px] sm:min-w-[44px] sm:min-h-[44px]">
          {icon}
        </div>
        <h3 className="text-gray-900 font-semibold text-base sm:text-lg md:text-xl truncate">{title}</h3>
        <InformationCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-black opacity-70" />
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div
          role="tooltip"
          className="absolute top-full left-5 z-20 mt-2 max-w-xs bg-white text-black text-sm sm:text-base p-3 rounded-md shadow-lg pointer-events-none select-none"
        >
          {description}
        </div>
      )}

      <p
        id={`desc-${title.replace(/\s+/g, '-')}`}
        className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed min-h-[48px]"
        aria-live="polite"
      >
        {description}
      </p>

      {/* Progress Bar */}
      <div
        className="w-full bg-black/20 rounded-full h-2.5 sm:h-3 overflow-hidden"
        aria-label={`${title} progress`}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5 }}
          className="h-2.5 sm:h-3 bg-black rounded-full shadow-lg"
        />
      </div>

      <div className="flex items-center gap-1 sm:gap-2 text-black font-semibold text-xs sm:text-sm md:text-base">
        <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5" />
        {progress === 100 ? 'Completed' : `${progress}% Complete`}
      </div>
    </div>
  );
};

const AnimatedNumber = ({ value }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let startTime = null;
    const duration = 1200;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);
      setCount(Math.floor(progressRatio * value));
      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [value]);

  return <span>{count}</span>;
};

export default ProfileAchievements;
