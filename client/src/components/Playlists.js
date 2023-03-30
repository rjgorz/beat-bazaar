import React from "react";
import {Button} from "semantic-ui-react"
import {Link} from 'react-router-dom'

function Playlists({ playlists }) {
    console.log(playlists)
    function handlePlaylists(all) {
        const listed = []
        for (const list of all) {
            console.log(list)
            listed.push(<><li key={list.id}>{list.title} {list.songs.length} <Button  floated='left'><Link to={`/playlist/${list.id}`}>View Here!</Link></Button></li><br/></>)
        }
        return listed
    }

    return (
        <div style = {{color: "black"}}>
            <ul>
                {handlePlaylists(playlists)}
            </ul>
        </div>
    )
}

export default Playlists