import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
    // Add logic to search through patient records
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        className="border p-2 flex-grow"
        placeholder="Search patient records..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2 ml-2" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;