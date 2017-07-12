import store from '../../store';
import handleKeyPress from './handleKeyPress';
import fetchWord from './fetchWord';

const resetStateOnEndGame = () => {
  let endGameStatus = {
    won:false,
    lost:false
  };
  fetchWord().then(() => {
    store.dispatch({
      showEndGame: endGameStatus,
      type: 'SET_MESSAGE'
    });
    store.dispatch({
      showEndGame: endGameStatus,
      type: 'SHOW_END_GAME'
    });
    store.dispatch ({
      type: 'RESET_MISSED_LETTERS'
    });
    window.onkeydown = () => {handleKeyPress(String.fromCharCode(event.keyCode))};
  });
}

export default resetStateOnEndGame;
