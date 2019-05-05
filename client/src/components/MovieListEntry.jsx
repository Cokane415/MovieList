import React from 'react';
import ConvertToWatched from './ConvertToWatched.jsx'

var MovieListEntry = (props) => (
    <tr className='movie'>
        <td className='movie-data'>
            {props.movie.title}
            <ConvertToWatched movie={props.movie} handleClickToConvert={props.handleClickToConvert}/>
       </td>
    </tr>
);

export default MovieListEntry;
