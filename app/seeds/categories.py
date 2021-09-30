from app.models import db, Category
import json
import os


def seed_categories():
    cwd = os.path.dirname(os.path.abspath(__file__))
    filepath = os.path.join(cwd,'categories.json')
    category_seeder = open(filepath)
    categories = json.load(category_seeder)

    for category in categories:
        new_category = Category(
            id = category['id'],
            name = category['description'],
        )
        db.session.add(new_category)

    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
