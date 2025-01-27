import React from 'react';
import Board from './Board';
import useDarkMode from './useDarkMode';

function App() {
  useDarkMode();

  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;