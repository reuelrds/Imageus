import sqlite3
import argparse
import json
import uniqid
import sys

def connect_database(database_path):
  """
    Connect to Photos DB
  """
  connection = sqlite3.connect(database_path)
  return connection


def create_tables(connection):
  """
    Creates Photos, Urls & User tables
  """
  try:

    # Create Photo Table
    connection.execute(
      """
      CREATE TABLE IF NOT EXISTS Photo (
        photo_id        Text PRIMARY KEY,
        description     Text,
        alt_description Text,
        likes           INT,
        tags            Text
      )
      """
    )

    # Create Url Table
    connection.execute(
      """
      CREATE TABLE IF NOT EXISTS Url (
        url_id    Text   PRIMARY KEY,
        raw       Text,
        full      Text,
        regular   Text,
        small     Text,
        thumb     Text,
        photo_id  Text,
        FOREIGN KEY (photo_id) REFERENCES Photo(photo_id)
          ON DELETE CASCADE
      )
      """
    )

    # Create User Table
    connection.execute(
      """
      CREATE TABLE IF NOT EXISTS User (
        user_id       Text  PRIMARY KEY,
        username      Text,
        name          Text,
        link          Text,
        profile_image Text,
        photo_id      Text,
        FOREIGN KEY (photo_id) REFERENCES Photo(photo_id)
          ON DELETE CASCADE

      )
      """
    )

  except sqlite3.Error as error:
    print(error)


def fetch_data():
  """
    Fetches data from Unsplash API
  """

  with open("./test_data.json", "r") as f:
    dictdump = json.load(f)

  return dictdump


def parse_data(data_items):
  """
    Parses the data returned by the Unsplash API
    in a format that is easier to load into the database
  """

  results = []
  for data_item in data_items:
    photo, url, user = {}, {}, {}

    photo["photo_id"] = data_item["id"]
    photo["description"] = data_item["description"]
    photo["alt_description"] = data_item["alt_description"]
    photo["likes"] = data_item["likes"]
    photo["tags"] = ",".join(tag["title"] for tag in data_item["tags"])

    url["url_id"] = uniqid.uniqid()
    url["raw"] = data_item["urls"]["raw"]
    url["full"] = data_item["urls"]["full"]
    url["regular"] = data_item["urls"]["regular"]
    url["small"] = data_item["urls"]["raw"]
    url["thumb"] = data_item["urls"]["thumb"]
    url["photo_id"] = data_item["id"]

    user["user_id"] = data_item["user"]["id"]
    user["username"] = data_item["user"]["username"]
    user["name"] = data_item["user"]["name"]
    user["link"] = data_item["user"]["links"]["html"]
    user["profile_image"] = data_item["user"]["profile_image"]["medium"]
    user["photo_id"] = data_item["id"]

    results.append((photo, url, user))

  return results


def load_data(connection, data_items):
  """
    Loads Image data into the database
  """
  for item in data_items:
    photo_data, url_data, user_data = item
    connection.execute(
      """
        INSERT INTO Photo VALUES (
          "{photo_id}",
          "{description}",
          "{alt_description}",
          "{likes}",
          "{tags}"
        )
      """.format(
        photo_id = photo_data["photo_id"],
        description = photo_data["description"],
        alt_description = photo_data["alt_description"],
        likes = photo_data["likes"],
        tags = photo_data["tags"]
      )
    )

    connection.execute(
      """
        INSERT INTO Url VALUES (
          "{url_id}",
          "{raw}",
          "{full}",
          "{regular}",
          "{small}",
          "{thumb}",
          "{photo_id}"
        )
      """.format(
        url_id = url_data["url_id"],
        raw = url_data["raw"],
        full = url_data["full"],
        regular = url_data["regular"],
        small = url_data["small"],
        thumb = url_data["thumb"],
        photo_id = url_data["photo_id"],
      )
    )

    connection.execute(
      """
        INSERT INTO User VALUES (
          "{user_id}",
          "{username}",
          "{name}",
          "{link}",
          "{profile_image}",
          "{photo_id}"
        )
      """.format(
        user_id = user_data["user_id"],
        username = user_data["username"],
        name = user_data["name"],
        link = user_data["link"],
        profile_image = user_data["profile_image"],
        photo_id = user_data["photo_id"],
      )
    )


def main(db_path):
  try:
    connection = connect_database(db_path)

    create_tables(connection)
    data = fetch_data()
    data = parse_data(data['results'])
    load_data(connection, data)

  except Exception as error:
    print('Error on line {}'.format(sys.exc_info()[-1].tb_lineno), type(error).__name__, error)
  finally:
    connection.commit()
    connection.close()


if __name__=="__main__":

  # Get DB path from user
  parser = argparse.ArgumentParser(description="Fetches and Loads Photos into the Database")
  parser.add_argument("--db_path", default="../backend/database/photos.db", help="Path to Photos Database")
  parser = parser.parse_args()

  main(parser.db_path)
