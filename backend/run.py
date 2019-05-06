"""
  Imageus

  A Flask REST Api Backend for Imageus Website
"""
from app import create_app

APP = create_app()

if __name__ == "__main__":
  APP.run()
