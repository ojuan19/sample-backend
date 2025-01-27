import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskTitle: string) => {
    const newTask = {
      id: tasks.length + 1,
      title: taskTitle,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (taskId: number) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-xl mb-4 text-center">Task Manager</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onToggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
