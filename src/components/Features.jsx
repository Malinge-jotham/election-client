// Features.jsx
import React from 'react';

const Features = () => {
    return (
        <section className="py-8">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white rounded shadow-md">
                        <h3 className="text-lg font-bold mb-2">Voter Registration</h3>
                        <p>Easy and secure voter registration process for eligible citizens.</p>
                    </div>
                    <div className="p-4 bg-white rounded shadow-md">
                        <h3 className="text-lg font-bold mb-2">Candidate Registration</h3>
                        <p>Admins can register candidates for various positions in the election.</p>
                    </div>
                    <div className="p-4 bg-white rounded shadow-md">
                        <h3 className="text-lg font-bold mb-2">Voting Process</h3>
                        <p>Efficient and transparent voting process allowing voters to cast their ballots.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
