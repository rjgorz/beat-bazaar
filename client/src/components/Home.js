import React from 'react';
import SongForm from './SongForm'

function Home({addSong}) {
    return (
        <div style={{
            backgroundImage: `url("https://www.onlygfx.com/wp-content/uploads/2018/08/10-realistic-lightning-bolt-cover.jpg")`
        }}>
            <SongForm addSong={addSong} />
        </div>
    )
}

export default Home;