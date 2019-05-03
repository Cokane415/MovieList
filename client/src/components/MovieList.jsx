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

export default MovieList;

