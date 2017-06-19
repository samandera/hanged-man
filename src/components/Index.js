import React from 'react';
import PrimaryContent from './PrimaryContent';
import EndGame from './EndGame';

class Index extends React.Component {

  constructor() {
    super();
    this.state = {
      word: '',
      maxWordLength: 12
    }
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
          this.setState({word: data.word});
        });
    }).catch(function(err){
      console.log(err)
    });
  };

  componentDidMount() {
    this.getWord(this.state.maxWordLength);
  };




  render() {
      const wordLength = this.state.word.length;
      return (
        <div className="container">
        {wordLength>0 && <PrimaryContent word={this.state.word} puzzlesCount={this.state.maxWordLength}/>}
        {wordLength>0 && <EndGame getWord={this.getWord}/>}
          <svg viewBox="0 0 100 100"  className="triangle">
            <polygon points="0,100 100,100 100,0"/>
          </svg>
        </div>
      );
  }
}
export default Index;
