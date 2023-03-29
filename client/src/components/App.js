import React, { useEffect, useState } from "react";
import Playlists from "./Playlists"
import { Switch, Route } from "react-router-dom";
import Nav from "./Nav";

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

  if (songs || playlists)
    return(
      <div>
        <h1>BeatBazaar</h1>
        <Nav />
        <Playlists playlists={playlists} />
      </div>
    )
  else
    return(
      <h1>LOADING</h1>
    )
  
}

export default App;
