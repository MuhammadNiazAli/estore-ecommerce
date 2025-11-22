'use client'
import React from "react";

const specsData = [
  {
    feature: "Genre",
    productA: "Action, Thriller",
    productB: "Drama, Romance",
  },
  {
    feature: "Director",
    productA: "Christopher Nolan",
    productB: "Greta Gerwig",
  },
  {
    feature: "Main Cast",
    productA: "Christian Bale, Tom Hardy",
    productB: "Saoirse Ronan, Timothée Chalamet",
  },
  {
    feature: "Duration",
    productA: "2h 45m",
    productB: "2h 10m",
  },
  {
    feature: "Release Year",
    productA: "2023",
    productB: "2022",
  },
  {
    feature: "Budget",
    productA: "$200 Million",
    productB: "$60 Million",
  },
  {
    feature: "Box Office",
    productA: "$900 Million",
    productB: "$350 Million",
  },
];

const MoviesSpecsComparison = () => {
  return (
    <section className="bg-gray-900 text-yellow-400 w-full px-4 py-10 max-w-7xl mx-auto rounded-lg shadow-lg select-none">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-yellow-300">
        Movies Specs Comparison
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-yellow-700 rounded-lg">
          <thead>
            <tr className="bg-yellow-800 text-yellow-100">
              <th className="py-3 px-5 text-left border border-yellow-700">Feature</th>
              <th className="py-3 px-5 text-left border border-yellow-700">Movie A</th>
              <th className="py-3 px-5 text-left border border-yellow-700">Movie B</th>
            </tr>
          </thead>
          <tbody>
            {specsData.map(({ feature, productA, productB }, i) => (
              <tr
                key={i}
                className={`border border-yellow-700 ${
                  i % 2 === 0 ? "bg-yellow-900 bg-opacity-20" : "bg-yellow-900 bg-opacity-10"
                }`}
              >
                <td className="py-3 px-5 border border-yellow-700 font-semibold">{feature}</td>
                <td className="py-3 px-5 border border-yellow-700">{productA}</td>
                <td className="py-3 px-5 border border-yellow-700">{productB}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MoviesSpecsComparison;
