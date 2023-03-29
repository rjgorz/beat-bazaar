#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
from models import Song, Playlist, PlaylistSong

# Views go here!
class Songs(Resource):
    def get(self):
        song_dicts = [song.to_dict() for song in Song.query.all()]

        return make_response(
            song_dicts,
            200
        )
api.add_resource(Songs, '/songs')

class SongById(Resource):
    def get(self, id):
        song = Song.query.filter(Song.id == id).first()

        if not song:
            return make_response({ 'error': 'Song not found!' }, 404)
        
        return make_response(
            song.to_dict(),
            200
        )
api.add_resource(SongById, '/songs/<int:id>')

class Playlists(Resource):
    def get(self):
        playlist_dicts = [playlist.to_dict() for playlist in Playlist.query.all()]

        return make_response(
            playlist_dicts,
            200
        )
api.add_resource(Playlists, '/playlists')

class PlaylistById(Resource):
    def get(self, id):
        playlist = Playlist.query.filter(Playlist.id == id).first()

        if not playlist:
            return make_response({ 'error': 'Playlist not found!' }, 404)
        
        return make_response(
            playlist.to_dict(),
            200
        )
api.add_resource(PlaylistById, '/playlists/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
