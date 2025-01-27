import React from 'react';
import PollList from '../components/PollList';
import CreatePoll from '../components/CreatePoll';

const HomePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Community Polls</h1>
      <PollList />
      <button className="mt-4 px-4 py-2 bg-green-500 hover:bg-green-700 text-white font-bold rounded">
        Create New Poll
      </button>
    </div>
  );
};

export default HomePage;