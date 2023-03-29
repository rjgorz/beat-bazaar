#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Local imports
from app import app
from models import db, Song, Playlist, PlaylistSong

if __name__ == '__main__':
    fake = Faker()
    engine = create_engine('sqlite:///instance/app.db')
    Session = sessionmaker(bind=engine)
    session = Session()

    session.query(Song).delete()
    session.query(Playlist).delete()
    session.query(PlaylistSong).delete()
    session.commit()

    with app.app_context():
        
        print("Starting seed...")

        songs = []
        for i in range(10):
            new_song = Song(
                title=fake.unique.word(),
                artist=fake.name(),
                genre='something',
                url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            )
            songs.append(new_song)
        db.session.add_all(songs)
        db.session.commit()
        
        playlists = []
        for i in range(1, 4):
            new_playlist = Playlist(
                title=fake.unique.word()
            )
            playlists.append(new_playlist)
        db.session.add_all(playlists)
        db.session.commit()

        for i in range(1, 4):
            song_ids = list(range(1, 11))
            for j in range(5):
                ps = PlaylistSong(
                    user=fake.unique.name(),
                    song_id=rc(song_ids),
                    playlist_id=i
                )
                song_ids.remove(ps.song_id)
                db.session.add(ps)
                db.session.commit()
        
        db.session.close()

