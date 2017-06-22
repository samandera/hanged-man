import React from 'react';
import PrimaryContent from './PrimaryContent';
import EndGame from './EndGame';

class Index extends React.Component {

  constructor() {
    super();
    this.statics = {
      maxWordLength:12,
      steps:12
    };
    this.state = {
      word: [],
      missedLetters: []
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  getWord(maxWordLength){
    const apiRequest = `http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=${maxWordLength}&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`;
    fetch(
        apiRequest,
        {method: 'get'}
      ).then(response => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        response.json().then(data => {
          let word = [];
          for (let letter of data.word) {
            let visible = !(/^[a-zA-Z]$/.test(letter));
            word.push({letter, visible});
          }
          this.setState({word});
        });
    }).catch(function(err){
      console.log(err)
    });
  };

  handleKeyPress(pressedKey) {
    let word = this.state.word;
    let hasMissedLetter;
    let missedLetters = this.state.missedLetters;
    for (let i = 0; i < word.length; i++) {
      if (/^[a-zA-Z]$/.test(pressedKey) && word[i].letter.toUpperCase() == pressedKey) {
        word[i].visible = true;
      }
    }

    const missedLetterWasPressed = (word,pressedKey) => {
      let hasLetter = word.find((element)=>{
        return element.letter.toUpperCase() === pressedKey;
      }, pressedKey);

      return (hasLetter===undefined)&&(/^[a-zA-Z]$/.test(pressedKey));
    }

    hasMissedLetter = missedLetterWasPressed(word,pressedKey);
    hasMissedLetter &&  missedLetters.push(pressedKey);
    missedLetters = missedLetters.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
    })
    this.setState({word,missedLetters});
  };

  componentWillMount() {
    this.getWord(this.statics.maxWordLength);
    window.onkeydown = (event) => {
      this.handleKeyPress(String.fromCharCode(event.keyCode))
    };
  }




  render() {
      return (
        <div className="container">
        {this.state.word.length>0 && <PrimaryContent missedLetters={this.state.missedLetters} word={this.state.word} puzzles={this.state.maxWordLength}/>}

          <svg viewBox="0 0 100 100"  className="triangle">
            <polygon points="0,100 100,100 100,0"/>
          </svg>
        </div>
      );
  }
}
export default Index;
