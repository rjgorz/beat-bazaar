import React, { useEffect, useState } from "react";

function Playlists({playlists}){
    console.log(playlists)
    function handlePlaylists(all){
        const listed = []
        for(const list of all){
            console.log(list)
            listed.push(<li key={list.title} id={list.id}>{list.title} {list.songs.length}</li>)
        }
        return listed
    }

    return <div><ol>
        {handlePlaylists(playlists)}
        </ol></div>
}

export default Playlists