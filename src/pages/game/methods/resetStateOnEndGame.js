import store from '../../store';
import {
  SET_MESSAGE, SHOW_END_GAME, RESET_MISSED_LETTERS, SET_PLAYED_WORDS,
  RESET_DEFINITIONS
} from '../reducers/actionTypes';
import handleKeyPress from './handleKeyPress';
import loadIdiom from './loadIdiom';

const resetStateOnEndGame = (dispatch, lang) => {
  let endGameStatus = {
    won:false,
    lost:false
  };
  loadIdiom(dispatch, lang).then(() => {
    dispatch({ showEndGame: endGameStatus, });
    dispatch({ showEndGame: endGameStatus, type: SHOW_END_GAME });
    dispatch ({ type: RESET_MISSED_LETTERS });
    dispatch ({ type: RESET_DEFINITIONS });
    window.onkeydown = () => {handleKeyPress(String.fromCharCode(event.keyCode))};
  });
}

export default resetStateOnEndGame;
