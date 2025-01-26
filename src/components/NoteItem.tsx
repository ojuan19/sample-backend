import React from 'react';
import { Note } from '../types/Note';

interface NoteItemProps {
  note: Note;
  deleteNote: (id: string) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, deleteNote }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md mb-2 shadow-sm">
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p className="text-sm text-gray-700">{note.content}</p>
      <button
        onClick={() => deleteNote(note.id)}
        className="text-red-500 mt-2"
      >
        Delete
      </button>
    </div>
  );
};

export default NoteItem;
