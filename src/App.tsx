import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App: React.FC = () => {
    const [todos, setTodos] = useState<{ id: number, text: string }[]>([]);

    const addTodo = (text: string) => {
        const newTodo = { id: Date.now(), text };
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="h-screen bg-gray-100 flex flex-col items-center">
            <h1 className="text-4xl font-bold mt-10 mb-5">Todo List</h1>
            <AddTodo addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
};

export default App;
