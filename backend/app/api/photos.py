"""
  Photos Route Package
"""

from flask import jsonify
from . import BLUEPRINT as bp

@bp.route('/test', methods=['GET'])
def test():
  """
    Test Route
  """
  return jsonify("Hey! It's Working!!")
