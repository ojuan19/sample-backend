import React from 'react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleComplete }) => {
  return (
    <ul className="list-none p-0">
      {tasks.map(task => (
        <li key={task.id} className="flex items-center justify-between p-2 border-b border-gray-300">
          <span className={task.completed ? "line-through" : ""}>{task.title}</span>
          <button onClick={() => onToggleComplete(task.id)}
                  className="text-xs bg-blue-500 text-white p-1 rounded">
            {task.completed ? 'Undo' : 'Complete'}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
