import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: string[];
  deleteTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
  return (
    <div className="p-4">
      {todos.map((todo, index) => (
        <TodoItem key={index} index={index} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
