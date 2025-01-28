import React, { useState } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (newTodo: string) => {
    if (newTodo.length === 0) return;
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center p-4">
      <Header />
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
