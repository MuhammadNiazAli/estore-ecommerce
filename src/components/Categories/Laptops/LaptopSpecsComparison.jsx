'use client';
import React from 'react';
import { motion } from 'framer-motion';

const specsToCompare = ['CPU', 'RAM', 'Storage', 'Display', 'Battery', 'Weight'];

const LaptopSpecsComparison = ({ laptops = [] }) => {
  if (laptops.length === 0) {
    return (
      <section className="max-w-[1000px] mx-auto px-4 text-center text-gray-400 py-8">
        No laptops available for comparison.
      </section>
    );
  }

  return (
    <section className="max-w-[1000px] mx-auto px-4 py-10 my-[-50px] mb-0">
      <h2 className="text-3xl font-bold text-gray-100 mb-6">Compare Laptop Specs</h2>

      <div className="overflow-x-auto rounded-xl border border-gray-700 shadow-lg backdrop-blur-md bg-gray-800/60 custom-scroll">
        <table className="min-w-full text-sm text-gray-200 border-separate border-spacing-0">
          <thead>
            <tr className="bg-gray-900/70 backdrop-blur-md">
              <th className="sticky left-0 z-10 px-4 py-3 text-left font-semibold text-gray-100 bg-gray-900/80 backdrop-blur-lg border-r border-gray-700">
                Specification
              </th>
              {laptops.map(({ id, name }) => (
                <th
                  key={id}
                  className="px-6 py-3 text-center font-medium border-b border-gray-700 whitespace-nowrap"
                >
                  <span title={name} className="truncate inline-block max-w-[120px]">
                    {name}
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {specsToCompare.map((spec, rowIdx) => (
              <tr
                key={spec}
                className={`${rowIdx % 2 === 0 ? 'bg-gray-800/60' : 'bg-gray-700/50'} hover:bg-gray-700/60 transition`}
              >
                <td className="sticky left-0 z-10 px-4 py-3 font-semibold bg-gray-900/80 border-r border-gray-700 text-gray-100 backdrop-blur-lg">
                  {spec}
                </td>
                {laptops.map(({ id, specs }) => {
                  let value = 'N/A';
                  switch (spec) {
                    case 'CPU':
                      value = specs?.cpu;
                      break;
                    case 'RAM':
                      value = specs?.ram;
                      break;
                    case 'Storage':
                      value = specs?.storage;
                      break;
                    case 'Display':
                      value = specs?.display || '13.3" FHD';
                      break;
                    case 'Battery':
                      value = specs?.battery || 'Up to 10h';
                      break;
                    case 'Weight':
                      value = specs?.weight || '1.5 kg';
                      break;
                    default:
                      break;
                  }

                  return (
                    <td
                      key={id}
                      className="px-6 py-3 text-center border-b border-gray-700"
                      title={value || 'N/A'}
                    >
                      {value || (
                        <span className="text-gray-500 italic">Not listed</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Custom Scrollbar */}
      <style jsx>{`
        .custom-scroll::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: #1f2937; /* gray-800 */
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: #374151; /* gray-700 */
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};

export default LaptopSpecsComparison;
