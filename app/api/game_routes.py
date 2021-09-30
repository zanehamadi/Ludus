from app.models.categories import Category
from app.models.genre import Genre
from operator import pos
from flask import Blueprint, request
from app.models import db, Game
from sqlalchemy.orm import joinedload

game_routes = Blueprint('games', __name__)



@game_routes.route('/')

def games():

    games = Game.query.all()

    return {game.id: game.to_dict() for game in games}


@game_routes.route('/<int:game_id>')
# @login_required
def game(game_id):
    game = Game.query.get(game_id)
    return game.to_dict()



@game_routes.route('/results', methods=['POST'])
def response():
    data = request.get_json()
    categories = data['category']
    genres = data['genre']
    allResults = []
    for category in categories:
        allResults.append((Category.query.get(category)).games)
    for genre in genres:
        allResults.append((Genre.query.get(genre)).games)
    searchResults = set.intersection(*map(set,allResults))
    results = {'Results':[game.to_dict() for game in searchResults]}
    return results





