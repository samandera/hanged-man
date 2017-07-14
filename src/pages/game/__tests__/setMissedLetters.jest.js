import setMissedLetters from '../reducers/setMissedLetters';
import {SET_MISSED_LETTERS, RESET_MISSED_LETTERS} from '../reducers/actionTypes';


describe("Handling missed letters reducer", () => {
  const initialMissedLettersState = {
    word: [],
    missedLetters: [],
    pressedKey: ''
  };

  it("Array's missedLetters length should be equal 1", () => {
    expect(
      setMissedLetters(
        initialMissedLettersState,
        {
          lettersProps: {
            word:[
              {letter:'A', visible:false},
              {letter:'B', visible:false}
            ],
            pressedKey: 'C',
            missedLetters: []
          },
          type: SET_MISSED_LETTERS
        }
      )
    ).toEqual({
      word: [],
      missedLetters: ['C'],
      pressedKey:""
    })
  })
})
