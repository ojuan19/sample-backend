import React, { useState } from 'react';

const InputBox = ({ onSend }: { onSend: (msg: string) => void }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        onSend(inputValue);
        setInputValue('');
    };

    return (
        <div className="p-4 bg-gray-700 flex items-center">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message"
                className="flex-1 p-2 rounded bg-gray-600 text-white outline-none mr-2"
            />
            <button onClick={handleSend} className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded">Send</button>
        </div>
    );
};

export default InputBox;
