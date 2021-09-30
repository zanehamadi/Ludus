from app.models import db, Game
import json
import os




# import json



def seed_games():
    cwd = os.path.dirname(os.path.abspath(__file__))
    filepath = os.path.join(cwd,'gameWImg.json')
    game_seeder = open(filepath)
    games = json.load(game_seeder)

    for game in games:
        print('GAME IS HERE:', game)
        new_game = Game(
            id = game['id'],
            name = game['name'],
            required_age = game['required_age'],
            is_free = game['is_free'],
            description = game['description'],
            price = game['price'],
            release_date = game['release_date'],
            image = game['img']
        )
        db.session.add(new_game)

    db.session.commit()


def undo_games():
    db.session.execute('TRUNCATE games RESTART IDENTITY CASCADE;')
    db.session.commit()
