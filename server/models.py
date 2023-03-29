from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!
class Song(db.Model, SerializerMixin):
    __tablename__ = 'songs'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    genre = db.Column(db.String, nullable=False)
    url = db.Column(db.String, nullable=False)

    playlist_songs = db.relationship('PlaylistSong', backref='song')
    playlists = association_proxy('playlist_songs', 'song')

    def __repr__(self):
        return f'<Song {self.title}>'
    

class Playlist(db.Model, SerializerMixin):
    __tablename__ = 'playlists'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)

    playlist_songs = db.relationship('PlaylistSong', backref='playlist')
    songs = association_proxy('playlist_songs', 'playlist')

    def __repr__(self):
        return f'<Playlist {self.title}>'
    
class PlaylistSong(db.Model, SerializerMixin):
    __tablename__ = 'playlist_songs'

    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.String, nullable=False)

    song_id = db.Column(db.Integer, db.ForeignKey('songs.id'))
    playlist_id = db.Column(db.Integer, db.ForeignKey('playlists.id'))

    def __repr__(self):
        return f'<PlaylistSong {self.user}>'