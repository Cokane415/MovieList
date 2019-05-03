import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListEntry from './MovieListEntry.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: this.props.movies
    };
  }
  
  render() {
    return (
      <div className="container">
      <h1> Movies, Films, Motion Picture...Videos...Oh, my!</h1>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
