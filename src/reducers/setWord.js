const initialWordState = {
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
  for (let i = 0; i < word.length; i++) {
    if (/^[a-zA-Z]$/.test(pressedKey) && word[i].letter.toUpperCase() == pressedKey) {
      word[i].visible = true;
    }
  }
  return {word};
}

const setWord = (state = initialWordState, action) => {
  switch(action.type) {
    case 'UPDATE_WORD': return Object.assign({}, state, updateWord(action.wordProps));
    case 'SET_WORD': return Object.assign({}, state, getWord(action.word));
  }
  return state;
}

export default setWord;
