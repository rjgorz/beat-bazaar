import React, { useEffect, useState } from "react";
import Playlists from "./Playlists"
import { Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import '../index.css'

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
  document.body.className = theme;
}, [theme]);

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
      <div style = {{
        backgroundImage: `url("https://www.onlygfx.com/wp-content/uploads/2018/08/10-realistic-lightning-bolt-cover.jpg")`
      }} className = {`App ${theme}`}>
        <button className="btn" style={{float: 'right'}} onClick = {toggleTheme}>Toggle Theme</button>
        <h1 className= 'h1'>BeatBazaar</h1>
        <Nav style = {{float: 'right'}}/>
        <div> 
        <Playlists playlists={playlists} />
        </div>
      </div>
    )
  else
    return(
      <h1>LOADING</h1>
    )
  
 }

export default App;