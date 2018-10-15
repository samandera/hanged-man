import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { createHashHistory, createBrowserHistory } from 'history';
import Game from './game/Game';

const history = createBrowserHistory();

class Index extends React.Component {
  render() {
    return (
      <Router>
        <div className="screen-wrapper">
          <Route exact path="/" component={Game}/>
          <div className="grass"/>
        </div>
      </Router>
    );
  }
}
export default Index;
