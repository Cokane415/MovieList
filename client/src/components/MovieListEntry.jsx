import React from 'react';

var MovieListEntry = (props) => (
    <tr className='movie'>
        <td>
            Title: {props.movie.title}
       </td>
    </tr>
);

export default MovieListEntry;
