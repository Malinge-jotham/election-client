import React, { useState } from 'react';
import axios from 'axios';
import Loader from './Loader'; // Import the Loader component

const UserRegistration = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password
    const [loading, setLoading] = useState(false); // State for loader
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Show loader when submitting form
        setError(''); // Clear any previous errors
        setSuccess(''); // Clear any previous success messages
        if (password !== confirmPassword) {
            setError("Passwords don't match"); // Set error message if passwords don't match
            setLoading(false);
            return;
        }
        try {
            const response = await axios.post('https://election-server.onrender.com/register', { username, password });
            setSuccess(response.data); // Set success message if registration is successful
            setUsername(''); // Clear input fields after successful registration
            setPassword('');
            setConfirmPassword('');
            onLogin(); // Trigger login after successful registration
        } catch (error) {
            setError(error.response.data); // Set error message if registration fails
        } finally {
            setLoading(false); // Hide loader after request completes
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-center text-2xl font-bold mb-4 text-blue-500">User Registration</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error message */}
            {success && <div className="text-green-500 mb-4">{success}</div>} {/* Display success message */}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mb-4">
                    <input type="password" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mb-4">
                    <input type="password" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 transition duration-300 ease-in-out">
                    {loading ? <Loader /> : 'Register'} {/* Display loader while submitting */}
                </button>
            </form>
        </div>
    );
};

export default UserRegistration
