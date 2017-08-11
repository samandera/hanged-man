import setPlayedWords from '../reducers/setPlayedWords';
import {initialPlayedWords} from '../reducers/setPlayedWords';
import {SET_PLAYED_WORDS} from '../reducers/actionTypes';

describe("Checkind how setting played words works", () => {

  it("Should change array of objects into string", () => {
    const playedWords = setPlayedWords(
      initialPlayedWords,
      {
        playedWord: [
          {letter:'A', visible:false},
          {letter:'B', visible:false}
        ],
        type: SET_PLAYED_WORDS
      }
    ).playedWords;

    expect(playedWords[playedWords.length-1]).toEqual("AB")
  });

  it("Should return an array with all the words from localStorage and with a new word in last postition", () => {
    localStorage.setItem('playedWords', JSON.stringify(['a', 'b', 'c']));

    expect(setPlayedWords(
      initialPlayedWords,
      {
        playedWord: [
          {letter:'A', visible:false},
          {letter:'B', visible:false}
        ],
        type: SET_PLAYED_WORDS
      }
    ).playedWords).toEqual(['a', 'b', 'c', 'AB'])
  });

  it("Should be equal to the valute taken from localStorage", () => {
    localStorage.setItem('playedWords', JSON.stringify(['a', 'b', 'c']));

    expect(setPlayedWords(
      initialPlayedWords,
      {
        playedWord: [],
        type: SET_PLAYED_WORDS
      }
    ).playedWords).toEqual(['a', 'b', 'c'])
  })
})
