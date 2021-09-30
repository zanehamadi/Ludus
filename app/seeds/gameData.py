import json
import os

cwd = os.path.dirname(os.path.abspath(__file__))

filepath = os.path.join(cwd,'firstSeederData.json')

# game_seeder = open(filepath)
# games = json.load(game_seeder)

# print(games)
print(filepath)
