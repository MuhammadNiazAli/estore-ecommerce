import React from "react";

const sizeComparisonData = [
  { us: "XS", uk: "6", eu: "34", inches: '31-33"' },
  { us: "S", uk: "8", eu: "36", inches: '34-35"' },
  { us: "M", uk: "10", eu: "38", inches: '36-37"' },
  { us: "L", uk: "12", eu: "40", inches: '38.5-40"' },
  { us: "XL", uk: "14", eu: "42", inches: '41.5-43"' },
  { us: "XXL", uk: "16", eu: "44", inches: '44-46"' },
];

const SizeGuideComparison = () => {
  return (
    <section
      className="w-full bg-gray-900 text-gray-100 flex justify-center py-10 px-4 sm:px-6 md:py-14"
      aria-label="Size guide comparison table"
    >
      <div
        className="max-w-5xl w-full overflow-x-auto rounded-lg shadow-lg bg-gray-800
          scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-700"
        tabIndex={0}
      >
        <table className="min-w-[600px] w-full text-left border-collapse">
          <thead className="border-b border-yellow-400">
            <tr>
              <th className="p-4 text-yellow-400 text-sm sm:text-base md:text-lg">
                US Size
              </th>
              <th className="p-4 text-yellow-400 text-sm sm:text-base md:text-lg">
                UK Size
              </th>
              <th className="p-4 text-yellow-400 text-sm sm:text-base md:text-lg">
                EU Size
              </th>
              <th className="p-4 text-yellow-400 text-sm sm:text-base md:text-lg">
                Bust / Chest (inches)
              </th>
            </tr>
          </thead>
          <tbody>
            {sizeComparisonData.map(({ us, uk, eu, inches }) => (
              <tr
                key={us}
                className="border-b border-gray-700 hover:bg-yellow-50/10 transition-colors"
              >
                <td className="p-4 font-semibold text-sm sm:text-base md:text-lg">
                  {us}
                </td>
                <td className="p-4 text-sm sm:text-base md:text-lg">{uk}</td>
                <td className="p-4 text-sm sm:text-base md:text-lg">{eu}</td>
                <td className="p-4 text-sm sm:text-base md:text-lg">{inches}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SizeGuideComparison;
