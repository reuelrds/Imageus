"""
  App

  App Module configures Flask API service
"""

from flask import Flask

from config import Config
from .extensions import DB, MIGRATE


def create_app(config_obj=Config):
  """
    Creates and Instantiates Flask app
  """
  app = Flask(__name__)
  app.config.from_object(config_obj)
  register_extensiions(app)
  return app


def register_extensiions(app):
  """
    Register Flask Extensions
  """
  DB.init_app(app)
  MIGRATE.init_app(app)
