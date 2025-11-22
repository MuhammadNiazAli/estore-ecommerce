'use client';

import React from 'react';
import Image from 'next/image';

const AboutTeam = () => {
  return (
    <section
      className="bg-gray-900 text-gray-100 py-20 px-4 sm:px-6 lg:px-8 flex justify-center"
      aria-label="About the developer"
    >
      <div className="w-full max-w-3xl text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-400 mb-10">
          Meet the Creator
        </h2>

        {/* Developer Card */}
        <div className="bg-gray-900 rounded-2xl px-6 py-10 shadow-xl flex flex-col items-center transition ">
          {/* Image from public/assets/niaz.jpeg */}
       <div className="relative w-42 h-42 my-[-20px] sm:w-64 sm:h-64 mb-5 rounded-full overflow-hidden">
  <Image
    src="/assets/niaz.jpeg"
    alt="Mr. Niaz Ali"
    fill
    className="object-cover"
    priority
    quality={100}
    sizes="(max-width: 768px) 128px, 256px"
  />
</div>


          <h3 className="text-2xl font-semibold mb-1">Mr. Niaz Ali</h3>
          <p className="text-indigo-400 mb-6">Full Stack Developer & eStore Architect</p>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed px-2">
            I'm a passionate developer who began my journey at the age of 20 with HTML & CSS. 
            By 21, I had mastered JavaScript. At 22, I was building interactive React apps. 
            By 25, I became a full-stack developer — confidently creating end-to-end web experiences like this eStore.
          </p>

          <p className="text-gray-400 text-sm sm:text-base mt-6">
            This project was entirely designed and developed by me — from structure and design to responsiveness and animations. 
            My next goals include integrating full backend functionality, building a custom admin panel, and launching 
            next-generation 3D product experiences with WebGL and AI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
