import React from 'react';

const CreatePoll = () => {
  // TODO: Implement form to create a poll
  return (
    <form className="p-4 bg-white shadow rounded">
      <div>
        <label htmlFor="question" className="block text-sm font-medium text-gray-700">Poll Question</label>
        <input type="text" id="question" className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
      </div>
      {/* Add input fields for poll options */}
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
      >
        Create Poll
      </button>
    </form>
  );
};

export default CreatePoll;