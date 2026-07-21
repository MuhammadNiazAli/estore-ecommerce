'use client';

import React, { useState } from 'react';
import { FileText, PieChart, BarChart2, Calendar, Loader2, Download } from 'lucide-react';

const initialReports = [
  {
    id: 1,
    title: 'Monthly Sales Report',
    description: 'Detailed summary of revenue and orders for this month.',
    icon: <BarChart2 className="w-6 h-6 text-amber-600" />,
    date: 'July 2025',
    downloadLink: '/reports/monthly-sales.pdf',
  },
  {
    id: 2,
    title: 'Customer Insights',
    description: 'Breakdown of customer behavior and demographics.',
    icon: <PieChart className="w-6 h-6 text-amber-600" />,
    date: 'Q2 2025',
    downloadLink: '/reports/customer-insights.pdf',
  },
  {
    id: 3,
    title: 'Inventory Status',
    description: 'Stock levels and movement summary.',
    icon: <FileText className="w-6 h-6 text-amber-600" />,
    date: 'July 20, 2025',
    downloadLink: '/reports/inventory-status.pdf',
  },
];

// Simulate additional reports fetch
const moreReportsMock = [
  {
    id: 4,
    title: 'Weekly Traffic Report',
    description: 'Website visits and user engagement overview.',
    icon: <BarChart2 className="w-6 h-6 text-amber-600" />,
    date: 'Week 29, 2025',
    downloadLink: '/reports/weekly-traffic.pdf',
  },
  {
    id: 5,
    title: 'Marketing ROI',
    description: 'Return on investment for marketing campaigns.',
    icon: <PieChart className="w-6 h-6 text-amber-600" />,
    date: 'H1 2025',
    downloadLink: '/reports/marketing-roi.pdf',
  },
  {
    id: 6,
    title: 'Supplier Performance',
    description: 'Analysis of supplier reliability and delivery times.',
    icon: <FileText className="w-6 h-6 text-amber-600" />,
    date: 'July 2025',
    downloadLink: '/reports/supplier-performance.pdf',
  },
];

// Helper to safely convert date string to ISO or null
function safeDateToISOString(dateStr) {
  const parsedDate = new Date(dateStr);
  return isNaN(parsedDate.getTime()) ? null : parsedDate.toISOString();
}

const DashboardReports = () => {
  const [reports, setReports] = useState(initialReports);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [downloadStatus, setDownloadStatus] = useState({}); // id => status

  const loadMoreReports = () => {
    if (loadingMore) return;
    setLoadingMore(true);
    setTimeout(() => {
      setReports((prev) => [...prev, ...moreReportsMock]);
      setHasMore(false);
      setLoadingMore(false);
    }, 1500);
  };

  const handleDownload = (report) => {
    if (downloadStatus[report.id] === 'loading') return;

    setDownloadStatus((prev) => ({ ...prev, [report.id]: 'loading' }));

    setTimeout(() => {
      if (Math.random() < 0.85) {
        setDownloadStatus((prev) => ({ ...prev, [report.id]: 'success' }));

        const element = document.createElement('a');
        element.href = report.downloadLink;
        element.download = `${report.title.replace(/\s+/g, '-')}.pdf`;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);

        setTimeout(() => {
          setDownloadStatus((prev) => ({ ...prev, [report.id]: 'idle' }));
        }, 2500);
      } else {
        setDownloadStatus((prev) => ({ ...prev, [report.id]: 'error' }));
        setTimeout(() => {
          setDownloadStatus((prev) => ({ ...prev, [report.id]: 'idle' }));
        }, 3000);
      }
    }, 1800);
  };

  const ReportCardSkeleton = () => (
    <div className="bg-white p-5 rounded-xl animate-pulse h-48" aria-hidden="true" />
  );

  return (
    <section className="w-full bg-white flex justify-center px-4 py-10">
      <div className="w-full max-w-[1000px]">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-amber-600">Reports</h2>
          <p className="text-sm text-gray-600 mt-1">
            Quick access to your most important business reports.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          role="list"
          aria-label="Business reports"
        >
          {reports.length === 0 && (
            <>
              <ReportCardSkeleton />
              <ReportCardSkeleton />
              <ReportCardSkeleton />
            </>
          )}
          {reports.map((report) => {
            const status = downloadStatus[report.id] || 'idle';
            const isoDate = safeDateToISOString(report.date);
            return (
              <article
                key={report.id}
                className="bg-white p-5 rounded-xl hover:shadow-lg transition group flex flex-col justify-between"
                role="listitem"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-amber-600">{report.icon}</div>
                    <time
                      className="text-xs text-gray-600 flex items-center gap-1"
                      {...(isoDate ? { dateTime: isoDate } : {})}
                    >
                      <Calendar className="w-4 h-4" />
                      {report.date}
                    </time>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{report.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{report.description}</p>
                </div>

                <button
                  onClick={() => handleDownload(report)}
                  disabled={status === 'loading'}
                  aria-live="polite"
                  aria-busy={status === 'loading'}
                  className={`inline-flex items-center gap-2 text-sm font-medium rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600 transition
                    ${
                      status === 'loading'
                        ? 'bg-amber-600 text-black cursor-wait'
                        : status === 'error'
                        ? 'bg-red-600 text-gray-900 hover:bg-red-700'
                        : 'bg-amber-600 text-black hover:bg-amber-500'
                    }
                  `}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                      Downloading...
                    </>
                  ) : status === 'error' ? (
                    'Download failed, try again'
                  ) : (
                    <>
                      <Download className="w-4 h-4" aria-hidden="true" />
                      Download Report
                    </>
                  )}
                </button>
              </article>
            );
          })}
        </div>

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={loadMoreReports}
              disabled={loadingMore}
              className="inline-flex items-center gap-2 bg-amber-600 text-black px-6 py-3 rounded-md font-semibold hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-600 transition"
              aria-live="polite"
              aria-busy={loadingMore}
            >
              {loadingMore ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                  Loading...
                </>
              ) : (
                'Load More Reports'
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DashboardReports;
