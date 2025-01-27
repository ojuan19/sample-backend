import React from 'react';

interface TodoItemProps {
  todo: string;
  index: number;
  deleteTodo: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, deleteTodo }) => {
  return (
    <div className="flex justify-between items-center p-2 border-b dark:border-gray-700">
      <span className="dark:text-white">{todo}</span>
      <button
        onClick={() => deleteTodo(index)}
        className="bg-red-500 text-white px-2 py-1 rounded dark:bg-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
