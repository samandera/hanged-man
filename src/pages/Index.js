import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Game from './game/Game';
import PlayedWords from './played-words/PlayedWords';

class Index extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <ul>
            <li>
              <Link to="/">Game</Link>
            </li>
            <li>
              <Link to="/played-words">Played Words</Link>
            </li>
          </ul>
          <Route exact path="/" component={Game}/>
          <Route path="/played-words" component={PlayedWords}/>

          <svg viewBox="0 0 100 100"  className="triangle">
            <polygon points="0,100 100,100 100,0"/>
          </svg>
        </div>
      </Router>
    );
  }
}
export default Index;
