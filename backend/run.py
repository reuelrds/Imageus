"""
  Imageus

  Flask REST Api Backend for Imageus Website
"""

import os
from app import APP

os.environ["DATABASE_URL"] = "./database/photos.db"

if __name__ == "__main__":
  APP.run()
