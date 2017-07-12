import React from 'react';
import {connect} from 'react-redux';
import store from '../../store';

const mapStateToProps = (store) => {
  return {
    missedLetters: store.missedLettersState.missedLetters
  }
}

class MissedCharacters extends React.Component {
  render() {
    const letters = this.props.missedLetters;
    const listItems = letters.map((letter) =>
      <li key={letter}>{letter}</li>
    );
    return (
      <div className="missed-characters">
        <h2>You missed:</h2>
        <ul className="characters">
          {listItems}
        </ul>
      </div>
    );
  }
}
export default connect(mapStateToProps)(MissedCharacters);
