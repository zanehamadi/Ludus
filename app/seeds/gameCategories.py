from app.models import db
from app.models.game import game_category_joins
import json
import os


def seed_game_category_joins():

    cwd = os.path.dirname(os.path.abspath(__file__))
    filepath = os.path.join(cwd,'game-cat-joins-seeder.json')
    game_cat_seeder = open(filepath)
    game_categories = json.load(game_cat_seeder)

    for game_category in game_categories:
        db.session.execute(game_category_joins.insert().values(game_id = game_category['game_id'], 
        category_id = game_category['category_id']))
    
    db.session.commit()


def undo_game_category_joins():
    db.session.execute('TRUNCATE game_category_joins RESTART IDENTITY CASCADE;')
    db.session.commit()
