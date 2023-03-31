import React from "react";
import { Button, List, Icon, Container } from "semantic-ui-react"
import { Link } from 'react-router-dom'

function Playlists({ playlists, setRefresh, refresh }) {

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
                        </List.Description>
                    </List.Content>
                    <Button floated='right'>
                        <Link to={`/playlist/${playlist.id}`}>
                            View Here!
                        </Link>
                    </Button>
                </List.Item>
            </React.Fragment>
        )
    })



    return (
        <Container style={{ color: "black" }}>
            <List size='big' divided>
                {playlistList}
            </List>
        </Container>
    )
}

export default Playlists