import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import ToWatch from './ToWatch.jsx';
import Watched from './Watched.jsx';
import MovieListEntry from './MovieListEntry.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    var movies = this.props.movies.map(movie => {
      movie['watched'] = false;
      return movie;
    })

    this.state = {
      movies: movies,
      displayedMovies: movies,
      watched: [],
      toWatch: movies,
      displayList: 'toWatch'
    };

    this.handleAddSubmitClick = this.handleAddSubmitClick.bind(this);
    this.handleSearchSubmitClick = this.handleSearchSubmitClick.bind(this);
    this.handleClickOnToWatch = this.handleClickOnToWatch.bind(this);
    this.handleClickOnWatched = this.handleClickOnWatched.bind(this);
    this.handleConvertToWatched = this.handleConvertToWatched.bind(this);
    this.convertMovieToWatched = this.convertMovieToWatched.bind(this);
    this.convertMovieFromWatched = this.convertMovieFromWatched.bind(this);

  }

  //a function that invoke the filter function upon a submit click event
  handleSearchSubmitClick(event, value) {
    event.preventDefault();
    this.filterSearch(value);
  }

  //a function that filters the movie data based on search value
  filterSearch(val) {
    //checks which displayList we are on
    var movies = this.state.displayList === 'toWatch' ? this.state.toWatch.slice() : this.state.watched.slice()
    var lowerVal = val.toLowerCase();
    var filteredArray = movies.filter(movie => movie.title.toLowerCase().includes(lowerVal));
    this.setState({
      displayedMovies: filteredArray
    })
  }

  //a function that adds a movie to the movie list an add movie click event
  handleAddSubmitClick(event, value) {
    event.preventDefault();
    console.log('im in submit with value:', value);
    var newMovie = {title: value, watched: false};
    var movies = this.state.movies.slice();
    movies.push(newMovie);
    var toWatchMovies = this.state.toWatch.slice();
    toWatchMovies.push(newMovie);
    this.setState({
      movies: movies,
      toWatch: toWatchMovies,
      displayedMovies: toWatchMovies,
      displayList: 'toWatch'
    })
  }

  //a function that sets the displayed movies to the 'to watch' movies, for a click event on To Watch
  handleClickOnToWatch(event) {
    event.preventDefault();
    console.log('clicked on To Watch Movies');
    var watch = this.state.toWatch.slice();
    this.setState({
      displayList: 'toWatch',
      displayedMovies: watch
    })
  }

  //a function that sets the displayed movies to the 'watched' movies, for a click event on Watched
  handleClickOnWatched(event) {
    event.preventDefault();
    console.log('clicked on Watched Movies');
    var watched = this.state.watched.slice();
    this.setState({
      displayList: 'watched',
      displayedMovies: watched
    })
  }

   //a function that adds a movie to the watched array and removes the same movie from the to watch array
   convertMovieToWatched(movie) {
    movie.watched = true;
    var newWatched = this.state.watched.slice();
    //add the movie to the array
    newWatched.push(movie);
    //remove the movie from the ToWatch array in state
    var newToWatch = this.state.toWatch.slice();
    for(var i = 0; i < newToWatch.length; i++) {
      if (newToWatch[i].title === movie.title) {
        newToWatch.splice(i, 1);
      }
    }

    //reassign the ToWatch array in state and Watched array in state
    this.setState({
      toWatch: newToWatch,
      watched: newWatched,
      displayedMovies: newToWatch
    })
  };

  //a function that adds a movie to the toWatch array and removes the same movie from the watched array
  convertMovieFromWatched(movie) {
    movie.watched = false;
    var newToWatch = this.state.toWatch.slice();
    //add the movie to the array
    newToWatch.push(movie);
    //reassign the toWatch array in state
    //remove the movie from the watched array in state
    var newWatched = this.state.watched.slice();
    for(var i = 0; i < newWatched.length; i++) {
      if (newWatched[i].title === movie.title) {
        newWatched.splice(i, 1);
      }
    }
    //reassign the ToWatch array in state
    this.setState({
      watched: newWatched,
      toWatch: newToWatch,
      displayedMovies: newWatched
    })
  };

  //a function that updates the Watched and ToWatch arrays in state
  handleConvertToWatched(event, movie) {
    event.preventDefault();
    //update the movie watched key to true
    if (movie.watched === false) {
      this.convertMovieToWatched(movie);
    } else {
      this.convertMovieFromWatched(movie);
    }
  }

  //run through displayed movies
  //filter based on the search filter value 
  //new filtered
  
  render() {
    return (
      <div className="container">
        <h1></h1>

        <h2> Movies, Films, Motion Pictures...Oh, my!</h2>
        <div className='add'>
        <AddMovie onAddSubmit={this.handleAddSubmitClick} />
        </div>
        <div className='search'>
          <Search movies={this.state.movies} onSearchSubmit={this.handleSearchSubmitClick}/>
        </div>
        <div className="to-watch">
        <ToWatch displayList={this.state.displayList} onToWatch={this.handleClickOnToWatch}/>
        </div>
        <div className="watched">
        <Watched displayList={this.state.displayList} onWatched={this.handleClickOnWatched}/>
        </div>
        <div>
          {
            this.state.displayedMovies.length > 0
            ? <MovieList className="movie-list" movies={this.state.displayedMovies} handleClickToConvert={this.handleConvertToWatched}/>
            : <span> No Movies Are Found </span>
          }
        </div>
      </div>
    );
  }
}

export default App;
