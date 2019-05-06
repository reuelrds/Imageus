"""
Extensions Module.
All the Extensions are instantiated in the app factory in app package init file
"""
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

DB = SQLAlchemy()
MIGRATE = Migrate()
