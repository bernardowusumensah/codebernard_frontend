import React, { useState } from 'react';
import { register as registerAPI } from '../api';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    try {
      const response = await registerAPI(formData.username, formData.email, formData.password);
      login(response.user);
      
      // Role-based redirection
      if (response.user.role === 'admin') {
        // Redirect admin to backend admin panel
        window.location.href = 'http://localhost:3000/admin';
      } else {
        // Redirect regular users to home page
        navigate('/');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900">Create Account</h2>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
          
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              value={formData.username}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            />
          </div>

          {/* TEMPORARY TEST - Simple password field */}
          <div style={{ margin: '20px 0' }}>
            <label>Test Password (Simple):</label>
            <br />
            <input 
              type="password" 
              name="testPassword"
              style={{ width: '100%', padding: '10px', border: '1px solid black' }}
              placeholder="Test if this works"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              tabIndex={3}
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
              onFocus={(e) => console.log('Password field focused')}
              onClick={(e) => console.log('Password field clicked')}
              placeholder="Enter your password"
              style={{ 
                minHeight: '40px',
                cursor: 'text',
                backgroundColor: 'white',
                zIndex: 999,
                position: 'relative'
              }}
              className="block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              tabIndex={4}
              autoComplete="new-password"
              value={formData.confirmPassword}
              onChange={handleChange}
              onFocus={(e) => console.log('Confirm password field focused')}
              onClick={(e) => console.log('Confirm password field clicked')}
              placeholder="Confirm your password"
              style={{ 
                minHeight: '40px',
                cursor: 'text',
                backgroundColor: 'white',
                zIndex: 999,
                position: 'relative'
              }}
              className="block w-full px-3 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50"
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </button>

          <div className="text-center">
            <Link to="/login" className="text-pink-600 hover:underline">
              Already have an account? Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
