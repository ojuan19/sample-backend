import React from 'react';

const Playlist = ({ title, thumbnail, trackCount, duration }) => {
  return (
    <div className="flex items-center bg-gray-700 p-4 rounded-lg">
      <img src={thumbnail} alt={title} className="w-16 h-16 rounded-full" />
      <div className="ml-4">
        <h3 className="text-xl text-white">{title}</h3>
        <div className="text-gray-400">
          <span>{trackCount} Tracks</span> • <span>{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default Playlist;