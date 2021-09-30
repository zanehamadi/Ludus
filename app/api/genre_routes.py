from operator import pos
from flask import Blueprint
from app.models import db, Genre

genre_routes = Blueprint('genres', __name__)



@genre_routes.route('/')
def genre():

    genres = Genre.query.all()
    
    return {genre.id: genre.to_dict() for genre in genres}



