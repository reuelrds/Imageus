"""
This module defines constant variables to be used throughout the App
"""
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

class Config:
  """
    defins Database Config vars

    Attributes:
      SQLALCHEMY_DATABASE_URI         (str) :  URI to connect to Sqlite Database
      SQLALCHEMY_TRACK_MODIFICATIONS  (bool):  Boolean variale to specify whether
                                               to keep track of SQLAlchemy events
  """

  SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
    'sqlite:///' + os.path.join(BASE_DIR, '../database/photos.db')
  SQLALCHEMY_TRACK_MODIFICATIONS = False
