import React from 'react';

const CommunicationLog = () => {
  const logs = [
    { date: '2023-03-20', type: 'call', details: 'Called patient for appointment confirmation.' },
    { date: '2023-03-21', type: 'email', details: 'Sent email with appointment details.' }
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Communication Log</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="border p-2">Date</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Details</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index} className="odd:bg-gray-100 even:bg-gray-200">
              <td className="border p-2">{log.date}</td>
              <td className="border p-2">{log.type}</td>
              <td className="border p-2">{log.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommunicationLog;