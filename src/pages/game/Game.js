import React from 'react';
import fetchWord from './methods/fetchWord';
import makeIdiomsIndexesList from './methods/makeIdiomsIndexesList';
import handleKeyPress from './methods/handleKeyPress';
import PrimaryContent from './components/PrimaryContent';
import EndGame from './components/EndGame';

class Game extends React.Component {

  componentDidMount() {
    //fetchWord();
    makeIdiomsIndexesList("en");
    window.onkeydown = () => {handleKeyPress(String.fromCharCode(event.keyCode))}
  }


  render() {
    return (
      <div className="game">
        <EndGame/>
        <PrimaryContent/>
      </div>
    );
  }
}
export default Game;
