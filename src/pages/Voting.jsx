import React, { useState } from 'react';
import axios from 'axios';

const Voting = () => {
    const [candidateId, setCandidateId] = useState('');
    const [post, setPost] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            // Make a POST request to the server
            const response = await axios.post('http://localhost:3000/vote', {
                candidate_id: candidateId,
                post: post
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}` // Attach JWT token from localStorage
                }
            });
            setSuccess(response.data);
        } catch (err) {
            setError(err.response.data);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto max-w-md p-4">
            <h2 className="text-2xl font-semibold mb-4">Vote Form</h2>
            {error && <div className="bg-red-100 text-red-700 p-3 mb-4">{error}</div>}
            {success && <div className="bg-green-100 text-green-700 p-3 mb-4">{success}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="candidateId" className="block text-sm font-medium text-gray-700">Candidate ID:</label>
                    <input type="text" id="candidateId" value={candidateId} onChange={(e) => setCandidateId(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="post" className="block text-sm font-medium text-gray-700">Post:</label>
                    <input type="text" id="post" value={post} onChange={(e) => setPost(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400">{loading ? 'Submitting...' : 'Submit Vote'}</button>
            </form>
        </div>
    );
};

export default Voting;
