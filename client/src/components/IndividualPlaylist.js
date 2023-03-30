import React, { useState, useEffect } from "react";
import { List, Pagination, Button, Container } from "semantic-ui-react"
import { useParams } from 'react-router-dom'
import AddSongToList from "./AddSongToList"

function IndividualPlaylist({ songs }) {

    const { id } = useParams()
    const [endArray, setEndArray] = useState(10);
    const [playlist, setPlaylist] = useState({})
    const [displaylist, setDisplaylist] = useState([])

    useEffect(() => {
        fetch(`/playlists/${id}`)
            .then(r => r.json())
            .then(playlist_data => {
                setDisplaylist(filter(songs, playlist_data))
                setPlaylist(
                    playlist_data.songs.map(song => {
                        return (
                            <React.Fragment key={song.id}>
                                <br />
                                <List.Item>
                                    <List.Icon name="music" size="big" color='black' />
                                    <List.Content>
                                        <List.Header>
                                            {song.title}
                                        </List.Header>
                                        <List.Description>
                                            {song.artist}
                                            {'    '}||{'    '}
                                            {song.genre}
                                            <Button onClick={() => { window.open(song.url) }} float='right'>Listen!</Button>
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                            </React.Fragment>
                        )
                    }))
            })
    }, [])

    const length = playlist.length;

    let songsToRender = []
    if (playlist.length > 0) {
        for (let i = endArray - 10; i < endArray; i++)
            songsToRender.push(playlist[i]);
    }

    function handlePage(e) {
        setEndArray((e.target.getAttribute('value') * 10));
    }

    function filter(list, playlist) {
        const idsToRemove = playlist.songs.map((song)=>song.id)
        const filtered = list.filter(song => {
            return !idsToRemove.includes(song.id)})
        console.log(filtered)
        return filtered
    }

    return (
        <>
            <Container>
                <List size='big'>
                    {songsToRender}
                </List>
                <Pagination defaultActivePage={1} totalPages={Math.ceil(length / 10)} onClick={handlePage} />
            </Container>
            <br />
            <Container >
                <AddSongToList songs={displaylist} playlistId={id} />
            </Container>
        </>
    )
}

export default IndividualPlaylist;