import React from 'react';

const CommunicationLog: React.FC = () => {
    // Sample data
    const logs = [
        { type: 'Call', content: 'Spoke with patient about medication.', timestamp: '2023-11-01 10:00' },
        { type: 'Email', content: 'Sent follow-up email after appointment.', timestamp: '2023-11-01 14:00' },
    ];

    return (
        <div className="p-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-bold">Communication Log</h2>
                <ul className="mt-4 space-y-2">
                    {logs.map((log, index) => (
                        <li key={index} className="border-b border-gray-200 pb-2">
                            <p className="text-sm text-gray-600"><strong>{log.type}:</strong> {log.content}</p>
                            <p className="text-xs text-gray-400">{log.timestamp}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CommunicationLog;