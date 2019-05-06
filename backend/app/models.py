"""
  Models

  Defines Wrapper classes for the tables in Photos Database
"""
from .extensions import DB

COLUMN = DB.Column

class Photo(DB.Model):
  """
    Wrapper for Photo Table
  """

  photo_id = COLUMN(DB.String, primary_key=True)
  description = COLUMN(DB.String)
  alt_description = COLUMN(DB.String)
  likes = COLUMN(DB.Integer)
  tags = COLUMN(DB.String)

  @staticmethod
  def get_all():
    """
      returns all rows of Photos Table
    """
    return Photo.query.all()


class Url(DB.Model):
  """
    Wrapper for Url Table
  """

  url_id = COLUMN(DB.String, primary_key=True)
  raw = COLUMN(DB.String)
  full = COLUMN(DB.String)
  regular = COLUMN(DB.String)
  small = COLUMN(DB.String)
  thumb = COLUMN(DB.String)
  photo_id = COLUMN(DB.String, DB.ForeignKey('photo.photo_id'))

  @staticmethod
  def get_all():
    """
      returns all rows of Url Table
    """
    return Url.query.all()


class User(DB.Model):
  """
    Wrapper for User Table
  """

  user_id = COLUMN(DB.String, primary_key=True)
  username = COLUMN(DB.String)
  name = COLUMN(DB.String)
  link = COLUMN(DB.String)
  profile_image = COLUMN(DB.String)
  photo_id = COLUMN(DB.String, DB.ForeignKey('photo.photo_id'))

  @staticmethod
  def get_all():
    """
      returns all rows of User Table
    """
    return User.query.all()
