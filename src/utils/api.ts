// This file would contain functions to interact with external APIs.
// For the purpose of this clone, you can mock the responses.

export const getPlaylists = async () => {
  return [
    { id: 1, title: 'Rock Classics', trackCount: 20, duration: '1h 30m' },
    { id: 2, title: 'Pop Hits', trackCount: 15, duration: '1h' },
  ];
};