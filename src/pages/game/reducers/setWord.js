import {SET_WORD, SET_WINNING_LETTERS} from './actionTypes';

export const initialWordState = {
  word: []
};

const getWord = (word) => {
  let letters = [];
  for (let letter of word) {
    let visible = !(/^[a-zA-Z]$/.test(letter));
    letters.push({letter, visible});
  }
  return {word: letters};
}

const updateWord = (wordProps) => {
  let {word, pressedKey} = wordProps;
  word = Array.from(word);
  word.map((letterObj, index) => {
    if (/^[a-zA-Z]$/.test(pressedKey) && letterObj.letter.toUpperCase() == pressedKey) {
      letterObj.visible = true;
    }
  });
  return {word};
}

const setWord = (state = initialWordState, action) => {
  switch(action.type) {
    case SET_WORD: return Object.assign({}, state, getWord(action.word));
    case SET_WINNING_LETTERS: return Object.assign({}, state, updateWord(action.wordProps));
  }
  return state;
}

export default setWord;
