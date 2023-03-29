import React from "react";


function AllSongs({ songs }) {

    function handleSongs(all) {
        const listed = []
        for (const list of all) {
            listed.push(<li key={list.id} >{list.title}</li>)
        }
        return listed
    }

    return (
    <div>
        <ol>
            {handleSongs(songs)}
        </ol>
    </div>
    )
}

export default AllSongs;