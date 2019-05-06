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
        var style = {
        'height': '20px',
        'width': '20px',
        'border': '1px solid black',
        'borderRadius': '50%',
        'backgroundColor':  this.props.movie.watched === true ? 'green' : 'white',
        'color': this.props.movie.watched === true ? 'white' : 'black'
        }
        return (
            <div>
            Watched: <button className="watched" onClick={this.onClickConvertDecorator} style={style}> </button> 
            </div>
        )
    }
};

export default WatchToggle;