import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header'
import { Insights } from '../data/insightsData'; 

const InsightsPage = () => {
  return (
    <>
    <Header />
    <div className="min-h-screen p-4 pt-24">
      <h1 className="text-3xl font-bold text-center text-pink-500 mb-8">
        Health Insights
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">
        {Insights.map((insight) => (
          <div key={insight.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={insight.image}
              alt={insight.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {insight.title}
              </h2>
              <p className="text-gray-500 text-sm">{insight.date}</p>
              <p className="mt-2 text-gray-700">{insight.excerpt}</p>
              <Link
                to={`/insights/${insight.id}`}
                className="inline-block mt-4 text-pink-500 hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default InsightsPage;
