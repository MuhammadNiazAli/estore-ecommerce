import React from "react";

const coverageArticles = [
  {
    id: 1,
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/77/The_New_York_Times_logo.png",
    headline: "YourCompany Revolutionizes Industry with New Innovation",
    source: "The New York Times",
    date: "July 10, 2025",
    link: "https://nytco-assets.nytimes.com/2024/04/InnovationReport.pdf",
  },
  {
    id: 2,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnm-NN9eUiMoLrI7TWo5jWXEkhxc-TDsH0QA&s",
    headline: "How YourCompany is Changing the Future of Tech",
    source: "Forbes",
    date: "June 28, 2025",
    link: "https://images.forbes.com/forbesinsights/hds_digital_maturity/HowToWinAtDigitalTransformation.pdf",
  },
  {
    id: 3,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1SFRTPzpaFfaVRVnWfTrVUVp-L-3t5kHytg&s",
    headline: "Inside the Growth of YourCompany: A Market Leader",
    source: "BBC News",
    date: "July 5, 2025",
    link: "https://www.bbc.com/business",
  },
  {
    id: 4,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/CNN_Logo_%282014%29.svg/1200px-CNN_Logo_%282014%29.svg.png",
    headline: "YourCompany Announces Major Expansion Plans",
    source: "CNN",
    date: "July 12, 2025",
    link: "https://www.researchgate.net/publication/369944899_CNN_Expansion_of_CNN_Into_the_Streaming_Industry",
  },
];

const PressCoverage = () => {
  return (
    <section className="w-full bg-gray-900 flex justify-center px-6 py-16 mb-[-30px]">
      <div className="max-w-[1000px] w-full text-center">
        <h2 className="text-yellow-400 text-3xl sm:text-4xl font-extrabold drop-shadow-lg">
          Press Coverage
        </h2>
        <p className="mt-4 text-yellow-300 max-w-xl mx-auto text-lg leading-relaxed drop-shadow-md">
          See what major publications are saying about us. Stay informed with the
          latest stories and coverage.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {coverageArticles.map(({ id, logo, headline, source, date, link }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col bg-gray-800 rounded-lg p-6 duration-300 text-left"
            >
              <img
                src={logo}
                alt={`${source} logo`}
                className="h-12 w-auto mb-4 object-contain"
                loading="lazy"
              />
              <h3 className="text-yellow-400 font-semibold text-lg mb-2">{headline}</h3>
              <div className="flex justify-between text-yellow-300 text-sm font-mono">
                <span>{source}</span>
                <time>{date}</time>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressCoverage;
