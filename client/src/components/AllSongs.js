import React, { useState } from "react";
import { Icon, List, Pagination, Button, Container } from "semantic-ui-react"


function AllSongs({ songs }) {
    const [endArray, setEndArray] = useState(10);

    const songList = songs.map(song => {
        return (
            <>
                <br />
                <List.Item>
                    <List.Icon name="music" size="big" />
                    <List.Content>
                        <List.Header>
                            {song.title}
                        </List.Header>
                        <List.Description>
                            {song.artist}
                            {'    '}||{'    '}
                            {song.genre}
                            <Button float='right'>Listen!</Button>
                        </List.Description>
                    </List.Content>
                </List.Item>
            </>
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
            <List size='big'>
                {songsToRender}
            </List>
            <Pagination defaultActivePage={1} totalPages={Math.ceil(length / 10)} onClick={handlePage} />
        </Container>
    )
}

export default AllSongs;