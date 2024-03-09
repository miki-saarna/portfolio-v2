from flask import Flask
from flask_cors import CORS
from . import utils

app = Flask(__name__)
CORS(app)

app.register_blueprint(utils.bp)
