import {SET_MISSED_LETTERS, RESET_MISSED_LETTERS} from './actionTypes';

export const initialMissedLettersState = {
  word: [],
  missedLetters: [],
  pressedKey: ''
};


const handleMissedLetters = (lettersProps) => {
  let {word,missedLetters,pressedKey} = lettersProps;
  const missedLetterWasPressed = (word,pressedKey) => {
    let hasLetter = word.find((element)=>{
      for (let i = 0; i < element.length; i++) {
        if (element[i].letter.toUpperCase() === pressedKey) {
          return true;
        }
      }
      return false;
    }, pressedKey);
    return (hasLetter===undefined)&&(/^[a-zA-Z]$/.test(pressedKey));
  }

  if (missedLetterWasPressed(word,pressedKey)) {
    missedLetters.push(pressedKey);
    missedLetters = missedLetters.filter(function(elem, index, self) {
      return index == self.indexOf(elem);
    })
  }

  return {missedLetters};
}


const setMissedLetters = (state = initialMissedLettersState, action) => {
  switch(action.type) {
    case SET_MISSED_LETTERS: return Object.assign({}, state, handleMissedLetters(action.lettersProps));
    case RESET_MISSED_LETTERS: return Object.assign({}, state, {missedLetters: []});
  }
  return state;
};

export default setMissedLetters;
