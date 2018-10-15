import React from 'react';
import Puzzle from './Puzzle';
import MissedCharacters from './MissedCharacters';

class GameContent extends React.Component {

  render() {
    return (
      <div className="game-content">
        <MissedCharacters/>
        <Puzzle/>
      </div>
    );
  }
}
export default GameContent;
