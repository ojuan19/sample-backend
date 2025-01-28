import React from 'react';

interface TimerDisplayProps {
  timeRemaining: number; // in milliseconds
}

const TimerDisplay: React.FC<TimerDisplayProps> = ({ timeRemaining }) => {
  const minutes = Math.floor(timeRemaining / 60000);
  const seconds = Math.floor((timeRemaining % 60000) / 1000);
  const milliseconds = timeRemaining % 1000;

  return (
    <div className="text-white text-center p-4">
      <div className="text-5xl font-bold">
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}.{
          milliseconds < 100 ? `0${milliseconds}` : milliseconds
        }
      </div>
    </div>
  );
};

export default TimerDisplay;
