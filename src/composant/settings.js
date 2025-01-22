import React from 'react';

function Settings({ setGameMode, setBackground }) {
  return (
    <div>
      <h2>Paramètres</h2>
      <label>
        Mode de jeu:
        <select onChange={(e) => setGameMode(Number(e.target.value))}>
          <option value={4}>4 cartes</option>
          <option value={8}>8 cartes</option>
        </select>
      </label>
      <label>
        Couleur de fond:
        <input type="color" onChange={(e) => setBackground(e.target.value)} />
      </label>
    </div>
  );
}

export default Settings;
