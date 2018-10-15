import React from 'react';
import {connect} from 'react-redux';
import store from '../../store';
import resetStateOnEndGame from '../methods/resetStateOnEndGame';

const mapStateToProps = state => ({
  message: state.messageText.message
})

const mapDispatchToProps = dispatch => ({
  resetStateOnEndGame: (lang) => resetStateOnEndGame(dispatch, lang)
})

class EndGame extends React.Component {
  render() {
    return (
      <div className="game-over">
        <p>{this.props.message}</p>
        <button onClick={() => this.props.resetStateOnEndGame("en")} >
          New word
        </button>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EndGame);
