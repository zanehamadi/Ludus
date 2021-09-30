from operator import pos
from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Review, User

review_routes = Blueprint('reviews', __name__)



@review_routes.route('/', methods=['POST'])
@login_required
def new_review():
    data = request.get_json()
    new_review = Review(
        user_id = data["user_id"],
        review = data["review"],
        game_id = data["game_id"]
    )
    db.session.add(new_review)
    db.session.commit()
    updated_user = User.query.get(data["user_id"])
    return updated_user.to_dict()


@review_routes.route('/<int:id>', methods=['PUT'])
@login_required
def updated_review(id):
    data = request.get_json()
    old_review = Review.query.get(id)
    old_review.review = data["review"]
    db.session.commit()
    updated_user = User.query.get(old_review.user_id)
    return updated_user.to_dict()

@review_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_review(id):
    review = Review.query.get(id)
    user_id = review.user_id
    db.session.delete(review)
    db.session.commit()
    updated_user = User.query.get(user_id)
    return updated_user.to_dict()



