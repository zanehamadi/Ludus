from app.models import db
from app.models.game import game_genre_joins
import json
import os


def seed_game_genre_joins():

    cwd = os.path.dirname(os.path.abspath(__file__))
    filepath = os.path.join(cwd,'game-genre-joins.json')
    game_genre_seeder = open(filepath)
    game_genres = json.load(game_genre_seeder)

    for game_genre in game_genres:
        db.session.execute(game_genre_joins.insert().values(game_id = game_genre['game_id'], 
        genre_id = game_genre['genre_id']))
    
    db.session.commit()


def undo_game_genre_joins():
    db.session.execute('TRUNCATE game_genre_joins RESTART IDENTITY CASCADE;')
    db.session.commit()
