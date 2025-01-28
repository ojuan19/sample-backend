import React from 'react';

const PlayerControl: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 flex justify-around items-center">
      <button className="text-gray-300">Prev</button>
      <button className="text-gray-300">Play/Pause</button>
      <button className="text-gray-300">Next</button>
      <input type="range" min="0" max="100" className="w-1/2" />
    </div>
  );
};

export default PlayerControl;