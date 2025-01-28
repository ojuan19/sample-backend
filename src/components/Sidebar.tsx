import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 p-5">
      <div className="space-y-2">
        <h2 className="text-lg">Playlists</h2>
        <ul>
          <li><a href="/playlist/1" className="hover:underline">My Playlist #1</a></li>
          <li><a href="/playlist/2" className="hover:underline">My Playlist #2</a></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;