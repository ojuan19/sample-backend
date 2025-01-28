import React, { useState } from 'react';

interface Props {
  addTodo: (newTodo: string) => void;
}

const TodoInput: React.FC<Props> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddClick = () => {
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="bg-gray-800 text-white p-2 rounded-l focus:outline-none"
        placeholder="Enter a new todo..."
      />
      <button
        onClick={handleAddClick}
        className="bg-blue-600 px-4 py-2 rounded-r text-white hover:bg-blue-700"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
