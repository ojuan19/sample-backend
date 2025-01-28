import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatList from './components/ChatList';
import MessageWindow from './components/MessageWindow';
import InputBox from './components/InputBox';

const App = () => {
    const [globalMessages, setGlobalMessages] = useState<string[]>(['Welcome to the chat!']);

    const handleSend = (msg: string) => {
        if (msg.trim()) {
            setGlobalMessages([...globalMessages, msg]);
        }
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 flex flex-col h-screen">
                <ChatList />
                <MessageWindow />
                <InputBox onSend={handleSend} />
            </div>
        </div>
    );
};

export default App;
