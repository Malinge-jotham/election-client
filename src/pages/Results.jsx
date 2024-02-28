import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://election-server.onrender.com/results');
        setResults(response.data);
      } catch (error) {
        console.error('Error fetching results:', error.response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Election Results</h2>
      <div className="grid grid-cols-2 gap-4">
        {results.map((result, index) => (
          <div key={index} className="border border-gray-300 rounded p-4">
            <h3 className="text-lg font-semibold mb-2">{result.post}</h3>
            <p>{result.name}: {result.votes_count} votes</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
