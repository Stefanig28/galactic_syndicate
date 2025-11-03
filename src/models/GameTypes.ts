// src/types.ts

// 1. Character Types (Galactic Syndicate)
export const Character = {
  COLLECTOR: 'Collector',    
  CYBER_HITMAN: 'Cyber Hitman',
  SMUGGLER: 'Smuggler',
  COALITION: 'Coalition',
  COMMANDER: 'Commander',
} as const;

// Type of the character values (e.g., 'The Collector' | 'The Cyber Hitman'...)
export type CharacterType = typeof Character[keyof typeof Character];

// 2. Card State
export interface CardType {
  id: string; 
  character: CharacterType; 
  // true: shows the face of the card (the character)
  faceUp: boolean;
  // true: card that has been eliminated 
  isEliminated: boolean;
}

// 3. Player State (simulated)
export interface PlayerType {
  id: string;
  name: string;
  coins: number;
  // The cards the player holds
  hand: CardType[]; 
  // true if it is the current player or the one being highlighted
  isActivePlayer: boolean; 
  // true if the player is eliminated from the game
  isOut: boolean;
}