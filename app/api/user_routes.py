from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, db
from app.models.user import played_table, playing_table, want_to_play_table

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/played', methods=['POST'])
@login_required
def new_played():
    data = request.get_json()
    db.session.execute(played_table.insert().values(user_id = data['user_id'], game_id = data['game_id']))
    db.session.commit()
    updated_user = User.query.get(data['user_id'])
    return updated_user.to_dict()




@user_routes.route('/played/<int:user_id>/<int:game_id>', methods=['DELETE'])
@login_required
def delete_played(user_id, game_id):
    db.session.execute( played_table.delete().where(played_table.c.game_id == game_id) )
    db.session.commit()
    updated_user = User.query.get(user_id)
    return updated_user.to_dict()



@user_routes.route('/playing', methods=['POST'])
@login_required
def new_playing():
    data = request.get_json()
    db.session.execute(playing_table.insert().values(user_id = data['user_id'], game_id = data['game_id']))
    db.session.commit()
    updated_user = User.query.get(data['user_id'])
    return updated_user.to_dict()


@user_routes.route('/playing/<int:user_id>/<int:game_id>', methods=['DELETE'])
@login_required
def delete_playing(user_id, game_id):
    db.session.execute( playing_table.delete().where(playing_table.c.game_id == game_id) )
    db.session.commit()
    updated_user = User.query.get(user_id)
    return updated_user.to_dict()


@user_routes.route('/want_to_play', methods=['POST'])
@login_required
def new_want_to_play():
    data = request.get_json()
    db.session.execute(want_to_play_table.insert().values(user_id = data['user_id'], game_id = data['game_id']))
    db.session.commit()
    updated_user = User.query.get(data['user_id'])
    return updated_user.to_dict()


@user_routes.route('/want_to_play/<int:user_id>/<int:game_id>', methods=['DELETE'])
@login_required
def delete_want_to_play(user_id, game_id):
    db.session.execute(want_to_play_table.delete().where(want_to_play_table.c.game_id == game_id) )
    db.session.commit()
    updated_user = User.query.get(user_id)
    return updated_user.to_dict()