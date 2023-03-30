import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Playlists from "./Playlists";
import AllSongs from "./AllSongs";
import Navigation from "./Nav";
import '../index.css'
import Home from "./Home";
import IndividualPlaylist from "./IndividualPlaylist"
import EditSongForm from "./EditSongForm"


function App() {
  const [playlists, setPlaylists] = useState([])
  const [songs, setSongs] = useState([])
  const [theme, setTheme] = useState('dark')
  const [refresh, setRefresh] = useState(false)

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    fetch('/songs')
      .then(r => r.json())
      .then(song_data => setSongs(song_data))

    fetch('/playlists')
      .then(r => r.json())
      .then(playlist_data => setPlaylists(playlist_data))
  }, [refresh])

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  function handleDelete(id) {
    fetch(`/songs/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => setRefresh(!refresh))
  }

  function addSong(song) {
    setSongs([song, ...songs]);
  }

  function updateSong(updatedSong) {
    const updatedSongs = songs.map(ogSong => {
      if (ogSong.id === updateSong.id)
        return updatedSong;
      else
        return ogSong;
    })
    setSongs(updatedSongs);
    setRefresh(!refresh);
  }

  return (
    <div className = "background">
      <div style={{
        backgroundImage: `url("https://cdn.shopify.com/s/files/1/0153/0623/products/SoundWaveWallpaperfromtheExclusivesCollectionbyGraham_Brown_1c90998a-78c3-403d-830a-aa05bc9da1e3_1080x.jpg?v=1596556895")`
      }} className={`App ${theme}`}>
        <button className="btn" style={{ float: 'right' }} onClick={toggleTheme}>Toggle Theme</button>
        <h1 className='h1'>BeatBazaar</h1>
        <Navigation style={{ float: 'right' }} />
      </div>
      <Switch>
        <Route exact path='/'>
          <Home addSong={addSong}/>
        </Route>
        <Route path='/playlist/:id'>
          <IndividualPlaylist songs={songs} setRefresh={setRefresh} refresh={refresh} />
        </Route>
        <Route path='/playlists'>
          <Playlists playlists={playlists} />
        </Route>
        <Route path='/songs/:id/edit'>
          <EditSongForm updateSong={updateSong} />
        </Route>
        <Route path='/songs'>
          <AllSongs songs={songs} handleDelete={handleDelete} />
        </Route>

      </Switch>
    </div>
  )
}

export default App;