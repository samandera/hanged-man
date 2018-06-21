import React from 'react';
import fetchWord from './methods/fetchWord';
import getIdiomsList from './methods/getIdiomsList';
import handleKeyPress from './methods/handleKeyPress';
import PrimaryContent from './components/PrimaryContent';
import EndGame from './components/EndGame';

class Game extends React.Component {

  componentWillMount() {
    //fetchWord();
    getIdiomsList('en','Category:English_idioms');
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
