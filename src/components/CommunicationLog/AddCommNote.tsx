import React, { useState } from 'react';

const AddCommNote = () => {
  const [note, setNote] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to add communication note
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input 
        type="text" 
        placeholder="Add note..." 
        value={note} 
        onChange={handleChange} 
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="p-2 bg-blue-600 text-white rounded">Add Note</button>
    </form>
  );
}

export default AddCommNote;