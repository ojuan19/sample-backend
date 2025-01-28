import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Playlist from '../components/Playlist';

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-black min-h-screen">
        <Navbar />
        <main className="p-5">
          <h1 className="text-white text-2xl mb-4">Your Playlists</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Playlist
              title="Rock Classics"
              thumbnail="path/to/thumbnail.jpg"
              trackCount={20}
              duration="1h 30m"
            />
            <Playlist
              title="Pop Hits"
              thumbnail="path/to/thumbnail.jpg"
              trackCount={15}
              duration="1h"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;