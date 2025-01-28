import React, { createContext, useContext, ReactNode, useState } from 'react';

type Playlist = {
  id: number;
  title: string;
  trackCount: number;
  duration: string;
};

type PlaylistContextType = {
  playlists: Playlist[];
  setPlaylists: React.Dispatch<React.SetStateAction<Playlist[]>>;
};

const PlaylistContext = createContext<PlaylistContextType | undefined>(undefined);

export const PlaylistProvider = ({ children }: { children: ReactNode }) => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  return (
    <PlaylistContext.Provider value={{ playlists, setPlaylists }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylists = () => {
  const context = useContext(PlaylistContext);
  if (!context) {
    throw new Error('usePlaylists must be used within a PlaylistProvider');
  }
  return context;
};