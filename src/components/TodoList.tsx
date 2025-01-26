import React from 'react';

interface TodoListProps {
  todos: string[];
  deleteTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
  return (
    <ul className="list-disc list-inside">
      {todos.map((todo, index) => (
        <li key={index} className="flex justify-between items-center mb-2">
          <span>{todo}</span>
          <button
            onClick={() => deleteTodo(index)}
            className="bg-red-500 text-white p-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;