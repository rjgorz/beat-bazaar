import React from 'react';
import { Icon } from "semantic-ui-react";

function Landing() {

    return (
    <div>
        <Icon name="music" size="big" color='grey'/>
        <h1 className = 'font-link'>Welcome To BeatBazaar!</h1>
        <p class="instructions">Head to the add songs/playlists page to add a song to our database, or to start a new playlist.</p>
        <p class="instructions">Go to the Playlists page to view all playlists, and from a playlist, you may add songs to it via the bottom of the page.</p>
        <p class="instructions">You can view all the songs in our database from the all songs section.</p>
        <Icon name="music" size="big" color='grey'/>
        </div>
    )
}

export default Landing;