from operator import pos
from flask import Blueprint
from app.models import db, Category

category_routes = Blueprint('categories', __name__)



@category_routes.route('/')
def categories():

    categories = Category.query.all()

    return {category.id: category.to_dict() for category in categories}



