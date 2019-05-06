import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Global styling
import './styles/main.css';

var movies = [
    {title: 'Mean Girls', runtime: '100s', metascore: 100, rating: '44/100'},
    {title: 'Hackers', runtime: '100s', metascore: 100, rating: '44/100'},
    {title: 'The Grey', runtime: '100s', metascore: 100, rating: '44/100'},
    {title: 'Sunshine', runtime: '100s', metascore: 100, rating: '44/100'},
    {title: 'Ex Machina', runtime: '100s', metascore: 100, rating: '44/100'}
];

ReactDOM.render(<App movies={movies}/>, document.getElementById('root'));