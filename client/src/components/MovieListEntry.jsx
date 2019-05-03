import React from 'react';

var MovieListEntry = (props) => (
    <tr className='movie'>
        <td>
            Title: {props.movie.title}
       </td>
    </tr>
);

//PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
//npm prop-types
// MovieListEntry.propTypes = {
//   movie: React.PropTypes.object.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default MovieListEntry;
