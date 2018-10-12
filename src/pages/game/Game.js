import React from 'react';
import { connect } from 'react-redux';
import loadIdiom from './methods/loadIdiom';
import handleKeyPress from './methods/handleKeyPress';
import PrimaryContent from './components/PrimaryContent';
import EndGame from './components/EndGame';
import LoadingIdiom from './components/LoadingIdiom';

const mapDispatchToProps = dispatch => ({
  loadIdiom: (lang) => {loadIdiom(dispatch, lang)}
});
const mapStateToProps = state => ({
  IdiomIsLoading: state.flags.loadIdiom
})

class Game extends React.Component {

  componentDidMount() {
    this.props.loadIdiom("en");
    window.onkeydown = () => {handleKeyPress(String.fromCharCode(event.keyCode))}
  }


  render() {
    return (
      <div className="game">
        <EndGame/>
        <PrimaryContent/>
        {this.props.IdiomIsLoading && <LoadingIdiom/>}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Game);
