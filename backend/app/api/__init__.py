"""
Main API Package
This package defines routes
"""
from flask import Blueprint
from flask_cors import CORS

BLUEPRINT = Blueprint('api', __name__)
CORS(BLUEPRINT)

from . import photos
