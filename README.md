# BeatBazaar

## Introduction

- BeatBazaar is an application in which to create personalized playlists.
- Playlists can be created/deleted by entering a title and creator name.
- New songs can be added to the database by providing a title, artist, and link to the song (i.e. YouTube embed link).
- Songs can be added/deleted from playlists.

***

## Setup


To download all required dependencies for the frontend and backend, run:
```console
$ pipenv install
$ npm install prefix --client
```


A sample base set of Faker generated songs/playlists can be initialized by running the seed file (seed.py):
```console
$ pipenv shell
$ cd server/
$ python3 seed.py
```


Once setup is complete, the Flask API can be run on [localhost:5555](http://localhost:5555 "localhost:5555") by running:
```console
$ cd server/
$ python3 app.py
```


In a separate terminal, the React app can be run on [localhost:4000](http://localhost:4000 "localhost:4000") by running:
```console
$ cd client/
$ npm start
```

***