import React from 'react';
import WatchToggle from './WatchToggle.jsx'

var MovieListEntry = (props) => (
    <tr className='movie'>
        <td className='movie-data'>
            {props.movie.title}
            <WatchToggle movie={props.movie} handleClickToConvert={props.handleClickToConvert}/>
       </td>
    </tr>
);

export default MovieListEntry;
