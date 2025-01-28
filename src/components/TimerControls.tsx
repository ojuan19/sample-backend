import React from 'react';

interface TimerControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
}

const TimerControls: React.FC<TimerControlsProps> = ({ isRunning, onStart, onPause }) => {
  return (
    <div className="flex justify-center space-x-4 mt-8">
      {!isRunning ? (
        <button onClick={onStart} className="bg-blue-500 text-white px-4 py-2 rounded">Start</button>
      ) : (
        <button onClick={onPause} className="bg-red-500 text-white px-4 py-2 rounded">Pause</button>
      )}
    </div>
  );
};

export default TimerControls;
