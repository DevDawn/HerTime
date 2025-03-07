import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../Components/Header';
import { Insights } from '../data/insightsData';

const InsightDetails = () => {
  const { id } = useParams();
  const insight = Insights.find((item) => item.id === Number(id));

  if (!insight) {
    return (
      <div className="min-h-screen p-4 pt-24">
        <h2 className="text-2xl text-center text-red-500">Insight not found</h2>
        <Link to="/insights" className="block text-center text-pink-500 hover:underline mt-4">
          Back to Insights
        </Link>
      </div>
    );
  }

  return (
    <>
    <Header />
    <div className="min-h-screen p-4 pt-24">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={insight.image}
          alt={insight.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">{insight.title}</h1>
          <p className="text-gray-500 text-sm mt-2">{insight.date}</p>
          <div className="mt-4 text-gray-700">
            {insight.content}
          </div>
          <Link
            to="/insights"
            className="inline-block mt-6 text-pink-500 hover:underline"
          >
            Back to Insights
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default InsightDetails;
