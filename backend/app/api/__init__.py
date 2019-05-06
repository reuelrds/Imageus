"""
Main API Package
This package defines routes
"""
from flask import Blueprint

BLUEPRINT = Blueprint('api', __name__)

from . import photos
