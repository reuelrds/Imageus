"""
  Models

  Defines Wrapper classes for the tables in Photos Database
"""
from app import DB

class Photo(DB.Model):
  """
    Wrapper for Photo Table
  """

  photo_id = DB.Column(DB.String, primary_key=True)
  description = DB.Column(DB.String)
  alt_description = DB.Column(DB.String)
  likes = DB.Column(DB.Integer)
  tags = DB.Column(DB.String)

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

  url_id = DB.Column(DB.String, primary_key=True)
  raw = DB.Column(DB.String)
  full = DB.Column(DB.String)
  regular = DB.Column(DB.String)
  small = DB.Column(DB.String)
  thumb = DB.Column(DB.String)
  photo_id = DB.Column(DB.String, DB.ForeignKey('photo.photo_id'))

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

  user_id = DB.Column(DB.String, primary_key=True)
  username = DB.Column(DB.String)
  name = DB.Column(DB.String)
  link = DB.Column(DB.String)
  profile_image = DB.Column(DB.String)
  photo_id = DB.Column(DB.String, DB.ForeignKey('photo.photo_id'))

  @staticmethod
  def get_all():
    """
      returns all rows of User Table
    """
    return User.query.all()
