import React from 'react';
import Playlist from '../components/Playlist';

const PlaylistPage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Playlist />
    </div>
  );
};

export default PlaylistPage;