import React from 'react';
import Puzzle from './Puzzle';
import MissedCharacters from './MissedCharacters';
import Definition from './Definition';

class GameContent extends React.Component {

  render() {
    return (
      <div className="game-content">
        <MissedCharacters/>
        <Definition/>
        <Puzzle/>
      </div>
    );
  }
}
export default GameContent;
