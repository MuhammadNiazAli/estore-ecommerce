"use client";

import React from "react";
import { FaBookOpen, FaStar, FaTruck, FaUndo } from "react-icons/fa";

const BooksCategoryInfo = () => {
  return (
    <section className="bg-white text-gray-900 py-12 px-4 my-[-50px] mb-[-30px]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* ✅ Left Section - Info */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Discover the World of Knowledge
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Explore our curated collection of books across multiple domains like
            Computer Science,  Programming, and Design. Whether you’re a
            beginner or a pro, we have something to spark your curiosity and
            fuel your learning journey.
          </p>

          {/* ✅ Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-lg hover:shadow-black/30 transition">
              <FaBookOpen className="text-black text-3xl" />
              <div>
                <h4 className="font-semibold text-lg">Wide Selection</h4>
                <p className="text-sm text-gray-600">
                  60+ categories from Programming to UX Design.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-lg hover:shadow-black/30 transition">
              <FaStar className="text-black text-3xl" />
              <div>
                <h4 className="font-semibold text-lg">Top Rated</h4>
                <p className="text-sm text-gray-600">
                  Highly recommended books by industry experts.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-lg hover:shadow-black/30 transition">
              <FaTruck className="text-black text-3xl" />
              <div>
                <h4 className="font-semibold text-lg">Fast Delivery</h4>
                <p className="text-sm text-gray-600">
                  Get your books delivered within 2–3 days.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-lg hover:shadow-black/30 transition">
              <FaUndo className="text-black text-3xl" />
              <div>
                <h4 className="font-semibold text-lg">Easy Returns</h4>
                <p className="text-sm text-gray-600">
                  7-day hassle-free return policy for peace of mind.
                </p>
              </div>
            </div>
          </div>

          {/* ✅ CTA Button */}
          <div className="mt-8">
            <a
              href="#books-grid"
              className="bg-black text-black px-6 py-3 rounded-full font-semibold hover:bg-black transition text-lg"
            >
              Browse Books
            </a>
          </div>
        </div>

        {/* ✅ Right Section - Image */}
        <div className="flex justify-center items-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1685287731207-bede0d21a8c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ4fHx8ZW58MHx8fHx8"
            alt="Books Category"
            className="rounded-2xl shadow-2xl w-full max-w-[500px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default BooksCategoryInfo;
