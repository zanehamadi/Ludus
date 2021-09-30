from app.models import db, Screenshot
import json
import os


def seed_screenshots():
    cwd = os.path.dirname(os.path.abspath(__file__))
    filepath = os.path.join(cwd,'formatted-screenshots.json')
    screenshot_seeder = open(filepath)
    screenshots = json.load(screenshot_seeder)

    for screenshot in screenshots:
        new_screenshot = Screenshot(
            id = screenshot['id'],
            screenshot = screenshot['screenshot'],
            game_id = screenshot['game_id']
        )
        db.session.add(new_screenshot)

    db.session.commit()


def undo_screenshots():
    db.session.execute('TRUNCATE screenshots RESTART IDENTITY CASCADE;')
    db.session.commit()
