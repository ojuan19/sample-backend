import React from 'react';
import Column from './Column';

const Board = () => {
  return (
    <div className="flex justify-center items-start h-screen p-4 bg-purple-900 text-white">
      <Column title="Backlog" />
      <Column title="Doing" />
      <Column title="Done" />
    </div>
  );
};

export default Board;