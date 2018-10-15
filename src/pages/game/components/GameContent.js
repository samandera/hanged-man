import React from 'react';
import {connect} from 'react-redux';
import store from '../../store';
import Puzzle from './Puzzle';
import MissedCharacters from './MissedCharacters';

const mapStateToProps = (store) => {
  return {
    word: store.wordState.word
  }
}

class MainContent extends React.Component {

  render() {
    return (
      <div className="game-content">
        <MissedCharacters/>
        <Puzzle/>
      </div>
    );
  }
}
export default connect(mapStateToProps)(MainContent);
