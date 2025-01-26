import React from 'react';
import QuickAccessWidget from './QuickAccessWidget';
import SearchBar from './SearchBar';

const Dashboard = () => {
  return (
    <div className="p-4">
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <QuickAccessWidget title="Today's Appointments" />
        <QuickAccessWidget title="Pending Follow-ups" />
        <QuickAccessWidget title="New Patient Requests" />
      </div>
    </div>
  );
}

export default Dashboard;