import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: { id: number, text: string }[];
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo }) => {
  return (
    <ul className="list-disc pl-5">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};

export default TodoList;