import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon, List, Button } from "semantic-ui-react";
import ModalPopup from "./ModalPopup";

function Song({ song, handleDelete }) {
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment key={song.id}>
            <br />
            <List.Item>
                <List.Icon name="music" size="big" color='black' />
                <List.Content >
                    <List.Header >
                        {song.title}
                        <Button.Group basic size='small' floated='right' color='black'>
                            <Link to={`../songs/${song.id}/edit`}>
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
                        {'     '}||{'     '}
                        {song.genre}
                    </List.Description>
                </List.Content>
                <ModalPopup open={open} setOpen={setOpen} video={song.url} />
            </List.Item>
        </React.Fragment>
    )
}

export default Song;