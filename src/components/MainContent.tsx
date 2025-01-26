import React from 'react';
import { Outlet } from 'react-router-dom';

const MainContent: React.FC = () => {
    return (
        <main className="ml-64 p-8">
            <Outlet />
        </main>
    );
};

export default MainContent;