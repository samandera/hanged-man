import React from 'react';
import ReactDOM from 'react-dom';
import store from './pages/store';
import {Provider} from 'react-redux';
import Index from './pages/Index';
import '../sass/main.scss';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Provider store={store}>
      <Index/>
    </Provider>,
    document.getElementById('mount')
  );
});
