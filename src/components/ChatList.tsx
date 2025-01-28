import React from 'react';

const ChatList = () => {
    return (
        <div className="flex-1 overflow-y-scroll p-4 bg-gray-900 text-white">
            {Array.from({length: 5}, (_, index) => (
                <div key={index} className="mb-4">
                    <strong>Contact {index + 1}</strong>
                    <p className="mt-2">This is a message from Contact {index + 1}.</p>
                </div>
            ))}
        </div>
    );
};

export default ChatList;
