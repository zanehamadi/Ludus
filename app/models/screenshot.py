from .db import db

class Screenshot(db.Model):

    __tablename__ = 'screenshots'

    id = db.Column(db.Integer, primary_key=True)
    screenshot = db.Column(db.String)
    game_id = db.Column(db.Integer, db.ForeignKey('games.id'))



    game = db.relationship('Game', back_populates='screenshots')




    def to_dict(self):
        return {
            "id": self.id,
            "screenshot": self.screenshot,
            "game_id": self.game_id
        }

    