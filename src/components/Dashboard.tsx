import React from 'react';
import OverviewTile from './OverviewTile';
import SearchBar from './SearchBar';

const Dashboard: React.FC = () => {
  return (
    <div className="p-4 space-y-4">
      <SearchBar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <OverviewTile title="Total Patients" value={120} />
        <OverviewTile title="Appointments Today" value={5} />
        <OverviewTile title="Pending Inquiries" value={2} />
      </div>
    </div>
  );
};

export default Dashboard;