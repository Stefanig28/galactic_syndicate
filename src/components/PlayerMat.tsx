// src/components/PlayerMat.tsx
import { type PlayerType } from '../models/GameTypes';
import { Card } from './Card';

interface PlayerMatProps {
  player: PlayerType;
}

export const PlayerMat: React.FC<PlayerMatProps> = ({ player }) => {
  // Determine CSS classes for styling active/out players
  const className = `player-mat ${player.isActivePlayer ? 'active' : ''} ${player.isOut ? 'out' : ''}`;

  return (
    <div className={className}>
      <p className="player-name">{player.name}</p>
      <p className="player-coins">🪙 Coins: {player.coins}</p>
      
      {/* Hand of Cards */}
      <div className="card-hand">
        {player.hand.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>

      {player.isOut && <div className="eliminated-overlay">ELIMINATED</div>}
    </div>
  );
};