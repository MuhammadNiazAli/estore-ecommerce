'use client';

import React from 'react';

import BlogHero from '@/components/Blog/BlogHero';
import BlogList from '@/components/Blog/BlogList';
import BlogPostCard from '@/components/Blog/BlogPostCard';
import BlogFilters from '@/components/Blog/BlogFilters';
import BlogPagination from '@/components/Blog/BlogPagination';
import BlogPost from '@/components/Blog/BlogPost';
import BlogComments from '@/components/Blog/BlogComments';
import BlogAuthor from '@/components/Blog/BlogAuthor';
import BlogTags from '@/components/Blog/BlogTags';
import BlogRelatedPosts from '@/components/Blog/BlogRelatedPosts';
import BlogLoading from '@/components/Blog/BlogLoading';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-start px-4 py-16 lg:py-32 space-y-12">
      <BlogHero />
      <BlogFilters />
      <BlogList />
      <BlogPostCard />
      <BlogPagination />
      <BlogPost />
      <BlogAuthor />
      <BlogTags />
      <BlogComments />
      <BlogRelatedPosts />
      <BlogLoading />
    </main>
  );
}
