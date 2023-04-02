import React from 'react';

export const RatingTable = () => {
  const data = [
    { category: 'Appearance', score: 18, maxScore: 20 },
    { category: 'Personality', score: 27, maxScore: 30 },
    { category: 'Interests', score: 16, maxScore: 20 },
    { category: 'Occupation', score: 12, maxScore: 15 },
    { category: 'Education Background', score: 9, maxScore: 15 },
  ];

  const totalScore =
    (data.reduce((acc, curr) => acc + curr.score, 0) /
      data.reduce((acc, curr) => acc + curr.maxScore, 0)) *
    100;

  return (
    <div className="flex flex-col items-center justify-center my-6">
      <table className="table-auto w-3/4">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Score</th>
            <th className="px-4 py-2">Max Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ category, score, maxScore }, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}
            >
              <td className="border px-4 py-2">{category}</td>
              <td className="border px-4 py-2">{score}</td>
              <td className="border px-4 py-2">{maxScore}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-gray-200 text-gray-700">
            <td className="px-4 py-2">Total Score:</td>
            <td className="px-4 py-2" colSpan={2}>
              {totalScore.toFixed(0)}%
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};


