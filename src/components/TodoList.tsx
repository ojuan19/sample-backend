import React from 'react';
import TodoItem from './TodoItem';

interface Props {
  todos: string[];
  deleteTodo: (index: number) => void;
}

const TodoList: React.FC<Props> = ({ todos, deleteTodo }) => {
  return (
    <ul className="w-full max-w-md">
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
