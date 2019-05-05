import React from 'react';

class WatchToggle extends React.Component {
    constructor(props) {
        super(props);

    this.onClickConvertDecorator = this.onClickConvertDecorator.bind(this);
    }

    onClickConvertDecorator(event) {
        console.log('hey');
        this.props.handleClickToConvert(event, this.props.movie);
    };

    render() {
        return (
            <button className="watched" onClick={this.onClickConvertDecorator} >
            {this.props.movie.watched === false ? 'Seen It' : 'Rewatch'}
        </button>
        )
    }
};

export default WatchToggle;