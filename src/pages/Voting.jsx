import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader'; // Import Loader component

const Voting = () => {
  const [candidateId, setCandidateId] = useState('');
  const [post, setPost] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // State to track loading state
  const [axiosInstance, setAxiosInstance] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const instance = axios.create({
        baseURL: 'http://localhost:3000',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      setAxiosInstance(instance);
    }
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when form is submitted
  
    // Check if axiosInstance is initialized
    if (!axiosInstance) {
      console.error('axiosInstance is not initialized');
      setMessage('Error voting');
      setLoading(false);
      return;
    }
  
    try {
      const response = await axiosInstance.post('/vote', { candidate_id: candidateId, post });
      console.log(response); // Log the response object
      setMessage(response.data);
    } catch (error) {
      if (error.response && error.response.data) {
        console.error('Error voting:', error.response.data);
        setMessage('Error voting');
      } else {
        console.error('Error voting:', error.message); // Log the error message
        setMessage('Error voting'); // Set a default error message
      }
    } finally {
      setLoading(false); // Set loading state to false after form submission
    }
  };
  
  
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Voting</h2>
      {loading ? ( // Conditionally render Loader if loading state is true
        <Loader />
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <input type="text" placeholder="Candidate ID" value={candidateId} onChange={(e) => setCandidateId(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div className="mb-4">
            <select value={post} onChange={(e) => setPost(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2">
              <option value="">Select Post</option>
              <option value="president">President</option>
              <option value="congress">Congress</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">Vote</button>
        </form>
      )}
      {message && (
        <div className={`text-${message.type === 'error' ? 'red' : 'green'}-500 mt-4`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Voting;
