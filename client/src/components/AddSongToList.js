import React, { useState } from "react";
import { Button, Icon, List, Pagination, Container } from "semantic-ui-react"


function AddSongToList({ songs, playlistId, setRefresh, refresh }) {
    const [endArray, setEndArray] = useState(10);

    function handleClick(id) {
        fetch('/playlist_songs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                song_id: id,
                playlist_id: playlistId
            })
        })
            .then(r => r.json())
            .then(() => setRefresh(!refresh))
    }

    const songList = songs.map(song => {
        return (
            <React.Fragment key={song.id}>
                <Button icon onClick={() => handleClick(song.id)} floated='right' >
                    <Icon name="plus" size="small" />
                </Button>
                <List.Item >
                    <List.Content>
                        <List.Header>
                            {song.title}
                        </List.Header>
                        <List.Description>
                            {song.artist}
                            {'    '}||{'    '}
                            {song.genre}
                        </List.Description>
                    </List.Content>
                </List.Item>
            </React.Fragment>
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
            <List size='large' divided>
                {songsToRender}
            </List>
            <Pagination defaultActivePage={1} totalPages={Math.ceil(length / 10)} onClick={handlePage} />
        </Container>
    )
}

export default AddSongToList;