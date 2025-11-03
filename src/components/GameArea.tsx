// src/components/GameArea.tsx
import { MOCK_PLAYERS } from '../mocks/mockData';
import { PlayerMat } from './PlayerMat';

// You'll need a simple component for the Deck/Discard Pile visual
const DeckPile: React.FC<{ title: string }> = ({ title }) => (
  <div className="deck-pile">
    <h3>{title}</h3>
  </div>
);

export const GameArea: React.FC = () => {
  return (
    <div className="game-table">
      {/* 1. Center of the Table (Deck and Discard) */}
      <div className="center-area">
        <DeckPile title="Draw Deck" />
        <p className="game-info">Action buttons</p>
      </div>

      {/* 2. Player Areas */}
      <div className="players-layout">
        {MOCK_PLAYERS.map(player => (
          // Pass the player object as a prop
          <PlayerMat key={player.id} player={player} /> 
        ))}
      </div>
    </div>
  );
};