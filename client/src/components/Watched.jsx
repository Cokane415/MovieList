import React from 'react';

var Watched = (props) => {
    var style = {
        'backgroundColor':  props.displayList === 'watched' ? 'limegreen' : 'white',
        'color': props.displayList === 'watched' ? 'white' : 'black'
    }
    return (
        <button className = 'watched' onClick={props.onWatched} style={style}>
            Watched
        </button>
    )
}


export default Watched;