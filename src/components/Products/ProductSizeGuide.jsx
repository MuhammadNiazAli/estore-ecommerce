import React from "react";

const sizeGuideData = [
  { size: "XS", chest: "32-34 in", waist: "24-26 in", hips: "34-36 in" },
  { size: "S", chest: "35-37 in", waist: "27-29 in", hips: "37-39 in" },
  { size: "M", chest: "38-40 in", waist: "30-32 in", hips: "40-42 in" },
  { size: "L", chest: "41-43 in", waist: "33-35 in", hips: "43-45 in" },
  { size: "XL", chest: "44-46 in", waist: "36-38 in", hips: "46-48 in" },
  { size: "XXL", chest: "47-49 in", waist: "39-41 in", hips: "49-51 in" },
];

const ProductSizeGuide = () => {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 py-8 sm:py-10 bg-white my-[-70px] mb-0">
      <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-5 sm:p-10">
          <h2 className="text-xl sm:text-3xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
            Size Guide
          </h2>
          <p className="text-gray-700 text-center text-sm sm:text-base mb-5">
            Measure yourself and compare with our chart. All sizes in inches.
          </p>

          {/* 📱 Mobile Layout (Cards) */}
          <div className="block sm:hidden space-y-4">
            {sizeGuideData.map(({ size, chest, waist, hips }, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm text-center"
              >
                <div className="text-lg font-bold text-gray-900 mb-2">{size}</div>
                <div className="text-sm text-gray-700">
                  <div><strong>Chest:</strong> {chest}</div>
                  <div><strong>Waist:</strong> {waist}</div>
                  <div><strong>Hips:</strong> {hips}</div>
                </div>
              </div>
            ))}
          </div>

          {/* 🖥️ Desktop Layout (Table) */}
          <div className="hidden sm:block w-full overflow-x-auto mt-4">
            <table className="min-w-[500px] w-full text-sm sm:text-base text-left text-gray-800 border-collapse">
              <thead className="bg-white text-gray-700">
                <tr>
                  <th className="px-4 py-3 font-semibold border-b border-gray-200">Size</th>
                  <th className="px-4 py-3 font-semibold border-b border-gray-200">Chest</th>
                  <th className="px-4 py-3 font-semibold border-b border-gray-200">Waist</th>
                  <th className="px-4 py-3 font-semibold border-b border-gray-200">Hips</th>
                </tr>
              </thead>
              <tbody>
                {sizeGuideData.map(({ size, chest, waist, hips }, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      idx % 2 === 0
                        ? "bg-white"
                        : "bg-white"
                    } transition-colors duration-150`}
                  >
                    <td className="px-4 py-3 font-medium border-t border-gray-200">{size}</td>
                    <td className="px-4 py-3 border-t border-gray-200">{chest}</td>
                    <td className="px-4 py-3 border-t border-gray-200">{waist}</td>
                    <td className="px-4 py-3 border-t border-gray-200">{hips}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Hint only for mobile */}
          <div className="mt-3 text-xs text-center text-gray-500 animate-pulse sm:hidden">
            Scroll down ↓ to view more sizes
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSizeGuide;
