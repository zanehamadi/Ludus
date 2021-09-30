from app.models import db
from app.models.user import played_table


def seed_played():
    db.session.execute(played_table.insert().values(user_id = 1, game_id = 70))
    db.session.commit()


def undo_played():
    db.session.execute('TRUNCATE played RESTART IDENTITY CASCADE;')
    db.session.commit()
