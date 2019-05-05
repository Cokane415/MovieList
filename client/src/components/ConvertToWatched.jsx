import React from 'react';

class ConvertToWatched extends React.Component {
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
            Watched
        </button>
        )
    }
};

export default ConvertToWatched;