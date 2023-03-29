#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Song, Playlist, PlaylistSong

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")

        songs = []
        for i in range(10):
            new_song = Song(
                title=fake.unique.word(),
                genre='something',
                url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            )
            songs.append(new_song)
        db.session.add_all(songs)
        
        playlists = []
        for i in range(3):
            new_playlist = Playlist(
                title=fake.unique.word(),
                
            )

