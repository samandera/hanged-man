import { createStore, combineReducers } from 'redux';
import setWord from '../reducers/setWord';
import setMissedLetters from '../reducers/setMissedLetters';
import setMessageState from '../reducers/setEndGameMessage';

const reducers = combineReducers({
  wordState: setWord,
  missedLettersState: setMissedLetters,
  messageText: setMessageState
});

const store = createStore(reducers);

export default store;
