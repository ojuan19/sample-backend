import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(1500); // Default to 25 minutes
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(1500);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="flex flex-col items-center bg-gray-800 text-white p-6 rounded">
      <h2 className="text-2xl">Pomodoro Timer</h2>
      <p className="text-5xl font-mono">{formatTime(timeLeft)}</p>
      <div className="mt-4">
        <button onClick={startTimer} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2">Start</button>
        <button onClick={pauseTimer} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mx-2">Pause</button>
        <button onClick={resetTimer} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2">Reset</button>
      </div>
    </div>
  );
};

export default Timer;
