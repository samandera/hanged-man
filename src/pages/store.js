import { createStore, combineReducers } from 'redux';
import {RESET_STATE} from './game/reducers/actionTypes';
import setWord from './game/reducers/setWord';
import setMissedLetters from './game/reducers/setMissedLetters';
import setEndGameState from './game/reducers/showEndGame';
import setPlayedWords from './game/reducers/setPlayedWords';

const rootReducers = (state, action) => {
  if (action.type === RESET_STATE) {
    state = undefined
  }
  return reducers(state, action);
};

const reducers = combineReducers({
  wordState: setWord,
  missedLettersState: setMissedLetters,
  messageText: setEndGameState,
  playedWords: setPlayedWords
});

const store = createStore(rootReducers);

export default store;
