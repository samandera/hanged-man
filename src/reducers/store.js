import { createStore, combineReducers } from 'redux';
import setWord from '../reducers/setWord';
import setMissedLetters from '../reducers/setMissedLetters';
import setEndGameState from '../reducers/showEndGame';

const reducers = combineReducers({
  wordState: setWord,
  missedLettersState: setMissedLetters,
  messageText: setEndGameState
});

const store = createStore(reducers);

export default store;
