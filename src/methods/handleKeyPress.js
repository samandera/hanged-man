import store from '../reducers/store';

const showEndGame = (word,missedLetters) => {
  const steps = 11;
  let unvisibles = word.map((letter) => {return letter.visible});
  let won = unvisibles.find((el) => {return el===false}) === undefined;
  let lost = missedLetters.length===steps;
  let endGameStatus = {won, lost};

  store.dispatch({
    showEndGame:endGameStatus,
    type: 'SET_MESSAGE'
  })

  store.dispatch({
    showEndGame:endGameStatus,
    type: 'SHOW_END_GAME'
  })
  const state = store.getState();

  window.onkeydown = state.messageText.showEndGame ? '' : () => {handleKeyPress(String.fromCharCode(event.keyCode))};
}

const handleKeyPress = (pressedKey) => {
  let state = store.getState();
  store.dispatch ({
    lettersProps: {
      word:state.wordState.word,
      pressedKey,
      missedLetters: state.missedLettersState.missedLetters
    },
    type: 'SET_MISSED_LETTERS'
  });
  store.dispatch ({
    wordProps: {
      word:state.wordState.word,
      pressedKey
    },
    type: 'SET_WINNING_LETTERS'
  });
  state = store.getState();
  showEndGame(state.wordState.word,state.missedLettersState.missedLetters);
};

export default handleKeyPress;
