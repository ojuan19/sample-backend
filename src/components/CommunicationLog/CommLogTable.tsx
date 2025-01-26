import React from 'react';

const CommLogTable = () => {
  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-semibold">Communication Log</h2>
      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Details</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">2023-01-01</td>
            <td className="px-6 py-4 whitespace-nowrap">Email</td>
            <td className="px-6 py-4 whitespace-nowrap">Sent appointment reminder</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">2023-01-02</td>
            <td className="px-6 py-4 whitespace-nowrap">Call</td>
            <td className="px-6 py-4 whitespace-nowrap">Discussed test results</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CommLogTable;