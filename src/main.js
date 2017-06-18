import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/Index';
import '../sass/main.scss';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Index),
    document.getElementById('mount')
  );
});
