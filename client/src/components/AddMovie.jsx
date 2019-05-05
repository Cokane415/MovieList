import React from 'react';


class AddMovie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
    };

    //a function that updates the value in state
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    //a function that invokes onAddSubmit with the event and state value
    onAddDecorator(event) {
        console.log('hey');
        this.props.onAddSubmit(event, this.state.value);
    }

    render () {
        return (
            <form id='add-movie'>
            Add a Movie: <input
            type='text'
            id='addtxt'
            value={this.state.addValue}
            onChange={this.handleChange}
            />
            <button className='add-button' onClick={this.onAddDecorator.bind(this)}> Add </button>
        </form>
        )
    }
};

export default AddMovie;