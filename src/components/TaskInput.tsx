import React, { useState } from 'react';

interface TaskInputProps {
  onAddTask: (taskTitle: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      onAddTask(taskTitle);
      setTaskTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Add a new task"
        className="flex-grow p-2 border rounded-l border-gray-300"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-r">
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
