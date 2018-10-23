import {SET_MISSED_LETTERS, RESET_MISSED_LETTERS} from './actionTypes';

export const initialMissedLettersState = {
  word: [],
  missedLetters: [],
  pressedKey: '',
  hangedman: [
    {bodyPart: 'tree', visible: false},
    {bodyPart: 'left-calf', visible: false},
    {bodyPart: 'right-calf', visible: false},
    {bodyPart: 'right-thigh', visible: false},
    {bodyPart: 'left-thigh', visible: false},
    {bodyPart: 'corpse', visible: false},
    {bodyPart: 'head', visible: false},
    {bodyPart: 'hair', visible: false},
    {bodyPart: 'left-arm', visible: false},
    {bodyPart: 'right-arm', visible: false}
  ]
};

const updateHangedman = hangedmanState => {
  const firstHiddenElement = hangedmanState.find((el, i) => {
    if (!el.visible) {return i++}
  });
  if (firstHiddenElement !== undefined && firstHiddenElement < hangedmanState.length) {
    hangedmanState[firstHiddenElement].visible = true;
  }
  return {hangedman: hangedmanState}
}


const handleMissedLetters = (lettersProps, hangedman) => {
  let {word,missedLetters,pressedKey} = lettersProps;
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
    case SET_MISSED_LETTERS: return Object.assign({}, state,
      handleMissedLetters(action.lettersProps,action.hangedman)
  );
    case RESET_MISSED_LETTERS: return Object.assign({}, state, {missedLetters: []});
  }
  return state;
};

export default setMissedLetters;
