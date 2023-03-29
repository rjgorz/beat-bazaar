import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  const [playlists, setPlaylists] = useState([])
  const [songs, setSongs] = useState([])

  useEffect(() => {
    fetch('/songs')
    .then(r => r.json())
    .then(song_data => setSongs(song_data))
  }, [])

  useEffect(() => {
    fetch('/playlists')
    .then(r => r.json())
    .then(playlist_data => setPlaylists(playlist_data))
  }, [])

  return(
    <div>
      <h1>BeatBazaar</h1>
      {songs}
      {playlists}
    </div>
  )
}

export default App;
