import React from 'react';
import ReactDOM from 'react-dom';
import FirstComponent from './components/FirstComponent';
import '../sass/main.scss';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(FirstComponent),
    document.getElementById('mount')
  );
});
