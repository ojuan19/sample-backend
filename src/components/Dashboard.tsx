import React from 'react';

const Dashboard: React.FC = () => {
    return (
        <div className="p-4 md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold">Total Appointments</h2>
                <p className="text-3xl">150</p>
            </div>
            <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold">Patients Today</h2>
                <p className="text-3xl">45</p>
            </div>
            <div className="col-span-full">
                <input 
                    type="text" 
                    placeholder="Quick Search Patient"
                    className="w-full p-2 border border-gray-300 rounded-lg" 
                />
            </div>
        </div>
    );
};

export default Dashboard;