import React from 'react';
import { connect } from 'react-redux';
import loadIdiom from './methods/loadIdiom';
import handleKeyPress from './methods/handleKeyPress';
import Hangedman from './components/Hangedman';
import Container from '../../components/Container';
import GameContent from './components/GameContent';
import EndGame from './components/EndGame';
import LoadingIdiom from './components/LoadingIdiom';

const mapDispatchToProps = dispatch => ({
  loadIdiom: (lang) => {loadIdiom(dispatch, lang)}
});
const mapStateToProps = state => ({
  IdiomIsLoading: state.flags.loadIdiom,
  word: state.wordState.word,
  showEndGame: state.messageText.showEndGame,
  hangedman: state.missedLettersState.hangedman
})

class Game extends React.Component {

  componentDidMount() {
    this.props.loadIdiom("en");
    window.onkeydown = () => {handleKeyPress(
      String.fromCharCode(event.keyCode),
      this.props.hangedman
    )}
  }


  render() {
    const currentView = (() => {
      if (this.props.IdiomIsLoading) {return (<LoadingIdiom/>)}
      else if (this.props.showEndGame) {return (<EndGame/>)}
      else if (this.props.word.length > 0) {return (<GameContent/>)}
      return (<LoadingIdiom/>)
    })()
    return (
      <div className="game">
        <Hangedman/>
        <Container>
          {currentView}
        </Container>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game);
