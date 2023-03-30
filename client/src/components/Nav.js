import { useState } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
// import { useHistory } from 'react-router-dom'
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
           <ul className="font-link">
            <li onClick={() => setMenu(!menu)}>x</li>
            <li><Link to='/'> Home</Link></li>
            <li><Link to='/playlists'>Playlists</Link></li>
            <li><Link to='/songs'>Songs</Link> </li>
           </ul>
           }
         </Menu>

        </Nav>
    )
}

export default Navigation

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
    color:red;
  }
  a:hover{
    color:grey
  }
  ul{
    list-style:none;
  }
  
`;
