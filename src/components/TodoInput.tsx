import React, { useState } from 'react';

interface TodoInputProps {
  addTodo: (todo: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="flex justify-center items-center w-full mb-4">
      <input
        type="text"
        className="p-2 w-full max-w-md border rounded dark:bg-gray-800 dark:text-white"
        placeholder="Add a new todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={handleAddTodo}
        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;