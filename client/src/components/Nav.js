import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from 'react-icons/gi'

function Nav() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <h1>MUSIC</h1>
      <div>
        {!menu ? (
          <div onClick={() => setMenu(!menu)}>
            <GiHamburgerMenu size={30} />
          </div>
        ) : (
          <ul>
            <li onClick={() => setMenu(!menu)}>X</li>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/playlists'> Playlist</NavLink></li>
            <li><NavLink to='/songs'> Songs</NavLink></li>
          </ul>
        )}
      </div>
    </>
  );
}

export default Nav;