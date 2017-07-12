import React from 'react';
import {connect} from 'react-redux';
import store from '../reducers/store';
import Hangedman from './Hangedman';
import Puzzle from './Puzzle';
import MissedCharacters from './MissedCharacters';

const mapStateToProps = (store) => {
  return {
    word: store.wordState.word
  }
}

const renderPuzzleContent = (word) => {
  if (word.length > 0) {
    return (
      <div className="ratio-content primary-content">
        <Hangedman/>
        <MissedCharacters/>
        <Puzzle/>
      </div>
    )
  }
}

class PrimaryContent extends React.Component {

  render() {
    return (
      <div className="ratio-content primary-content">
        {renderPuzzleContent(this.props.word)}
      </div>
    );
  }
}
export default connect(mapStateToProps)(PrimaryContent);
