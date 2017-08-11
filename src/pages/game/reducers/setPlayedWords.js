import {SET_PLAYED_WORDS} from './actionTypes';

export const initialPlayedWords = {playedWords: []}

const addNewWord = word => {
  word = word.map(element => element.letter).join('');
  const storedWords = (function(word) {
    let words = JSON.parse(localStorage.getItem('playedWords'));
    words !== null ? words.push(word) : words = [word];
    return words.filter((element, index, self) => (index === self.indexOf(element)) && element.length > 0);
  })(word);

  let playedWords = new Array(...storedWords);
  localStorage.setItem('playedWords', JSON.stringify(playedWords));
  return {playedWords};
}

const setPlayedWords = (state = initialPlayedWords, action) => {
  switch(action.type) {
    case SET_PLAYED_WORDS: return Object.assign({}, state, addNewWord(action.playedWord));
  }
  return state;
};

export default setPlayedWords;
