import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import SongItem from '../components/SongItem';

const PlaylistDetail = () => {
  const { id } = useParams();
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-black min-h-screen">
        <Navbar />
        <main className="p-5">
          <h1 className="text-white text-2xl mb-4">Playlist {id}</h1>
          <div className="space-y-2">
            <SongItem title="Song 1" artist="Artist 1" album="Album 1" duration="3:30" />
            <SongItem title="Song 2" artist="Artist 2" album="Album 2" duration="4:20" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default PlaylistDetail;