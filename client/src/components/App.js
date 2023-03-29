import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Playlists from "./Playlists";
import AllSongs from "./AllSongs";
import Nav from "./Nav";
import Home from "./Home";


function App() {
  const [playlists, setPlaylists] = useState([])
  const [songs, setSongs] = useState([])

  useEffect(() => {
    fetch('/songs')
    .then(r => r.json())
    .then(song_data => setSongs(song_data))
    
    fetch('/playlists')
    .then(r => r.json())
    .then(playlist_data => setPlaylists(playlist_data))
  }, [])

  return(
    <div>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/playlists'>
          <Playlists playlists={playlists} />
        </Route>
        <Route path='/songs'>
          <AllSongs songs={songs} />
        </Route>
      </Switch>
      <Playlists playlists={playlists} />
    </div>
  )
}

export default App;
