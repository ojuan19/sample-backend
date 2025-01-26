import React from 'react';

interface TodoItemProps {
  todo: { id: string; title: string; };
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => {
  return (
    <div className="flex justify-between items-center bg-white p-2 shadow-md rounded my-2">
      <span className="text-lg">{todo.title}</span>
      <button
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
