import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CandidatesReports = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState('');
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/posts');
            setPosts(response.data);
            setSelectedPost(response.data[0]); // Set the default selected post
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const fetchCandidatesReports = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/candidates-reports/${selectedPost}`);
            setCandidates(response.data);
        } catch (error) {
            console.error('Error fetching candidates reports:', error);
        }
    };

    const handlePostChange = (event) => {
        setSelectedPost(event.target.value);
    };

    const handleGenerateReport = () => {
        fetchCandidatesReports();
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">Candidates' Reports</h2>
            <div className="flex justify-center items-center mb-4">
                <label htmlFor="post" className="mr-4">Select Post:</label>
                <select id="post" name="post" value={selectedPost} onChange={handlePostChange}>
                    {posts.map((post, index) => (
                        <option key={index} value={post}>{post}</option>
                    ))}
                </select>
                <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md" onClick={handleGenerateReport}>Generate Report</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {candidates.map((candidate, index) => (
                    <div key={index} className="bg-white p-4 shadow-md rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Candidate: {candidate.name}</h3>
                        <p className="text-lg">Post: {candidate.post}</p>
                        <p className="text-lg">State: {candidate.state}</p>
                        {index === 0 && <span className="bg-green-500 text-white px-2 py-1 rounded-md">Winner</span>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CandidatesReports;
