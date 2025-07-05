import React, { useState } from 'react';
import axios from '../axiosInstance';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/register', form);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', form.username);
      navigate('/');
    } catch (err) {
      alert(err?.response?.data?.message || "Register failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-teal-100 to-blue-200">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <input
          className="w-full px-4 py-2 mb-4 border rounded"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          className="w-full px-4 py-2 mb-4 border rounded"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button
          className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
