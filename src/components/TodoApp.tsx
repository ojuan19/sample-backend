import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="flex min-h-screen bg-gray-800 text-white">
      <div className="w-1/2 p-4">
        <TodoInput addTodo={addTodo} />
      </div>
      <div className="w-1/2 p-4">
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
};

export default TodoApp;
