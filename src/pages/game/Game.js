import React from 'react';
import { connect } from 'react-redux';
import fetchWord from './methods/fetchWord';
import makeIdiomsIndexesArray from './methods/makeIdiomsIndexesArray';
import handleKeyPress from './methods/handleKeyPress';
import PrimaryContent from './components/PrimaryContent';
import EndGame from './components/EndGame';

const mapDispatchToProps = dispatch => ({
  makeIdiomsIndexesArray: (lang) => {makeIdiomsIndexesArray(lang).then(data => (console.log(data)))},
  //loadWord: (lang) => {makeIdiomsIndexesArray(dispatch, lang)}
})

class Game extends React.Component {

  componentDidMount() {
    //fetchWord();
    this.props.makeIdiomsIndexesArray("en");
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
export default connect(null, mapDispatchToProps)(Game);
