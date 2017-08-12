import store from '../../store';
import {SET_MESSAGE, SHOW_END_GAME, RESET_MISSED_LETTERS, SET_PLAYED_WORDS, RESET_STATE} from '../reducers/actionTypes';
import handleKeyPress from './handleKeyPress';
import fetchWord from './fetchWord';

const resetStateOnEndGame = () => {
  let endGameStatus = {
    won:false,
    lost:false
  };
  let state = store.getState();
  store.dispatch({
    playedWord: state.wordState.word,
    type: SET_PLAYED_WORDS
  });
  fetchWord().then(() => {
    store.dispatch({
      showEndGame: endGameStatus,
      type: SET_MESSAGE
    });
    store.dispatch({
      showEndGame: endGameStatus,
      type: SHOW_END_GAME
    });
    store.dispatch ({
      type: RESET_MISSED_LETTERS
    });
    window.onkeydown = () => {handleKeyPress(String.fromCharCode(event.keyCode))};
  });
  /*fetchWord().then(() => {
    store.dispatch({
      type: RESET_STATE
    });
    window.onkeydown = () => {handleKeyPress(String.fromCharCode(event.keyCode))};
  });*/
}

export default resetStateOnEndGame;
