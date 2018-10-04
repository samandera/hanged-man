import React from 'react';
import fetchWord from './methods/fetchWord';
import fetchIdiomsIndexesList from './methods/fetchIdiomsIndexesList';
import handleKeyPress from './methods/handleKeyPress';
import PrimaryContent from './components/PrimaryContent';
import EndGame from './components/EndGame';

class Game extends React.Component {

  componentWillMount() {
    //fetchWord();
    fetchIdiomsIndexesList("https://en.wiktionary.org/w/api.php?action=query&format=json&list=categorymembers&cmtitle=Category%3AEnglish_idioms&cmlimit=500&cmcontinue=");
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
