import React from 'react';

type TodoListProps = {
  todos: string[];
  removeTodo: (index: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => {
  return (
    <div className="p-4 flex-grow">
      {todos.length === 0 ? (
        <p className="text-gray-500">No todos yet!</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-800 p-2 my-2 rounded"
            >
              <span>{todo}</span>
              <button
                onClick={() => removeTodo(index)}
                className="bg-red-500 text-white p-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
