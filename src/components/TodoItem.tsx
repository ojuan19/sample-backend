import React from 'react';

interface Props {
  todo: string;
  index: number;
  deleteTodo: (index: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, index, deleteTodo }) => {
  return (
    <li className="flex justify-between items-center bg-gray-800 mb-2 p-2 rounded">
      <span>{todo}</span>
      <button
        onClick={() => deleteTodo(index)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
