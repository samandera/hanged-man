import React from 'react';
import {connect} from 'react-redux';
import store from '../../store';
import resetStateOnEndGame from '../methods/resetStateOnEndGame';

const mapStateToProps = (store) => {
  return {
    message: store.messageText.message,
    showEndGame: store.messageText.showEndGame
  }
}

const renderEndGame = (showEndGame, message) => {
  if (showEndGame) {
    return (
      <div className="message">
        <p>{message}</p>
        <button onClick={resetStateOnEndGame} >New word</button>
      </div>
    )
  }
}

class EndGame extends React.Component {
  render() {
    return (
      <div className={"ratio-content" + (this.props.showEndGame ? " game-end" : "")} >
        {renderEndGame(this.props.showEndGame, this.props.message)}
      </div>
    );
  }
}
export default connect(mapStateToProps)(EndGame);
