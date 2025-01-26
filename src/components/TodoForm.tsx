import React, { useState } from 'react';

interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full px-3 py-2 border rounded-lg"
        placeholder="Add new todo"
      />
      <button type="submit" className="w-full mt-2 py-2 bg-blue-500 text-white rounded-lg">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;