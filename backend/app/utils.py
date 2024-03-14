from flask import Blueprint

bp = Blueprint("utils", __name__)

@bp.route("/")
def home():
  return "home"

@bp.route("/not-found")
def notFound():
  return { "quote": "You cannot find yourself till you lose yourself." }
