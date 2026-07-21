import React, { useState } from 'react';
import { FiHelpCircle } from 'react-icons/fi';

const FaqsHero = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => setSearchTerm(e.target.value);

  return (
    <section
      aria-label="FAQs Hero"
      className="relative text-amber-600 overflow-hidden mb-10 bg-white md:bg-transparent my-[-30px]"
    >
      
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581092795360-5c1b9dcdc0cf?auto=format&fit=crop&w=1600&q=80')",
          backgroundAttachment: 'fixed',
        }}
      ></div>

     
 <div className="hidden md:block absolute inset-0 bg-white backdrop-blur-sm"></div>



      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-16 flex flex-col md:flex-row items-center md:items-start gap-10">
        
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-amber-600">
            Frequently Asked Questions
          </h1>
          <p className="text-amber-500 text-lg sm:text-xl leading-relaxed mb-8">
            Find answers to the most common questions about our services and policies. Can’t find what you’re looking for? Reach out to our support team anytime.
          </p>

         
          <form
            onSubmit={(e) => e.preventDefault()}
            role="search"
            aria-label="Search FAQs"
            className="w-full max-w-md mx-auto md:mx-0"
          >
            <input
              type="search"
              value={searchTerm}
              onChange={handleChange}
              placeholder="Search FAQs..."
              className="
                w-full px-5 py-3 rounded-lg 
                bg-white/40 md:bg-white/40 border border-amber-700
                text-amber-500 placeholder-amber-700 
                focus:outline-none focus:ring-2 focus:ring-amber-600
                shadow-lg transition
              "
            />
          </form>

          {/* Mobile-only CTA */}
          <div className="block sm:hidden mt-8 flex flex-col items-center gap-3">
            <FiHelpCircle className="text-amber-600 text-5xl animate-bounce" />
            <button
              type="button"
              className="bg-amber-700 hover:bg-amber-800 text-gray-900 font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
              onClick={() => alert('Redirecting to support...')}
            >
              Contact Support
            </button>
          </div>
        </div>

        {/* Right Image - Desktop Only */}
        <div className="hidden md:flex w-full md:w-1/2 justify-center relative">
          <div className="w-[280px] sm:w-[350px] lg:w-[400px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
            <img
              src="https://plus.unsplash.com/premium_photo-1669548760043-279ff3548d53?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Support illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqsHero;
