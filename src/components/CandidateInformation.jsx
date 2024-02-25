import React from 'react';
import { Link } from 'react-router-dom';

const CandidateInformation = () => {
    return (
        <section className="bg-gray-100 py-8">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Meet the Candidates</h2>
                <p className="text-lg">Learn about the candidates running for various positions in the election:</p>
                {/* Add Link to navigate to /candidates page */}
                <Link to="/candidates" className="text-blue-500 hover:underline">View Candidates</Link>
            </div>
        </section>
    );
};

export default CandidateInformation;
