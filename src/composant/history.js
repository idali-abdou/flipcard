import React from 'react';

function History() {
  const history = JSON.parse(localStorage.getItem('memoryGameHistory') || '[]');

  return (
    <div>
      <h2>Historique des jeux</h2>
      <ul>
        {history.map((game, index) => (
          <li key={index}>
            Score: {game.score}, Temps: {Math.round(game.time / 1000)} secondes
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
