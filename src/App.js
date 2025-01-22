import React, { useState } from 'react';
import Game from './Game';
import Settings from './Settings';
import History from './History';

function App() {
  const [view, setView] = useState('game'); // 'game', 'settings', 'history'
  const [gameMode, setGameMode] = useState(4); // Nombre de cartes
  const [background, setBackground] = useState('#ffffff'); // Couleur de fond

  return (
    <div style={{ background }}>
      <header>
        <button onClick={() => setView('game')}>Jouer</button>
        <button onClick={() => setView('settings')}>Paramètres</button>
        <button onClick={() => setView('history')}>Historique</button>
      </header>
      {view === 'game' && <Game mode={gameMode} setView={setView} />}
      {view === 'settings' && <Settings setGameMode={setGameMode} setBackground={setBackground} />}
      {view === 'history' && <History />}
    </div>
  );
}

export default App;
