# backend/models.py
from pydantic import BaseModel, Field
from typing import List

# Tipos de Personaje (Mapeado de tus CharacterTypes)
CHARACTER_TYPES = (
    "The Collector", 
    "The Cyber Hitman", 
    "The Smuggler", 
    "The Coalition Spy", # Nota: Usé 'Coalition Spy' para coincidir con tu imagen
    "The Commander"
)

class Card(BaseModel):
    id: str
    character: str = Field(..., description="Uno de los tipos definidos arriba")
    faceUp: bool
    isEliminated: bool

class Player(BaseModel):
    id: str
    name: str
    coins: int
    hand: List[Card]
    isActivePlayer: bool
    isOut: bool

class GameState(BaseModel):
    players: List[Player]
    current_turn: str
    game_status: str = "SETUP"