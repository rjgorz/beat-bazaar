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
        song_dicts = [song.to_dict(rules=('playlists',)) for song in Song.query.all()]

        return make_response(
            song_dicts,
            200
        )
    
    def post(self):
        new_song = Song(
            title=request.get_json()['title'],
            artist=request.get_json()['artist'],
            genre=request.get_json()['genre'],
            url=request.get_json()['url']
        )

        db.session.add(new_song)
        db.session.commit()

        return make_response(
            new_song.to_dict(),
            201
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
    
    def patch(self, id):
        song = Song.query.filter(Song.id == id).first()

        if not song:
            return make_response({ 'error': 'Song not found!' }, 404)

        for attr in request.get_json():
            setattr(song, attr, request.get_json()[attr])

        db.session.add(song)
        db.session.commit()

        return make_response(
            song.to_dict(),
            200
        )
    
    def delete(self, id):
        song = Song.query.filter(Song.id == id).first()

        if not song:
            return make_response({ 'error': 'Song not found!' }, 404)
        
        playlist_songs = PlaylistSong.query.filter(PlaylistSong.song_id == song.id).all()

        for playlist_song in playlist_songs:
            db.session.delete(playlist_song)
            db.session.commit()

        db.session.delete(song)
        db.session.commit()

        return make_response({ "success": "Song successfully deleted"}, 200)
api.add_resource(SongById, '/songs/<int:id>')

class Playlists(Resource):
    def get(self):
        playlist_dicts = [playlist.to_dict(rules=('songs',)) for playlist in Playlist.query.all()]

        return make_response(
            playlist_dicts,
            200
        )
    
    def post(self):
        new_playlist = Playlist(
            title=request.get_json()['title']
        )

        db.session.add(new_playlist)
        db.session.commit()

        return make_response(
            new_playlist.to_dict(),
            201
        )
api.add_resource(Playlists, '/playlists')

class PlaylistById(Resource):
    def get(self, id):
        playlist = Playlist.query.filter(Playlist.id == id).first()

        if not playlist:
            return make_response({ 'error': 'Playlist not found!' }, 404)
        
        return make_response(
            playlist.to_dict(rules=('songs',)),
            200
        )
    
    # def patch(self, id):
    #     song = Song.query.filter(Song.id == id).first()

    #     if not song:
    #         return make_response({ 'error': 'Song not found!' }, 404)

    #     for attr in request.get_json():
    #         setattr(song, attr, request.get_json()[attr])

    #     db.session.add(song)
    #     db.session.commit()

    #     return make_response(
    #         song.to_dict(),
    #         200
    #     )
    
    # def delete(self, id):
    #     song = Song.query.filter(Song.id == id).first()

    #     if not song:
    #         return make_response({ 'error': 'Song not found!' }, 404)

    #     db.session.delete(song)
    #     db.session.commit()

    #     return make_response({ "success": "Song successfully deleted"}, 200)
api.add_resource(PlaylistById, '/playlists/<int:id>')

class PlaylistSongs(Resource):
    def get(self):
        playlist_song_dicts = [playlist_song.to_dict() for playlist_song in PlaylistSong.query.all()]

        return make_response(
            playlist_song_dicts,
            200
        )
    
    def post(self):
        new_ps = PlaylistSong(
            playlist_id=request.get_json()['playlist_id'],
            song_id=request.get_json()['song_id']
        )

        db.session.add(new_ps)
        db.session.commit()

        return make_response(
            new_ps.to_dict(),
            201
        )
api.add_resource(PlaylistSongs, '/playlist_songs')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
