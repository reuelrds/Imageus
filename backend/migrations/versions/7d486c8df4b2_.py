"""empty message

Revision ID: 7d486c8df4b2
Revises: 
Create Date: 2019-05-06 00:08:46.482788

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7d486c8df4b2'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('Photo')
    op.drop_table('Url')
    op.drop_table('User')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('User',
    sa.Column('user_id', sa.TEXT(), nullable=False),
    sa.Column('username', sa.TEXT(), nullable=True),
    sa.Column('name', sa.TEXT(), nullable=True),
    sa.Column('link', sa.TEXT(), nullable=True),
    sa.Column('profile_image', sa.TEXT(), nullable=True),
    sa.Column('photo_id', sa.TEXT(), nullable=True),
    sa.ForeignKeyConstraint(['photo_id'], ['Photo.photo_id'], ),
    sa.PrimaryKeyConstraint('user_id')
    )
    op.create_table('Url',
    sa.Column('url_id', sa.TEXT(), nullable=False),
    sa.Column('raw', sa.TEXT(), nullable=True),
    sa.Column('full', sa.TEXT(), nullable=True),
    sa.Column('regular', sa.TEXT(), nullable=True),
    sa.Column('small', sa.TEXT(), nullable=True),
    sa.Column('thumb', sa.TEXT(), nullable=True),
    sa.Column('photo_id', sa.TEXT(), nullable=True),
    sa.ForeignKeyConstraint(['photo_id'], ['Photo.photo_id'], ),
    sa.PrimaryKeyConstraint('url_id')
    )
    op.create_table('Photo',
    sa.Column('photo_id', sa.TEXT(), nullable=False),
    sa.Column('description', sa.TEXT(), nullable=True),
    sa.Column('alt_description', sa.TEXT(), nullable=True),
    sa.Column('likes', sa.INTEGER(), nullable=True),
    sa.Column('tags', sa.TEXT(), nullable=True),
    sa.PrimaryKeyConstraint('photo_id')
    )
    # ### end Alembic commands ###
