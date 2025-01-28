import React, { useState } from 'react';

const MessageWindow = () => {
    const [messages, setMessages] = useState<string[]>(['Hello!']);

    return (
        <div className="flex-1 flex flex-col bg-gray-800 text-white">
            <div className="flex-1 overflow-y-scroll p-4">
                {messages.map((msg, index) => (
                    <p key={index} className="mb-2">{msg}</p>
                ))}
            </div>
        </div>
    );
};

export default MessageWindow;
