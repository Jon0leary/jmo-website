import React from 'react';
import './Games.css'; // Your custom CSS file
import Background from '../components/Background.js'; // Import the new Background component

function Games() {
  const games = [
    {
      title: 'Coming Soon . . .',
      description: 'Coming Soon . . .',
      imgAlt: 'Summoner Showdown Picture'
    },
  ];

  return (
    
    <div className="games-container">
      <Background /> {/* Add the background component */}
      {games.map((game, index) => (
        <div key={index} className="game-section">
          <div className="game-image">
            <div className="placeholder-image">
              <p>PICTURE</p>
            </div>
          </div>
          <div className="game-info">
            <h2>GAME {index + 1} ({game.title})</h2>
            <p>{game.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Games;