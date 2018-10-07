import React from 'react';
import { connect } from 'react-redux';
import fetchWord from './methods/fetchWord';
import makeIdiomsIndexesList from './methods/makeIdiomsIndexesList';
import handleKeyPress from './methods/handleKeyPress';
import PrimaryContent from './components/PrimaryContent';
import EndGame from './components/EndGame';
import * as mockedPages from "./__mocks__/makeIdiomsIndexesList";

const mapDispatchToProps = dispatch => ({
  makeIdiomsIndexesList: (lang) => {makeIdiomsIndexesList(lang)},
  //makeIdiomsIndexesList: (lang) => {makeIdiomsIndexesList(dispatch, lang)}
})

class Game extends React.Component {

  componentDidMount() {
    //fetchWord();
    this.props.makeIdiomsIndexesList("en");
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
