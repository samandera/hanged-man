import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { createHashHistory, createBrowserHistory } from 'history';
import Game from './game/Game';
import PlayedWords from './played-words/PlayedWords';

const history = createBrowserHistory();

class Index extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={Game}/>

          <svg viewBox="0 0 100 100"  className="triangle">
            <polygon points="0,100 100,100 100,0"/>
          </svg>
        </div>
      </Router>
    );
  }
}
export default Index;
