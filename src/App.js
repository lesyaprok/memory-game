import React from 'react';
import Game from './components/Game/Game';
import './App.css';

function App() {
  return (
    <div className="bg-slate-800">
      <div className="flex justify-center items-center min-h-screen">
        <Game />
      </div>
    </div>
  );
}

export default App;
