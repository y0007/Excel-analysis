import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-teal-100 to-blue-100">
      <div className="bg-white p-10 rounded-xl shadow-xl text-center max-w-xl w-full">
        <div className="text-4xl font-bold mb-4 text-gray-800">Welcome to <span className="text-teal-600">AnalyseEx</span></div>
        <p className="text-gray-600 text-md mb-8">
          Upload Excel files, analyze your data with 2D/3D charts, gain insights and download reports — all in one smart platform.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/login" className="px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition">
            Login
          </Link>
          <Link to="/register" className="px-6 py-2 border border-teal-600 text-teal-600 rounded hover:bg-teal-100 transition">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
