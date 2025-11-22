import React, { useRef } from "react";
import { gsap } from "gsap";

const samplePressReleases = [
  {
    id: 1,
    title: "Company Launches New Product Line",
    date: "July 15, 2025",
    summary:
      "Our latest product line revolutionizes the market by integrating cutting-edge technology with sleek and modern design, offering customers unparalleled performance and usability.",
    content:
      "The new product line features innovative materials and design elements that enhance both functionality and aesthetics. Engineered with sustainability in mind, these products reduce environmental impact without compromising quality...",
  },
  {
    id: 2,
    title: "CEO Interviewed on Industry Trends",
    date: "July 10, 2025",
    summary:
      "CEO Jane Doe shares valuable insights on evolving industry trends, highlighting the company’s strategic vision and commitment to innovation and sustainability.",
    content:
      "In an exclusive interview with Tech Today magazine, CEO Jane Doe discussed the challenges and opportunities facing the industry...",
  },
  {
    id: 3,
    title: "Company Achieves Carbon Neutrality",
    date: "June 30, 2025",
    summary:
      "We proudly announce that the company has reached carbon neutrality across all operations, reinforcing our dedication to environmental stewardship and sustainability.",
    content:
      "Through rigorous energy efficiency initiatives, investment in renewable energy sources, and carbon offset programs, the company has successfully balanced its carbon footprint...",
  },
  {
    id: 4,
    title: "New Partnership with Tech Innovators",
    date: "June 20, 2025",
    summary:
      "We are excited to announce a strategic partnership with Tech Innovators, aimed at enhancing our product capabilities through collaborative innovation and technology sharing.",
    content:
      "This partnership combines our strengths in product development with Tech Innovators' expertise in cutting-edge technologies such as machine learning...",
  },
  {
    id: 5,
    title: "Quarterly Earnings Surpass Expectations",
    date: "June 10, 2025",
    summary:
      "The company reports exceptional financial results for the quarter, exceeding revenue targets and demonstrating strong market demand.",
    content:
      "Thanks to successful new product launches, expanded market presence, and operational efficiencies, revenue for the quarter grew by 15%...",
  },
  {
    id: 6,
    title: "Awarded Best Workplace 2025",
    date: "May 30, 2025",
    summary:
      "Our company has been honored with the prestigious Best Workplace 2025 award, recognizing our exceptional corporate culture and employee satisfaction.",
    content:
      "This accolade reflects our ongoing commitment to fostering a diverse, inclusive, and supportive work environment...",
  },
  {
    id: 7,
    title: "Launch of Customer Loyalty Program",
    date: "May 15, 2025",
    summary:
      "We are pleased to introduce a new customer loyalty program designed to reward and engage our most valued clients with exclusive benefits and perks.",
    content:
      "The loyalty program offers tiered rewards including special discounts, early access to new products...",
  },
  {
    id: 8,
    title: "Expansion into European Markets",
    date: "May 1, 2025",
    summary:
      "Expanding our global footprint, the company is entering key European markets with new offices and strategic partnerships to better serve customers abroad.",
    content:
      "With a focus on localization and customer-centric service, our European expansion includes establishing regional offices in Germany, France, and the UK...",
  },
  {
    id: 9,
    title: "Launch of Mobile App",
    date: "April 20, 2025",
    summary:
      "Our new mobile app delivers a seamless and convenient experience, enabling customers to browse products, place orders, and access support anytime, anywhere.",
    content:
      "Designed with an intuitive interface and robust features, the app supports personalized recommendations, real-time order tracking...",
  },
];

const PressReleaseExplorer = () => {
  const [loading, setLoading] = React.useState(false);
  const [pressReleases, setPressReleases] = React.useState([]);
  const [error, setError] = React.useState("");
  const [selectedRelease, setSelectedRelease] = React.useState(null);
  const [visibleCount, setVisibleCount] = React.useState(3);

  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const handleMouseEnter = (index) => {
    gsap.to(cardRefs.current[index], {
      scale: 1.05,
      duration: 0.2,
      ease: "power2.out",
      transformOrigin: "center center",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(cardRefs.current[index], {
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const fetchPressReleases = () => {
    setLoading(true);
    setError("");
    setSelectedRelease(null);
    setVisibleCount(3);
    setPressReleases([]);

    setTimeout(() => {
      if (Math.random() < 0.9) {
        setPressReleases(samplePressReleases);
        setLoading(false);
      } else {
        setError("Failed to fetch press releases. Please try again.");
        setLoading(false);
      }
    }, 1500);
  };

  const closeDetails = () => setSelectedRelease(null);
  const showMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, pressReleases.length));
  };

  return (
    <section className="w-full bg-gray-900 flex flex-col items-center p-6 sm:p-8 md:p-12 text-yellow-400 font-sans -mt-[50px] -mb-[180px]">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 drop-shadow-lg text-center max-w-3xl">
        Press & Media Center
      </h1>

      <button
        onClick={fetchPressReleases}
        disabled={loading}
        className={`mb-8 px-6 py-3 rounded-md font-semibold tracking-wide transition text-center w-full max-w-xs sm:max-w-sm md:max-w-md ${
          loading
            ? "bg-yellow-500 cursor-not-allowed opacity-70"
            : "bg-yellow-500 hover:bg-yellow-600 cursor-pointer text-amber-50"
        }`}
        aria-label="Explore press releases"
      >
        {loading ? (
          <span className="flex items-center justify-center space-x-2">
            <svg
              className="animate-spin h-5 w-5 text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            <span>Loading...</span>
          </span>
        ) : (
          "Explore Press Releases"
        )}
      </button>

      {error && (
        <div
          role="alert"
          className="mb-4 px-4 py-3 bg-red-600 text-red-100 rounded max-w-3xl text-center"
        >
          {error}
        </div>
      )}

      <div className="max-w-6xl w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {pressReleases.slice(0, visibleCount).map((release, index) => (
          <article
            key={release.id}
            tabIndex={0}
            ref={addToRefs}
            onClick={() => setSelectedRelease(release)}
            onKeyDown={(e) => e.key === "Enter" && setSelectedRelease(release)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className="bg-gray-800 p-5 rounded-lg shadow-lg cursor-pointer transition-shadow outline-none focus:ring-2 focus:ring-yellow-400 transform-gpu"
            aria-label={`View details for press release titled: ${release.title}`}
          >
            <h2 className="text-xl font-semibold mb-2">{release.title}</h2>
            <time className="block text-sm text-yellow-300 mb-3">{release.date}</time>
            <p className="text-yellow-200">{release.summary}</p>
          </article>
        ))}
      </div>

      {pressReleases.length > visibleCount && !loading && (
        <div className="w-full flex justify-center mt-8">
          <button
            onClick={showMore}
            className="px-6 py-3 bg-yellow-500 rounded-md font-semibold hover:bg-yellow-600 text-amber-50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Show more press releases"
          >
            Show 3 More
          </button>
        </div>
      )}

      {selectedRelease && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={closeDetails}
        >
          <div
            className="bg-gray-900 w-full max-w-2xl sm:max-w-3xl rounded-lg p-6 sm:p-8 relative text-yellow-300 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeDetails}
              aria-label="Close details"
              className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <h3 id="modal-title" className="text-2xl font-bold mb-4">
              {selectedRelease.title}
            </h3>
            <time className="block text-sm text-yellow-500 mb-4">
              {selectedRelease.date}
            </time>
            <p className="mb-6 leading-relaxed">{selectedRelease.content}</p>
            <button
              onClick={closeDetails}
              className="mt-auto px-5 py-3 bg-yellow-400 text-gray-900 font-semibold rounded hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <footer className="mt-16 text-yellow-600 text-sm text-center max-w-3xl px-4">
        &copy; {new Date().getFullYear()} Your Company - All rights reserved.
      </footer>
    </section>
  );
};

export default PressReleaseExplorer;
