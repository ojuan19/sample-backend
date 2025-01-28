import axios from 'axios';

const BASE_URL = 'https://api.spotify.com/v1';

export const fetchPlaylists = async (token: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/me/playlists`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching playlists', error);
    throw error;
  }
};

export const fetchTracks = async (playlistId: string, token: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/playlists/${playlistId}/tracks`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching tracks', error);
    throw error;
  }
};