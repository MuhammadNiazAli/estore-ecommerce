import React from 'react';

const reports = [
  {
    title: '2024 Sustainability Annual Report',
    date: 'March 2025',
    url: '/reports/2024-sustainability-annual-report.pdf',
  },
  {
    title: 'Carbon Footprint Reduction Analysis 2023',
    date: 'December 2023',
    url: '/reports/carbon-footprint-2023.pdf',
  },
  {
    title: 'Renewable Energy Impact Report 2023',
    date: 'November 2023',
    url: '/reports/renewable-energy-impact-2023.pdf',
  },
  {
    title: 'Community Engagement and Education 2023',
    date: 'October 2023',
    url: '/reports/community-engagement-2023.pdf',
  },
];

const SustainabilityReports = () => {
  return (
    <section
      aria-labelledby="sustainability-reports-title"
      className="bg-white text-amber-600 px-4 sm:px-6 lg:px-8 py-16 mb-[-130px]"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="sustainability-reports-title"
          className="text-3xl sm:text-4xl font-extrabold text-amber-500 mb-12 text-center select-none"
        >
          Sustainability Reports
        </h2>

        <ul className="space-y-6">
          {reports.map(({ title, date, url }, i) => (
            <li
              key={i}
              className="
                flex flex-col sm:flex-row sm:items-center sm:justify-between
                bg-amber-950/10 rounded-xl p-5 shadow-lg
                hover:bg-amber-950/25 transition-colors duration-300
                focus-within:ring-4 focus-within:ring-amber-700 focus-within:ring-opacity-70
                outline-none
              "
            >
              <div className="mb-3 sm:mb-0">
                <h3 className="text-amber-500 text-lg font-semibold">{title}</h3>
                <p className="text-amber-400 text-sm mt-1 tracking-wide">{date}</p>
              </div>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="
                  inline-flex items-center text-amber-600 hover:text-amber-500
                  font-semibold transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2 focus:ring-offset-gray-900 rounded
                  select-none
                "
                aria-label={`Download ${title}`}
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                  />
                </svg>
                Download
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SustainabilityReports;
