import React from 'react';
import {connect} from 'react-redux';
import store from '../store';

const mapStateToProps = (store) => {
  return {
    playedWords: store.playedWords.playedWords
  }
}

class PlayedWords extends React.Component {
  render() {
    const words = this.props.playedWords;

    return(
      <div className="played-words">
        <h1>Played Words</h1>
        <div className="words-history">
          <ul>
            {words.map((word) =>
                <li key={word}>{word}</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(PlayedWords);
