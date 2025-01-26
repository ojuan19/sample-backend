import React, { useState } from 'react';

// Main App Component
function App() {
  // State to manage the list of todos
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  // Function to add a new todo to the list
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }
  };

  // Function to delete a todo by its index
  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">To-Do List</h2>
        <div className="flex">{/* Input and Add button */}
          <input
            type="text"
            className="flex-1 border border-gray-300 p-2 rounded-l text-gray-800"
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        <ul className="mt-4 space-y-2">{/* List of todos */}
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-50 p-2 rounded shadow-sm"
            >
              <span>{todo}</span>
              <button
                onClick={() => deleteTodo(index)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
