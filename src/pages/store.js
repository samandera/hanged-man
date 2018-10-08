import { createStore, combineReducers } from 'redux';
import setWord from './game/reducers/setWord';
import setMissedLetters from './game/reducers/setMissedLetters';
import setEndGameState from './game/reducers/showEndGame';
import setPlayedWords from './game/reducers/setPlayedWords';
import setFlags from './game/reducers/setFlags';
import setLoading from './game/reducers/setLoading';

const reducers = combineReducers({
  wordState: setWord,
  missedLettersState: setMissedLetters,
  messageText: setEndGameState,
  playedWords: setPlayedWords,
  flags: setFlags,
  loadingState: setLoading
});

const store = createStore(reducers);

window.store = store;

export default store;
