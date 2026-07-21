'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: 'Mastering Frontend Architecture',
    excerpt:
      'Learn how to build scalable, maintainable frontend architectures with modern tools and techniques.',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    date: 'July 15, 2025',
    readTime: '8 min read',
    url: '#',
  },
  {
    id: 2,
    title: 'Design Systems: A Complete Guide',
    excerpt:
      'Everything you need to know about creating and maintaining design systems for consistent UI/UX.',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
    date: 'July 10, 2025',
    readTime: '7 min read',
    url: '#',
  },
  {
    id: 3,
    title: 'Top eCommerce Trends in 2025',
    excerpt:
      'Stay ahead with the latest eCommerce trends that are shaping the online shopping experience this year.',
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80',
    date: 'July 5, 2025',
    readTime: '6 min read',
    url: '#',
  },
  {
    id: 4,
    title: 'Advanced React Patterns',
    excerpt:
      'Explore advanced React patterns that help you write cleaner and more reusable components.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
    date: 'July 1, 2025',
    readTime: '9 min read',
    url: '#',
  },
];

const BlogList = () => {
  return (
    <section className="w-full flex justify-center px-4 py-12 sm:px-6 lg:px-8 bg-white mb-[-30px]">
      <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-transform hover:scale-[1.03] hover:shadow-lg"
          >
            <div className="relative w-full h-48 sm:h-40 md:h-52 lg:h-56">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                priority={blog.id === 1}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h2
                title={blog.title}
                className="text-amber-600 font-semibold text-lg sm:text-xl md:text-2xl mb-2 line-clamp-2"
              >
                {blog.title}
              </h2>
              <p className="text-gray-700 flex-grow mb-4 line-clamp-3 text-sm sm:text-base md:text-base">
                {blog.excerpt}
              </p>
              <div className="flex justify-between items-center text-gray-600 text-xs sm:text-sm mb-4 select-none">
                <time dateTime={new Date(blog.date).toISOString()}>{blog.date}</time>
                <span>{blog.readTime}</span>
              </div>
              <a
                href={blog.url}
                className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-500 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600 rounded text-sm sm:text-base"
                aria-label={`Read more about ${blog.title}`}
              >
                Read More <ArrowRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogList;
