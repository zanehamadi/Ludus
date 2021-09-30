from .db import db

class Review(db.Model):

    __tablename__ = 'reviews'
    
    id = db.Column(db.Integer, primary_key=True)
    game_id = db.Column(db.Integer, db.ForeignKey('games.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    review = db.Column(db.Integer)

    game = db.relationship('Game', back_populates='reviews')
    user = db.relationship('User', back_populates='reviews')

    def to_dict(self):
        return{
            'id': self.id,
            'game_id': self.game_id,
            'user_id': self.user_id,
            'review': self.review
        }