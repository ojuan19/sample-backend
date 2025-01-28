import React, { useState, useEffect } from 'react';
import TimerDisplay from './components/TimerDisplay';
import TimerControls from './components/TimerControls';
import { formatTime } from './utils/time';

const App: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState<number>(3600000); // 60 minutes in milliseconds
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(interval!);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1);
    } else if (!isRunning && interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded shadow-md">
        <TimerDisplay timeRemaining={timeRemaining} />
        <TimerControls isRunning={isRunning} onStart={handleStart} onPause={handlePause} />
      </div>
    </div>
  );
};

export default App;
