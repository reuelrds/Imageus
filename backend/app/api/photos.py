"""
  Photos Route Package
"""

from flask import jsonify

from app.models import Photo, Url, User
from . import BLUEPRINT as bp

@bp.route('/photos', methods=['GET'])
def test():
  """
    Returns an array of all photos stored in the database as a json object
  """
  # Join all Tables
  data_items = Photo.query \
    .add_columns(
      Photo.photo_id,
      Photo.description,
      Photo.alt_description,
      Photo.likes,
      Photo.tags,

      Url.raw,
      Url.full,
      Url.regular,
      Url.small,
      Url.thumb,

      User.username,
      User.name,
      User.link,
      User.profile_image
    ) \
    .join(Url) \
    .join(User) \
    .all()

  # Create a new Object
  result = []
  for item in data_items:
    photo = item._asdict()
    del photo['Photo']
    result.append(photo)

  return jsonify(result)
