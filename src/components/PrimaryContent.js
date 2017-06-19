import React from 'react';
import Hangedman from './Hangedman';
import AspectRatio from './AspectRatio';
import Puzzle from './Puzzle';
import MissedCharacters from './MissedCharacters';

class PrimaryContent extends React.Component {
  constructor() {
    super();
  }

  createLettersArrays(word) {
    //<AspectRatio parentClass="disabled"></AspectRatio>
    let letters = [];
    for (let letter of word) {
      letters.push(letter);
    }


    let winningLetters = letters.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
    });

    let index = winningLetters.indexOf('-');
    index>=0 && winningLetters.splice(index,1);
    index = winningLetters.indexOf(' ');
    index>=0 && winningLetters.splice(index,1);


    return [letters,winningLetters];
  }

  renderDisabledPuzzles(disabledCount) {
    let disabledPuzzles = [];
    for (let i=0; i<disabledCount; i++) {
      disabledPuzzles.push("disabled")
    };
    return disabledPuzzles;
  }


  render() {
    let [letters,winningLetters] = this.createLettersArrays(this.props.word);
    let disabledCount = this.props.puzzlesCount - letters.length;
    let disabledPuzzles = this.renderDisabledPuzzles(disabledCount);

    return (
      <div className="ratio-content primary-content">
        <Hangedman/>
        <MissedCharacters/>
        <Puzzle>
          {disabledPuzzles.map(function(puzzleClass, index){
            return(<AspectRatio parentClass={puzzleClass} key={index}/>)
          })}
          {letters.map(function(letter) {
            return(<AspectRatio>{letter}</AspectRatio>)
          })}
        </Puzzle>

        </div>
    );
  }
}
export default PrimaryContent;
