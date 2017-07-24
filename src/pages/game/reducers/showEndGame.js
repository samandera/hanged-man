import {SET_MESSAGE, SHOW_END_GAME} from './actionTypes';

const initialEndGameState = {
  message:"",
  showEndGame: false
}

const setMessageTxt = (endGameStatus) => {
  let message;
  if (endGameStatus.won) {message = "Congrats! You've won!"}
  else if (endGameStatus.lost) {message = "Game over. You've lost."}
  else {message = ""}

  return {message}
}

const toggleShowEndGame = (endGameStatus) => {
  return (endGameStatus.won) || (endGameStatus.lost);
}


export const setEndGameState = (state = initialEndGameState, action) => {
  switch (action.type) {
    case SET_MESSAGE: return Object.assign({}, state, setMessageTxt(action.showEndGame));
    case SHOW_END_GAME: return Object.assign({}, state, {showEndGame:(action.showEndGame.won||action.showEndGame.lost)})
  }
  return state;
};

export default setEndGameState;
