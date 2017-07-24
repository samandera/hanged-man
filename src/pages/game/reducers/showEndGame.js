import {SET_MESSAGE, SHOW_END_GAME} from './actionTypes';

export const initialEndGameState = {
  message:"",
  showEndGame: false
}
export const messageWon = "Congrats! You've won!";
export const messageLost = "Game over. You've lost.";
export const messageGameIsRunning = ""

const setMessageTxt = (endGameStatus) => {
  let message;
  if (endGameStatus.won) {message = messageWon}
  else if (endGameStatus.lost) {message = messageLost}
  else {message = messageGameIsRunning}

  return {message}
}


const setEndGameState = (state = initialEndGameState, action) => {
  switch (action.type) {
    case SET_MESSAGE: return Object.assign({}, state, setMessageTxt(action.showEndGame));
    case SHOW_END_GAME: return Object.assign({}, state, {showEndGame:(action.showEndGame.won||action.showEndGame.lost)})
  }
  return state;
};

export default setEndGameState;
