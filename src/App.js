import React from 'react';
import Game from './components/Game/Game';
import './App.css';

function App() {
  return (
    <div className="bg-gradient-to-t from-orange-400 to-sky-400">
      <div className="flex justify-center items-center min-h-screen">
        <Game />
      </div>
    </div>
  );
}

export default App;
