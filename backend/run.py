"""
  Imageus

  A Flask REST Api Backend for Imageus Website
"""
from app import create_app
from app.extensions import DB
from app.models import User, Photo, Url

APP = create_app()

@APP.shell_context_processor
def make_shell_context():
  return {'db': DB, 'User': User, 'Photo': Photo, 'Url': Url}

if __name__ == "__main__":
  APP.run()
