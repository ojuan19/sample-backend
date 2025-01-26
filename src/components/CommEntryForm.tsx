import React, { useState } from 'react';

type CommunicationEntry = {
  type: string;
  detail: string;
};

const CommEntryForm: React.FC = () => {
  const [entry, setEntry] = useState<CommunicationEntry>({ type: '', detail: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEntry({ ...entry, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New Communication Entry:', entry);
    setEntry({ type: '', detail: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="type"
        placeholder="Type (Call, Email, etc.)"
        value={entry.type}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        name="detail"
        placeholder="Details"
        value={entry.detail}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="bg-indigo-500 text-white p-2 rounded">Add Entry</button>
    </form>
  );
};

export default CommEntryForm;