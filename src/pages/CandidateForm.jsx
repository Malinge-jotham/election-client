import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader'; // Import Loader component

const CandidateForm = () => {
    const [candidates, setCandidates] = useState([]);
    const [loading, setLoading] = useState(true); // State to track loading state

    useEffect(() => {
        // Fetch candidate details from the server
        const fetchData = async () => {
            try {
                const response = await axios.get('https://election-server.onrender.com/candidates');
                setCandidates(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching candidates:', error.response.data);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Function to group candidates by similarity of posts
    const groupCandidatesByPost = (candidates) => {
        const groupedCandidates = {};
        candidates.forEach((candidate) => {
            const post = candidate.post;
            if (!groupedCandidates[post]) {
                groupedCandidates[post] = [];
            }
            groupedCandidates[post].push(candidate);
        });
        return groupedCandidates;
    };

    // Render candidate details in table format
    const renderCandidates = () => {
        const groupedCandidates = groupCandidatesByPost(candidates);
        return Object.entries(groupedCandidates).map(([post, candidates]) => (
            <div key={post} className="mb-8">
                <h2 className="text-xl font-bold mb-4">{post}</h2>
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidates.map((candidate) => (
                            <tr key={candidate.id}>
                                <td>{candidate.id}</td>
                                <td>{candidate.name}</td>
                                <td>{candidate.state}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ));
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Candidate Details</h2>
            {loading ? ( // Conditionally render Loader if loading state is true
                <Loader />
            ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {renderCandidates()}
                </div>
            )}
        </div>
    );
};

export default CandidateForm;
