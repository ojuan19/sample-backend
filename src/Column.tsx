import React from 'react';
import TaskCard from './TaskCard';

const Column = ({ title }: { title: string }) => {
  return (
    <div className="bg-purple-700 m-2 p-2 rounded w-1/3">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <TaskCard />
    </div>
  );
};

export default Column;