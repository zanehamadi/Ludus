from .db import db
from .game import game_genre_joins

class Genre(db.Model):
    __tablename__ = 'genres'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    games = db.relationship('Game', secondary = game_genre_joins) 





    def to_dict(self):
        return {

            "id": self.id,
            "name": self.name
            
        }

    