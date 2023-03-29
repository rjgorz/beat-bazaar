import React from "react";
import { Icon, List } from "semantic-ui-react"


function AllSongs({ songs }) {

    const songList = songs.map(song => {
        return(
            <>
                <br />
                <List.Item>
                    <List.Icon name="music" size="big" />
                    <List.Content>
                        <List.Header>
                            {song.title}
                        </List.Header>
                        <List.Description>
                            Artist: {song.artist}
                            <br />
                            Genre: {song.genre}
                        </List.Description>
                    </List.Content>
                </List.Item>
            </>
        )
    })

    // function handleSongs(all) {
    //     const listed = []
    //     for (const list of all) {
    //         listed.push(<li key={list.id} >{list.title}</li>)
    //     }
    //     return listed
    // }

    return (
    <div>
        <List>
            {songList}
        </List>
    </div>
    )
}

export default AllSongs;