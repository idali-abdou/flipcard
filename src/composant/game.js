import React, { useEffect, useState } from 'react';

const generateCards = (num) => {
  const cards = Array.from({ length: num }, (_, i) => i % (num / 2));
  return cards.sort(() => Math.random() - 0.5);
};

function Game({ mode, setView }) {
  const [cards, setCards] = useState(generateCards(mode));
  const [selectedCards, setSelectedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [first, second] = selectedCards;
      if (cards[first] === cards[second]) {
        setScore(score + 1);
      }
      setTimeout(() => setSelectedCards([]), 1000);
    }
  }, [selectedCards]);

  const handleCardClick = (index) => {
    if (selectedCards.length < 2) {
      setSelectedCards([...selectedCards, index]);
    }
  };

  const endGame = () => {
    const timeTaken = Date.now() - startTime;
    localStorage.setItem('memoryGameHistory', JSON.stringify([...JSON.parse(localStorage.getItem('memoryGameHistory') || '[]'), { score, time: timeTaken }]));
    setView('history');
  };

  return (
    <div>
      <h2>Score: {score}</h2>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div key={index} onClick={() => handleCardClick(index)} className={`card ${selectedCards.includes(index) ? 'flipped' : ''}`}>
            {selectedCards.includes(index) ? card : '?'}
          </div>
        ))}
      </div>
      <button onClick={endGame}>Terminer le jeu</button>
    </div>
  );
}

export default Game;
