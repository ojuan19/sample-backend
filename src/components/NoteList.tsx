import React from 'react';
import { Note } from '../types/Note';
import NoteItem from './NoteItem';

interface NoteListProps {
  notes: Note[];
  deleteNote: (id: string) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, deleteNote }) => {
  return (
    <div className="mt-4">
      {notes.length ? (
        notes.map((note) => (
          <NoteItem key={note.id} note={note} deleteNote={deleteNote} />
        ))
      ) : (
        <p className="text-center text-gray-500">No notes available. Start adding some!</p>
      )}
    </div>
  );
};

export default NoteList;
