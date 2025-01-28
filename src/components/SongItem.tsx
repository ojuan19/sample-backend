import React from 'react';

const SongItem = ({ title, artist, album, duration }) => {
  return (
    <div className="flex justify-between items-center p-2 border-b border-gray-700">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-500" />
        <div className="ml-3">
          <div className="text-white text-sm">{title}</div>
          <div className="text-gray-400 text-xs">{artist} • {album}</div>
        </div>
      </div>
      <div className="text-gray-400 text-xs">{duration}</div>
    </div>
  );
};

export default SongItem;