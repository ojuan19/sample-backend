import React from 'react';

interface TodoItemProps {
  todo: { id: number, text: string };
  removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, removeTodo }) => {
  return (
    <li className="flex justify-between items-center py-2">
      <span>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)} className="bg-red-500 text-white px-2 py-1 rounded">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;