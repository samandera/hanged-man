import React from 'react';
import {connect} from 'react-redux';
import store from '../reducers/store';
import Hangedman from './Hangedman';
import AspectRatio from './AspectRatio';
import Puzzle from './Puzzle';
import MissedCharacters from './MissedCharacters';

const mapStateToProps = (store) => {
  return {
    word: store.wordState.word,
    missedLetters: store.missedLettersState.missedLetters
  }
}

class PrimaryContent extends React.Component {
  constructor() {
    super();
  }


  renderDisabledPuzzles(amount){
    return Array.from({length: amount}, (value, key) => <AspectRatio parentClass="disabled" />)
  }

  renderLetters(word) {
    return word.map(function(letterObj, index) {
      let space = (letterObj.letter==' ' ? "disabled": '')
      return(
        <AspectRatio parentClass={space} key={"letter" + index}>
          <div id={"letter" + index}>{letterObj.visible ? letterObj.letter : ''}</div>
        </AspectRatio>
      )
    }) ;
  }

  render() {
    console.log(this.props.word);
    let disabledCount = this.props.puzzles - this.props.word.length;
    let disabledPuzzles = this.renderDisabledPuzzles(disabledCount);
    let WinningLetters = this.renderLetters(this.props.word);

    return (
      <div className="ratio-content primary-content">
        <Hangedman/>
        <MissedCharacters missedLetters={this.props.missedLetters}/>
        <Puzzle>
          {disabledPuzzles}
          {WinningLetters}
        </Puzzle>
      </div>
    );
  }
}
export default connect(mapStateToProps)(PrimaryContent);
