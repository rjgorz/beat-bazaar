import React, { useEffect, useState } from "react";


function AllSongs({ songs }) {

    function handleSongs(all) {
        const listed = []
        for (const list of all) {
            listed.append(<ol id={list.id} >{list.title}</ol>)
        }
        return listed
    }

    return <div><li>
        {handleSongs(songs)}
    </li></div>
}

export default AllSongs