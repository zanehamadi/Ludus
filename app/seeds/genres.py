from app.models import db, Genre
import json
import os


def seed_genres():
    cwd = os.path.dirname(os.path.abspath(__file__))
    filepath = os.path.join(cwd,'formatted-genres.json')
    genre_seeder = open(filepath)
    genres = json.load(genre_seeder)

    for genre in genres:
        new_genre = Genre(
            id = genre['id'],
            name = genre['name'],
        )
        db.session.add(new_genre)

    db.session.commit()


def undo_genres():
    db.session.execute('TRUNCATE genres RESTART IDENTITY CASCADE;')
    db.session.commit()
