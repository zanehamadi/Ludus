from flask.cli import AppGroup
from .users import seed_users, undo_users
from .games import seed_games, undo_games
from .genres import seed_genres, undo_genres
from .screenshots import seed_screenshots, undo_screenshots
from .played import seed_played, undo_played
from .categories import seed_categories, undo_categories
from .gameCategories import seed_game_category_joins, undo_game_category_joins
from .gameGenres import seed_game_genre_joins, undo_game_genre_joins





# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_games()
    seed_genres()
    seed_screenshots()
    seed_played()
    seed_categories()
    seed_game_category_joins()
    seed_game_genre_joins()

    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_games()
    undo_genres()
    undo_screenshots()
    undo_played()
    undo_categories()
    undo_game_category_joins()
    undo_game_genre_joins()
    # Add other undo functions here
