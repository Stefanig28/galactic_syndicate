# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models.models import GameState, Player, Card, CHARACTER_TYPES

app = FastAPI(title="Galactic Syndicate API")

# Configuración CORS (necesario para React en otro puerto)
origins = ["http://localhost:5173", "http://127.0.0.1:5173"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Estado MOCK (simulando tu mockData.ts)
MOCK_GAME_STATE = GameState(
    players=[
        Player(
            id="p1", 
            name="Player 1 (You)", 
            coins=4, 
            isActivePlayer=True, 
            isOut=False, 
            hand=[
                Card(id="c1", character=CHARACTER_TYPES[4], faceUp=True, isEliminated=False),
                Card(id="c2", character=CHARACTER_TYPES[0], faceUp=True, isEliminated=False),
            ]
        ),
        # ... Añade más jugadores si quieres
    ],
    current_turn="p1",
)

@app.get("/game", response_model=GameState)
def get_game_state():
    """Retorna el estado actual del juego."""
    return MOCK_GAME_STATE