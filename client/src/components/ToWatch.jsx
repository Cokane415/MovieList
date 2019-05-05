import React from 'react';

var ToWatch = (props) => {
    var style = {
        'backgroundColor':  props.displayList === 'toWatch' ? 'limegreen' : 'white',
        'color': props.displayList === 'toWatch' ? 'white' : 'black'
    }
    return (
    <button className="toWatch" onClick={props.onToWatch} style={style}>
        To Watch
    </button>
    )
}


export default ToWatch;