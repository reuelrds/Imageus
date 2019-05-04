import sqlite3
import argparse

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
      CREATE TABLE IF NOT EXISTS Photo(
        id              Text PRIMARY KEY,
        description     Text,
        alt_description Text,
        likes           INT,
        tags            Text,
        url_id          INT,
        user_id         Text,
        FOREIGN KEY (url_id) REFERENCES Url (url_id),
        FOREIGN KEY (user_id) REFERENCES User (user_id)
      )
      """
    )

    # Create Url Table
    connection.execute(
      """
      CREATE TABLE IF NOT EXISTS Url(
        url_id  INT   PRIMARY KEY,
        raw     Text,
        full    Text,
        regular Text,
        small   Text,
        thumb   Text
      )
      """
    )

    # Create User Table
    connection.execute(
      """
      CREATE TABLE IF NOT EXISTS User(
        user_id            Text  PRIMARY KEY,
        username      Text,
        name          Text,
        link          Text,
        profile_image Text

      )
      """
    )

  except sqlite3.Error as error:
    print(error)


def main(db_path):
  try:
    connection = connect_database(db_path)
    create_tables(connection)
  except Exception as error:
    print(error)
  finally:
    connection.close()


if __name__=="__main__":

  # Get DB path from user
  parser = argparse.ArgumentParser(description="Fetches and Loads Photos into the Database")
  parser.add_argument("--db_path", default="../backend/database/photos.db", help="Path to Photos Database")
  parser = parser.parse_args()

  main(parser.db_path)
