import React, { useState, useEffect } from 'react';

const DashboardPage = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch initial data
    const fetchData = async () => {
      const result = await fetch('/api/dashboard');
      const data = await result.json();
      setData(data);
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
        className="p-2 border rounded w-full mb-4"
      />
      <ul>
        {data.filter(item => item.includes(searchQuery)).map((item, index) => (
          <li key={index} className="mb-2 p-2 bg-gray-100 rounded">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;
