import React from 'react';
import SearchBar from './SearchBar';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Dashboard</h1>
      <div className="mb-4">
        <h2 className="text-xl">Daily Overview</h2>
        {/* Add key metrics display here */}
        <p>Total Appointments: 5</p>
        <p>Upcoming Tasks: 3</p>
      </div>
      <SearchBar />
    </div>
  );
};

export default Dashboard;