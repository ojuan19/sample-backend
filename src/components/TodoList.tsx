import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: { id: number, text: string }[];
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
  return (
    <ul className="w-full max-w-md bg-white rounded-lg shadow-lg p-5 mt-5">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
