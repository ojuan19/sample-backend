import React from 'react';
import SongCard from './SongCard';
import PlayerControl from './PlayerControl';

const Playlist: React.FC = () => {
  return (
    <div className="flex-1 bg-gray-900 p-6">
      <h2 className="text-white text-2xl mb-4">Playlist</h2>
      <div className="mb-8">
        <SongCard title="Song A" artist="Artist A" />
        <SongCard title="Song B" artist="Artist B" />
      </div>
      <PlayerControl />
    </div>
  );
};

export default Playlist;