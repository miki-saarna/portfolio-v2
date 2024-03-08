from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/not-found")
def notFound():
  return { "data": "You cannot find yourself till you lose yourself."}