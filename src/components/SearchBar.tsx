import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="mb-4">
      <input 
        type="text" 
        placeholder="Search Patients..." 
        className="w-full p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-indigo-500"
      />
    </div>
  );
};

export default SearchBar;