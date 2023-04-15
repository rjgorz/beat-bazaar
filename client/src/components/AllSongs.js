import React, { useState } from "react";
import { List, Pagination, Container } from "semantic-ui-react";
import Song from "./Song"


function AllSongs({ songs, handleDelete }) {
    const [endArray, setEndArray] = useState(10);
    

    const songList = songs.map(song => {
        return (
            <Song key={song.id} song={song} handleDelete={handleDelete} />
        )
    })

    const length = songList.length;

    let songsToRender = []
    if (songList.length > 0) {
        for (let i = endArray - 10; i < endArray; i++)
            songsToRender.push(songList[i]);
    }

    function handlePage(e) {
        setEndArray((e.target.getAttribute('value') * 10));
    }

    return (
        <Container>
            <List size='big' divided>
                {songsToRender}
            </List>
            <Pagination defaultActivePage={1} totalPages={Math.ceil(length / 10)} onClick={handlePage} />
        </Container>
    )
}

export default AllSongs;