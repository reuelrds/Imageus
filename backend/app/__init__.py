"""
  App

  App Module configures Flask API service
"""

from flask import Flask

from config import Config
from .api import BLUEPRINT as api_bp
from .extensions import DB, MIGRATE, MAIL


def create_app(config_obj=Config):
  """
    Creates and Instantiates Flask app
  """
  app = Flask(__name__)
  app.config.from_object(config_obj)
  register_extensiions(app)
  register_blueprints(app)
  return app


def register_extensiions(app):
  """
    Register Flask Extensions
  """
  DB.init_app(app)
  MIGRATE.init_app(app)
  MAIL.init_app(app)


def register_blueprints(app):
  """
    Register Blueprints
  """
  app.register_blueprint(api_bp, url_prefix="/api")
