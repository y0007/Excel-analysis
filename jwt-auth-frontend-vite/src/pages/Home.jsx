import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';

const Home = ({ username, onLogout }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow bg-[#e8f9f8] min-h-screen">
        <Header username={username} onLogout={onLogout} />
        <Dashboard username={username} />
      </div>
    </div>
  );
};

export default Home;
