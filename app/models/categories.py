from .db import db
from .game import game_category_joins

class Category(db.Model):

    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    games = db.relationship('Game', secondary = game_category_joins) 
    

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
        }

    