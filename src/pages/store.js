import { createStore, combineReducers } from 'redux';
import setWord from './game/reducers/setWord';
import setMissedLetters from './game/reducers/setMissedLetters';
import setEndGameState from './game/reducers/showEndGame';
import setFlags from './game/reducers/setFlags';
import setLoading from './game/reducers/setLoading';
import handleDefinitions from './game/reducers/handleDefinitions';
import displayHangedman from './game/reducers/displayHangedman';

const reducers = combineReducers({
  wordState: setWord,
  missedLettersState: setMissedLetters,
  messageText: setEndGameState,
  flags: setFlags,
  loadingState: setLoading,
  definitionsState: handleDefinitions,
  handleHangedman: displayHangedman
});

const store = createStore(reducers);

window.store = store;

export default store;
