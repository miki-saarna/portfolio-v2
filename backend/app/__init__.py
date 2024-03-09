from flask import Flask
from flask_cors import CORS
from . import images, utils

app = Flask(__name__)
CORS(app)

app.register_blueprint(images.bp)
app.register_blueprint(utils.bp)
