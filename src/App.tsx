import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './index.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-xl mx-auto pt-10">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-5">
          TODO List
        </h1>
        <div className="flex">
          <div className="w-full sm:w-1/2">
            <TodoInput addTodo={addTodo} />
          </div>
          <div className="w-full sm:w-1/2">
            <TodoList todos={todos} deleteTodo={deleteTodo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
