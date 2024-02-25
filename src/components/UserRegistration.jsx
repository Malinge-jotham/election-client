// UserRegistration.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Loader from './Loader'; // Import the Loader component

const UserRegistration = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // State for loader

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Show loader when submitting form
        try {
            const response = await axios.post('http://localhost:3000/register', { username, password });
            console.log(response.data);
        } catch (error) {
            console.error('Error registering user:', error.response.data);
        } finally {
            setLoading(false); // Hide loader after request completes
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-center text-2xl font-bold mb-4 text-blue-500">User Registration</h2>
            {loading ? ( // Show loader if loading is true
                <Loader />
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <input type="password" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 transition duration-300 ease-in-out">Register</button>
                </form>
            )}
        </div>
    );
};

export default UserRegistration;
