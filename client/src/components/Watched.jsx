import React from 'react';

var Watched = (props) => (
    <button className = 'watched' onClick={props.onWatched}>
        Watched
    </button>
)


export default Watched;