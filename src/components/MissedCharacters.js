import React from 'react';

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
export default MissedCharacters;
