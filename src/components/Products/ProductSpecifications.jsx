import React from "react";

const specsData = [
  { label: "Material", value: "Aluminum Alloy" },
  { label: "Weight", value: "1.5 kg" },
  { label: "Dimensions", value: "25 x 15 x 5 cm" },
  { label: "Battery Life", value: "12 hours" },
  { label: "Connectivity", value: "Bluetooth 5.0, USB-C" },
  { label: "Warranty", value: "2 Years Limited Warranty" },
];

const ProductSpecifications = () => {
  return (
    <section className="max-w-[1100px] w-full mx-auto p-4 sm:p-10 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8 text-gray-900 tracking-tight">
        Product Specifications
      </h2>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table
          className="min-w-full border-collapse"
          role="table"
          aria-label="Product Specifications"
        >
          <thead className="bg-white sticky top-0 z-10">
            <tr>
              <th
                scope="col"
                className="text-left px-4 sm:px-6 py-3 text-gray-700 font-semibold text-sm sm:text-base select-none"
              >
                Specification
              </th>
              <th
                scope="col"
                className="text-left px-4 sm:px-6 py-3 text-gray-700 font-semibold text-sm sm:text-base select-none"
              >
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {specsData.map(({ label, value }, idx) => (
              <tr
                key={idx}
                className={`transition-colors duration-200 ${
                  idx % 2 === 0 ? "bg-white" : "bg-white"
                } hover:bg-black cursor-default`}
              >
                <th
                  scope="row"
                  className="px-4 sm:px-6 py-3 border-b border-gray-200 text-gray-900 font-medium whitespace-nowrap text-sm sm:text-base"
                >
                  {label}
                </th>
                <td className="px-4 sm:px-6 py-3 border-b border-gray-200 text-gray-700 text-sm sm:text-base">
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProductSpecifications;
