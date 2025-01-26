import React from 'react';

interface Todo {
  id: number;
  text: string;
}

interface TodoItemProps {
  todo: Todo;
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, removeTodo }) => {
  return (
    <li className="flex justify-between items-center p-2 bg-white border-b border-gray-300">
      <span>{todo.text}</span>
      <button
        onClick={() => removeTodo(todo.id)}
        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
