import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center">
      <input 
        type="text" 
        placeholder="Search patients..." 
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button className="ml-2 p-2 bg-blue-600 text-white rounded">Search</button>
    </div>
  );
}

export default SearchBar;