import React, { useState } from 'react';

type TodoInputProps = {
  addTodo: (todo: string) => void;
};

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddClick = () => {
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
        className="p-2 w-full text-black" // Ensure input text is readable
        placeholder="Add a new todo"
      />
      <button
        onClick={handleAddClick}
        className="mt-2 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
