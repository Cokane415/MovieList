import React from 'react';
import WatchToggle from './WatchToggle.jsx'

class MovieListEntry extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false
    }
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(event) {
        this.setState({open: !this.state.open})

    }
    render() {
        var movieStyle = {
            'backgroundColor':  this.state.open === true ? 'limegreen' : 'white',
            'color': this.state.open === true  ? 'white' : 'black'
        }

        var movieInfoStyle = {
            'backgroundColor':  this.state.open === true ? 'white' : 'white',
            'color': this.state.open === true  ? 'black' : 'black'
        }


        return (
            <tr className='movie' onClick={this.togglePanel} style={movieStyle}>
                <td className='movie-data'>
                    {this.props.movie.title}
                    {this.state.open ? (<div className="movie-content">
                        <div>
                        Runtime: {this.props.movie.runtime}
                        </div>
                        <div>
                        Metscore: {this.props.movie.metascore}
                        </div>
                        <div>
                        Rating: {this.props.movie.rating}
                        </div>
                        <WatchToggle movie={this.props.movie} handleClickToConvert={this.props.handleClickToConvert}/>
                    </div>) : null}
                </td>
            </tr>
        )
    }
};

export default MovieListEntry;

// {this.props.movie.runtime}
// {this.props.movie.metascore}
// {this.props.movie.rating}
