import React from 'react';

interface TodoItemProps {
  todo: { id: number, text: string };
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodo }) => {
  return (
    <li className="flex justify-between items-center py-2">
      <span className="text-gray-700">{todo.text}</span>
      <button 
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
