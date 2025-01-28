import React from 'react';

interface TodoItemProps {
  index: number;
  todo: string;
  deleteTodo: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ index, todo, deleteTodo }) => {
  return (
    <li className="flex justify-between p-2 bg-gray-700">
      <span>{todo}</span>
      <button className="bg-red-500 px-2" onClick={() => deleteTodo(index)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
