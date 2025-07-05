import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <div className="w-64 h-screen bg-[#14b8a6] text-white flex flex-col p-5">
    <h1 className="text-3xl font-bold mb-10 text-center">🔍 AnalyseEx</h1>
    <nav className="flex flex-col gap-4 text-lg">
      <Link to="/dashboard" className="hover:bg-[#0f766e] p-2 rounded">Dashboard</Link>
      <Link to="/upload" className="hover:bg-[#0f766e] p-2 rounded">Upload Excel</Link>
      <Link to="/analyze" className="hover:bg-[#0f766e] p-2 rounded">Analyze Data</Link>
      <Link to="/history" className="hover:bg-[#0f766e] p-2 rounded">History</Link>
      <Link to="/ai-insights" className="hover:bg-[#0f766e] p-2 rounded">AI Insights</Link>
      <Link to="/chat" className="hover:bg-[#0f766e] p-2 rounded">Chat With File</Link>
      <Link to="/settings" className="hover:bg-[#0f766e] p-2 rounded">Settings</Link>
    </nav>
  </div>
);

export default Sidebar;
