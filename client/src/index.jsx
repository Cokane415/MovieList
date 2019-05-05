import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Global styling
import './styles/main.css';

var movies = [
    {title: 'Mean Girls', watched: false},
    {title: 'Hackers', watched: false},
    {title: 'The Grey', watched: false},
    {title: 'Sunshine', watched: false},
    {title: 'Ex Machina', watched: false}
];

ReactDOM.render(<App movies={movies}/>, document.getElementById('root'));