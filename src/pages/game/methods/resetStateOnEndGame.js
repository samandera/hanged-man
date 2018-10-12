import store from '../../store';
import {SET_MESSAGE, SHOW_END_GAME, RESET_MISSED_LETTERS, SET_PLAYED_WORDS} from '../reducers/actionTypes';
import handleKeyPress from './handleKeyPress';
import loadIdiom from './loadIdiom';

const resetStateOnEndGame = (dispatch, lang) => {
  let endGameStatus = {
    won:false,
    lost:false
  };
  let state = store.getState();
  dispatch({
    playedWord: state.wordState.word,
    type: SET_PLAYED_WORDS
  });
  loadIdiom(dispatch, lang).then(() => {
    dispatch({
      showEndGame: endGameStatus,
      type: SET_MESSAGE
    });
    dispatch({
      showEndGame: endGameStatus,
      type: SHOW_END_GAME
    });
    dispatch ({
      type: RESET_MISSED_LETTERS
    });
    window.onkeydown = () => {handleKeyPress(String.fromCharCode(event.keyCode))};
  });
}

export default resetStateOnEndGame;
