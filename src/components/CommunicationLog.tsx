import React from 'react';

const CommunicationLog = () => {
  const logs = [
    'Call with Dr. Smith',
    'Email from patient John',
    'Call with patient Mary'
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Communication Log</h2>
      <ul className="list-disc pl-4">
        {logs.map((log, index) => (
          <li key={index} className="mb-2">
            {log}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunicationLog;
