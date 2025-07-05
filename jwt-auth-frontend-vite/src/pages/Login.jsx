import React, { useState } from 'react';
import axios from '../axiosInstance';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', form.username);
      navigate('/dashboard');
    } catch (err) {
      alert(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 border rounded"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="w-full mb-6 px-4 py-2 border rounded"
        />
        <button type="submit" className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
          Login
        </button>
        <p className="mt-4 text-center text-sm">
          Don't have an account? <Link to="/register" className="text-teal-600 hover:underline">Register here</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
