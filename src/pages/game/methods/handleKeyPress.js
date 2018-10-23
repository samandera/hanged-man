import store from '../../store';
import {
  SHOW_END_GAME, SET_MISSED_LETTERS, SET_WINNING_LETTERS, SET_MESSAGE
} from '../reducers/actionTypes';

const showEndGame = (phrase,missedLetters, hangedman) => {
  const steps = 11;
  let unvisibles = [];
  phrase.forEach(word => {
    unvisibles.push(...word.map(letter => (letter.visible)))
  })
  let won = unvisibles.find(el => el===false) === undefined;
  let lost = missedLetters.length===steps;
  let endGameStatus = {won, lost};

  store.dispatch({
    showEndGame:endGameStatus,
    type: SET_MESSAGE
  })

  store.dispatch({
    showEndGame:endGameStatus,
    type: SHOW_END_GAME
  })
  const state = store.getState();

  window.onkeydown = state.messageText.showEndGame ? '' : () => {handleKeyPress(String.fromCharCode(event.keyCode))};
}

const handleKeyPress = (pressedKey, hangedman) => {
  let state = store.getState();
  store.dispatch ({
    lettersProps: {
      word:state.wordState.word,
      pressedKey,
      missedLetters: state.missedLettersState.missedLetters,
      hangedman: state.missedLettersState.hangedman
    },
    type: SET_MISSED_LETTERS
  });
  store.dispatch ({
    wordProps: {
      word:state.wordState.word,
      pressedKey
    },
    type: SET_WINNING_LETTERS
  });
  state = store.getState();
  showEndGame(state.wordState.word,state.missedLettersState.missedLetters, hangedman);
};

export default handleKeyPress;
