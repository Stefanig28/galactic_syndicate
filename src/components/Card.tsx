// src/components/Card.tsx
import type { JSX } from 'react';
import { type CardType } from '../models/GameTypes';
import { Character } from '../models/GameTypes';
import collectorImage from '../assets/the_collector.png';
import cyberHitmanImage from '../assets/the_cyber_hitman.png';
import smugglerImage from '../assets/the_smuggler.png';
import coalitionImage from '../assets/the_coalition_spy.png';
import commanderImage from '../assets/the_commander.png';

const CHARACTER_IMAGES = {
  [Character.COLLECTOR]: collectorImage,
  [Character.CYBER_HITMAN]: cyberHitmanImage,
  [Character.SMUGGLER]: smugglerImage,
  [Character.COALITION]: coalitionImage,
  [Character.COMMANDER]: commanderImage,
};

interface CardProps {
  card: CardType;
}

export const Card: React.FC<CardProps> = ({ card }) => {
  const { character, faceUp, isEliminated } = card;

  let content: JSX.Element;
  let className = 'card-container';
  const characterImagePath = CHARACTER_IMAGES[character as keyof typeof CHARACTER_IMAGES];

  // Apply CSS classes based on state
  if (isEliminated) {
    className += ' eliminated';
    // Mantenemos el texto para indicar qué carta fue eliminada
    content = 
      <>
        <img src={characterImagePath} alt={character} className="card-image eliminated-img" />
        <p>❌ {character} (Eliminated)</p>
      </>
  } 
  else if (faceUp) {
    className += ' face-up';
    content = 
      <>
        {/* Usamos un div para agrupar el título y la imagen */}
        <div className="card-face-content"> 
          <h3 className="card-title">{character}</h3>
          <img src={characterImagePath} alt={character} className="card-image" />
        </div>
      </>
  } 
  else {
    className += ' face-down';
    // Dorso de la carta
    content = <p>GALACTIC SYNDICATE</p>; 
  }

  return (
    <div className={className}>
      {content}
    </div>
  );
};