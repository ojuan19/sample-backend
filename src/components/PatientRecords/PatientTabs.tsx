import React, { useState } from 'react';

const PatientTabs = () => {
  const [activeTab, setActiveTab] = useState('history');

  const renderContent = () => {
    switch (activeTab) {
      case 'history':
        return <div>History Content</div>;
      case 'appointments':
        return <div>Appointments Content</div>;
      case 'notes':
        return <div>Notes Content</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex space-x-4 border-b">
        {['history', 'appointments', 'notes'].map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`p-2 ${activeTab === tab ? 'border-b-2 border-blue-600' : ''}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {renderContent()}
      </div>
    </div>
  );
}

export default PatientTabs;