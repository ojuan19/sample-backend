import React, { useState } from 'react';

interface TodoInputProps {
  addTodo: (todo: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a TODO"
        className="border p-2 mb-2 dark:bg-gray-800 dark:text-white"
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white px-4 py-2 rounded dark:bg-blue-700"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
