import React from 'react';
import {connect} from 'react-redux';
import store from '../reducers/store';
import fetchWord from '../methods/fetchWord';
import PrimaryContent from './PrimaryContent';
import EndGame from './EndGame';



const mapStateToProps = (store) => {
  return {
    word: store.wordState.word,
    missedLetters: store.missedLettersState.missedLetters,
    message: store.messageText.message,
    showEndGame: store.messageText.showEndGame
  }
}

class Index extends React.Component {

  constructor() {
    super();
    this.statics = {
      maxWordLength:12,
      steps:11
    };
    this.state = {
      showEndGame:false
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleWinningLetters(word, pressedKey) {
    for (let i = 0; i < word.length; i++) {
      if (/^[a-zA-Z]$/.test(pressedKey) && word[i].letter.toUpperCase() == pressedKey) {
        word[i].visible = true;
      }
    }
    return word;
  }

  showEndGame(word,missedLetters) {
    let unvisibles = word.map((letter) => {return letter.visible});
    let won = unvisibles.find((el) => {return el===false}) === undefined;
    let lost = missedLetters.length===this.statics.steps;
    let endGameStatus = {won, lost};

    store.dispatch({
      showEndGame:endGameStatus,
      type: 'SET_MESSAGE'
    })

    store.dispatch({
      showEndGame:endGameStatus,
      type: 'SHOW_END_GAME'
    })
    window.onkeydown = this.props.showEndGame ? '' : () => {this.handleKeyPress(String.fromCharCode(event.keyCode))};
  }

  handleKeyPress(pressedKey) {
    store.dispatch({
      lettersProps: {
        word:this.props.word,
        pressedKey,
        missedLetters: this.props.missedLetters
      },
      type: 'SET_MISSED_LETTERS'
    });
    store.dispatch ({
      wordProps: {
        word:this.props.word,
        pressedKey
      },
      type: 'UPDATE_WORD'
    });
    this.showEndGame(this.props.word,this.props.missedLetters);
  };

  componentWillMount() {
    fetchWord(this.statics.maxWordLength);
    window.onkeydown = () => {this.handleKeyPress(String.fromCharCode(event.keyCode))};
  }




  render() {
    return (
      <div className="container">
        {this.props.word.length>0 && <PrimaryContent word={this.props.word} puzzles={this.statics.maxWordLength}/>}
        {this.props.showEndGame && <EndGame message={this.props.message}/>}

        <svg viewBox="0 0 100 100"  className="triangle">
          <polygon points="0,100 100,100 100,0"/>
        </svg>
      </div>
    );
  }
}
export default connect(mapStateToProps)(Index);
