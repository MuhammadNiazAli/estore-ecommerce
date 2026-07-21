import React from 'react';

const NewseasonHero = () => {
  return (
    <section className="bg-white text-black my-[-50px]">
      <div className="max-w-[1000px] mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-wide mb-4">
            Discover the <span className="text-black">New Season</span> Collection
          </h1>
          <p className="text-black mb-8 max-w-md mx-auto md:mx-0 text-lg md:text-xl leading-relaxed">
            Elevate your style with our exclusive limited edition pieces. Crafted for those who dare to stand out.
          </p>
          <button
            type="button"
            className="bg-black hover:bg-black text-gray-900 font-semibold py-3 px-8 rounded-md shadow-lg transition-colors duration-300"
          >
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 max-w-sm md:max-w-md mx-auto">
          <img
            src="https://images.unsplash.com/photo-1700404861736-49b213d7048f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="New Season Fashion"
            className="rounded-lg shadow-xl w-full object-cover"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default NewseasonHero;
