// src/mocks/mockData.ts
import { Character, type PlayerType } from '../models/GameTypes';

export const MOCK_PLAYERS: PlayerType[] = [
  {
    id: 'p1',
    name: 'Player 1 (You)',
    coins: 4,
    isActivePlayer: true,
    isOut: false,
    hand: [
      { id: 'c1', character: Character.COMMANDER, faceUp: true, isEliminated: false },
      { id: 'c2', character: Character.COLLECTOR, faceUp: true, isEliminated: false },
    ],
  },
  {
    id: 'p2',
    name: 'Player 2',
    coins: 7,
    isActivePlayer: false,
    isOut: false,
    hand: [
      { id: 'c3', character: Character.CYBER_HITMAN, faceUp: false, isEliminated: false },
      { id: 'c4', character: Character.SMUGGLER, faceUp: true, isEliminated: true }, // Eliminated Card
    ],
  },
  {
    id: 'p3',
    name: 'Player 3 (Eliminated)',
    coins: 0,
    isActivePlayer: false,
    isOut: true,
    hand: [
      { id: 'c5', character: Character.COALITION, faceUp: true, isEliminated: true },
      { id: 'c6', character: Character.COLLECTOR, faceUp: true, isEliminated: true },
    ],
  },
];