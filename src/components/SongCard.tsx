import React from 'react';

type SongCardProps = {
  title: string;
  artist: string;
};

const SongCard: React.FC<SongCardProps> = ({ title, artist }) => {
  return (
    <div className="border-b border-gray-700 p-4 flex justify-between items-center">
      <div>
        <div className="text-white font-semibold">{title}</div>
        <div className="text-gray-400">{artist}</div>
      </div>
      <button className="text-green-500">Play</button>
    </div>
  );
};

export default SongCard;