'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Tech', 'Design', 'eCommerce', 'Programming', 'Lifestyle'];

const blogs = [
  {
    id: 1,
    title: 'Mastering React for Modern Web',
    category: 'Programming',
    image: 'https://learn.internee.pk/uploads/thumbnails/course_thumbnails/course_thumbnail_default_34.jpg',
    excerpt: 'Learn how to build blazing-fast apps with React and modern patterns.',
  },
  {
    id: 2,
    title: 'Design Trends 2025',
    category: 'Design',
    image: 'https://blog-frontend.envato.com/cdn-cgi/image/width=2400,quality=75,format=auto/uploads/sites/2/2024/09/blog-header-music-creative-trends-25-min.png',
    excerpt: 'Explore the top visual and UX trends dominating 2025.',
  },
  {
    id: 3,
    title: 'Building Scalable eCommerce Stores',
    category: 'eCommerce',
    image: 'https://cdn.ranosys.com/wp-content/uploads/2024/07/the-6-key-building-blocks-of-a-modern-ecommerce-store.jpg',
    excerpt: 'From storefront to checkout — create sales-optimized platforms.',
  },
  {
    id: 4,
    title: 'Top 10 Tech Innovations This Year',
    category: 'Tech',
    image: 'https://www.founderjar.com/wp-content/uploads/2023/01/Top-10-New-Technology-Trends-for-this-Year.png',
    excerpt: 'Discover the future with our top 10 most disruptive techs.',
  },
  {
    id: 5,
    title: 'Healthy Lifestyle for Developers',
    category: 'Lifestyle',
    image: 'https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fm8jv1jg7nmiwqzptrjlq.png',
    excerpt: 'Balance screen time with routines that promote longevity and energy.',
  },
  {
    id: 6,
    title: 'UI/UX vs Product Design — Key Differences',
    category: 'Design',
    image: 'https://miro.medium.com/v2/resize:fit:1200/1*RbND5-zYgdvY8faYLHxk3Q.png',
    excerpt: 'Deep dive into how UI/UX roles differ from Product Design.',
  },
  {
    id: 7,
    title: 'TypeScript for Scalable Projects',
    category: 'Programming',
    image: 'https://dmwebsoft.com/wp-content/uploads/2024/08/TypeScript-for-Large-Scale-Projects-Best-Practices-and-Common-Pitfalls-DM-WebSoft-LLP-1024x539.jpg',
    excerpt: 'Harness the power of TypeScript for large-scale codebases.',
  },
  {
    id: 8,
    title: 'Figma vs Adobe XD: 2025 Comparison',
    category: 'Design',
    image: 'https://mettevo.com/_next/image?url=https%3A%2F%2Fstage.mettevo.com%2Fwp-content%2Fuploads%2F2025%2F05%2F1-Figma-vs.-Adobe-XD_-Which-to-Choose-for-Web-Design-in-2025_.jpg&w=1920&q=75',
    excerpt: 'Compare modern UI design tools for collaborative teams.',
  },
  {
    id: 9,
    title: 'Best Payment Gateways for Online Stores',
    category: 'eCommerce',
    image: 'https://www.cinovic.com/wp-content/uploads/2024/07/Payment-Gateways.jpg',
    excerpt: 'A breakdown of secure and fast payment solutions in 2025.',
  },
  {
    id: 10,
    title: 'AI Chips & Devices Reshaping the Market',
    category: 'Tech',
    image: 'https://d2c0db5b8fb27c1c9887-9b32efc83a6b298bb22e7a1df0837426.ssl.cf2.rackcdn.com/20283398-ai-chips-market-2-1920x1080.png',
    excerpt: 'Get to know the processors powering next-gen innovations.',
  },
  {
    id: 11,
    title: 'Sleep Hacks for Night Owl Coders',
    category: 'Lifestyle',
    image: 'https://i.ytimg.com/vi/guwH-S2wcrA/maxresdefault.jpg',
    excerpt: 'Tips to reset your clock without killing productivity.',
  },
  {
    id: 12,
    title: 'Functional Programming Simplified',
    category: 'Programming',
    image: 'https://cdn.prod.website-files.com/654fd3ad88635290d9845b9e/65b2a4432769cc2a82c1bc49_6525256482c9e9a06c7a9d3c%252F65aac29a1b58f299a762826d_FP_Blog.webp',
    excerpt: 'Why FP is gaining traction and how to apply it practically.',
  },
  {
    id: 13,
    title: 'Motion Design in Modern Interfaces',
    category: 'Design',
    image: 'https://techstridedigitalinnovate.com/wp-content/uploads/2025/02/the-future-of-motion-ui-in-modern-web-development.png',
    excerpt: 'Create delightful UI experiences with micro animations.',
  },
  {
    id: 14,
    title: 'Converting Visitors into Buyers',
    category: 'eCommerce',
    image: 'https://onestream.live/wp-content/uploads/2023/11/Convert-Website-Visitors-into-Customers.jpg',
    excerpt: 'Proven UX tweaks that turn traffic into profit.',
  },
  {
    id: 15,
    title: 'Quantum Computing: Hype or Hope?',
    category: 'Tech',
    image: 'https://azure.microsoft.com/en-us/blog/quantum/wp-content/uploads/2023/04/230428_CACM_Hero_800x450.webp',
    excerpt: 'What quantum computers can (and can’t) do in 2025.',
  },
  {
    id: 16,
    title: 'Digital Detox for Devs',
    category: 'Lifestyle',
    image: 'https://www.zionmarketresearch.com/content/uploadedImages/digital-detox-apps-market.png',
    excerpt: 'How stepping back can boost creativity and health.',
  },
  {
    id: 17,
    title: 'Next.js 15 Features You Shouldn’t Miss',
    category: 'Programming',
    image: 'https://miro.medium.com/v2/resize:fit:1200/1*BVJujJHLjF2SksDEZPLyUw.png',
    excerpt: 'Explore incremental improvements and powerful updates.',
  },
  {
    id: 18,
    title: 'Dark Mode Design Best Practices',
    category: 'Design',
    image: 'https://codimite.ai/wp-content/uploads/Frame-142-scaled.webp',
    excerpt: 'Improve readability and reduce eye strain with smart contrasts.',
  },
  {
    id: 19,
    title: 'Inventory Management Strategies',
    category: 'eCommerce',
    image: 'https://assets.cleartax-cdn.com/cleartax/images/18102022_Inventory-Management-Technique.png',
    excerpt: 'Stay efficient with automated and lean inventory models.',
  },
  {
    id: 20,
    title: 'The Rise of Wearable Tech',
    category: 'Tech',
    image: 'https://dorustree.com/wp-content/uploads/2024/01/Dorustree-The-Rise-of-Wearables-How-Technology-is-Transforming-Personal-Health-Tracking.jpeg',
    excerpt: 'What the latest smart wearables are capable of in 2025.',
  },
  {
    id: 21,
    title: 'Meal Planning for Busy Developers',
    category: 'Lifestyle',
    image: 'https://d18zdz9g6n5za7.cloudfront.net/plan/1020/1020-7738-meals-under-30-minutes-meal-plan-for-busy-people-a32a.jpg',
    excerpt: 'Stay energized with simple, prep-ahead meals.',
  },
  {
    id: 22,
    title: 'Debugging Like a Pro: Advanced Tools',
    category: 'Programming',
    image: 'https://s3.amazonaws.com/blog-assets-production.testsigma.com/blogs/wp-content/uploads/2023/01/30122715/List-of-Top-Debugging-Tools.jpg',
    excerpt: 'Master browser and IDE-based debugging strategies.',
  },
  {
    id: 23,
    title: 'Minimalist UI: Design That Breathes',
    category: 'Design',
    image: 'https://miro.medium.com/v2/resize:fit:2000/1*FNcUWz3AXAoUs5QfzY5jPA.png',
    excerpt: 'Why less is more in modern digital product design.',
  },
  {
    id: 24,
    title: 'Global Shipping Solutions for 2025',
    category: 'eCommerce',
    image: 'https://ladingcargo.com/blog/wp-content/uploads/2025/01/The-Future-of-Cargo-Shipping.webp',
    excerpt: 'Logistics strategies for cross-border success.',
  },
  {
    id: 25,
    title: 'Smart Homes Powered by Edge AI',
    category: 'Tech',
    image: 'https://inoxoft.com/wp-content/uploads/2024/12/How-AI-for-Smart-Home-Transforms-Living-Spaces-scaled.jpg',
    excerpt: 'Edge devices are making smart homes smarter and safer.',
  },
];

const BlogFilters = () => {
  const [active, setActive] = useState('All');
  const [showAll, setShowAll] = useState(false);

  let filtered = [];

  if (active === 'All') {
    if (!showAll) {
      const unique = [];
      const categoriesSeen = new Set();
      for (let blog of blogs) {
        if (!categoriesSeen.has(blog.category)) {
          categoriesSeen.add(blog.category);
          unique.push(blog);
        }
        if (unique.length === 2) break;
      }
      filtered = unique;
    } else {
      filtered = blogs;
    }
  } else {
    filtered = blogs.filter((b) => b.category === active);
  }

  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 lg:px-8 flex justify-center mb-[-40px]">
      <div className="max-w-[1000px] w-full">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActive(cat);
                setShowAll(false);
              }}
              className={`px-4 sm:px-5 py-2 rounded-full border transition-colors font-semibold text-sm sm:text-base
                ${
                  active === cat
                    ? 'bg-amber-600 text-gray-900 border-amber-600'
                    : 'bg-transparent text-amber-600 border-amber-600 hover:bg-amber-600 hover:text-gray-900'
                }`}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <AnimatePresence>
            {filtered.map((blog) => (
              <motion.div
                key={blog.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 sm:h-56 object-cover"
                  loading="lazy"
                />
                <div className="p-4 sm:p-5 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-amber-600 mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base mb-4 line-clamp-3 flex-grow">
                    {blog.excerpt}
                  </p>
                  <a
                    href="#"
                    className="text-amber-600 font-semibold hover:underline text-sm sm:text-base mt-auto"
                    tabIndex={0}
                    aria-label={`Read more about ${blog.title}`}
                  >
                    Read More →
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More Button */}
        {active === 'All' && !showAll && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 bg-amber-600 text-gray-900 font-semibold rounded-full hover:bg-amber-500 transition-colors"
              type="button"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogFilters;
