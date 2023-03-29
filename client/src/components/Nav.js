import React, {useState} from "react"
import {Link} from "react-router-dom"
import { GiHamburgerMenu } from 'react-icons/gi'

function Nav() {
    const [menu, setMenu] = useState(false)

    return (
        <Nav> 
         <h1>MUSIC</h1>
         <div>
           {!menu?
           <div onClick={() => setMenu(!menu)}>
             <GiHamburgerMenu size={30}/> 
           </div>:
           <ul>
            <li onClick={() => setMenu(!menu)}>x</li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/playlist'> Playlist</Link></li>
            <li><Link to='/songs'> Songs</Link></li>
           </ul>
           }
         </div>

        </Nav>
    )
}

export default Nav