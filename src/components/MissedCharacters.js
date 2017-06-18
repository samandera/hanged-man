import React from 'react';

class MissedCharacters extends React.Component {
  render() {
    const letters = ['A','B','C'];
    const listItems = letters.map((letter) =>
      <li>{letter}</li>
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
