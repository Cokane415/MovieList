import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

var MovieList = (props) => (
<table className ='movie-list'>
    <tbody>
    {
      props.movies.map((movie) => {
        return <MovieListEntry key={movie.title} movie={movie}/>
      })
    }
    </tbody>
  </table>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
// MovieList.propTypes = 
//   movies: React.PropTypes.object.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default MovieList;

