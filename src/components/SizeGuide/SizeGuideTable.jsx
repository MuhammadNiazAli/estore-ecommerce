import React from 'react';

const sizeData = [
  { size: 'XS', bust: '31-33"', waist: '24-26"', hips: '34-36"' },
  { size: 'S', bust: '34-35"', waist: '27-28"', hips: '37-38"' },
  { size: 'M', bust: '36-37"', waist: '29-30"', hips: '39-40"' },
  { size: 'L', bust: '38.5-40"', waist: '31.5-33"', hips: '41-43"' },
  { size: 'XL', bust: '41.5-43"', waist: '34.5-36"', hips: '44-46"' },
  { size: 'XXL', bust: '44-46"', waist: '37-39"', hips: '47-49"' },
];

const SizeGuideTable = () => {
  return (
    <section className="w-full bg-white flex justify-center py-10 px-4 sm:px-6 md:py-16">
      <div className="max-w-[1000px] w-full overflow-x-auto rounded-lg shadow-lg bg-white">
        <table className="min-w-[600px] w-full text-left border-collapse">
          <thead className="border-b border-amber-600">
            <tr>
              <th className="p-4 text-amber-600 text-sm sm:text-base">Size</th>
              <th className="p-4 text-amber-600 text-sm sm:text-base">Bust (inches)</th>
              <th className="p-4 text-amber-600 text-sm sm:text-base">Waist (inches)</th>
              <th className="p-4 text-amber-600 text-sm sm:text-base">Hips (inches)</th>
            </tr>
          </thead>
          <tbody>
            {sizeData.map(({ size, bust, waist, hips }) => (
              <tr
                key={size}
                className="border-b border-gray-200 hover:bg-amber-200/10 transition-colors"
              >
                <td className="p-4 font-semibold text-sm sm:text-base">{size}</td>
                <td className="p-4 text-sm sm:text-base">{bust}</td>
                <td className="p-4 text-sm sm:text-base">{waist}</td>
                <td className="p-4 text-sm sm:text-base">{hips}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SizeGuideTable;
