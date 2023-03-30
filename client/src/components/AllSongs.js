import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { Icon, List, Pagination, Button, Container } from "semantic-ui-react"


function AllSongs({ songs, handleDelete }) {
    const [endArray, setEndArray] = useState(10);

    const songList = songs.map(song => {
        return (
            <React.Fragment key={song.id}>
                <br />
                <List.Item>
                    <List.Icon name="music" size="big" color='black' />
                    <List.Content >
                        <List.Header >
                            {song.title}
                            <Button.Group basic size='small'>
                                <Link to={`songs/${song.id}/edit`}>
                                    <Button icon>
                                        <Icon name='edit' size="small" />
                                    </Button>
                                </Link>
                                <Button icon onClick={() => handleDelete(song.id)}>
                                    <Icon name='trash alternate' size="small" />
                                </Button>
                            </Button.Group>
                        </List.Header>
                        <List.Description >
                            {song.artist}
                            {'    '}||{'    '}
                            {song.genre}
                            <Button onClick={() => { window.open(song.url) }} float='right'>Listen!</Button>
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
            <List size='big'>
                {songsToRender}
            </List>
            <Pagination defaultActivePage={1} totalPages={Math.ceil(length / 10)} onClick={handlePage} />
        </Container>
    )
}

export default AllSongs;