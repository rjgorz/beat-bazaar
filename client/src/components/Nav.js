import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'

function Navigation() {
 const [menu, setMenu] = useState(false)

    return (
        <Nav> 
         <Menu>
           {!menu?
           <div onClick={() => setMenu(!menu)}>
             <GiHamburgerMenu size={40}/> 
           </div>:
           <ul className="font-NavLink">
            <li onClick={() => setMenu(!menu)}>x</li>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/add'>Add Song/Playlist</NavLink></li>
            <li><NavLink to='/playlists'>Playlists</NavLink></li>
            <li><NavLink to='/songs'>Songs</NavLink> </li>
           </ul>
           }
         </Menu>
        </Nav>
    )
}

export default Navigation;

const Nav = styled.div`
  display: flex;
  justify-content:space-between;
  
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  font-family:Arial;
  a{
    text-decoration: none;
    color: black;
  }
  a:hover{
    color:grey
  }
  ul{
    list-style:none;
  }
  
`;
