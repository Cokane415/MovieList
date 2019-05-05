import React from 'react';


class Search extends React.Component {
    constructor(props) {
        super(props);
        //move state to the app-need to refresh search input field when you add a new movie
        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
    };

    //a function that updates the value in state
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    //a function that invokes onSearchSubmit with the event and state value
    onSearchSubmitDecorator(event) {
        this.props.onSearchSubmit(event, this.state.value);
    }

    render () {
        return (
            <form id='movie-search'>
                Search Movies: <input
                type='text'
                id='searchtxt'
                value={this.state.value}
                onChange={this.handleChange}
                />
                <button className='search-button' onClick={this.onSearchSubmitDecorator.bind(this)}> Go! </button>
            </form>
        )
    }
};

export default Search;