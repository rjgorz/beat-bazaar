import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Playlists from "./Playlists";
import AllSongs from "./AllSongs";
import Navigation from "./Nav";
import '../index.css'
import Home from "./Home";

function App() {
  const [playlists, setPlaylists] = useState([])
  const [songs, setSongs] = useState([])
  const [theme, setTheme] = useState('dark')

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
  }, [])

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);



  function addSong() {
    return
  }

  return (
    <div>
      <div style={{
        backgroundImage: `url("https://www.onlygfx.com/wp-content/uploads/2018/08/10-realistic-lightning-bolt-cover.jpg")`
      }} className={`App ${theme}`}>
        <button className="btn" style={{ float: 'right' }} onClick={toggleTheme}>Toggle Theme</button>
        <h1 className='h1'>BeatBazaar</h1>
        <Navigation style={{ float: 'right' }} />
      </div>
      <Switch>
        <Route exact path='/'>
          <Home addSong={addSong} />
        </Route>
        <Route path='/playlists'>
          <Playlists playlists={playlists} />
        </Route>
        <Route path='/songs'>
          <AllSongs songs={songs} />
        </Route>
      </Switch>
    </div>
  )
}

export default App;