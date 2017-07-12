import React from 'react';
import {connect} from 'react-redux';
import store from '../reducers/store';
import AspectRatio from './AspectRatio';

const mapStateToProps = (store) => {
  return {
    word: store.wordState.word
  }
}

const renderLetters = (word) => {
  return word.map(function(letterObj, index) {
    let space = (letterObj.letter==' ' ? "disabled": '')
    return(
      <AspectRatio parentClass={space} key={"letter" + index}>
        <div id={"letter" + index}>{letterObj.visible ? letterObj.letter : ''}</div>
      </AspectRatio>
    )
  }) ;
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
