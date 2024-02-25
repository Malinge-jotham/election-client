import React, { useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader'; // Import Loader component

const CandidateRegistration = () => {
    const [name, setName] = useState('');
    const [post, setPost] = useState('');
    const [state, setState] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); // State to track loading state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true when form is submitted
        try {
            const response = await axios.post('http://localhost:3000/candidates', { name, post, state });
            setMessage(response.data);
        } catch (error) {
            console.error('Error registering candidate:', error.response.data);
            setMessage('Error registering candidate');
        }
        setLoading(false); // Set loading state to false after form submission
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Candidate Registration</h2>
            {loading ? ( // Conditionally render Loader if loading state is true
                <Loader />
            ) : (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="mb-4">
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" />
                    </div>
                    <div className="mb-4">
                        <input type="text" placeholder="Post" value={post} onChange={(e) => setPost(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" />
                    </div>
                    <div className="mb-4">
                        <input type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600">Register</button>
                </form>
            )}
            {message && <p className="text-red-500 mt-2">{message}</p>}
        </div>
    );
};

export default CandidateRegistration;
