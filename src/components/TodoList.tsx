import React from 'react';

interface TodoListProps {
  todos: string[];
  deleteTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
  return (
    <ul className="list-disc w-full max-w-md mx-auto">
      {todos.map((todo, index) => (
        <li
          key={index}
          className="flex justify-between items-center p-2 border-b dark:border-gray-700"
        >
          <span className="dark:text-white">{todo}</span>
          <button
            onClick={() => deleteTodo(index)}
            className="text-red-600 hover:underline"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;