import React from 'react';

interface TodoListProps {
  todos: string[];
  deleteTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
  return (
    <ul className="list-disc mt-4">
      {todos.map((todo, index) => (
        <li key={index} className="flex justify-between items-center py-1">
          <span>{todo}</span>
          <button
            onClick={() => deleteTodo(index)}
            className="text-red-500 hover:text-red-700 focus:outline-none"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
