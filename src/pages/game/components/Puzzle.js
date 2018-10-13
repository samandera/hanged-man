import React from 'react';
import {connect} from 'react-redux';
import store from '../../store';
import AspectRatio from './AspectRatio';

const mapStateToProps = (store) => {
  return {
    word: store.wordState.word
  }
}

const renderLetters = (phrase) => {
  return phrase.map( (word, index) => {
    console.log(word);
    return (
      <div key={`word ${index}`} className="word">
        {word.map( (letterObj, index) => {
          return(
              <div key={`letter ${index}`} id={`letter ${index}`}>
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
