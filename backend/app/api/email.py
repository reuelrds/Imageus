"""
  E-mail endpoint
"""

import os
from flask import request, jsonify
from flask_mail import Message

from app.models import Photo, Url, User

from app.extensions import MAIL
from . import BLUEPRINT as bp


@bp.route('/email', methods=['POST', "GET"])
def send_email():
  """
    Send an email containing download links to the photo ids provided
  """
  data = request.get_json()
  print(data['email'])
  print(data['ids'])

  recipient_email = data['email']
  ids = data['ids']

  msg = Message("Imageus: Your Favourite Images",
                sender=os.environ.get("SENDGRID_DEFAULT_SENDER"),
                recipients=[recipient_email])


  data_items = Photo.query.add_columns(
    Photo.photo_id,
    Photo.description,
    Photo.alt_description,
    Url.thumb,
    User.name
  ).join(Url).join(User).filter(Photo.photo_id.in_(ids)).all()

  res = []
  for item in data_items:
    photo = item._asdict()
    del photo['Photo']
    res.append(photo)

  msg.template_id = os.environ.get("SENDGRID_TEMPLATE_ID")
  msg.dynamic_template_data = {
    "photos": res
  }

  MAIL.send(msg)
  return jsonify("E-Mail Sent Successfully")
