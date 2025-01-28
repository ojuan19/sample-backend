import React, { useState } from 'react';

interface TodoInputProps {
  addTodo: (todo: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddClick = () => {
    if(inputValue.trim()) {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="flex flex-col">
      <input 
        type="text" 
        className="p-2 mb-2 text-black"
        placeholder="Enter a new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button 
        className="bg-blue-500 p-2 text-white"
        onClick={handleAddClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default TodoInput;
