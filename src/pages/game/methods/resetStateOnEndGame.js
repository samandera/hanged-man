import store from '../../store';
import {
  SET_MESSAGE, SHOW_END_GAME, RESET_MISSED_LETTERS,
  RESET_DEFINITIONS, RESET_HANGEDMAN
} from '../reducers/actionTypes';
import handleKeyPress from './handleKeyPress';
import loadIdiom from './loadIdiom';

const resetStateOnEndGame = (dispatch, lang) => {
  let endGameStatus = {
    won:false,
    lost:false
  };
  dispatch ({ type: RESET_DEFINITIONS });
  loadIdiom(dispatch, lang).then(() => {
    dispatch({ showEndGame: endGameStatus, type: SET_MESSAGE });
    dispatch({ showEndGame: endGameStatus, type: SHOW_END_GAME });
    dispatch ({ type: RESET_MISSED_LETTERS });
    dispatch ({ type: RESET_HANGEDMAN });
    window.onkeydown = () => {handleKeyPress(String.fromCharCode(event.keyCode))};
  });
}

export default resetStateOnEndGame;
