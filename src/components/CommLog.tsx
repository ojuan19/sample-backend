import React from 'react';
import CommEntryForm from './CommEntryForm';

const CommLog: React.FC = () => {
  const logs = [
    { id: 1, type: 'Call', detail: 'Spoke with patient regarding results' },
    { id: 2, type: 'Email', detail: 'Sent appointment confirmation' },
  ];

  return (
    <div>
      <CommEntryForm />
      <div className="space-y-2 mt-4">
        {logs.map(log => (
          <div key={log.id} className="p-2 border rounded shadow">
            <p><strong>{log.type}:</strong> {log.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommLog;