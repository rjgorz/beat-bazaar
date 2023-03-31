import React, { useState } from "react";
import { Button, List, Icon, Container, Pagination } from "semantic-ui-react";
import { Link } from 'react-router-dom';

function Playlists({ playlists, setRefresh, refresh }) {
    const [endArray, setEndArray] = useState(10);

    function handleDelete(id) {
        fetch(`/playlists/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(() => setRefresh(!refresh))
    }

    const playlistList = playlists.map(playlist => {
        return (
            <React.Fragment key={playlist.id}>
                <br />
                <List.Item>
                    <List.Icon name="play circle" size="big" color='black' />
                    <List.Content >
                        <List.Header >
                            {playlist.title}
                            <Button.Group basic size='small' floated='right' color='black'>
                                <Button icon onClick={() => handleDelete(playlist.id)}>
                                    <Icon name='trash alternate' size="small" />
                                </Button>
                            </Button.Group>
                        </List.Header>
                        <List.Description >
                            {playlist.songs.length} Songs
                            {'     '}||{'     '}
                            Created by {playlist.creator}
                        </List.Description>
                    </List.Content>
                    <Link to={`/playlist/${playlist.id}`}>
                        <Button floated='right' color='black'>
                            View Here!
                        </Button>
                    </Link>
                </List.Item>
            </React.Fragment>
        )
    })

    const length = playlistList.length;

    let playlistsToRender = [];
    if (playlistList.length > 0) {
        for (let i = endArray - 10; i < endArray; i++)
            playlistsToRender.push(playlistList[i]);
    }

    function handlePage(e) {
        setEndArray((e.target.getAttribute('value') * 10));
    }

    return (
        <Container style={{ color: "black" }}>
            <List size='big' divided>
                {playlistsToRender}
            </List>
            <Pagination defaultActivePage={1} totalPages={Math.ceil(length / 10)} onClick={handlePage} />
        </Container>
    )
}

export default Playlists;