import React from "react";

const warrantyInfo = {
  period: "2 Years Limited Warranty",
  coverage: [
    "Covers defects in materials and workmanship.",
    "Includes free repair or replacement within warranty period.",
    "Does not cover damages caused by misuse, accidents, or unauthorized repairs.",
  ],
  support: {
    contact: "support@example.com",
    phone: "+1 (800) 123-4567",
    hours: "Mon-Fri, 9am - 6pm (EST)",
  },
};

const ProductWarranty = () => {
  return (
    <section
      className="max-w-[1100px] mx-auto p-6 sm:p-10 bg-gray-900 rounded-xl shadow-md text-gray-100"
      aria-labelledby="warranty-heading"
    >
      <h2
        id="warranty-heading"
        className="text-3xl font-extrabold mb-8 tracking-tight"
      >
        Warranty Information
      </h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3 border-b border-yellow-400 pb-2">
          Warranty Period
        </h3>
        <p className="text-gray-300 text-lg">{warrantyInfo.period}</p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 border-b border-yellow-400 pb-2">
          What Is Covered
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300 text-base">
          {warrantyInfo.coverage.map((item, idx) => (
            <li
              key={idx}
              tabIndex={0}
              className="focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-md"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 border-b border-yellow-400 pb-2">
          Customer Support
        </h3>
        <p className="mb-2 text-gray-300 text-base">
          Contact us at{" "}
          <a
            href={`mailto:${warrantyInfo.support.contact}`}
            className="text-yellow-400 underline font-medium hover:text-yellow-500 transition"
            aria-label={`Send email to ${warrantyInfo.support.contact}`}
          >
            {warrantyInfo.support.contact}
          </a>{" "}
          or call{" "}
          <a
            href={`tel:${warrantyInfo.support.phone.replace(/[^+\d]/g, "")}`}
            className="text-yellow-400 underline font-medium hover:text-yellow-500 transition"
            aria-label={`Call support at ${warrantyInfo.support.phone}`}
          >
            {warrantyInfo.support.phone}
          </a>
          .
        </p>
        <p className="text-gray-300 text-base">
          Support Hours: {warrantyInfo.support.hours}
        </p>
      </div>
    </section>
  );
};

export default ProductWarranty;
