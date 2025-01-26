import React, { useState } from 'react';
import { Note } from '../types/Note';

interface NoteFormProps {
  addNote: (note: Note) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newNote: Note = {
      id: Date.now().toString(), // using Date.now() for simplicity
      title,
      content,
    };

    addNote(newNote);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
      <input
        type="text"
        className="w-full border-b p-2 mb-4 focus:outline-none focus:border-blue-500"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full border-b p-2 mb-4 focus:outline-none focus:border-blue-500"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
