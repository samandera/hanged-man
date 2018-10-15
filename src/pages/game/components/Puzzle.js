import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    word: state.wordState.word
  }
}

const renderLetters = (phrase) => {
  return phrase.map( (word, index) => {
    return (
      <div key={`word ${index}`} className="word">
        {word.map( (letterObj, index) => {
          return(
              <div className="letter" key={`letter ${index}`} id={`letter ${index}`}>
                {letterObj.visible ? letterObj.letter : ''}
              </div>
          )
        })}
      </div>
    )
  })
}

class Puzzle extends React.Component {
  render() {
    return (
      <div className="puzzle">
        {renderLetters(this.props.word)}
      </div>
    );
  }
}
export default connect(mapStateToProps)(Puzzle);
