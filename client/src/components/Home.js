import React, { useState } from 'react';
import SongForm from './SongForm'
import PlaylistForm from "./PlaylistForm"
import "../index.css"

function Home({ addSong }, { addPlaylist }) {
    const [toggleSong, setToggleSong] = useState(false)
    const [toggle, setToggle] = useState(false)
    const handleClickSong = () => {
        setToggleSong(!toggleSong);
    };
    const handleClick = () => {
        setToggle(!toggle);
    };

    return (
        <div>
            <div>
                <button className='btn' onClick={handleClickSong}> Add Song </button>
                <ul className="list-group" style={{ display: toggleSong ? 'block' : 'none' }}>
                    <li className="list-group-item">
                        <SongForm addSong={addSong} /> </li>
                </ul>
            </div>
            <div>
                <button className='btn' onClick={handleClick}> Add Playlist </button>
                <ul className="list-group" style={{ display: toggle ? 'block' : 'none' }}>
                    <li className="list-group-item">
                        <PlaylistForm addPlaylist={addPlaylist} /> </li>
                </ul>
            </div>
        </div>
    )
}

export default Home;