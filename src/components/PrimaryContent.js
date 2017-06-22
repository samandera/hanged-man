import React from 'react';
import Hangedman from './Hangedman';
import AspectRatio from './AspectRatio';
import Puzzle from './Puzzle';
import MissedCharacters from './MissedCharacters';

class PrimaryContent extends React.Component {
  constructor() {
    super();
  }

  renderDisabledPuzzles(disabledCount) {
    let puzzles = [];
    for (let i=0; i<disabledCount; i++) {
      puzzles.push('react render with loop of exactly the same elements is wierd');
    };
    return puzzles;
  }


  render() {
    let word = this.props.word;
    let disabledCount = this.props.puzzles - word.length;
    let disabledPuzzles = this.renderDisabledPuzzles(disabledCount);

    return (
      <div className="ratio-content primary-content">
        <Hangedman/>
        <MissedCharacters missedLetters={this.props.missedLetters}/>
        <Puzzle>
          {disabledPuzzles.map((complaint, index) => {
            return(
              <AspectRatio parentClass="disabled" key={"disabled" + index}/>
            )
          })}
          {word.map(function(letterObj, index) {
            let color = (letterObj.visible ? {color:'red'} : {color:'white'});
            return(
              <AspectRatio key={"letter" + index}>
                <div style={color} id={"letter" + index}>{letterObj.letter}</div>
              </AspectRatio>
            )
          })}
        </Puzzle>
      </div>
    );
  }
}
export default PrimaryContent;
