import { createStore, combineReducers } from 'redux';
import setWord from './game/reducers/setWord';
import setMissedLetters from './game/reducers/setMissedLetters';
import setEndGameState from './game/reducers/showEndGame';
import setPlayedWords from './game/reducers/setPlayedWords';
import setFlags from './game/reducers/setFlags';

const reducers = combineReducers({
  wordState: setWord,
  missedLettersState: setMissedLetters,
  messageText: setEndGameState,
  playedWords: setPlayedWords,
  flags: setFlags
});

const store = createStore(reducers);

export default store;
