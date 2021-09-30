from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

played_table = db.Table('played',
    db.Column('id', db.Integer, primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey('users.id')),
    db.Column('game_id', db.Integer, db.ForeignKey('games.id'))
)

playing_table = db.Table('playing',
    db.Column('id', db.Integer, primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey('users.id')),
    db.Column('game_id', db.Integer, db.ForeignKey('games.id'))
)

want_to_play_table = db.Table('want_to_play',
    db.Column('id', db.Integer, primary_key=True),
    db.Column('user_id', db.Integer, db.ForeignKey('users.id')),
    db.Column('game_id', db.Integer, db.ForeignKey('games.id'))
)


class User(db.Model, UserMixin):

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    want_to_play = db.relationship('Game', secondary=want_to_play_table)
    playing = db.relationship('Game', secondary=playing_table)
    played = db.relationship('Game', secondary=played_table)
    reviews = db.relationship('Review', back_populates='user')





    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        played = [game.id for game in self.played]
        wantToPlay = [game.id for game in self.want_to_play]
        playing = [game.id for game in self.playing]
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'wantToPlay': wantToPlay,
            'playing': playing,
            'played': played,
            'reviews': [review.to_dict() for review in self.reviews]
        }
