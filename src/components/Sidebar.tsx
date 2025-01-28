import React from 'react';

const Sidebar = () => {
    return (
        <div className="w-1/4 bg-gray-800 text-white h-screen p-4">
            <h2 className="text-2xl font-bold mb-4">Chats</h2>
            <ul>
                {Array.from({length: 10}, (_, index) => (
                    <li key={index} className="hover:bg-gray-700 p-2 rounded">
                        Contact {index + 1}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
