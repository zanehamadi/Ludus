from .db import db

game_category_joins = db.Table('game_categories',
    db.Column('id', db.Integer, primary_key=True),
    db.Column('game_id', db.Integer, db.ForeignKey('games.id')),
    db.Column('category_id', db.Integer, db.ForeignKey('categories.id')),
)


game_genre_joins = db.Table('game_genres',
    db.Column('id', db.Integer, primary_key=True),
    db.Column('game_id', db.Integer, db.ForeignKey('games.id')),
    db.Column('genre_id', db.Integer, db.ForeignKey('genres.id')),
)


class Game(db.Model):
    
    __tablename__ = 'games'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    required_age = db.Column(db.Integer)
    is_free = db.Column(db.Boolean)
    description = db.Column(db.String)
    price = db.Column(db.Integer)
    release_date = db.Column(db.String)
    image = db.Column(db.String)

    game_category = db.relationship('Category', secondary=game_category_joins)
    game_genre = db.relationship('Genre', secondary=game_genre_joins)

    
    


    screenshots = db.relationship('Screenshot', back_populates='game')
    reviews = db.relationship('Review', back_populates='game')

    

    
    


    def to_dict(self):
        
        categoryList = [category.id for category in self.game_category]
        genreList = [genre.id for genre in self.game_genre]

        return{
            "id": self.id,
            "name": self.name,
            "required_age": self.required_age,
            "is_free": self.is_free,
            "description": self.description,
            "price": self.price,
            "release_date": self.release_date,
            "image": self.image,
            "categories":categoryList,
            "genres": genreList
        }