import {SET_MISSED_LETTERS, RESET_MISSED_LETTERS, RESET_HANGEDMAN, UPDATE_HANGEDMAN} from './actionTypes';
import hangedmanParts from '../../../config/hangedmanParts';

export const initialMissedLettersState = {
  word: [],
  missedLetters: [],
  pressedKey: '',
  hangedman: hangedmanParts
};

const updateHangedman = hangedman => {
  const firstHiddenElement = hangedman.findIndex((el) => {
    if (!el.visible) {return el}
  });
  if (firstHiddenElement >= 0 && firstHiddenElement < hangedman.length) {
    hangedman[firstHiddenElement].visible = true;
  }
  return hangedman
}


const handleMissedLetters = (lettersProps) => {
  let {word,missedLetters,pressedKey, hangedman} = lettersProps;
  const missedLetterWasPressed = (word,pressedKey) => {
    let hasLetter = word.find((element)=>{
      for (let i = 0; i < element.length; i++) {
        if (element[i].letter.toUpperCase() === pressedKey) {
          return true;
        }
      }
      return false;
    });
    return (hasLetter===undefined)&&(/^[a-zA-Z]$/.test(pressedKey));
  }

  let newMissedLetters = missedLetters;

  if (missedLetterWasPressed(word,pressedKey)) {
    missedLetters.push(pressedKey);
    newMissedLetters = missedLetters.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
    });
    if (newMissedLetters.length === missedLetters.length && newMissedLetters.length > 0) {
      hangedman = new Array(...updateHangedman(hangedman));
    };
  }

  return {missedLetters: newMissedLetters, hangedman};
}


const setMissedLetters = (state = initialMissedLettersState, action) => {
  switch(action.type) {
    case SET_MISSED_LETTERS: return Object.assign({}, state,
      handleMissedLetters(action.lettersProps)
  );
    case RESET_MISSED_LETTERS: return Object.assign({}, state, {missedLetters: []});
    case UPDATE_HANGEDMAN: return Object.assign({}, state, updateHangedman(action.hangedman));
    case RESET_HANGEDMAN: return Object.assign({}, state, initialState);
    default: return state;
  }

};

export default setMissedLetters;
