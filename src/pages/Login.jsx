import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3000/login', { username, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setError('');
      setLoading(false);
      onLogin();
      // Redirect to the home route after successful login
      window.location.href = '/';
    } catch (error) {
      console.error('Error logging in:', error.response.data);
      setError(error.response.data);
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-md mt-8">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-4">
          <input type="password" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white rounded px-4 py-2">
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
