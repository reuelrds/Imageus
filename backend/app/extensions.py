"""
Extensions Module.
All the Extensions are instantiated in the app factory in app package init file
"""
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_mail_sendgrid import MailSendGrid

DB = SQLAlchemy()
MIGRATE = Migrate()
MAIL = MailSendGrid()
