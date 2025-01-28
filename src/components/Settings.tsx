import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [workInterval, setWorkInterval] = useState<number>(25);
  const [breakInterval, setBreakInterval] = useState<number>(5);

  return (
    <div className="flex flex-col items-center bg-gray-800 text-white p-6 mt-4 rounded">
      <h2 className="text-2xl">Settings</h2>
      <div className="mt-4">
        <label className="block text-sm">Work Interval (minutes)</label>
        <input 
          type="number" 
          value={workInterval} 
          onChange={(e) => setWorkInterval(parseInt(e.target.value))} 
          className="mt-1 block w-full pl-3 pr-12 py-2 text-base border-gray-300 rounded-md"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm">Break Interval (minutes)</label>
        <input 
          type="number" 
          value={breakInterval} 
          onChange={(e) => setBreakInterval(parseInt(e.target.value))} 
          className="mt-1 block w-full pl-3 pr-12 py-2 text-base border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

export default Settings;
