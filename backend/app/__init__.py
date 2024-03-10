from flask import Flask
from flask_cors import CORS
from flask_caching import Cache
from . import images, utils
from .config import cache

app = Flask(__name__)

cache.init_app(app)

CORS(app)

app.register_blueprint(images.bp)
app.register_blueprint(utils.bp)
